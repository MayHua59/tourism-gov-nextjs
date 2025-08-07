import {API_ENDPOINT} from "@/data/api_endpoint"

const ANNOUNCEMENT_API_URL = `${API_ENDPOINT}/api/v1/announcements`;
const ANNOUNCEMENT_DETAIL_API_URL = (slug) => `${API_ENDPOINT}/api/v1/announcements/${slug}`;


export async function fetchAnnouncementList() {
  const res = await fetch(ANNOUNCEMENT_API_URL, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch announcements list");
  const json = await res.json();
  return {
    data: Array.isArray(json.data) ? json.data : [],
    meta: json.meta || { current_page: 1, per_page: 20, total: 0 }
  }; 
}

export async function fetchAnnouncementDetail(slug) {
  const res = await fetch(ANNOUNCEMENT_DETAIL_API_URL(slug), { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch announcement detail");
  return await res.json();
}