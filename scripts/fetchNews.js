// scripts/fetchNews.js

const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');

const sources = [
  {
    name: 'Travelobiz',
    url: 'https://travelobiz.com',
    selector: '.jeg_postblock_content .jeg_post_title > a',
    base: 'https://travelobiz.com'
  },
  {
    name: 'DAAD Scholarship',
    url: 'https://daadscholarship.com',
    selector: '.jeg_postblock_content .jeg_post_title > a',
    base: 'https://daadscholarship.com'
  },
  {
    name: 'Bright Scholarship',
    url: 'https://brightscholarship.com',
    selector: '.jeg_postblock_content .jeg_post_title > a',
    base: 'https://brightscholarship.com'
  },
  {
    name: 'Gold Rate in Pak',
    url: 'https://goldrateinpak.com',
    selector: '.jeg_postblock_content .jeg_post_title > a',
    base: 'https://goldrateinpak.com'
  }
];

async function fetchNews() {
  const news = [];

  for (const source of sources) {
    try {
      const { data } = await axios.get(source.url);
      const $ = cheerio.load(data);

      $(source.selector).slice(0, 3).each((i, el) => {
        const title = $(el).text().trim();
        const href = $(el).attr('href');
        const slug = href.split('/').filter(Boolean).pop();
        const fullUrl = href.startsWith('http') ? href : source.base + href;

        const parent = $(el).closest('.jeg_post');
        const image = parent.find('img').attr('src') || '';
        const excerpt = parent.find('.jeg_post_excerpt').text().trim() || '';

        news.push({
          title,
          excerpt,
          image,
          slug
        });
      });
    } catch (err) {
      console.error(`❌ Failed to fetch from ${source.name}:`, err.message);
    }
  }

  fs.writeFileSync('./public/news.json', JSON.stringify(news, null, 2));
  console.log('✅ news.json updated successfully');
}

fetchNews();
