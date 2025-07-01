// /api/getTours.ts
import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const { categoryId } = req.query;

  const API_KEY = "8170d1d5-4ef1-4019-9f5c-0f0a304a9ad2"; // Viator Sandbox
  const BASE_URL = "https://sandbox.viator.com";
  const ENDPOINT = "/partner/products/search";

  const url = `${BASE_URL}${ENDPOINT}?topX=10&destId=6843&catId=${categoryId}`;

  try {
    const viatorRes = await fetch(url, {
      headers: {
        "exp-api-key": API_KEY,
        "Content-Type": "application/json"
      }
    });

    if (!viatorRes.ok) {
      throw new Error("Viator API failed");
    }

    const data = await viatorRes.json();
    res.status(200).json(data);
  } catch (err: any) {
    console.error("API ERROR:", err.message);
    res.status(500).json({ error: "Failed to load tours" });
  }
}
