const NEWS_API_URL = "https://hotel.software100.com.mm/api/v1/news";
const NEWS_DETAIL_API_URL = (slug) => `https://your-api-domain.com/api/news/${slug}`;

export async function fetchNewsList() {
  const res = await fetch(NEWS_API_URL, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch news");
  return await res.json();
}

export async function fetchNewsDetail(slug) {
  const res = await fetch(NEWS_DETAIL_API_URL(slug), { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch news detail");
  return await res.json();
}