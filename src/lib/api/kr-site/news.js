import { API_ENDPOINT } from "@/data/api_endpoint";

const NEWS_API_URL = `${API_ENDPOINT}/api/v1/news`;
const NEWS_DETAIL_API_URL = (slug) => `${API_ENDPOINT}/api/v1/news/${slug}`;

export async function fetchNewsList(page = 1, per_page = 20) {
  const url = `${NEWS_API_URL}?page=${page}&per_page=${per_page}`;
  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch news");
  const json = await res.json();
  return {
    data: Array.isArray(json.data) ? json.data : [],
    meta: json.meta || { current_page: page, per_page, total: 0 }
  };
}

export async function fetchNewsDetail(slug) {
  const res = await fetch(NEWS_DETAIL_API_URL(slug), { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch news detail");
  return await res.json();
}

