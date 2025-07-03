// scripts/manualPost.cjs

const fs = require('fs');
const path = require('path');
const { postToSocials } = require('./postToSocials.cjs');

const newsPath = path.resolve('./src/data/news.json');
const rawData = fs.readFileSync(newsPath, 'utf-8');
const newsArray = JSON.parse(rawData);

const latestNews = newsArray[0]; // or [1], [2] etc.
const { title, link } = latestNews;

postToSocials({ title, link });
