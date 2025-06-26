// src/pages/NewsPage.jsx

import React, { useEffect, useState } from "react";

export default function NewsPage() { const [articles, setArticles] = useState([]);

useEffect(() => { const sources = [ "https://daadscholarship.com/feed", "https://travelobiz.com/feed", "https://brightscholarship.com/feed", "https://goldrateinpak.com/feed" ];

const fetchRSS = async (url) => {
  try {
    const response = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(url)}`);
    const data = await response.json();
    return data.items || [];
  } catch (error) {
    console.error("Failed to fetch RSS from", url, error);
    return [];
  }
};

Promise.all(sources.map(fetchRSS)).then((results) => {
  const combined = results.flat().sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));
  setArticles(combined);
});

}, []);

return ( <div className="px-4 py-8 max-w-5xl mx-auto"> <h1 className="text-2xl font-bold mb-4 text-center">Latest Travel & Scholarship News</h1>

<div className="grid gap-6">
    {articles.map((item, index) => (
      <div key={index} className="border border-gray-300 p-4 rounded shadow-sm bg-white">
        <h2 className="text-lg font-semibold mb-2">{item.title}</h2>
        <p className="text-sm text-gray-600 mb-2">{new Date(item.pubDate).toLocaleDateString()}</p>
        <div
          className="text-sm text-gray-800"
          dangerouslySetInnerHTML={{ __html: item.description.slice(0, 250) + "..." }}
        />
      </div>
    ))}
  </div>

  <div className="mt-10 border-t pt-6">
    <h2 className="text-xl font-semibold mb-2 text-center">📢 Follow Our WhatsApp Channel</h2>
    <div className="flex justify-center">
      <iframe
        src="https://whatsapp.com/channel/0029VbAYnee7NoZyRmuvrT2P"
        width="100%"
        height="350"
        title="WhatsApp Channel"
        style={{ border: "none", maxWidth: "480px" }}
        allow="clipboard-write"
      />
    </div>
  </div>
</div>

); }
