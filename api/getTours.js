export default async function handler(req, res) {
  const { categoryId } = req.query;

  const response = await fetch(
    \`https://api.sandbox.viator.com/partner/v1/products/search?categoryId=\${categoryId}&topX=15&sortOrder=RELEVANCE&currencyCode=USD&country=US\`,
    {
      headers: {
        "exp-api-key": "8170d1d5-4ef1-4019-9f5c-0f0a304a9ad2", // ✅ Viator Sandbox API Key
      },
    }
  );

  if (!response.ok) {
    return res.status(500).json({ error: "Failed to fetch Viator data" });
  }

  const data = await response.json();
  return res.status(200).json(data);
}
