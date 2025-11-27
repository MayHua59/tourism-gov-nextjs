import { API_ENDPOINT_JP } from "@/data/api_endpoint";

const INFO_PAGE_API_URL = (slug) => `${API_ENDPOINT_JP}/api/v1/information-pages/${slug}`;

export async function fetchInformationPageDetail(slug) {
  const url = INFO_PAGE_API_URL(slug);
  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) throw new Error("   ");
  return await res.json();
}