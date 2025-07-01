
const fetch = require("node-fetch");

exports.handler = async function(event, context) {
  const categoryId = event.queryStringParameters.categoryId;

  const API_KEY = "8170d1d5-4ef1-4019-9f5c-0f0a304a9ad2"; // Viator Sandbox
  const url = `https://sandbox.viator.com/partner/products/search?topX=20&sortOrder=RELEVANCE&categoryId=${categoryId}`;

  try {
    const response = await fetch(url, {
      headers: {
        "exp-api-key": API_KEY,
        "Content-Type": "application/json"
      }
    });

    if (!response.ok) {
      throw new Error("Viator API request failed.");
    }

    const data = await response.json();
    return {
      statusCode: 200,
      body: JSON.stringify(data)
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to fetch tours", details: error.message })
    };
  }
};
