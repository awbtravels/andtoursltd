// src/pages/NewsDetails.jsx
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import newsData from "../../public/news.json";
import "./NewsPage.css";

const NewsDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const post = newsData.find((item) => item.slug === slug);

  if (!post) {
    return (
      <div className="news-container">
        <h2>Article not found</h2>
        <button onClick={() => navigate("/news")} style={{ color: "red" }}>← Back to News</button>
      </div>
    );
  }

  return (
    <div className="news-container">
      <h1 className="news-title">{post.title}</h1>
      <img
        src={post.image || "https://via.placeholder.com/800x400?text=No+Image"}
        alt={post.title}
        className="news-image"
        style={{ maxHeight: "400px", objectFit: "cover", marginBottom: "20px" }}
      />
      <p className="news-excerpt" style={{ fontSize: "18px", lineHeight: "1.6" }}>
        {post.excerpt || "No additional content available."}
      </p>
      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <button
          onClick={() => navigate("/news")}
          style={{
            backgroundColor: "#b30000",
            color: "#fff",
            padding: "10px 20px",
            borderRadius: "5px",
            border: "none",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          ← Back to News Page
        </button>
      </div>
    </div>
  );
};

export default NewsDetails;
