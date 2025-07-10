const UPCOMINT_EVENTS_API_URL = "https://hotel.software100.com.mm/api/v1/upcoming-events";
const NEWS_DETAIL_API_URL = (slug) => `https://your-api-domain.com/api/upcoming-events/${slug}`;

export async function fetchUpcomingEventsList() {
  const res = await fetch(UPCOMINT_EVENTS_API_URL, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch upcoming events");
  return await res.json();
}

export async function fetchUpcomingEventDetail(slug) {
  const res = await fetch(UPCOMINT_EVENTS_API_URL(slug), { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch upcoming events detail");
  return await res.json();
}