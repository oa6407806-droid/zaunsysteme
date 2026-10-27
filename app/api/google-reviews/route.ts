import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";
export async function GET() {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;
  if (!apiKey || !placeId) return NextResponse.json({ configured: false });
  try {
    const response = await fetch(`https://places.googleapis.com/v1/places/${encodeURIComponent(placeId)}`, {
      headers: { "X-Goog-Api-Key": apiKey, "X-Goog-FieldMask": "id,rating,userRatingCount,googleMapsUri,reviews.rating,reviews.text,reviews.authorAttribution,reviews.googleMapsUri,reviews.publishTime" },
      cache: "no-store",
    });
    if (!response.ok) throw new Error("Google Places fehlgeschlagen");
    const data = await response.json();
    return NextResponse.json({ configured: true, rating: data.rating, count: data.userRatingCount, mapsUrl: data.googleMapsUri,
      reviews: (data.reviews || []).map((r: any) => ({ rating: r.rating, text: r.text?.text, author: r.authorAttribution?.displayName, authorUrl: r.authorAttribution?.uri, photo: r.authorAttribution?.photoUri, url: r.googleMapsUri, date: r.publishTime }))
    }, { headers: { "Cache-Control": "no-store" } });
  } catch { return NextResponse.json({ configured: false }); }
}
