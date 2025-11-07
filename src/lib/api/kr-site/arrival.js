import { API_ENDPOINT_KR } from "@/data/api_endpoint";

const ARRIVALS_API_URL = `${API_ENDPOINT_KR}/api/v1/travel-statics`;


export async function fetchArrivals(page = 1, per_page = 20) {
    const url = `${ARRIVALS_API_URL}?page=${page}&per_page=${per_page}`;
    
    // `cache: "no-store"` to ensure the data is always fresh.
    const res = await fetch(url, { cache: "no-store" });
    
    if (!res.ok) {
        throw new Error("Failed to fetch arrivals data");
    }
    
    const json = await res.json();
    
    return {
        data: Array.isArray(json.data) ? json.data : [],
        meta: json.meta || { current_page: page, per_page, total: 0 }
    };
}

