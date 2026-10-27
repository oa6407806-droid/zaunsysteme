import { createHash } from "node:crypto";

export const GOOGLE_MAPS_URL = "https://www.google.com/maps/search/?api=1&query=A%26E%20ZAUN-UND%20TORSYSTEME%20Salzburg";

export function hashToken(token: string) { return createHash("sha256").update(token).digest("hex"); }

export async function supabaseServer(path: string, options: RequestInit = {}) {
  const url = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) throw new Error("Supabase ist noch nicht konfiguriert");
  const response = await fetch(`${url.replace(/\/$/, "")}/rest/v1/${path}`, {
    ...options,
    headers: { apikey: key, Authorization: `Bearer ${key}`, "Content-Type": "application/json", ...(options.headers || {}) },
    cache: "no-store",
  });
  if (!response.ok) throw new Error(`Supabase Anfrage fehlgeschlagen (${response.status})`);
  if (response.status === 204) return null;
  return response.json();
}
