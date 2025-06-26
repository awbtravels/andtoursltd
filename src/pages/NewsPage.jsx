// src/pages/NewsPage.jsx
import React, { useEffect, useState } from "react";

const NewsPage = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);

  const feedUrls = [
    "https://daadscholarship.com/feed/",
    "https://travelobiz.com/feed/",
    "https://brightscholarship.com/feed/",
    "https://goldrateinpak.com/feed/"
  ];

  const proxy = "https://api.rss2json.com/v1/api.json?rss_url=";

  useEffect(() => {
    const fetchFeeds = async () => {
      try {
        const allArticles = [];

        for (const url of feedUrls) {
          const res = await fetch(proxy + encodeURIComponent(url));
          const data = await res.json();

          if (data.items) {
            allArticles.push(...data.items);
          }
        }

        const sorted = allArticles.sort(
          (a, b) => new Date(b.pubDate) - new Date(a.pubDate)
        );

        setArticles(sorted);
      } catch (err) {
        setError("Failed to load news.");
      }
    };

    fetchFeeds();
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h1 style={{ color: "red", fontWeight: "bold" }}>Latest Travel News</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {articles.length === 0 && !error && <p>Loading news...</p>}

      {articles.map((item, index) => (
        <div key={index} style={{ marginBottom: "2rem" }}>
          <a href={item.link} target="_blank" rel="noopener noreferrer" style={{ color: "black", fontSize: "18px", fontWeight: "600" }}>
            {item.title}
          </a>
          <p style={{ color: "#444" }}>{item.pubDate}</p>
        </div>
      ))}
    </div>
  );
};

export default NewsPage;
