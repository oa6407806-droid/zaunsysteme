"use client";
import { useEffect, useState } from "react";
import { ArrowUpRight, BadgeCheck, MessageSquareQuote, Star } from "lucide-react";
const GOOGLE_MAPS_URL = "https://www.google.com/maps/place/?q=place_id:ChIJ3RP86_uRdkcRhuK7pzBvsRY";

type Review = { id: string; display_name: string; rating: number; review_text: string; created_at: string };
function Stars({ value }: { value: number }) { return <span className="inline-flex items-center gap-0.5" aria-label={`${value} von 5 Sternen`}>{[1,2,3,4,5].map(n => <Star key={n} className={`h-4 w-4 ${n <= Math.round(value) ? "fill-amber-400 text-amber-400" : "text-slate-300"}`} />)}</span>; }
export default function AEReviewsSection() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [stats,setStats]=useState<{total:number;average:number}>({total:0,average:0});
  useEffect(() => { fetch("/api/reviews").then(r => r.json()).then(d => {setReviews(d.reviews || []);setStats({total:d.total||0,average:d.average||0})}).catch(() => {});
  }, []);
  const average = stats.average;
  return <section id="bewertungen" className="border-y border-slate-200 bg-white py-12 sm:py-14 lg:py-16">
    <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
      <div className="section-badge"><MessageSquareQuote className="h-4 w-4" /> Kundenstimmen</div>
      <div className="mt-4 flex flex-wrap items-end justify-between gap-5">
        <div><h2 className="max-w-3xl text-[clamp(2rem,6vw,3.6rem)] font-black leading-[1.04] tracking-[-0.05em] text-slate-950">Das sagen unsere Kunden.</h2>
        <p className="mt-3 text-base leading-7 text-slate-600">Echte Erfahrungen direkt auf unserer Website.</p></div>
        <a href={GOOGLE_MAPS_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-bold text-slate-800 hover:bg-slate-50">Google-Bewertungen <ArrowUpRight className="h-4 w-4" /></a>
      </div>
      <div className="mt-6 flex flex-wrap items-center gap-4 rounded-2xl bg-slate-50 p-5">
        {stats.total ? <><span className="text-4xl font-black text-slate-950">{average.toLocaleString("de-AT", {maximumFractionDigits:1})}</span><Stars value={average}/><span className="text-sm text-slate-600">{stats.total} Bewertungen auf A&E</span></> : <span className="text-sm text-slate-600">Noch keine Bewertungen auf A&E veröffentlicht.</span>}
        <a href="/bewertung" className="ml-auto inline-flex items-center gap-1 text-sm font-bold text-slate-900 underline underline-offset-4">Bewertung schreiben <ArrowUpRight className="h-4 w-4" /></a>
      </div>
      {reviews.length > 0 && <div className="mt-6 grid gap-4 md:grid-cols-3">
        {reviews.slice(0, 3).map(r => <article key={r.id} className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm"><Stars value={r.rating}/><p className="mt-4 whitespace-pre-line text-[15px] leading-7 text-slate-700">{r.review_text}</p><p className="mt-5 text-sm font-bold text-slate-950">{r.display_name}</p><p className="mt-1 flex items-center gap-1 text-xs text-slate-500"><BadgeCheck className="h-3.5 w-3.5"/> A&E Website-Bewertung</p></article>)}
      </div>}
      <div className="mt-8 text-center"><a href="/bewertungen" className="inline-flex items-center justify-center rounded-2xl bg-slate-950 px-8 py-4 font-bold text-white hover:bg-slate-800">Alle Bewertungen ansehen →</a></div>
    </div>
  </section>;
}
