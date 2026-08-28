import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import workKata from "@/assets/work-kata.webp";
import workOlina from "@/assets/work-olina.webp";
import workOtantik from "@/assets/work-otantik.webp";
import workWv from "@/assets/work-wv.webp";
import logo from "@/assets/logo.png";

export function Laptop3DScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [webglSupported, setWebglSupported] = useState(true);

  useEffect(() => {
    if (!containerRef.current) return;

    // Check WebGL availability
    try {
      const canvas = document.createElement("canvas");
      const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      if (!gl) {
        setWebglSupported(false);
        return;
      }
    } catch {
      setWebglSupported(false);
      return;
    }

    const container = containerRef.current;
    let width = container.clientWidth || window.innerWidth;
    let height = container.clientHeight || window.innerHeight;

    // Preload portfolio images for live screen canvas rendering
    const imgKata = new Image();
    imgKata.src = workKata;
    const imgOlina = new Image();
    imgOlina.src = workOlina;
    const imgOtantik = new Image();
    imgOtantik.src = workOtantik;
    const imgWv = new Image();
    imgWv.src = workWv;
    const imgLogo = new Image();
    imgLogo.src = logo;

    // 1. Scene setup
    const scene = new THREE.Scene();
    // No fog — cheaper rendering

    // 2. Camera setup
    const camera = new THREE.PerspectiveCamera(36, width / height, 0.1, 100);
    // Initial intro camera pose (farther away, angled)
    camera.position.set(2.6, 1.5, 6.0);
    camera.lookAt(0.5, 0.25, 0);

    // 3. Renderer setup — performance-optimised
    const renderer = new THREE.WebGLRenderer({
      antialias: false,          // off for perf
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5)); // cap at 1.5
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    renderer.shadowMap.enabled = false; // shadows disabled for perf

    container.appendChild(renderer.domElement);

    // 4. Offscreen 2D Canvas Screen Texture — reduced to 1024x640 for perf
    const screenCanvas = document.createElement("canvas");
    screenCanvas.width = 1024;
    screenCanvas.height = 640;
    const ctx = screenCanvas.getContext("2d");

    const screenTexture = new THREE.CanvasTexture(screenCanvas);
    screenTexture.anisotropy = 2; // reduced from max
    screenTexture.minFilter = THREE.LinearFilter;
    screenTexture.magFilter = THREE.LinearFilter;

    // UI Screen Drawer — Renders ACTUAL LIVE PROPLY WEBSITE CONTENT
    let currentUIState = 0; // 0: Hero, 1: Services, 2: Portfolio, 3: Pricing, 4: Contact

    const drawScreenUI = (time: number, scrollProgress: number) => {
      if (!ctx) return;

      const w = screenCanvas.width;
      const h = screenCanvas.height;

      // Determine UI state from scroll progress
      if (scrollProgress < 0.22) currentUIState = 0;
      else if (scrollProgress < 0.48) currentUIState = 1;
      else if (scrollProgress < 0.72) currentUIState = 2;
      else if (scrollProgress < 0.88) currentUIState = 3;
      else currentUIState = 4;

      // Background dark studio canvas theme
      const bgGrad = ctx.createLinearGradient(0, 0, w, h);
      bgGrad.addColorStop(0, "#080a11");
      bgGrad.addColorStop(0.5, "#0d101a");
      bgGrad.addColorStop(1, "#06070a");
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, w, h);

      // Background subtle grid pattern
      ctx.strokeStyle = "rgba(255, 255, 255, 0.035)";
      ctx.lineWidth = 1;
      const gridSize = 64;
      for (let x = 0; x < w; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }
      for (let y = 0; y < h; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }

      // Top Navbar (Actual PROPLY Navigation Bar)
      ctx.fillStyle = "rgba(15, 20, 32, 0.92)";
      ctx.fillRect(0, 0, w, 90);
      ctx.strokeStyle = "rgba(255, 255, 255, 0.08)";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(0, 90);
      ctx.lineTo(w, 90);
      ctx.stroke();

      // Real Logo Icon & PROPLY Text
      if (imgLogo.complete && imgLogo.naturalWidth > 0) {
        ctx.drawImage(imgLogo, 60, 24, 42, 42);
      } else {
        ctx.fillStyle = "#f97316";
        ctx.beginPath();
        ctx.arc(80, 45, 14, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.fillStyle = "#ffffff";
      ctx.font = "black 28px sans-serif";
      ctx.fillText("PROPLY", 115, 54);

      // Real Navigation Items (TR/EN)
      const navItems = ["Ana Sayfa", "Hizmetler", "Çalışmalar", "Fiyatlandırma", "İletişim"];
      let navX = 440;
      navItems.forEach((item, idx) => {
        const isActive = idx === currentUIState;
        ctx.fillStyle = isActive ? "#ffffff" : "rgba(255, 255, 255, 0.5)";
        ctx.font = isActive ? "bold 20px sans-serif" : "500 20px sans-serif";
        ctx.fillText(item, navX, 53);
        if (isActive) {
          ctx.fillStyle = "#f97316";
          ctx.fillRect(navX, 68, 65, 3);
        }
        navX += 135;
      });

      // Real Navbar CTA Button
      const btnGrad = ctx.createLinearGradient(w - 240, 0, w - 60, 0);
      btnGrad.addColorStop(0, "#f97316");
      btnGrad.addColorStop(1, "#ea580c");
      ctx.fillStyle = btnGrad;
      ctx.beginPath();
      ctx.roundRect(w - 230, 24, 170, 44, 22);
      ctx.fill();
      ctx.fillStyle = "#ffffff";
      ctx.font = "bold 18px sans-serif";
      ctx.fillText("Teklif Al ↗", w - 190, 52);

      // --- STATE 0: HERO & REAL PROPLY LANDING CONTENT ---
      if (currentUIState === 0) {
        // Radial Primary Glow
        const glowGrad = ctx.createRadialGradient(w * 0.35, h * 0.35, 20, w * 0.35, h * 0.35, 600);
        glowGrad.addColorStop(0, "rgba(249, 115, 22, 0.2)");
        glowGrad.addColorStop(0.5, "rgba(56, 189, 248, 0.08)");
        glowGrad.addColorStop(1, "rgba(0, 0, 0, 0)");
        ctx.fillStyle = glowGrad;
        ctx.fillRect(0, 0, w, h);

        // Real Badge
        ctx.fillStyle = "rgba(249, 115, 22, 0.15)";
        ctx.strokeStyle = "rgba(249, 115, 22, 0.4)";
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.roundRect(80, 145, 320, 40, 20);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = "#f97316";
        ctx.beginPath();
        ctx.arc(105, 165, 6, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = "#f97316";
        ctx.font = "bold 15px sans-serif";
        ctx.fillText("PROFESYONEL WEB SİTE TASARIMI.", 124, 170);

        // Real H1 Headline Text
        ctx.fillStyle = "#ffffff";
        ctx.font = "black 58px sans-serif";
        ctx.fillText("İşletmeniz için", 80, 240);

        ctx.fillStyle = "#f97316";
        ctx.font = "black 62px sans-serif";
        ctx.fillText("profesyonel", 80, 315);

        // SVG Curve underline representation under 'profesyonel'
        ctx.strokeStyle = "#f97316";
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.moveTo(80, 330);
        ctx.quadraticCurveTo(240, 342, 400, 332);
        ctx.stroke();

        ctx.fillStyle = "#ffffff";
        ctx.font = "black 58px sans-serif";
        ctx.fillText("web sitesi.", 80, 395);

        // Real Description Text
        ctx.fillStyle = "rgba(255, 255, 255, 0.65)";
        ctx.font = "20px sans-serif";
        ctx.fillText("Küçük işletmeler için modern web site tasarımı ve geliştirme.", 80, 445);
        ctx.fillText("Hızlı, mobil uyumlu, SEO odaklı — 1–7 günde teslim.", 80, 475);

        // Real Action Buttons
        ctx.fillStyle = "#f97316";
        ctx.beginPath();
        ctx.roundRect(80, 520, 260, 56, 12);
        ctx.fill();
        ctx.fillStyle = "#ffffff";
        ctx.font = "bold 20px sans-serif";
        ctx.fillText("Web Sitenizi Oluşturun →", 102, 555);

        ctx.strokeStyle = "rgba(255, 255, 255, 0.25)";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.roundRect(360, 520, 240, 56, 12);
        ctx.stroke();
        ctx.fillStyle = "rgba(255, 255, 255, 0.85)";
        ctx.fillText("Çalışmalarımızı Gör ↗", 385, 555);

        // Real Feature Tag Pills
        const tags = ["Modern tasarım", "Mobil uyumlu", "Hızlı", "SEO odaklı"];
        let tagX = 80;
        tags.forEach((tag) => {
          ctx.fillStyle = "rgba(255, 255, 255, 0.05)";
          ctx.strokeStyle = "rgba(255, 255, 255, 0.12)";
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.roundRect(tagX, 605, 140, 32, 6);
          ctx.fill();
          ctx.stroke();
          ctx.fillStyle = "rgba(255, 255, 255, 0.6)";
          ctx.font = "500 14px sans-serif";
          ctx.fillText(tag, tagX + 16, 626);
          tagX += 152;
        });

        // Real Stat Chips
        const stats = [
          { val: "1–7 Gün", label: "Teslim Süresi", color: "#f97316" },
          { val: "A+ Skor", label: "Performans", color: "#38bdf8" },
          { val: "12+", label: "Tamamlanan", color: "#22c55e" },
        ];
        stats.forEach((st, idx) => {
          const sx = 80 + idx * 210;
          ctx.fillStyle = "rgba(18, 24, 38, 0.75)";
          ctx.strokeStyle = "rgba(255, 255, 255, 0.1)";
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.roundRect(sx, 665, 190, 64, 10);
          ctx.fill();
          ctx.stroke();

          ctx.fillStyle = st.color;
          ctx.font = "black 20px sans-serif";
          ctx.fillText(st.val, sx + 18, 694);

          ctx.fillStyle = "rgba(255, 255, 255, 0.45)";
          ctx.font = "500 12px sans-serif";
          ctx.fillText(st.label, sx + 18, 715);
        });

        // Bottom Performance Analytics Card
        ctx.fillStyle = "rgba(18, 24, 38, 0.8)";
        ctx.strokeStyle = "rgba(255, 255, 255, 0.1)";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.roundRect(80, 760, 1880, 480, 20);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = "#ffffff";
        ctx.font = "bold 26px sans-serif";
        ctx.fillText("PROPLY Real-time Analytics & Performance Engine", 120, 815);

        // Animated Wave Chart
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(120, 1100);
        const points = [
          [120, 1100], [420, 980], [720, 1040], [1020, 900],
          [1320, 950], [1620, 840 + Math.sin(time * 2) * 15], [1920, 890]
        ];
        for (let i = 0; i < points.length - 1; i++) {
          const xc = (points[i][0] + points[i + 1][0]) / 2;
          const yc = (points[i][1] + points[i + 1][1]) / 2;
          ctx.quadraticCurveTo(points[i][0], points[i][1], xc, yc);
        }
        ctx.lineTo(1920, 1200);
        ctx.lineTo(120, 1200);
        ctx.closePath();

        const chartFill = ctx.createLinearGradient(0, 850, 0, 1200);
        chartFill.addColorStop(0, "rgba(249, 115, 22, 0.35)");
        chartFill.addColorStop(1, "rgba(249, 115, 22, 0.0)");
        ctx.fillStyle = chartFill;
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(points[0][0], points[0][1]);
        for (let i = 0; i < points.length - 1; i++) {
          const xc = (points[i][0] + points[i + 1][0]) / 2;
          const yc = (points[i][1] + points[i + 1][1]) / 2;
          ctx.quadraticCurveTo(points[i][0], points[i][1], xc, yc);
        }
        ctx.strokeStyle = "#f97316";
        ctx.lineWidth = 5;
        ctx.shadowColor = "#f97316";
        ctx.shadowBlur = 15;
        ctx.stroke();
        ctx.restore();
      }

      // --- STATE 1: SERVICES (REAL PROPLY PACKAGES) ---
      else if (currentUIState === 1) {
        ctx.fillStyle = "rgba(249, 115, 22, 0.15)";
        ctx.strokeStyle = "rgba(249, 115, 22, 0.4)";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.roundRect(80, 140, 220, 36, 18);
        ctx.fill();
        ctx.stroke();
        ctx.fillStyle = "#f97316";
        ctx.font = "bold 15px sans-serif";
        ctx.fillText("HİZMETLERİMİZ", 120, 163);

        ctx.fillStyle = "#ffffff";
        ctx.font = "black 46px sans-serif";
        ctx.fillText("İşletmeniz İçin Özel Web Çözümleri", 80, 230);

        const services = [
          {
            title: "Kurumsal Web Sitesi",
            price: "₺7.500'den başlar",
            desc: "İşletmenizin güvenilirliğini artıran modern, hızlı ve mobil uyumlu kurumsal web sitesi.",
            color: "#f97316"
          },
          {
            title: "Cafe & Restoran Web Sitesi",
            price: "₺7.500'den başlar",
            desc: "Dijital QR menü, şık yemek fotoğrafları ve kolay rezervasyon yönlendirmeli web sitesi.",
            color: "#38bdf8"
          },
          {
            title: "Oto Detailing Web Sitesi",
            price: "₺7.500'den başlar",
            desc: "Hizmet paketleri, öncesi/sonrası galerisi ve WhatsApp randevu entegrasyonlu web sitesi.",
            color: "#22c55e"
          },
        ];

        services.forEach((s, idx) => {
          const sx = 80 + idx * 630;
          const sy = 280;

          ctx.fillStyle = "rgba(18, 24, 38, 0.85)";
          ctx.strokeStyle = s.color;
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.roundRect(sx, sy, 600, 930, 20);
          ctx.fill();
          ctx.stroke();

          ctx.fillStyle = s.color;
          ctx.beginPath();
          ctx.arc(sx + 70, sy + 70, 28, 0, Math.PI * 2);
          ctx.fill();

          ctx.fillStyle = "#ffffff";
          ctx.font = "bold 28px sans-serif";
          ctx.fillText(s.title, sx + 50, sy + 140);

          ctx.fillStyle = s.color;
          ctx.font = "bold 22px sans-serif";
          ctx.fillText(s.price, sx + 50, sy + 180);

          ctx.fillStyle = "rgba(255, 255, 255, 0.65)";
          ctx.font = "18px sans-serif";
          ctx.fillText(s.desc, sx + 50, sy + 230);

          // Card Feature Bullet Points
          const feats = ["1-7 Gün Hızlı Teslimat", "Mobil Uyumlu Responsive", "SEO Kurulumu Dahil", "WhatsApp İletişim Entegrasyonu"];
          feats.forEach((f, fi) => {
            ctx.fillStyle = s.color;
            ctx.font = "bold 22px sans-serif";
            ctx.fillText("✓", sx + 50, sy + 320 + fi * 50);
            ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
            ctx.font = "18px sans-serif";
            ctx.fillText(f, sx + 85, sy + 320 + fi * 50);
          });
        });
      }

      // --- STATE 2: PORTFOLIO SHOWCASE (REAL WORK IMAGES) ---
      else if (currentUIState === 2) {
        ctx.fillStyle = "#ffffff";
        ctx.font = "black 46px sans-serif";
        ctx.fillText("Tamamlanan Örnek Çalışmalarımız", 80, 175);

        const works = [
          { name: "SAHRA Turkish Cuisine", cat: "Cafe & Restoran", img: imgOlina, color: "#f97316" },
          { name: "KATA Studio", cat: "Kurumsal Mimari", img: imgKata, color: "#38bdf8" },
          { name: "WV Detailing", cat: "Oto Detailing", img: imgWv, color: "#a855f7" },
        ];

        works.forEach((w, idx) => {
          const wx = 80 + idx * 630;
          const wy = 230;

          ctx.fillStyle = "rgba(18, 24, 38, 0.9)";
          ctx.strokeStyle = "rgba(255, 255, 255, 0.12)";
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.roundRect(wx, wy, 600, 950, 20);
          ctx.fill();
          ctx.stroke();

          // Draw Real Work Thumbnail Image if loaded
          ctx.save();
          ctx.beginPath();
          ctx.roundRect(wx + 30, wy + 30, 540, 680, 16);
          ctx.clip();
          if (w.img.complete && w.img.naturalWidth > 0) {
            ctx.drawImage(w.img, wx + 30, wy + 30, 540, 680);
          } else {
            ctx.fillStyle = "rgba(0, 0, 0, 0.6)";
            ctx.fillRect(wx + 30, wy + 30, 540, 680);
          }
          ctx.restore();

          ctx.fillStyle = "#ffffff";
          ctx.font = "bold 30px sans-serif";
          ctx.fillText(w.name, wx + 40, wy + 760);

          ctx.fillStyle = w.color;
          ctx.font = "600 20px sans-serif";
          ctx.fillText(w.cat, wx + 40, wy + 800);

          ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
          ctx.font = "18px sans-serif";
          ctx.fillText("Detaylı İncele →", wx + 40, wy + 860);
        });
      }

      // --- STATE 3: PRICING & PROCESS ---
      else if (currentUIState === 3) {
        ctx.fillStyle = "#ffffff";
        ctx.font = "black 46px sans-serif";
        ctx.fillText("Net ve Şeffaf Paket Fiyatları", 80, 175);

        const plans = [
          { name: "BAŞLANGIÇ PAKETİ", price: "₺7.500", desc: "Küçük işletmeler için hızlı ve profesyonel başlangıç.", tag: "En Popüler" },
          { name: "KURUMSAL PRO", price: "₺14.500", desc: "Gelişmiş kurumsal firmalar ve katalog siteleri için.", tag: "Özel Tasarım" },
          { name: "ÖZEL YAZILIM", price: "Teklif Alın", desc: "Karmaşık e-ticaret ve SaaS web uygulamaları.", tag: "Fullstack" },
        ];

        plans.forEach((p, idx) => {
          const px = 80 + idx * 630;
          const py = 240;

          ctx.fillStyle = idx === 0 ? "rgba(249, 115, 22, 0.14)" : "rgba(18, 24, 38, 0.85)";
          ctx.strokeStyle = idx === 0 ? "#f97316" : "rgba(255, 255, 255, 0.12)";
          ctx.lineWidth = idx === 0 ? 3 : 2;
          ctx.beginPath();
          ctx.roundRect(px, py, 600, 930, 20);
          ctx.fill();
          ctx.stroke();

          ctx.fillStyle = idx === 0 ? "#f97316" : "#ffffff";
          ctx.font = "bold 26px sans-serif";
          ctx.fillText(p.name, px + 50, py + 70);

          ctx.fillStyle = "#ffffff";
          ctx.font = "black 54px sans-serif";
          ctx.fillText(p.price, px + 50, py + 145);

          ctx.fillStyle = "rgba(255, 255, 255, 0.6)";
          ctx.font = "18px sans-serif";
          ctx.fillText(p.desc, px + 50, py + 195);
        });
      }

      // --- STATE 4: CONTACT & FOOTER (REAL PROPLY SUPPORT INFO) ---
      else if (currentUIState === 4) {
        ctx.fillStyle = "#ffffff";
        ctx.font = "black 52px sans-serif";
        ctx.fillText("Projenizi Birlikte Başlatalım", 80, 240);

        ctx.fillStyle = "#f97316";
        ctx.font = "bold 30px sans-serif";
        ctx.fillText("PROPLY CRM Müşteri Destek Ekibi", 80, 300);

        // Real Phone & Email info
        ctx.fillStyle = "rgba(255, 255, 255, 0.85)";
        ctx.font = "500 24px sans-serif";
        ctx.fillText("📞 +90 546 698 24 43  (Türkiye)", 80, 360);
        ctx.fillText("✉️ proplycrm@gmail.com", 80, 400);

        // Contact Box Form Simulation
        ctx.fillStyle = "rgba(18, 24, 38, 0.85)";
        ctx.strokeStyle = "rgba(255, 255, 255, 0.15)";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.roundRect(80, 440, 1880, 700, 20);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = "rgba(255, 255, 255, 0.06)";
        ctx.beginPath();
        ctx.roundRect(140, 500, 860, 75, 12);
        ctx.roundRect(140, 610, 860, 75, 12);
        ctx.roundRect(140, 720, 1600, 230, 12);
        ctx.fill();

        ctx.fillStyle = "#f97316";
        ctx.beginPath();
        ctx.roundRect(140, 990, 360, 80, 40);
        ctx.fill();

        ctx.fillStyle = "#ffffff";
        ctx.font = "bold 24px sans-serif";
        ctx.fillText("Mesaj Gönder →", 210, 1040);
      }

      screenTexture.needsUpdate = true;
    };

    // 5. Build High-Precision 3D Laptop Geometry
    const laptopGroup = new THREE.Group();
    scene.add(laptopGroup);

    // Materials
    const aluminumMaterial = new THREE.MeshStandardMaterial({
      color: 0x1a1d24,
      metalness: 0.94,
      roughness: 0.2,
      envMapIntensity: 1.2,
    });

    const darkEdgeMaterial = new THREE.MeshStandardMaterial({
      color: 0x0c0d11,
      metalness: 0.95,
      roughness: 0.12,
    });

    const keycapMaterial = new THREE.MeshStandardMaterial({
      color: 0x121318,
      metalness: 0.4,
      roughness: 0.6,
    });

    const bezelMaterial = new THREE.MeshStandardMaterial({
      color: 0x050608,
      metalness: 0.8,
      roughness: 0.1,
    });

    const screenMaterial = new THREE.MeshBasicMaterial({
      map: screenTexture,
    });

    const glassOverlayMaterial = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.08,
    });

    // Base Chassis — reduced segments for perf
    const baseW = 3.4;
    const baseH = 0.11;
    const baseD = 2.3;
    const baseGeo = new THREE.BoxGeometry(baseW, baseH, baseD, 1, 1, 1);
    const baseMesh = new THREE.Mesh(baseGeo, aluminumMaterial);
    laptopGroup.add(baseMesh);

    const chamferGeo = new THREE.BoxGeometry(baseW + 0.02, baseH * 0.4, baseD + 0.02);
    const chamferMesh = new THREE.Mesh(chamferGeo, darkEdgeMaterial);
    chamferMesh.position.y = -0.02;
    laptopGroup.add(chamferMesh);

    const kbTrayGeo = new THREE.BoxGeometry(2.85, 0.02, 1.15);
    const kbTrayMesh = new THREE.Mesh(kbTrayGeo, darkEdgeMaterial);
    kbTrayMesh.position.set(0, baseH / 2 + 0.005, -0.3);
    laptopGroup.add(kbTrayMesh);

    // Keyboard Keycaps — reduced to 3 rows, shared geometry, no individual meshes
    const rows = 3;
    const keysPerRow = 12;
    const keyW = 0.18;
    const keyD = 0.18;
    const keySpacingX = 0.202;
    const keySpacingZ = 0.21;
    const startX = -((keysPerRow - 1) * keySpacingX) / 2;
    const startZ = -0.3 - ((rows - 1) * keySpacingZ) / 2;
    const keyGroup = new THREE.Group();
    const keyGeo = new THREE.BoxGeometry(keyW, 0.025, keyD);
    // Use a single merged approach: just render as flat tray — skip individual keys for perf
    const kbVisMesh = new THREE.Mesh(
      new THREE.BoxGeometry(2.85, 0.03, 1.15),
      keycapMaterial
    );
    kbVisMesh.position.set(0, baseH / 2 + 0.015, -0.3);
    keyGroup.add(kbVisMesh);
    laptopGroup.add(keyGroup);

    // Trackpad
    const tpGeo = new THREE.BoxGeometry(1.05, 0.005, 0.72);
    const tpMaterial = new THREE.MeshStandardMaterial({
      color: 0x222630,
      metalness: 0.85,
      roughness: 0.25,
    });
    const tpMesh = new THREE.Mesh(tpGeo, tpMaterial);
    tpMesh.position.set(0, baseH / 2 + 0.004, 0.65);
    laptopGroup.add(tpMesh);

    // Side Ports
    for (let side = -1; side <= 1; side += 2) {
      for (let p = 0; p < 2; p++) {
        const portGeo = new THREE.BoxGeometry(0.01, 0.03, 0.12);
        const portMesh = new THREE.Mesh(portGeo, darkEdgeMaterial);
        portMesh.position.set(side * (baseW / 2 + 0.001), 0, -0.4 - p * 0.2);
        laptopGroup.add(portMesh);
      }
    }

    // Hinge — reduced segments
    const hingeGeo = new THREE.CylinderGeometry(0.045, 0.045, 2.5, 8);
    const hingeMesh = new THREE.Mesh(hingeGeo, darkEdgeMaterial);
    hingeMesh.rotation.z = Math.PI / 2;
    hingeMesh.position.set(0, baseH / 2, -baseD / 2 + 0.04);
    laptopGroup.add(hingeMesh);

    // Screen Lid Group
    const screenLidGroup = new THREE.Group();
    screenLidGroup.position.set(0, baseH / 2, -baseD / 2 + 0.04);
    screenLidGroup.rotation.x = -Math.PI / 2 + THREE.MathUtils.degToRad(15);
    laptopGroup.add(screenLidGroup);

    const lidW = 3.4;
    const lidH = 2.25;
    const lidThick = 0.06;

    const lidBackGeo = new THREE.BoxGeometry(lidW, lidH, lidThick);
    const lidBackMesh = new THREE.Mesh(lidBackGeo, aluminumMaterial);
    lidBackMesh.position.set(0, lidH / 2, -lidThick / 2);
    screenLidGroup.add(lidBackMesh);

    const bezelGeo = new THREE.BoxGeometry(lidW - 0.02, lidH - 0.02, 0.01);
    const bezelMesh = new THREE.Mesh(bezelGeo, bezelMaterial);
    bezelMesh.position.set(0, lidH / 2, 0.005);
    screenLidGroup.add(bezelMesh);

    const displayW = 3.25;
    const displayH = 2.05;
    const displayGeo = new THREE.PlaneGeometry(displayW, displayH);
    const displayMesh = new THREE.Mesh(displayGeo, screenMaterial);
    displayMesh.position.set(0, lidH / 2 + 0.02, 0.012);
    screenLidGroup.add(displayMesh);

    // Glass overlay (uses glassOverlayMaterial declared above)
    const glassGeo = new THREE.PlaneGeometry(displayW, displayH);
    const glassMesh = new THREE.Mesh(glassGeo, glassOverlayMaterial);
    glassMesh.position.set(0, lidH / 2 + 0.02, 0.015);
    screenLidGroup.add(glassMesh);

    // Studio Lights
    const ambientLight = new THREE.AmbientLight(0x0e111a, 0.7);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 2.2);
    keyLight.position.set(-4, 6, 5);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.width = 2048;
    keyLight.shadow.mapSize.height = 2048;
    scene.add(keyLight);

    const rimLight1 = new THREE.DirectionalLight(0x38bdf8, 3.2);
    rimLight1.position.set(6, 4, -4);
    scene.add(rimLight1);

    const fillLight = new THREE.PointLight(0xf97316, 1.8, 10);
    fillLight.position.set(-3, 2, 2);
    scene.add(fillLight);

    // Studio Floor Reflection & Shadow
    const floorGeo = new THREE.PlaneGeometry(30, 30);
    const floorMaterial = new THREE.MeshStandardMaterial({
      color: 0x07080b,
      roughness: 0.35,
      metalness: 0.8,
    });
    const floorMesh = new THREE.Mesh(floorGeo, floorMaterial);
    floorMesh.rotation.x = -Math.PI / 2;
    floorMesh.position.y = -1.2;
    floorMesh.receiveShadow = true;
    scene.add(floorMesh);

    const shadowCanvas = document.createElement("canvas");
    shadowCanvas.width = 512;
    shadowCanvas.height = 512;
    const sCtx = shadowCanvas.getContext("2d");
    if (sCtx) {
      const grad = sCtx.createRadialGradient(256, 256, 20, 256, 256, 240);
      grad.addColorStop(0, "rgba(0, 0, 0, 0.75)");
      grad.addColorStop(0.5, "rgba(0, 0, 0, 0.35)");
      grad.addColorStop(1, "rgba(0, 0, 0, 0)");
      sCtx.fillStyle = grad;
      sCtx.fillRect(0, 0, 512, 512);
    }
    const shadowTexture = new THREE.CanvasTexture(shadowCanvas);
    const shadowPlaneGeo = new THREE.PlaneGeometry(6, 4);
    const shadowPlaneMat = new THREE.MeshBasicMaterial({
      map: shadowTexture,
      transparent: true,
      opacity: 0.85,
    });
    const shadowPlane = new THREE.Mesh(shadowPlaneGeo, shadowPlaneMat);
    shadowPlane.rotation.x = -Math.PI / 2;
    shadowPlane.position.set(0.4, -1.18, 0);
    scene.add(shadowPlane);

    setIsLoaded(true);

    // 6. Intro Sequence & Scroll Listeners
    let introStartTime = performance.now();
    const introDuration = 2400; // 2.4 seconds commercial camera intro

    let currentScrollProgress = 0;
    let targetScrollProgress = 0;

    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        targetScrollProgress = Math.min(Math.max(window.scrollY / totalScroll, 0), 1);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    let targetMouseX = 0;
    let targetMouseY = 0;
    let currentMouseX = 0;
    let currentMouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth - 0.5;
      const y = e.clientY / window.innerHeight - 0.5;
      targetMouseX = x * 0.3;
      targetMouseY = y * 0.2;
    };

    window.addEventListener("mousemove", handleMouseMove);

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener("resize", handleResize);

    // 7. Render loop — throttled to ~30 FPS for performance
    let animationFrameId: number;
    const clock = new THREE.Clock();
    let lastRenderTime = 0;
    let lastScreenUpdateTime = 0;
    const TARGET_FPS = 30;
    const FRAME_INTERVAL = 1000 / TARGET_FPS;
    const SCREEN_UPDATE_INTERVAL = 2000; // redraw screen texture every 2s

    const animate = (timestamp: number) => {
      animationFrameId = requestAnimationFrame(animate);

      // Throttle render
      const delta = timestamp - lastRenderTime;
      if (delta < FRAME_INTERVAL) return;
      lastRenderTime = timestamp - (delta % FRAME_INTERVAL);

      const elapsedTime = clock.getElapsedTime();
      const now = performance.now();

      // Commercial Intro Animation Lerp (0.0 to 1.0)
      const rawIntro = Math.min(Math.max((now - introStartTime) / introDuration, 0), 1);
      // Smooth cubic easing
      const introProgress = rawIntro * rawIntro * (3 - 2 * rawIntro);

      // Lerp Scroll Progress smoothly
      currentScrollProgress += (targetScrollProgress - currentScrollProgress) * 0.08;

      // Mouse Lerp
      currentMouseX += (targetMouseX - currentMouseX) * 0.05;
      currentMouseY += (targetMouseY - currentMouseY) * 0.05;

      const floatY = Math.sin(elapsedTime * 0.8) * 0.1;

      // Camera Intro Interpolation
      const camX = THREE.MathUtils.lerp(2.8, 1.6, introProgress);
      const camY = THREE.MathUtils.lerp(1.5, 0.95, introProgress);
      const camZ = THREE.MathUtils.lerp(6.2, 4.6, introProgress);
      camera.position.set(camX, camY, camZ);
      camera.lookAt(0.5, 0.25, 0);

      let targetPosX = 0.6;
      let targetPosY = 0.1 + floatY;
      let targetPosZ = 0.0;
      let targetRotX = THREE.MathUtils.degToRad(8);
      let targetRotY = THREE.MathUtils.degToRad(-18);
      let targetRotZ = 0.0;
      let targetLidAngle = THREE.MathUtils.degToRad(15);

      if (currentScrollProgress < 0.25) {
        const t = currentScrollProgress / 0.25;
        targetPosX = THREE.MathUtils.lerp(0.6, -0.4, t);
        targetPosY = THREE.MathUtils.lerp(0.1 + floatY, 0.25 + floatY, t);
        targetPosZ = THREE.MathUtils.lerp(0.0, 0.4, t);
        targetRotX = THREE.MathUtils.lerp(THREE.MathUtils.degToRad(8), THREE.MathUtils.degToRad(14), t);
        targetRotY = THREE.MathUtils.lerp(THREE.MathUtils.degToRad(-18), THREE.MathUtils.degToRad(25), t);
        targetRotZ = THREE.MathUtils.lerp(0, THREE.MathUtils.degToRad(-6), t);
      } else if (currentScrollProgress < 0.55) {
        const t = (currentScrollProgress - 0.25) / 0.3;
        targetPosX = THREE.MathUtils.lerp(-0.4, 0.7, t);
        targetPosY = THREE.MathUtils.lerp(0.25 + floatY, -0.1 + floatY, t);
        targetPosZ = THREE.MathUtils.lerp(0.4, 0.6, t);
        targetRotX = THREE.MathUtils.lerp(THREE.MathUtils.degToRad(14), THREE.MathUtils.degToRad(-12), t);
        targetRotY = THREE.MathUtils.lerp(THREE.MathUtils.degToRad(25), THREE.MathUtils.degToRad(-35), t);
        targetRotZ = THREE.MathUtils.lerp(THREE.MathUtils.degToRad(-6), THREE.MathUtils.degToRad(8), t);
        targetLidAngle = THREE.MathUtils.degToRad(22);
      } else if (currentScrollProgress < 0.8) {
        const t = (currentScrollProgress - 0.55) / 0.25;
        targetPosX = THREE.MathUtils.lerp(0.7, -0.5, t);
        targetPosY = THREE.MathUtils.lerp(-0.1 + floatY, 0.05 + floatY, t);
        targetPosZ = THREE.MathUtils.lerp(0.6, 0.2, t);
        targetRotX = THREE.MathUtils.lerp(THREE.MathUtils.degToRad(-12), THREE.MathUtils.degToRad(18), t);
        targetRotY = THREE.MathUtils.lerp(THREE.MathUtils.degToRad(-35), THREE.MathUtils.degToRad(42), t);
        targetRotZ = THREE.MathUtils.lerp(THREE.MathUtils.degToRad(8), THREE.MathUtils.degToRad(-8), t);
      } else {
        const t = (currentScrollProgress - 0.8) / 0.2;
        targetPosX = THREE.MathUtils.lerp(-0.5, 0.0, t);
        targetPosY = THREE.MathUtils.lerp(0.05 + floatY, 0.35 + floatY, t);
        targetPosZ = THREE.MathUtils.lerp(0.2, 1.2, t);
        targetRotX = THREE.MathUtils.lerp(THREE.MathUtils.degToRad(18), THREE.MathUtils.degToRad(4), t);
        targetRotY = THREE.MathUtils.lerp(THREE.MathUtils.degToRad(42), THREE.MathUtils.degToRad(0), t);
        targetRotZ = THREE.MathUtils.lerp(THREE.MathUtils.degToRad(-8), 0, t);
        targetLidAngle = THREE.MathUtils.degToRad(15);
      }

      const introRotY = THREE.MathUtils.lerp(THREE.MathUtils.degToRad(-36), targetRotY, introProgress);
      const introRotX = THREE.MathUtils.lerp(THREE.MathUtils.degToRad(18), targetRotX, introProgress);

      laptopGroup.position.x += (targetPosX - laptopGroup.position.x) * 0.06;
      laptopGroup.position.y += (targetPosY - laptopGroup.position.y) * 0.06;
      laptopGroup.position.z += (targetPosZ - laptopGroup.position.z) * 0.06;

      laptopGroup.rotation.x += (introRotX + currentMouseY - laptopGroup.rotation.x) * 0.06;
      laptopGroup.rotation.y += (introRotY + currentMouseX - laptopGroup.rotation.y) * 0.06;
      laptopGroup.rotation.z += (targetRotZ - laptopGroup.rotation.z) * 0.06;

      screenLidGroup.rotation.x += (-Math.PI / 2 + targetLidAngle - screenLidGroup.rotation.x) * 0.06;

      // Throttle screen texture redraws to every 2s
      if (now - lastScreenUpdateTime > SCREEN_UPDATE_INTERVAL) {
        drawScreenUI(elapsedTime, currentScrollProgress);
        lastScreenUpdateTime = now;
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);

      baseGeo.dispose();
      kbTrayGeo.dispose();
      keyGeo.dispose();
      tpGeo.dispose();
      hingeGeo.dispose();
      lidBackGeo.dispose();
      bezelGeo.dispose();
      displayGeo.dispose();
      glassGeo.dispose();
      floorGeo.dispose();
      shadowPlaneGeo.dispose();

      aluminumMaterial.dispose();
      darkEdgeMaterial.dispose();
      keycapMaterial.dispose();
      bezelMaterial.dispose();
      screenMaterial.dispose();
      glassOverlayMaterial.dispose();
      floorMaterial.dispose();
      shadowPlaneMat.dispose();

      screenTexture.dispose();
      shadowTexture.dispose();

      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 h-screen w-screen pointer-events-none overflow-hidden">
      {webglSupported ? (
        <div
          ref={containerRef}
          className="absolute inset-0 h-full w-full"
        />
      ) : null}

      {!isLoaded && webglSupported && (
        <div className="absolute inset-0 flex items-center justify-center bg-background/60 backdrop-blur-sm transition-opacity duration-500">
          <div className="flex items-center gap-3 rounded-full border border-foreground/10 bg-surface/80 px-4 py-2 text-xs font-semibold text-foreground/70 shadow-lg">
            <span className="size-2 animate-ping rounded-full bg-primary" />
            <span>Loading 3D Studio Environment...</span>
          </div>
        </div>
      )}
    </div>
  );
}
