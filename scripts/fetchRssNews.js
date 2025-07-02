// scripts/fetchRssNews.js
import Parser from 'rss-parser';
import fs from 'fs';

const parser = new Parser();
const feeds = ['https://daadscholarship.com/feed', 'https://travelobiz.com/feed', 'https://brightscholarship.com/feed', 'https://goldrateinpak.com/feed'];

const fetchRSS = async () => {
  let allPosts = [];

  for (const url of feeds) {
    try {
      const feed = await parser.parseURL(url);
      const posts = feed.items.slice(0, 5).map(item => {
        return {
          title: item.title || '',
          excerpt: item.contentSnippet || '',
          image: extractImage(item.content || item.contentSnippet || ''),
          slug: slugify(item.link || item.title)
        };
      });
      allPosts.push(...posts);
    } catch (err) {
      console.error(`Failed to fetch from: ${url}`, err.message);
    }
  }

  fs.writeFileSync('public/news.json', JSON.stringify(allPosts.slice(0, 15), null, 2));
};

const extractImage = (html) => {
  const match = html.match(/<img[^>]+src="([^">]+)"/);
  return match ? match[1] : "https://www.awbtravelsandtours.com/logo.png";
};

const slugify = (text) => {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
};

fetchRSS();
