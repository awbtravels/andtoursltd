// /api/getTours.js

export default async function handler(req, res) {
  const { categoryId } = req.query;

  const API_KEY = "8170d1d5-4ef1-4019-9f5c-0f0a304a9ad2"; // Viator Sandbox Key
  const BASE_URL = "https://sandbox.viator.com";
  const ENDPOINT = "/partner/products/search";
  const DEST_ID = "6843"; // Generic global destination

  if (!categoryId) {
    return res.status(400).json({ error: "Missing categoryId" });
  }

  const url = `${BASE_URL}${ENDPOINT}?topX=10&destId=${DEST_ID}&catId=${categoryId}`;

  try {
    const viatorRes = await fetch(url, {
      method: "GET",
      headers: {
        "exp-api-key": API_KEY,
        "Content-Type": "application/json",
      },
    });

    if (!viatorRes.ok) {
      const errorText = await viatorRes.text();
      console.error("Viator API error:", errorText);
      return res.status(500).json({ error: "Viator API failed", details: errorText });
    }

    const data = await viatorRes.json();
    return res.status(200).json(data);
  } catch (error) {
    console.error("Fetch error:", error);
    return res.status(500).json({ error: "Internal Server Error", details: error.message });
  }
}
