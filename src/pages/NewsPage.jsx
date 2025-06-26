// src/pages/NewsPage.jsx
import React, { useEffect, useState } from "react";
import Parser from "rss-parser";

const NewsPage = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);
  const parser = new Parser();

  const feedUrls = [
    "https://daadscholarship.com/feed",
    "https://travelobiz.com/feed",
    "https://brightscholarship.com/feed",
    "https://goldrateinpak.com/feed"
  ];

  useEffect(() => {
    const fetchFeeds = async () => {
      try {
        const allArticles = [];
        for (const url of feedUrls) {
          const proxyUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(url)}`;
          const response = await fetch(proxyUrl);
          if (!response.ok) throw new Error(`Failed to fetch ${url}`);
          const data = await response.json();
          if (data.items) {
            allArticles.push(...data.items);
          }
        }

        allArticles.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));
        setArticles(allArticles);
      } catch (err) {
        console.error(err);
        setError("❌ Failed to load news. Please try again later.");
      }
    };

    fetchFeeds();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-red-600">📰 Latest Travel News</h1>
      {error && <p className="text-red-500">{error}</p>}
      {!error && articles.length === 0 && <p className="text-gray-700">Loading news...</p>}
      <div className="space-y-6">
        {articles.map((item, index) => (
          <div key={index} className="p-4 border border-gray-300 rounded hover:bg-gray-50 transition">
            <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-xl font-bold text-red-700 hover:underline">
              {item.title}
            </a>
            <p className="text-sm text-gray-500 mt-1">{new Date(item.pubDate).toLocaleString()}</p>
            <p className="mt-2 text-black">
              {item.description?.replace(/<[^>]+>/g, '').slice(0, 200)}...
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsPage;
