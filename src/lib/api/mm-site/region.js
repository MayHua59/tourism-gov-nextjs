import { API_ENDPOINT_MM } from "@/data/api_endpoint";

const REGION_API_URL = (slug) => `${API_ENDPOINT_MM}/api/v1/regions/${slug}`;



export async function fetchRegion(slug) {
  const res = await fetch(REGION_API_URL(slug), { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch region");
  return await res.json();
}