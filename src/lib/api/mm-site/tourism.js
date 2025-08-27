import { API_ENDPOINT_MM } from "@/data/api_endpoint";

const TOURISM_CATEGORIES_API_URL = `${API_ENDPOINT_MM}/api/v1/tourism-categories`;
const TOURISM_DETAIL_API_URL = (slug) => `${API_ENDPOINT_MM}/api/v1/tourism-categories/${slug}`;

export async function fetchTourismCategoriesList(page = 1, per_page = 20) {
  const url = `${TOURISM_CATEGORIES_API_URL}?page=${page}&per_page=${per_page}`;
  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch tourism categories");
  const json = await res.json();
  return {
    data: Array.isArray(json.data) ? json.data : [],
    meta: json.meta || { current_page: page, per_page, total: 0 }
  };
}

export async function fetchTourismDetail(slug) {
  const res = await fetch(TOURISM_DETAIL_API_URL(slug), { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch tourism detail");
  return await res.json();
}