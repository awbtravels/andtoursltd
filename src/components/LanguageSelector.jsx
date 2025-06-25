<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />

    <!-- SEO Meta -->
    <meta name="description" content="AWB Travels and Tours Ltd - Visa assistance, Flight & Hotel booking, Travel insurance, and more." />
    <meta name="keywords" content="AWB Travels, Visa, Travel Agency, Flight Booking, Hotel Reservation, Travel Insurance" />
    <meta name="author" content="AWB Travels and Tours Ltd" />

    <!-- Open Graph -->
    <meta property="og:title" content="AWB Travels and Tours Ltd" />
    <meta property="og:description" content="Your trusted travel partner for visa, flights, hotels, insurance, and tourism services." />
    <meta property="og:image" content="/logo.png" />
    <meta property="og:url" content="https://www.awbtravelsandtours.com" />
    <meta name="twitter:card" content="summary_large_image" />

    <title>AWB Travels and Tours Ltd</title>

    <!-- Favicon -->
    <link rel="icon" type="image/png" href="/logo.png" />

    <!-- Tailwind CSS Entry -->
    <script type="module" src="/src/main.jsx"></script>
  </head>

  <body class="bg-white text-charcoal">
    <!-- React App Root -->
    <div id="root"></div>

    <!-- Tawk.to Live Chat -->
    <script type="text/javascript">
      var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
      (function () {
        var s1 = document.createElement("script"),
            s0 = document.getElementsByTagName("script")[0];
        s1.async = true;
        s1.src = "https://embed.tawk.to/68559a0aadefb9190f5fe0d5/1iu763f2p";
        s1.charset = "UTF-8";
        s1.setAttribute("crossorigin", "*");
        s0.parentNode.insertBefore(s1, s0);
      })();
    </script>

    <!-- Language Dropdown (Only under Testimonials Page) -->
    <div id="language-dropdown" style="display: flex; flex-wrap: wrap; justify-content: center; gap: 10px; margin: 30px auto; max-width: 960px;">
      <select onchange="translateLanguage(this.value)" class="border border-gray-300 px-3 py-2 rounded text-sm">
        <option value="">🌍 Select Language</option>
        <option value="en">🇬🇧 English</option>
        <option value="es">🇪🇸 Spanish</option>
        <option value="fr">🇫🇷 French</option>
        <option value="de">🇩🇪 German</option>
        <option value="pt">🇵🇹 Portuguese</option>
        <option value="ar">🇸🇦 Arabic</option>
        <option value="it">🇮🇹 Italian</option>
        <option value="ro">🇷🇴 Romanian</option>
        <option value="sr">🇷🇸 Serbian</option>
        <option value="nl">🇳🇱 Dutch</option>
        <option value="fi">🇫🇮 Finnish</option>
        <option value="sv">🇸🇪 Swedish</option>
        <option value="ru">🇷🇺 Russian</option>
        <option value="hi">🇮🇳 Hindi</option>
        <option value="zh-CN">🇨🇳 Chinese</option>
        <option value="ja">🇯🇵 Japanese</option>
        <option value="ko">🇰🇷 Korean</option>
        <option value="ms">🇲🇾 Malay</option>
        <option value="tl">🇵🇭 Filipino</option>
        <option value="tr">🇹🇷 Turkish</option>
        <option value="tw">🇹🇼 Taiwanese</option>
        <option value="sg">🇸🇬 Singaporean</option>
        <option value="yo">🌍 Yoruba</option>
        <option value="ig">🌍 Igbo</option>
        <option value="ha">🌍 Hausa</option>
      </select>
    </div>

    <script>
      function translateLanguage(lang) {
        const select = document.querySelector(".goog-te-combo");
        if (select && lang) {
          select.value = lang;
          select.dispatchEvent(new Event("change"));
        }
      }
    </script>
  </body>
</html>
