import { API_ENDPOINT_CN } from "@/data/api_endpoint";

const UPCOMING_EVENTS_API_URL = `${API_ENDPOINT_CN}/api/v1/upcoming-events`;
const UPCOMING_EVENTS_DETAIL_API_URL = (slug) => `${API_ENDPOINT_CN}/api/v1/upcoming-events/${slug}`;

export async function fetchUpcomingEventsList(page = 1, per_page = 20) {
  const url = `${UPCOMING_EVENTS_API_URL}?page=${page}&per_page=${per_page}`;
  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch upcoming events");
  const json = await res.json();
  return {
    data: Array.isArray(json.data) ? json.data : [],
    meta: json.meta || { current_page: page, per_page, total: 0 }
  };
}

export async function fetchUpcomingEventDetail(slug) {
  const res = await fetch(UPCOMING_EVENTS_DETAIL_API_URL(slug), { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch upcoming events detail");
  return await res.json();
}
