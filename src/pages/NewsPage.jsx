// src/pages/NewsPage.jsx
import React, { useEffect, useState } from "react";
import Parser from "rss-parser";

const NewsPage = () => {
  const [articles, setArticles] = useState([]);
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
          const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`;
          const response = await fetch(proxyUrl);
          const result = await response.json();
          const parsed = await parser.parseString(result.contents);
          allArticles.push(...parsed.items);
        }

        // Sort by date (most recent first)
        allArticles.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));
        setArticles(allArticles);
      } catch (error) {
        console.error("Error fetching feeds:", error);
      }
    };

    fetchFeeds();
  }, []);

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-6 text-red-600 text-center">Latest Travel & Scholarship News</h1>

      {articles.map((item, index) => (
        <div key={index} className="mb-6 border rounded p-4 shadow hover:shadow-md bg-white">
          <h2 className="text-lg font-semibold text-red-600 mb-1">{item.title}</h2>
          <p className="text-sm text-gray-500">{new Date(item.pubDate).toLocaleDateString()}</p>
          <div
            className="text-black mt-2 text-sm"
            dangerouslySetInnerHTML={{ __html: item.contentSnippet || item.content || item.description }}
          />
        </div>
      ))}

      {/* WhatsApp Channel Section */}
      <div className="text-center mt-10">
        <p className="font-semibold text-lg mb-2 text-red-600">📢 Follow Our WhatsApp Channel</p>
        <a
          href="https://whatsapp.com/channel/0029VbAYnee7NoZyRmuvrT2P"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black underline hover:text-red-600"
        >
          Join Here →
        </a>
      </div>

      {/* Floating WhatsApp Channel Button */}
      <a
        href="https://whatsapp.com/channel/0029VbAYnee7NoZyRmuvrT2P"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-red-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-red-700 z-50"
      >
        WhatsApp Channel
      </a>
    </div>
  );
};

export default NewsPage;
