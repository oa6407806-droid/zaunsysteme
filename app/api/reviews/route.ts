import { NextRequest, NextResponse } from "next/server";
import { createHash } from "node:crypto";
import { supabaseServer } from "../../../lib/ae-reviews";
export const runtime = "nodejs";
export const dynamic = "force-dynamic";
const fail = (message:string,status:number) => NextResponse.json({error:message},{status});
export async function GET(request: NextRequest) {
 try {
  const params = request.nextUrl.searchParams;
  const page = Math.max(0, Math.min(1000, Number(params.get("page")||0)||0));
  const limit = params.get("limit")==="3"?3:12;
  const rating = Number(params.get("rating")||0);
  const sort = params.get("sort")==="oldest"?"created_at.asc":params.get("sort")==="highest"?"rating.desc,created_at.desc":params.get("sort")==="lowest"?"rating.asc,created_at.desc":"created_at.desc";
  const filter = Number.isInteger(rating)&&rating>=1&&rating<=5?`&rating=eq.${rating}`:"";
  const reviews=await supabaseServer(`ae_reviews?select=id,display_name,rating,review_text,created_at&status=eq.published${filter}&order=${sort}&limit=${limit}&offset=${page*limit}`);
  const stats=await supabaseServer("ae_reviews?select=rating&status=eq.published&limit=10000");
  const distribution=[1,2,3,4,5].map(n=>stats.filter((r:{rating:number})=>r.rating===n).length);
  const total=stats.length;
  return NextResponse.json({reviews,total,average:total?stats.reduce((s:number,r:{rating:number})=>s+r.rating,0)/total:0,distribution,hasMore:reviews.length===limit},{headers:{"Cache-Control":"no-store"}});
 } catch { return NextResponse.json({reviews:[],total:0,average:0,distribution:[0,0,0,0,0],hasMore:false,configured:false}); }
}
export async function POST(request: NextRequest) {
 try {
  if(Number(request.headers.get("content-length")||0)>10000)return fail("Anfrage zu groß.",413);
  const body=await request.json();
  if(body.website) return NextResponse.json({ok:true});
  const displayName=String(body.displayName||"").trim();
  const reviewText=String(body.reviewText||"").trim();
  const rating=Number(body.rating);
  if(!body.consent || displayName.length<2 || displayName.length>80 || reviewText.length<10 || reviewText.length>1500 || !Number.isInteger(rating)||rating<1||rating>5) return fail("Bitte Name, Sterne und einen Bewertungstext eingeben.",400);
  if(/https?:\/\/|www\.|<[^>]+>/i.test(reviewText+" "+displayName))return fail("Bitte keine Links oder HTML eingeben.",400);
  const forwarded=request.headers.get("x-forwarded-for")?.split(",")[0]?.trim()||"unknown";
  const secret=process.env.REVIEW_HASH_SECRET;
  if(!secret) return fail("Bewertungen sind noch nicht fertig eingerichtet.",503);
  const ipHash=createHash("sha256").update(secret+":"+forwarded).digest("hex");
  const result=await supabaseServer("rpc/ae_submit_public_review",{method:"POST",body:JSON.stringify({p_name:displayName,p_rating:rating,p_text:reviewText,p_ip_hash:ipHash})});
  if(result!==true)return fail("Von diesem Anschluss wurden bereits mehrere Bewertungen abgegeben. Bitte später erneut versuchen.",429);
  return NextResponse.json({ok:true});
 } catch { return fail("Bewertung konnte nicht gespeichert werden. Bitte später erneut versuchen.",503); }
}
