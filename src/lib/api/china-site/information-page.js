import { API_ENDPOINT_CN } from "@/data/api_endpoint";

const INFO_PAGE_API_URL = (slug) => `${API_ENDPOINT_CN}/api/v1/information-pages/${slug}`;

export async function fetchInformationPageDetail(slug) {
  const url = INFO_PAGE_API_URL(slug);
  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) throw new Error("   ");
  return await res.json();
}
