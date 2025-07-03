// scripts/postToSocials.js

import axios from 'axios';

// -----------------------------
// ✅ Your Real Tokens and IDs
// -----------------------------
const FACEBOOK_PAGE_ID = '122199894884096115';
const FACEBOOK_ACCESS_TOKEN = 'EAARaZC0BZB3LgBO60KLmd5llmS3IZBYZB30OgEGsBEPD9gqOaZC0dPZBAsZApuLEI40y9b8YiLv06hYPKgPe3qe6AlY85ZCO2pWFZArmQDNNCn52YccOBRWV2HW8Ypczlodn29FeyPFu1nK5B2ZBwu4SiriPle3sZBRa1aol9LnDaYull6960L8MiUExmUDt3ct2XLHiLDLgcCZCYOEZBonS88eNnMseg7xFMVZAtfuNEL';

const TWITTER_BEARER_TOKEN = 'AAAAAAAAAAAAAAAAAAAAAAGI2wEAAAAAjwi8k37w3J%2ByZlx%2FZUEtyagTCGM%3Da3WwZF91Bb5ef6RAmvMVKjFRMdt4ic14xPN0FdoQQGtIY6GP14';
const TWITTER_API_KEY = 'ayDneDo7vwrtRdHhS5ne5h6ek';
const TWITTER_API_SECRET = '10cU9XzKo2npJN18J2FeiSJVNjFiHg8XS9ZTLveLob5xtI42qK';
const TWITTER_ACCESS_TOKEN = '1759002016301350913-spuxsKWTfzSVN88f5cg2kpKs4nQI03';
const TWITTER_ACCESS_SECRET = '6h3l1Qx9zF0boAng9tfYfftHmDoN0ufMdMiruLU9rqkLO';

const LINKEDIN_ACCESS_TOKEN = 'AQUCLEfZtXufnMTQwZ1dhZs4_jky508ZHQUt2pnZxkptpnyUDXu-ObNtM76zir4N4QcceTSGBgS9EpzWc8sEp_h5EgLA0td1aoxuG0f6-U5ukyrqVTX_FRLmBiINKVqD0p6R8I1hKp7xKkiD2pBdjpyziWrmFsoiH4';
const LINKEDIN_ORGANIZATION_ID = 'urn:li:organization:103395420'; // Update this if your LinkedIn org ID is different

// -----------------------------
// 📣 Auto post function
// -----------------------------
export const postToSocials = async ({ title, link }) => {
  const message = `${title}\n\nRead more: ${link}\n\n🌐 awbtravelsandtours.com`;

  // ---------- 1. Post to Facebook ----------
  try {
    await axios.post(
      `https://graph.facebook.com/${FACEBOOK_PAGE_ID}/feed`,
      {
        message,
        access_token: FACEBOOK_ACCESS_TOKEN,
      }
    );
    console.log('✅ Posted to Facebook');
  } catch (error) {
    console.error('❌ Facebook Error:', error.response?.data || error.message);
  }

  // ---------- 2. Post to Twitter ----------
  try {
    await axios.post(
      'https://api.twitter.com/2/tweets',
      { text: message },
      {
        headers: {
          Authorization: `Bearer ${TWITTER_BEARER_TOKEN}`,
          'Content-Type': 'application/json',
        },
      }
    );
    console.log('✅ Posted to Twitter');
  } catch (error) {
    console.error('❌ Twitter Error:', error.response?.data || error.message);
  }

  // ---------- 3. Post to LinkedIn ----------
  try {
    await axios.post(
      'https://api.linkedin.com/v2/ugcPosts',
      {
        author: LINKEDIN_ORGANIZATION_ID,
        lifecycleState: 'PUBLISHED',
        specificContent: {
          'com.linkedin.ugc.ShareContent': {
            shareCommentary: {
              text: message,
            },
            shareMediaCategory: 'NONE',
          },
        },
        visibility: {
          'com.linkedin.ugc.MemberNetworkVisibility': 'PUBLIC',
        },
      },
      {
        headers: {
          Authorization: `Bearer ${LINKEDIN_ACCESS_TOKEN}`,
          'Content-Type': 'application/json',
          'X-Restli-Protocol-Version': '2.0.0',
        },
      }
    );
    console.log('✅ Posted to LinkedIn');
  } catch (error) {
    console.error('❌ LinkedIn Error:', error.response?.data || error.message);
  }
};
