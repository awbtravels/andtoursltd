// src/pages/NewsPage.jsx
import React, { useEffect, useState } from 'react';
import Parser from 'rss-parser';
import './NewsPage.css';

const NewsPage = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);
  const [selectedArticle, setSelectedArticle] = useState(null);

  const parser = new Parser();
  const feedUrls = [
    'https://daadscholarship.com/feed/',
    'https://travelobiz.com/feed/',
    'https://brightscholarship.com/feed/',
    'https://goldrateinpak.com/feed/'
  ];

  useEffect(() => {
    const fetchFeeds = async () => {
      try {
        const allArticles = [];
        for (const url of feedUrls) {
          const feed = await parser.parseURL(url);
          feed.items.forEach(item => {
            allArticles.push(item);
          });
        }
        const sorted = allArticles.sort(
          (a, b) => new Date(b.pubDate) - new Date(a.pubDate)
        );
        setArticles(sorted);
      } catch (err) {
        setError('Failed to load news. Please try again later.');
      }
    };

    fetchFeeds();
  }, []);

  return (
    <div className="news-container">
      <h2 className="news-header">Latest Travel News</h2>
      {error && <p>{error}</p>}
      <ul className="news-list">
        {articles.map((article, index) => (
          <li key={index} className="news-item" onClick={() => setSelectedArticle(article)}>
            <strong>{new Date(article.pubDate).toISOString().split('T')[0]}</strong> — {article.title}
          </li>
        ))}
      </ul>

      {/* Modal Viewer */}
      {selectedArticle && (
        <div className="modal-overlay" onClick={() => setSelectedArticle(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>{selectedArticle.title}</h3>
            <p dangerouslySetInnerHTML={{ __html: selectedArticle.content || selectedArticle.contentSnippet }} />
            <button onClick={() => setSelectedArticle(null)}>Close</button>
          </div>
        </div>
      )}

      {/* WhatsApp Channel Fixed Iframe */}
      <iframe
        className="whatsapp-fixed"
        src="https://whatsapp.com/channel/0029VbAYnee7NoZyRmuvrT2P"
        title="WhatsApp Channel"
        allow="clipboard-write"
      ></iframe>
    </div>
  );
};

export default NewsPage;
