// src/pages/NewsPage.jsx
import React, { useEffect, useState } from "react";

const NewsPage = () => {
  const [articles, setArticles] = useState([]);

  const feedUrls = [
    "https://daadscholarship.com/feed/",
    "https://travelobiz.com/feed/",
    "https://brightscholarship.com/feed/",
    "https://goldrateinpak.com/feed/"
  ];

  useEffect(() => {
    const fetchFeeds = async () => {
      try {
        const allArticles = [];

        for (const url of feedUrls) {
          const response = await fetch(
            `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`
          );
          const data = await response.json();
          const parser = new DOMParser();
          const xml = parser.parseFromString(data.contents, "text/xml");
          const items = xml.querySelectorAll("item");

          items.forEach((item) => {
            allArticles.push({
              title: item.querySelector("title")?.textContent,
              link: item.querySelector("link")?.textContent,
              pubDate: item.querySelector("pubDate")?.textContent
            });
          });
        }

        setArticles(allArticles);
      } catch (err) {
        console.error("Failed to fetch feeds:", err);
      }
    };

    fetchFeeds();
  }, []);

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Latest Travel News</h1>
      {articles.length === 0 ? (
        <p>Loading news...</p>
      ) : (
        <ul className="space-y-4">
          {articles.map((article, index) => (
            <li key={index} className="border-b pb-2">
              <a
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                {article.title}
              </a>
              <p className="text-sm text-gray-500">{article.pubDate}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NewsPage;
