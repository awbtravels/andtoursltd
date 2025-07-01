// /api/getTours.js

export default async function handler(req, res) {
  const { categoryId } = req.query;

  const API_KEY = "8170d1d5-4ef1-4019-9f5c-0f0a304a9ad2"; // Viator Sandbox Key
  const BASE_URL = "https://sandbox.viator.com";
  const ENDPOINT = "/partner/products/search";
  const DEST_ID = "6843"; // Generic destination (you can change this based on target region)

  const url = `${BASE_URL}${ENDPOINT}?topX=10&destId=${DEST_ID}&catId=${categoryId}`;

  try {
    const response = await fetch(url, {
      headers: {
        "exp-api-key": API_KEY,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      console.error("Viator API failed with status:", response.status);
      return res.status(500).json({ error: "Viator API request failed." });
    }

    const data = await response.json();
    return res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching tours:", error);
    return res.status(500).json({ error: "Server error" });
  }
}
