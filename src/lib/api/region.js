// const REGIONS_API_URL = "https://mohtgov.software100.com.mm/api/v1/regions";
const REGION_API_URL = (slug) => `https://mohtgov.software100.com.mm/api/v1/regions/${slug}`;



export async function fetchRegion(slug) {
  const res = await fetch(REGION_API_URL(slug), { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch region");
  return await res.json();
}