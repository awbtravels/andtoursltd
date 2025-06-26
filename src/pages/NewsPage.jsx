// src/pages/NewsPage.jsx
import React, { useEffect, useState } from "react";
import Parser from "rss-parser";
import "./NewsPage.css";

const NewsPage = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);
  const [modalContent, setModalContent] = useState(null);
  const parser = new Parser();

  const feedUrls = [
    "https://daadscholarship.com/feed/",
    "https://travelobiz.com/feed/",
    "https://brightscholarship.com/feed/"
  ];

  useEffect(() => {
    const fetchFeeds = async () => {
      try {
        const allArticles = [];
        for (const url of feedUrls) {
          const feed = await parser.parseURL(url);
          allArticles.push(...feed.items);
        }
        const sorted = allArticles.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));
        setArticles(sorted);
      } catch (err) {
        setError("Failed to load news.");
        console.error(err);
      }
    };

    fetchFeeds();
  }, []);

  const openModal = (article) => {
    setModalContent(article);
  };

  const closeModal = () => {
    setModalContent(null);
  };

  return (
    <div className="news-container">
      <h1 className="news-header">Latest Travel News</h1>
      {error && <p>{error}</p>}
      {!error && articles.length === 0 && <p>Loading news...</p>}
      <ul className="news-list">
        {articles.map((item, index) => (
          <li key={index} className="news-item" onClick={() => openModal(item)}>
            <strong>{item.title}</strong> <br />
            <small>{new Date(item.pubDate).toLocaleString()}</small>
          </li>
        ))}
      </ul>

      {modalContent && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{modalContent.title}</h2>
            <p dangerouslySetInnerHTML={{ __html: modalContent.content || modalContent.contentSnippet }}></p>
            <p><a href={modalContent.link} target="_blank" rel="noopener noreferrer">Read Original</a></p>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}

      {/* Fixed WhatsApp Channel Embed */}
      <iframe
        className="whatsapp-fixed"
        src="https://whatsapp.com/channel/0029VbAYnee7NoZyRmuvrT2P"
        title="AWB WhatsApp Channel"
      ></iframe>
    </div>
  );
};

export default NewsPage;
