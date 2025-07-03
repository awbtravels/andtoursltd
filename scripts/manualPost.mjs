// scripts/manualPost.mjs

import fs from 'fs';
import path from 'path';
import { postToSocials } from './postToSocials.mjs'; // ✅ fix this extension

const newsPath = path.resolve('./src/data/news.json');

// Read the first news item (or choose the one you want)
const rawData = fs.readFileSync(newsPath, 'utf-8');
const newsArray = JSON.parse(rawData);

// Pick the latest or any news item you want to post
const latestNews = newsArray[0]; // or [1], [2], etc.

const { title, link } = latestNews;

postToSocials({ title, link });
