import { API_ENDPOINT_CN } from "@/data/api_endpoint";

const FESTIVALS_API_URL = `${API_ENDPOINT_CN}/api/v1/festivals`;
const FESTIVAL_DETAIL_API_URL = (slug) => `${API_ENDPOINT_CN}/api/v1/festivals/${slug}`;

export async function fetchFestivalsList(page = 1, per_page = 20, month = "") {
  let url = `${FESTIVALS_API_URL}?page=${page}&per_page=${per_page}`;
  if (month && month !== "All Months") {
    url += `&month=${month}`;
  }
  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch festivals");
  const json = await res.json();
  return {
    data: Array.isArray(json.data) ? json.data : [],
    meta: json.meta || { current_page: page, per_page, total: 0 }
  };
}

export async function fetchFestivalDetail(slug) {
  const res = await fetch(FESTIVAL_DETAIL_API_URL(slug), { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch festival detail");
  return await res.json();
}
