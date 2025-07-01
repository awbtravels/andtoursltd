// /api/getTours.js

export default async function handler(req, res) {
  const { categoryId } = req.query;

  const API_KEY = "8170d1d5-4ef1-4019-9f5c-0f0a304a9ad2"; // Viator Sandbox Key
  const BASE_URL = "https://sandbox.viator.com";
  const ENDPOINT = "/partner/products/search";

  const url = `${BASE_URL}${ENDPOINT}?topX=10&destId=6843&catId=${categoryId}`;

  try {
    const viatorRes = await fetch(url, {
      headers: {
        "exp-api-key": API_KEY,
        "Content-Type": "application/json",
      },
    });

    if (!viatorRes.ok) {
      throw new Error("Viator API failed");
    }

    const data = await viatorRes.json();
    res.status(200).json(data);
  } catch (error) {
    console.error("API Error:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
