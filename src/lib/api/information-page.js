import { API_ENDPOINT } from "@/data/api_endpoint";

const INFO_PAGE_API_URL = (slug) => `${API_ENDPOINT}/api/v1/information-pages/${slug}`;

export async function fetchInformationPageDetail(slug) {
  const url = INFO_PAGE_API_URL(slug);
  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch information page detail");
  return await res.json();
}