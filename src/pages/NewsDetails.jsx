// src/pages/NewsDetails.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { FaWhatsapp, FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import newsData from '../../public/news.json';
import './NewsPage.css';

const NewsDetails = () => {
  const { slug } = useParams();
  const article = newsData.find((item) => item.slug === slug);

  if (!article) {
    return (
      <div className="news-container">
        <h2 className="text-red-700 text-xl font-semibold">Article Not Found</h2>
      </div>
    );
  }

  const shareUrl = `https://awbtravelsandtours.com/news/${article.slug}`;

  return (
    <div className="news-container">
      <div className="news-header">
        <img src="/logo.png" alt="AWB Logo" width="120" />
        <h1 className="news-title">{article.title}</h1>
        <p className="slogan">....fulfilling your dream life</p>
      </div>

      <div className="news-card" style={{ padding: 20 }}>
        <img src={article.image} alt={article.title} className="news-image" />
        <p className="news-excerpt">{article.excerpt}</p>

        {/* Share Section */}
        <div style={{ marginTop: 30 }}>
          <h4 className="text-gray-700 font-semibold mb-2">Share this article:</h4>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <a
              href={`https://api.whatsapp.com/send?text=${encodeURIComponent(article.title + '\n' + shareUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="read-more"
              style={{ display: 'flex', alignItems: 'center', gap: 8 }}
            >
              <FaWhatsapp /> WhatsApp
            </a>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="read-more"
              style={{ display: 'flex', alignItems: 'center', gap: 8 }}
            >
              <FaFacebookF /> Facebook
            </a>
            <a
              href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(article.title)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="read-more"
              style={{ display: 'flex', alignItems: 'center', gap: 8 }}
            >
              <FaTwitter /> Twitter
            </a>
            <a
              href={`https://www.linkedin.com/shareArticle?url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(article.title)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="read-more"
              style={{ display: 'flex', alignItems: 'center', gap: 8 }}
            >
              <FaLinkedinIn /> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
