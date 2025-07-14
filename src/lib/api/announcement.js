const ANNOUNCEMENT_API_URL = "https://hotel.software100.com.mm/api/v1/announcements";
// const ANNOUNCEMENT_API_URL = "https://fakenews.squirro.com/news/technology";
const ANNOUNCEMENT_DETAIL_API_URL = (slug) => `https://hotel.software100.com.mm/api/v1/announcements/${slug}`;

export async function fetchAnnouncementList() {
  const res = await fetch(ANNOUNCEMENT_API_URL, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch announcements list");
  return await res.json();
}

export async function fetchAnnouncementDetail(slug) {
  const res = await fetch(ANNOUNCEMENT_API_URL(slug), { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch announcement detail");
  return await res.json();
}