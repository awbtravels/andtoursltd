// src/pages/NewsPage.jsx
import React, { useEffect, useState } from 'react';
import Parser from 'rss-parser';
import './NewsPage.css';

const parser = new Parser();

const NewsPage = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);
  const [selectedArticle, setSelectedArticle] = useState(null);

  const feedUrls = [
    'https://daadscholarship.com/feed/',
    'https://travelobiz.com/feed/',
    'https://brightscholarship.com/feed/'
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
        setArticles(sorted.slice(0, 20));
      } catch (err) {
        console.error('Feed error:', err);
        setError('Failed to load news.');
      }
    };
    fetchFeeds();
  }, []);

  return (
    <div className="news-container">
      <h1 className="news-header">Latest Travel News</h1>
      {error && <p className="error">{error}</p>}
      {!error && articles.length === 0 && <p>Loading news...</p>}
      <ul className="news-list">
        {articles.map((item, index) => (
          <li key={index} onClick={() => setSelectedArticle(item)} className="news-item">
            <strong>{item.title}</strong>
            <br />
            <small>{new Date(item.pubDate).toLocaleString()}</small>
          </li>
        ))}
      </ul>

      {selectedArticle && (
        <div className="modal-overlay" onClick={() => setSelectedArticle(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <h2>{selectedArticle.title}</h2>
            <p dangerouslySetInnerHTML={{ __html: selectedArticle.contentSnippet || selectedArticle.content }} />
            <a href={selectedArticle.link} target="_blank" rel="noopener noreferrer">Read Original Source</a>
          </div>
        </div>
      )}

      {/* Fixed WhatsApp channel widget */}
      <div className="whatsapp-fixed">
        <iframe
          src="https://whatsapp.com/channel/0029VbAYnee7NoZyRmuvrT2P"
          title="WhatsApp Channel"
          width="100%"
          height="100%"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default NewsPage;
