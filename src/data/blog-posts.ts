export interface BlogPost {
  slug: string;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  date: string; // ISO YYYY-MM-DD
  readingTime: number; // minutes
  category: string;
  categoryEn: string;
  keywords: string;
  content: string;   // TR markdown-like HTML string
  contentEn: string; // EN version
}

export const blogPosts: BlogPost[] = [
  {
    slug: "web-sitesi-olmayan-isletme-ne-kaybeder",
    title: "Web Sitesi Olmayan Bir İşletme Ne Kaybediyor?",
    titleEn: "What Does a Business Without a Website Lose?",
    description:
      "2026'da web sitesi olmayan bir işletme potansiyel müşterilerinin büyük çoğunluğunu kaybediyor. İşte rakamlar ve gerçek hikayeler.",
    descriptionEn:
      "In 2026, a business without a website is losing the majority of its potential customers. Here are the numbers and real stories.",
    date: "2026-07-15",
    readingTime: 5,
    category: "Dijital Strateji",
    categoryEn: "Digital Strategy",
    keywords: "web sitesi olmayan işletme, web sitesi önemi, dijital varlık, küçük işletme web sitesi",
    content: `
<h2>Müşterilerin İlk Durağı: Google</h2>
<p>Bugün bir ürün veya hizmet arayan kişilerin <strong>%97'si önce internette araştırma yapıyor.</strong> Bu araştırmanın büyük çoğunluğu Google üzerinden gerçekleşiyor. Web sitesi olmayan bir işletme bu aramanın tamamen dışında kalıyor.</p>

<h2>Sosyal Medya Yetmez</h2>
<p>Instagram veya Facebook sayfası olan işletmeler genellikle "zaten varım" diye düşünüyor. Ama sosyal medya ve web sitesi birbirinin yerini tutmuyor:</p>
<ul>
  <li>Sosyal medya algoritmaları değişir, takipçilerinize ulaşamayabilirsiniz</li>
  <li>Platformlar hesabınızı askıya alabilir</li>
  <li>Google arama sonuçlarında web siteniz kadar iyi sıralanmaz</li>
  <li>Menü, fiyat, konum gibi bilgileri düzenli güncellemeniz zorlaşır</li>
</ul>

<h2>Rakipleriniz Zaten Orada</h2>
<p>Müşteri sizi aramıyor olsa bile rakibinizi buluyor. Web sitesi olmayan bir cafe'nin yanı başındaki web sitesi olan cafe, "yakınımdaki cafe" aramasında görünürken siz görünmüyorsunuz.</p>

<h2>Güven Sorunu</h2>
<p>Araştırmalar, tüketicilerin <strong>%75'inin bir işletmenin güvenilirliğini web sitesine bakarak değerlendirdiğini</strong> gösteriyor. Web sitesi olmayan işletmeler potansiyel müşterilere profesyonellik açısından zayıf mesaj gönderiyor.</p>

<h2>Sonuç</h2>
<p>Web sitesi artık bir lüks değil, temel bir iş aracı. PROPLY olarak 2–4 haftada, uygun maliyetle işletmenizi dijitale taşıyoruz.</p>
    `.trim(),
    contentEn: `
<h2>Customers' First Stop: Google</h2>
<p><strong>97% of people</strong> who are looking for a product or service research online first. Most of this research happens through Google. A business without a website is completely invisible to these searches.</p>

<h2>Social Media Is Not Enough</h2>
<p>Businesses with an Instagram or Facebook page often think "I'm already there." But social media and a website are not interchangeable:</p>
<ul>
  <li>Social media algorithms change — you may not reach your followers</li>
  <li>Platforms can suspend your account</li>
  <li>They don't rank as well as your own website in Google search results</li>
  <li>Keeping information like menus, prices and location up to date becomes harder</li>
</ul>

<h2>Your Competitors Are Already There</h2>
<p>Even if a customer isn't searching for you specifically, they find your competitor. A cafe with a website shows up in "cafe near me" searches — you don't.</p>

<h2>The Trust Problem</h2>
<p>Research shows that <strong>75% of consumers judge a business's credibility by its website.</strong> Businesses without a website send a weak professionalism signal to potential customers.</p>

<h2>Conclusion</h2>
<p>A website is no longer a luxury — it's a basic business tool. At PROPLY, we take your business digital in 2–4 weeks at an affordable cost.</p>
    `.trim(),
  },
  {
    slug: "web-sitesi-maliyeti-2026",
    title: "Web Sitesi Maliyeti 2026: Ne Beklenmeli?",
    titleEn: "Website Cost in 2026: What to Expect",
    description:
      "Freelancer, büyük ajans ve PROPLY gibi stüdyolar arasındaki fiyat farkları neler? Kaliteli bir web sitesi için gerçekçi bütçe rehberi.",
    descriptionEn:
      "What are the price differences between freelancers, large agencies and studios like PROPLY? A realistic budget guide for a quality website.",
    date: "2026-07-28",
    readingTime: 6,
    category: "Fiyatlandırma",
    categoryEn: "Pricing",
    keywords: "web sitesi maliyeti, web sitesi fiyatı 2026, web tasarım ücreti, web sitesi yaptırma fiyat",
    content: `
<h2>Fiyat Aralıkları</h2>
<p>Türkiye'de 2026 yılında web sitesi yaptırmanın maliyeti seçtiğiniz yola göre büyük farklılıklar gösteriyor:</p>

<h3>Freelancer</h3>
<p>₺3.000 – ₺15.000 arası. Bu aralıkta kalite ve teslim süresi çok değişken. Tecrübesiz bir freelancer çok ucuza iş yapabilir ama sonuç hayal kırıklığı yaratabilir. İletişim süreci zorlu olabilir.</p>

<h3>Büyük Ajans</h3>
<p>₺40.000 ve üzeri. Kurumsal ajanslar yüksek kaliteli iş çıkarabilir ama süreç uzun (3–6 ay), bürokratik ve pahalı. Küçük işletmeler için genellikle orantısız bir yatırım.</p>

<h3>PROPLY Gibi Özel Stüdyolar</h3>
<p>₺7.500 – ₺25.000. En iyi denge noktası: kişisel iletişim, hızlı teslim (2–4 hafta), profesyonel tasarım ve rekabetçi fiyat.</p>

<h2>Fiyatı Etkileyen Faktörler</h2>
<ul>
  <li><strong>Sayfa sayısı:</strong> Tek sayfalık bir tanıtım sitesi ile çok sayfalı e-ticaret sitesi arasında büyük fark var</li>
  <li><strong>Özel fonksiyonlar:</strong> Online rezervasyon, ödeme sistemi, müşteri paneli gibi özellikler ek maliyet getirir</li>
  <li><strong>İçerik üretimi:</strong> Metin yazarlığı ve fotoğraf çekimi dahil mi?</li>
  <li><strong>SEO kurulumu:</strong> Temel SEO çoğu pakete dahil, gelişmiş SEO ek ücret gerektirebilir</li>
</ul>

<h2>Gizli Maliyetlere Dikkat</h2>
<p>Alan adı (yıllık ~₺500–₺1.500) ve hosting (yıllık ~₺1.000–₺5.000) masrafları genellikle fiyata dahil değildir. PROPLY'da hosting kurulumunu sizin adınıza yapıyor, kontrolü size teslim ediyoruz.</p>
    `.trim(),
    contentEn: `
<h2>Price Ranges</h2>
<p>In Turkey in 2026, the cost of having a website built varies greatly depending on the route you choose:</p>

<h3>Freelancer</h3>
<p>₺3,000 – ₺15,000. Quality and delivery time vary a lot in this range. An inexperienced freelancer can work very cheaply but the result may disappoint. Communication can also be challenging.</p>

<h3>Large Agency</h3>
<p>₺40,000 and up. Corporate agencies can produce high-quality work, but the process is long (3–6 months), bureaucratic and expensive. Usually a disproportionate investment for small businesses.</p>

<h3>Boutique Studios like PROPLY</h3>
<p>₺7,500 – ₺25,000. The best balance: personal communication, fast delivery (2–4 weeks), professional design and competitive pricing.</p>

<h2>Factors That Affect the Price</h2>
<ul>
  <li><strong>Number of pages:</strong> Big difference between a single-page brochure site and a multi-page e-commerce site</li>
  <li><strong>Custom features:</strong> Online booking, payment systems, customer portals add cost</li>
  <li><strong>Content production:</strong> Is copywriting and photography included?</li>
  <li><strong>SEO setup:</strong> Basic SEO is included in most packages; advanced SEO may cost extra</li>
</ul>

<h2>Watch Out for Hidden Costs</h2>
<p>Domain (~₺500–₺1,500/year) and hosting (~₺1,000–₺5,000/year) are usually not included in the quoted price. At PROPLY, we set up the hosting infrastructure on your behalf and hand full control to you.</p>
    `.trim(),
  },
  {
    slug: "kucuk-isletme-icin-seo-rehberi",
    title: "Küçük İşletmeler İçin Temel SEO Rehberi",
    titleEn: "Basic SEO Guide for Small Businesses",
    description:
      "Google'da üst sıralara çıkmak için karmaşık araçlara ihtiyacınız yok. Küçük işletmelerin hemen uygulayabileceği 7 SEO adımı.",
    descriptionEn:
      "You don't need complex tools to rank higher on Google. 7 SEO steps small businesses can implement right away.",
    date: "2026-08-05",
    readingTime: 7,
    category: "SEO",
    categoryEn: "SEO",
    keywords: "küçük işletme SEO, Google sıralaması, yerel SEO, web sitesi SEO, Google Business Profile",
    content: `
<h2>1. Google Business Profile Kurun</h2>
<p>Ücretsiz ve en hızlı etkiyi yaratan adım. "Yakınımdaki [işletme türü]" aramalarında görünmek için şart. <strong>maps.google.com/business</strong> adresinden ücretsiz kurabilirsiniz.</p>

<h2>2. Doğru Keyword'leri Hedefleyin</h2>
<p>"Web tasarım" gibi geniş keyword'ler yerine "Bursa web tasarım" veya "İstanbul cafe web sitesi" gibi lokasyon bazlı keyword'ler seçin. Rekabet çok daha düşük, dönüşüm oranı çok daha yüksek.</p>

<h2>3. Sayfa Başlığınızı Optimize Edin</h2>
<p>Her sayfanın title tag'i 50–60 karakter arasında olmalı ve hedef keyword'ü içermeli. Örnek: <em>"Bursa Kurumsal Web Sitesi Tasarımı | PROPLY"</em></p>

<h2>4. Meta Description Yazın</h2>
<p>Google'da başlığın altında görünen 150–160 karakterlik açıklama. Keyword içermeli ve tıklamayı teşvik etmeli. Doğrudan sıralamayı etkilemese de tıklama oranını artırır.</p>

<h2>5. Mobil Uyumluluğu Sağlayın</h2>
<p>Google aramalarının <strong>%60'ından fazlası mobil cihazlardan</strong> yapılıyor. Mobil uyumlu olmayan siteler Google tarafından cezalandırılıyor. Tüm PROPLY siteleri varsayılan olarak mobil öncelikli.</p>

<h2>6. Sayfa Hızını İyileştirin</h2>
<p>Google, hızlı yüklenen siteleri daha üstte sıralıyor. Görsel boyutlarını küçültün, gereksiz script'leri kaldırın. Google PageSpeed Insights ile ücretsiz test edebilirsiniz.</p>

<h2>7. İçerik Üretin</h2>
<p>Blog yazıları, sık sorulan sorular ve hizmet açıklamaları Google'ın sitenizi anlayıp sıralamasına yardımcı olur. Haftada bir bile olsa düzenli içerik büyük fark yaratır.</p>
    `.trim(),
    contentEn: `
<h2>1. Set Up Google Business Profile</h2>
<p>Free and the fastest-impact step. Essential for appearing in "near me" searches. Set it up for free at <strong>maps.google.com/business</strong>.</p>

<h2>2. Target the Right Keywords</h2>
<p>Instead of broad keywords like "web design", choose location-based keywords like "Bursa web design" or "Istanbul cafe website". Competition is much lower, conversion rate much higher.</p>

<h2>3. Optimize Your Page Title</h2>
<p>Each page's title tag should be 50–60 characters and contain the target keyword. Example: <em>"Bursa Corporate Website Design | PROPLY"</em></p>

<h2>4. Write a Meta Description</h2>
<p>The 150–160 character description that appears under the title in Google search. It should contain keywords and encourage clicks. While it doesn't directly affect rankings, it improves click-through rate.</p>

<h2>5. Ensure Mobile Compatibility</h2>
<p><strong>Over 60% of Google searches</strong> come from mobile devices. Sites that aren't mobile-friendly are penalized by Google. All PROPLY sites are mobile-first by default.</p>

<h2>6. Improve Page Speed</h2>
<p>Google ranks faster-loading sites higher. Reduce image sizes, remove unnecessary scripts. Test for free with Google PageSpeed Insights.</p>

<h2>7. Produce Content</h2>
<p>Blog posts, FAQs and service descriptions help Google understand and rank your site. Even one post a week makes a big difference.</p>
    `.trim(),
  },
  {
    slug: "cafe-restoran-web-sitesi-neden-onemli",
    title: "Cafe ve Restoran Web Sitesi Neden Bu Kadar Önemli?",
    titleEn: "Why Is a Cafe and Restaurant Website So Important?",
    description:
      "Yemek sektöründe dijital varlık neden kritik? Menü sitesi, rezervasyon ve Google entegrasyonuyla müşteri kazanmanın yolları.",
    descriptionEn:
      "Why is digital presence critical in the food industry? Ways to attract customers through a menu site, reservations and Google integration.",
    date: "2026-08-12",
    readingTime: 5,
    category: "Sektör Rehberi",
    categoryEn: "Industry Guide",
    keywords: "cafe web sitesi, restoran web sitesi, dijital menü, yemek sektörü dijital, QR menü, restoran SEO",
    content: `
<h2>İlk İzlenim Dijitalde Oluşuyor</h2>
<p>Bir müşteri yeni bir restoran denemek istediğinde büyük ihtimalle önce Google'da arıyor, fotoğraflara bakıyor, menüyü inceliyor. Bu araştırmanın <strong>tamamı sizi bulmadan önce</strong> gerçekleşiyor.</p>

<h2>Menüsü Olmayan Restoran Görünmez</h2>
<p>Google'da "yakınımdaki restoran" araması yapıldığında menüsünü gösteren işletmeler öne çıkıyor. Dijital menü ayrıca:</p>
<ul>
  <li>Fiyat ve içerik güncellemelerini anında yapmanızı sağlar</li>
  <li>QR kod ile masada fiziksel menü ihtiyacını ortadan kaldırır</li>
  <li>Alerjen bilgilerini, fotoğrafları ve günlük özel menüleri gösterebilir</li>
</ul>

<h2>Rezervasyon Dönüşümü</h2>
<p>Web sitesinde yer alan bir rezervasyon butonu veya WhatsApp entegrasyonu, ziyaretçiyi direkt müşteriye dönüştürür. Telefon aramak zorunda kalan müşterilerin büyük çoğunluğu aramıyor — vazgeçiyor.</p>

<h2>Google Maps Entegrasyonu</h2>
<p>Web siteniz Google Business Profile ile bağlantılı olduğunda arama sıralamanız yükseliyor. Adresiniz, çalışma saatleriniz ve fotoğraflarınız Google'da doğru görünüyor.</p>

<h2>Başarılı Örnekler</h2>
<p>PROPLY olarak tasarladığımız Otantik Turkish Restaurant sitesi yayına girdikten sonra mobil rezervasyon trafiğinde <strong>%60 artış</strong> yaşandı. Olina Coffee için hazırladığımız dijital menü sayesinde masaya oturur oturmaz QR ile menüye ulaşılabiliyor.</p>
    `.trim(),
    contentEn: `
<h2>The First Impression Happens Online</h2>
<p>When a customer wants to try a new restaurant, they most likely search on Google first, look at photos and check the menu. <strong>All of this research happens before they ever find you.</strong></p>

<h2>A Restaurant Without a Menu Is Invisible</h2>
<p>When someone searches "restaurant near me", businesses that show their menu stand out. A digital menu also:</p>
<ul>
  <li>Lets you update prices and content instantly</li>
  <li>Eliminates physical menus at the table with QR codes</li>
  <li>Can display allergen information, photos and daily specials</li>
</ul>

<h2>Reservation Conversion</h2>
<p>A reservation button or WhatsApp integration on your website converts visitors directly into customers. The majority of customers who have to make a phone call don't — they give up.</p>

<h2>Google Maps Integration</h2>
<p>When your website is linked to your Google Business Profile, your search ranking improves. Your address, opening hours and photos appear correctly on Google.</p>

<h2>Success Stories</h2>
<p>The Otantik Turkish Restaurant site we designed at PROPLY saw a <strong>60% increase in mobile reservation traffic</strong> after launch. The digital menu we created for Olina Coffee means customers can access the menu via QR code as soon as they sit down.</p>
    `.trim(),
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function formatDate(dateStr: string, lang: "tr" | "en"): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString(lang === "tr" ? "tr-TR" : "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
