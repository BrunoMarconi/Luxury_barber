export type GoogleReview = {
  id: string;
  name: string;
  rating: number;
  date: string;
  text: string;
};

const PLACE_ID = "ChIJr4ED2zP3cg0RAfsjUv4cIrA";

export async function fetchGoogleReviews(): Promise<GoogleReview[]> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  if (!apiKey) return [];

  const url =
    `https://maps.googleapis.com/maps/api/place/details/json` +
    `?place_id=${PLACE_ID}` +
    `&fields=reviews` +
    `&language=es` +
    `&reviews_sort=newest` +
    `&key=${apiKey}`;

  try {
    const res = await fetch(url, { next: { revalidate: 3600 } });
    const data = await res.json();
    const raw: any[] = data.result?.reviews ?? [];

    return raw
      .filter((r) => r.rating >= 4 && r.text?.trim().length > 20)
      .slice(0, 4)
      .map((r, i) => ({
        id: `g${i}`,
        name: r.author_name,
        rating: r.rating,
        date: r.relative_time_description,
        text: r.text,
      }));
  } catch {
    return [];
  }
}
