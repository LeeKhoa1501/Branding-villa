/* ==========================================================================
   LeeKhoa Villas — COMPLETE APPLICATION LOGIC & SPA ROUTER (MAIN.JS)
   ========================================================================== */

// Expanded Vietnam Villa Catalog Dataset
const VILLAS_DATA = [
  {
    id: "azure",
    name: "Villa Azure",
    location: "Bãi Sau, Vũng Tàu · 200m",
    city: "Vũng Tàu",
    rating: 4.9,
    reviews: 32,
    guests: 12,
    beds: 5,
    pool: "Pool & Ocean View",
    pricePerNight: 7500000,
    tags: ["Guest favorite", "Beachfront"],
    instant: true,
    freeCancel: true,
    luxury: false,
    image: "./assets/villa_azure_img_1785398933026.jpg",
    description: "Biệt thự sát biển Bãi Sau với hồ bơi vô cực ngắm trọn đại dương. Không gian kiến trúc hiện đại, đầy đủ tiện nghi chuẩn 5 sao.",
    amenities: ["Hồ bơi vô cực", "Sát biển 200m", "Dịch vụ BBQ", "Karaoke & Sound", "Bãi đỗ xe 4 ô tô", "Quản gia riêng"]
  },
  {
    id: "serene",
    name: "Villa Serene Coast",
    location: "Hồ Tràm, Bà Rịa · Beachfront",
    city: "Hồ Tràm",
    rating: 4.8,
    reviews: 28,
    guests: 16,
    beds: 7,
    pool: "Private Infinity Pool",
    pricePerNight: 12500000,
    tags: ["Beachfront"],
    instant: false,
    freeCancel: true,
    luxury: true,
    image: "./assets/villa_serene_img_1785398944559.jpg",
    description: "Khu biệt thự nghỉ dưỡng riêng tư bên bãi biển Hồ Tràm với khuôn viên xanh rộng 1200m². Lý tưởng cho đoàn đông và gia đình đa thế hệ.",
    amenities: ["Bãi biển riêng", "Bể bơi 100m²", "Bàn bida & Foosball", "Dụng cụ BBQ ngoài trời", "Bếp Chef chuyên nghiệp", "Sân vườn tổ chức tiệc"]
  },
  {
    id: "indigo",
    name: "Villa Indigo",
    location: "Long Hải, Bà Rịa · 500m",
    city: "Long Hải",
    rating: 4.7,
    reviews: 19,
    guests: 8,
    beds: 4,
    pool: "Private Pool",
    pricePerNight: 5200000,
    tags: ["Quiet retreat"],
    instant: true,
    freeCancel: false,
    luxury: false,
    image: "./assets/hero_slide_1.jpg",
    description: "Villa phong cách Địa Trung Hải tối giản, không gian thanh bình tại Long Hải. Tận hưởng khí trời dịu mát và hồ bơi xanh ngọc.",
    amenities: ["Hồ bơi nước mặn", "Sân BBQ ngoài trời", "Smart TV 75 inch", "Bếp gia đình", "Wifi tốc độ cao", "Hỗ trợ mua hải sản"]
  },
  {
    id: "mosaic",
    name: "Villa Mosaic",
    location: "Đà Lạt, Lâm Đồng · Mountain",
    city: "Đà Lạt",
    rating: 4.9,
    reviews: 45,
    guests: 10,
    beds: 5,
    pool: "Pine Garden & Fireplace",
    pricePerNight: 6800000,
    tags: ["Top rated", "★ Luxury"],
    instant: true,
    freeCancel: true,
    luxury: true,
    image: "./assets/villa_mosaic_img_1785398954537.jpg",
    description: "Biệt thự đồi thông Đà Lạt với tường kính panorama ôm trọn thung lũng sương mù. Có lò sưởi ấm cúng và khu vườn nướng BBQ chill đêm.",
    amenities: ["View thung lũng thông", "Lò sưởi phòng khách", "Bồn tắm ngâm thảo mộc", "Vườn tiệc nướng", "Dịch vụ pha Coffee & Tea", "Lửa trại ngoài trời"]
  },
  {
    id: "coral",
    name: "Villa Coral",
    location: "Bãi Ông Lang, Phú Quốc · Beachfront",
    city: "Phú Quốc",
    rating: 5.0,
    reviews: 12,
    guests: 20,
    beds: 8,
    pool: "Resort Pool & Lagoon",
    pricePerNight: 18000000,
    tags: ["Beachfront", "★ Luxury"],
    instant: false,
    freeCancel: true,
    luxury: true,
    image: "./assets/villa_coral_img_1785398966024.jpg",
    description: "Đại dinh thự biển siêu sang tại đảo ngọc Phú Quốc. Hồ bơi nối dài ra bãi cát trắng, đầy đủ dịch vụ đầu bếp riêng và quản gia 24/7.",
    amenities: ["Đầu bếp riêng", "Quản gia 24/7", "Bãi biển ngắm hoàng hôn", "Xe đón tiễn sân bay", "Thuyền Kayak & Sup", "Phòng Sauna & Spa"]
  },
  {
    id: "horizon",
    name: "Villa Ocean Horizon",
    location: "Bãi Dài, Nha Trang · Oceanfront",
    city: "Nha Trang",
    rating: 4.9,
    reviews: 21,
    guests: 14,
    beds: 6,
    pool: "Oceanview Infinity Pool",
    pricePerNight: 14500000,
    tags: ["Beachfront", "★ Luxury"],
    instant: true,
    freeCancel: true,
    luxury: true,
    image: "./assets/hero_slide_2.jpg",
    description: "Biệt thự biển ngắm hoàng hôn tuyệt đẹp tại bãi Dài Nha Trang. Kiến trúc giật cấp ấn tượng với hồ bơi vô cực tràn viền.",
    amenities: ["View vịnh Nha Trang", "Hồ bơi tràn bờ 120m²", "Phòng chiếu phim gia đình", "Bãi biển riêng", "Rượu vang chào mừng", "Quản gia 24/7"]
  },
  {
    id: "jade",
    name: "Villa Jade",
    location: "Bãi Trước, Vũng Tàu · 100m",
    city: "Vũng Tàu",
    rating: 4.6,
    reviews: 24,
    guests: 14,
    beds: 6,
    pool: "Pool & Garden View",
    pricePerNight: 9200000,
    tags: ["Guest favorite"],
    instant: true,
    freeCancel: true,
    luxury: false,
    image: "./assets/hero_slide_3.jpg",
    description: "Villa sang trọng tọa lạc tại lưng chừng đồi Bãi Trước Vũng Tàu, view ngắm biển và thành phố về đêm cực kỳ lãng mạn.",
    amenities: ["Hồ bơi sân thượng", "View biển & Thành phố", "Dàn Karaoke hiện đại", "Bàn bida lỗ", "Bếp nướng BBQ", "Đậu xe 3 ô tô"]
  }
];

// Blog Articles Dataset
const BLOG_DATA = {
  blog1: {
    category: "CẨM NANG HỒ TRÀM",
    title: "Top 5 Villa Biển Hồ Tràm Có Đầu Bếp Riêng Đáng Tiền Nhất 2026",
    date: "28 Tháng 7, 2026 · 5 min read",
    content: `
      <p style="margin-bottom: 1rem; line-height: 1.7;">Hồ Tràm đang trở thành thiên đường nghỉ dưỡng hàng đầu cho các gia đình và nhóm doanh nhân tại TP.HCM. Việc thuê một biệt thự riêng tư sát biển tích hợp dịch vụ Đầu Bếp Chuyên Nghiệp (Private Chef) mang lại trải nghiệm ẩm thực thượng hạng ngay tại bàn ăn villa.</p>
      <h4 style="font-family: var(--font-serif); font-size: 1.2rem; color: var(--primary-emerald); margin: 1.2rem 0 0.6rem 0;">1. Villa Serene Coast Hồ Tràm — Độc Bản Sát Biển</h4>
      <p style="margin-bottom: 1rem; line-height: 1.7;">Sở hữu bãi biển riêng và khuôn viên sân vườn 1200m², Villa Serene Coast nổi bật với gói tiệc nướng hải sản BBQ chuẩn 5 sao. Đầu bếp riêng sẽ trực tiếp sơ chế tôm hùm, mực lá tươi sống và chế biến theo khẩu vị riêng của đoàn.</p>
      <h4 style="font-family: var(--font-serif); font-size: 1.2rem; color: var(--primary-emerald); margin: 1.2rem 0 0.6rem 0;">2. Kinh nghiệm đặt Chef riêng hiệu quả</h4>
      <p style="line-height: 1.7;">Bạn nên chốt thực đơn với Quản gia Concierge trước 24 giờ check-in để bếp chuẩn bị nguyên liệu hải sản đánh bắt trong ngày tươi ngon nhất.</p>
    `
  },
  blog2: {
    category: "BIỂN VŨNG TÀU",
    title: "Kinh Nghiệm Thuê Biệt Thự Nguyên Căn Cho Gia Đình 10-15 Người",
    date: "25 Tháng 7, 2026 · 4 min read",
    content: `
      <p style="margin-bottom: 1rem; line-height: 1.7;">Kỳ nghỉ đoàn đông đa thế hệ đòi hỏi sự cân bằng giữa không gian sinh hoạt chung rộng rãi và sự riêng tư cho người lớn tuổi cũng như trẻ nhỏ.</p>
      <h4 style="font-family: var(--font-serif); font-size: 1.2rem; color: var(--primary-emerald); margin: 1.2rem 0 0.6rem 0;">Các tiêu chí hàng đầu khi chọn Villa gia đình:</h4>
      <ul style="padding-left: 1.2rem; line-height: 1.8; margin-bottom: 1rem;">
        <li>Hồ bơi có khu vực mực nước nông an toàn cho trẻ em (0.8m - 1.2m).</li>
        <li>Phòng ngủ tầng trệt thuận tiện cho ông bà lớn tuổi di chuyển.</li>
        <li>Khu vực bếp gia đình trang bị đầy đủ tủ lạnh dung tích lớn và bếp nướng.</li>
      </ul>
      <p style="line-height: 1.7;">Tại LeeKhoa Villas, tất cả dinh thự 5-7 phòng ngủ đều có sẵn dịch vụ hỗ trợ đi chợ và dọn dẹp sau tiệc nướng.</p>
    `
  },
  blog3: {
    category: "TRẢI NGHIỆM WELLNESS",
    title: "Bí Quyết Thư Giãn Tối Đa Với Liệu Trình Onsen Khoáng Nóng Tại Villa",
    date: "20 Tháng 7, 2026 · 6 min read",
    content: `
      <p style="margin-bottom: 1rem; line-height: 1.7;">Ngâm mình trong bồn khoáng nóng thảo mộc Nhật Bản giữa không gian đồi thông se lạnh Đà Lạt là liệu pháp phục hồi sức khỏe tuyệt vời nhất hiện nay.</p>
      <p style="margin-bottom: 1rem; line-height: 1.7;">Tại LeeKhoa Villas, dịch vụ chuẩn bị bồn ngâm khoáng nóng thảo mộc Jacuzzi được tích hợp sẵn theo yêu cầu của khách hàng, giúp giảm căng thẳng và cải thiện giấc ngủ sâu.</p>
      <h4 style="font-family: var(--font-serif); font-size: 1.2rem; color: var(--primary-emerald); margin: 1.2rem 0 0.6rem 0;">Liệu trình ngâm khoáng khuyến nghị:</h4>
      <p style="line-height: 1.7;">Nên ngâm từ 15-20 phút vào buổi chiều tối sau chuyến tham quan, kết hợp trà hoa cúc và tinh dầu bưởi thiên nhiên.</p>
    `
  },
  blog4: {
    category: "REVIEWS VILLA",
    title: "Review Chi Tiết Dinh Thự Villa Azure Bãi Sau Vũng Tàu",
    date: "18 Tháng 7, 2026 · 5 min read",
    content: `
      <p style="margin-bottom: 1rem; line-height: 1.7;">Villa Azure tọa lạc tại đường Trần Phú, Bãi Sau Vũng Tàu — cách bãi tắm chưa đầy 200m. Kiến trúc Địa Trung Hải hiện đại với tông trắng - xanh chủ đạo mang lại cảm giác vô cùng phóng khoáng.</p>
      <h4 style="font-family: var(--font-serif); font-size: 1.2rem; color: var(--primary-emerald); margin: 1.2rem 0 0.6rem 0;">Điểm nổi bật nhất:</h4>
      <p style="margin-bottom: 1rem; line-height: 1.7;">Hồ bơi tràn bờ sân thượng view ngắm nhìn trọn vẹn bình minh biển Vũng Tàu. Trang bị hệ thống loa Karaoke chuyên nghiệp cách âm và bàn bida nhập khẩu.</p>
    `
  },
  blog5: {
    category: "TIỆC VIP & EVENTS",
    title: "Xu Hướng Tổ Chức Tiệc Sinh Nhật VIP & Anniversary Tại Biệt Thự Biển",
    date: "12 Tháng 7, 2026 · 7 min read",
    content: `
      <p style="margin-bottom: 1rem; line-height: 1.7;">Thay vì tổ chức tại các nhà hàng đông đúc, ngày càng nhiều gia đình và cặp đôi lựa chọn thuê biệt thự sát biển nguyên căn để làm tiệc kỷ niệm riêng tư.</p>
      <h4 style="font-family: var(--font-serif); font-size: 1.2rem; color: var(--primary-emerald); margin: 1.2rem 0 0.6rem 0;">Dịch vụ Setup Event trọn gói tại LeeKhoa:</h4>
      <p style="line-height: 1.7;">Đội ngũ Concierge hỗ trợ cắm hoa tươi ngoài trời, trang trí nến lung linh sát bãi biển và chuẩn bị bánh kem 3 tầng theo ý thích.</p>
    `
  },
  blog6: {
    category: "ĐỒI THÔNG ĐÀ LẠT",
    title: "Hành Trình Đổi Gió Đà Lạt: Thưởng Thức Tiệc Rượu Vang Đêm Bên Lò Sưởi",
    date: "05 Tháng 7, 2026 · 6 min read",
    content: `
      <p style="margin-bottom: 1rem; line-height: 1.7;">Đà Lạt luôn mang vẻ đẹp dịu dàng và lãng mạn. Thuê một căn biệt thự gỗ đồi thông có lò sưởi thật là cách lý tưởng nhất để tận hưởng bầu không khí se lạnh 16°C về đêm.</p>
      <h4 style="font-family: var(--font-serif); font-size: 1.2rem; color: var(--primary-emerald); margin: 1.2rem 0 0.6rem 0;">Trải nghiệm không thể bỏ qua:</h4>
      <p style="line-height: 1.7;">Thưởng thức ly rượu vang đỏ Premium bên lề lò sưởi ấm cúng, lắng nghe tiếng thông reo và thưởng thức thịt nướng sốt tiêu rừng Đà Lạt.</p>
    `
  }
};

// App State
let currentUser = null;
let currentCurrency = "VND";
let currentRoute = "home"; // 'home' | 'about' | 'blog'
let myWishlistState = ["azure", "serene", "coral"];

let myCartState = [
  {
    cartId: "CART-101",
    villaId: "serene",
    villaName: "Villa Serene Coast",
    city: "Hồ Tràm",
    image: "./assets/villa_serene_img_1785398944559.jpg",
    checkIn: "2026-08-20",
    checkOut: "2026-08-22",
    nights: 2,
    guests: 10,
    pricePerNight: 12500000,
    totalPrice: 25500000
  },
  {
    cartId: "CART-102",
    villaId: "mosaic",
    villaName: "Villa Mosaic",
    city: "Đà Lạt",
    image: "./assets/villa_mosaic_img_1785398954537.jpg",
    checkIn: "2026-09-10",
    checkOut: "2026-09-12",
    nights: 2,
    guests: 8,
    pricePerNight: 6800000,
    totalPrice: 14100000
  }
];

let myTripsState = [
  {
    id: "TRIP-8492",
    villaName: "Villa Azure",
    city: "Vũng Tàu",
    image: "./assets/villa_azure_img_1785398933026.jpg",
    checkIn: "2026-08-12",
    checkOut: "2026-08-14",
    totalPrice: 15500000,
    guests: 10,
    status: "Confirmed"
  },
  {
    id: "TRIP-3910",
    villaName: "Villa Mosaic",
    city: "Đà Lạt",
    image: "./assets/villa_mosaic_img_1785398954537.jpg",
    checkIn: "2026-09-01",
    checkOut: "2026-09-03",
    totalPrice: 14100000,
    guests: 8,
    status: "Confirmed"
  },
  {
    id: "TRIP-1049",
    villaName: "Villa Coral",
    city: "Phú Quốc",
    image: "./assets/villa_coral_img_1785398966024.jpg",
    checkIn: "2026-10-15",
    checkOut: "2026-10-18",
    totalPrice: 54500000,
    guests: 16,
    status: "Upcoming"
  }
];

let activeCategoryFilter = "all";
let activeTabFilter = "all";
let activeMinBeds = 0;
let appliedDiscountCode = "";

const MAP_LOCATIONS = {
  "Vũng Tàu": {
    lat: "10.3460",
    lng: "107.0843",
    title: "Biệt thự Bãi Sau & Bãi Trước Vũng Tàu",
    badge: "VŨNG TÀU",
    desc: "Gần 48 khu villa sát biển có hồ bơi vô cực, cách TP.HCM chỉ 2 giờ di chuyển.",
    count: "48 Villa"
  },
  "Hồ Tràm": {
    lat: "10.4633",
    lng: "107.3916",
    title: "Resort Villa Hồ Tràm - Bà Rịa",
    badge: "HỒ TRÀM",
    desc: "Thiên đường resort villa biển riêng tư với bãi cát trắng mịn màng.",
    count: "23 Villa"
  },
  "Đà Lạt": {
    lat: "11.9404",
    lng: "108.4583",
    title: "Biệt thự Đồi Thông Đà Lạt",
    badge: "ĐÀ LẠT",
    desc: "Không gian nghỉ dưỡng ngàn hoa giữa rừng thông ngút ngàn và khí hậu se lạnh.",
    count: "31 Villa"
  },
  "Phú Quốc": {
    lat: "10.2899",
    lng: "103.9840",
    title: "Đại Dinh Thự Biển Đảo Ngọc Phú Quốc",
    badge: "PHÚ QUỐC",
    desc: "Dinh thự sang trọng bên biển ngắm hoàng hôn ngọc bích đẹp nhất Việt Nam.",
    count: "42 Villa"
  },
  "Nha Trang": {
    lat: "12.2388",
    lng: "109.1967",
    title: "Biệt thự Vịnh Biển Nha Trang",
    badge: "NHA TRANG",
    desc: "Tầm nhìn ôm trọn vịnh biển Nha Trang quyến rũ với tiện ích chuẩn 6 sao.",
    count: "19 Villa"
  }
};

// DOM Initialization
document.addEventListener("DOMContentLoaded", () => {
  initSPARouter();
  initHeroAutoSlider();
  initHeaderScroll();
  initMobileDrawer();
  renderVillaGrid();
  initFilterEvents();
  initMegaMenuEvents();
  initSidebarFilterEvents();
  initSearchEvents();
  initModalEvents();
  initAuthModalEvents();
  init360TourModalEvents();
  initWishlistModalEvents();
  initCartModalEvents();
  initCartCheckoutWizard();
  initMineraExpModalEvents();
  initBlogModalEvents();
  initCurrencySwitcher();
  initTripsDrawer();
  initLanguageSwitcher();
  initGoogleMapSwitcher();
  initOffersAndAddons();
  initNavSmoothScroll();
  initRecentlyViewedCarousel();
  initContactModalEvents();
  initBlogCategoryFilterEvents();
  initNewsletterForm();
  updateBadges();
});

/* --------------------------------------------------------------------------
   SINGLE PAGE APPLICATION DEDICATED VIEWS ROUTER LOGIC
   -------------------------------------------------------------------------- */
function initSPARouter() {
  document.querySelectorAll(".btn-nav-route").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const route = btn.dataset.route;
      if (route) {
        switchViewRoute(route);
      }
    });
  });
}

function switchViewRoute(targetRoute) {
  currentRoute = targetRoute;

  // Toggle .page-view.active
  document.querySelectorAll(".page-view").forEach(view => {
    view.classList.remove("active");
  });

  const activeViewEl = document.getElementById(`${targetRoute}View`);
  if (activeViewEl) {
    activeViewEl.classList.add("active");
  }

  // Update active state in nav links
  document.querySelectorAll(".main-nav .nav-link").forEach(link => {
    link.classList.remove("active");
    if (link.dataset.route === targetRoute) {
      link.classList.add("active");
    }
  });

  // Close mobile drawer if open
  const drawer = document.getElementById("mobileDrawer");
  if (drawer) drawer.classList.remove("open");

  // Scroll smoothly to top
  window.scrollTo({ top: 0, behavior: "smooth" });
}

/* --------------------------------------------------------------------------
   BLOG ARTICLE READER MODAL LOGIC
   -------------------------------------------------------------------------- */
function initBlogModalEvents() {
  const modal = document.getElementById("blogReaderModal");
  const catEl = document.getElementById("blogModalCategory");
  const bodyEl = document.getElementById("blogModalBody");
  const closeBtn = document.getElementById("closeBlogModalBtn");

  document.querySelectorAll(".btn-read-blog").forEach(card => {
    card.addEventListener("click", () => {
      const bId = card.dataset.blogid;
      const article = BLOG_DATA[bId];
      if (!article) return;

      if (catEl) catEl.textContent = article.category;
      if (bodyEl) {
        bodyEl.innerHTML = `
          <h2 style="font-family: var(--font-serif); font-size: 1.8rem; color: var(--text-main); margin-bottom: 0.5rem; line-height: 1.3;">${article.title}</h2>
          <span style="font-size: 0.8rem; color: var(--text-muted); display: block; margin-bottom: 1.5rem;"><i class="fa-regular fa-calendar"></i> ${article.date}</span>
          ${article.content}
        `;
      }

      if (modal) modal.classList.add("active");
    });
  });

  if (closeBtn && modal) {
    closeBtn.addEventListener("click", () => modal.classList.remove("active"));
    modal.addEventListener("click", (e) => {
      if (e.target === modal) modal.classList.remove("active");
    });
  }
}

/* --------------------------------------------------------------------------
   MINERA RESORT INSPIRED EXPERIENCE MODAL LOGIC
   -------------------------------------------------------------------------- */
function initMineraExpModalEvents() {
  const modal = document.getElementById("expDetailModal");
  const titleEl = document.getElementById("expModalTitle");
  const descEl = document.getElementById("expModalDesc");
  const closeBtn = document.getElementById("closeExpDetailBtn");
  const contactBtn = document.getElementById("btnExpModalContact");

  document.querySelectorAll(".btn-open-exp-modal").forEach(btn => {
    btn.addEventListener("click", () => {
      const title = btn.dataset.title;
      const desc = btn.dataset.desc;

      if (titleEl) titleEl.textContent = title;
      if (descEl) descEl.textContent = desc;

      if (modal) modal.classList.add("active");
    });
  });

  if (closeBtn && modal) {
    closeBtn.addEventListener("click", () => modal.classList.remove("active"));
    modal.addEventListener("click", (e) => {
      if (e.target === modal) modal.classList.remove("active");
    });
  }

  if (contactBtn) {
    contactBtn.addEventListener("click", () => {
      if (modal) modal.classList.remove("active");
      showToastNotification("Đã ghi nhận yêu cầu trải nghiệm tiện ích! Quản gia riêng sẽ liên hệ bạn ngay.", "Resort Concierge", "success");
    });
  }
}

/* --------------------------------------------------------------------------
   MULTI-STEP CART CHECKOUT WIZARD LOGIC
   -------------------------------------------------------------------------- */
let currentCkStep = 1;
let currentPayMethod = "qr";

function initCartCheckoutWizard() {
  const wizardModal = document.getElementById("cartCheckoutModal");
  const closeBtn = document.getElementById("closeCartCheckoutBtn");

  const btnStep1Next = document.getElementById("btnCkGotoStep2");
  const btnStep2Back = document.getElementById("btnCkBackStep1");
  const btnStep2Next = document.getElementById("btnCkGotoStep3");
  const btnStep3Back = document.getElementById("btnCkBackStep2");
  const btnStep3Next = document.getElementById("btnCkGotoStep4");
  const btnStep4Back = document.getElementById("btnCkBackStep3");
  const btnConfirmPay = document.getElementById("btnCkConfirmPayment");

  const vatCheckbox = document.getElementById("ckNeedVatInvoice");
  const vatBox = document.getElementById("vatFieldsBox");

  const payTabs = document.querySelectorAll(".pay-tab-btn");
  const btnCopyAcc = document.getElementById("btnCopyAcc");
  const btnCopyMemo = document.getElementById("btnCopyMemo");

  if (closeBtn && wizardModal) {
    closeBtn.addEventListener("click", () => wizardModal.classList.remove("active"));
    wizardModal.addEventListener("click", (e) => {
      if (e.target === wizardModal) wizardModal.classList.remove("active");
    });
  }

  if (vatCheckbox && vatBox) {
    vatCheckbox.addEventListener("change", () => {
      vatBox.style.display = vatCheckbox.checked ? "block" : "none";
    });
  }

  payTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      payTabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      currentPayMethod = tab.dataset.paymethod;

      document.getElementById("payViewQr").style.display = currentPayMethod === "qr" ? "flex" : "none";
      document.getElementById("payViewCard").style.display = currentPayMethod === "card" ? "block" : "none";
      document.getElementById("payViewDeposit").style.display = currentPayMethod === "deposit" ? "block" : "none";
    });
  });

  if (btnCopyAcc) {
    btnCopyAcc.addEventListener("click", () => {
      navigator.clipboard.writeText("0901234567");
      showToastNotification("Đã sao chép Số tài khoản MBBank!", "Copy", "info");
    });
  }

  if (btnCopyMemo) {
    btnCopyMemo.addEventListener("click", () => {
      navigator.clipboard.writeText("LEEKHOACART84920");
      showToastNotification("Đã sao chép Nội dung chuyển khoản!", "Copy", "info");
    });
  }

  if (btnStep1Next) btnStep1Next.addEventListener("click", () => setWizardStep(2));
  if (btnStep2Back) btnStep2Back.addEventListener("click", () => setWizardStep(1));
  if (btnStep2Next) btnStep2Next.addEventListener("click", () => setWizardStep(3));
  if (btnStep3Back) btnStep3Back.addEventListener("click", () => setWizardStep(2));
  if (btnStep3Next) btnStep3Next.addEventListener("click", () => setWizardStep(4));
  if (btnStep4Back) btnStep4Back.addEventListener("click", () => setWizardStep(3));

  if (btnConfirmPay) {
    btnConfirmPay.addEventListener("click", () => {
      if (myCartState.length === 0) return;

      const termsCheck = document.getElementById("ckAgreeTermsCheck");
      if (termsCheck && !termsCheck.checked) {
        showToastNotification("Vui lòng tick chọn đồng ý với Điều Khoản Giữ Chỗ trước khi hoàn tất!", "Xác Nhận Đơn Hàng", "info");
        return;
      }

      const guestName = document.getElementById("ckGuestName").value || "Khách Hàng LeeKhoa";

      // Transfer cart items to trips
      myCartState.forEach(cartItem => {
        myTripsState.unshift({
          id: "TRIP-" + Math.floor(1000 + Math.random() * 9000),
          villaName: cartItem.villaName,
          city: cartItem.city,
          image: cartItem.image,
          checkIn: cartItem.checkIn,
          checkOut: cartItem.checkOut,
          totalPrice: cartItem.totalPrice,
          guests: cartItem.guests,
          status: "Confirmed"
        });
      });

      const firstBooking = myTripsState[0];
      myCartState = [];
      updateBadges();
      wizardModal.classList.remove("active");

      showToastNotification(`Đã xác nhận đặt toàn bộ giỏ hàng cho ${guestName}! Voucher Check-in đã gửi về Email.`, "Thanh Toán Thành Công", "success");
      showSuccessBookingModal(firstBooking);
    });
  }
}

function openCartCheckoutWizard() {
  if (myCartState.length === 0) {
    showToastNotification("Giỏ hàng của bạn đang trống. Hãy thêm villa trước khi đặt!", "Giỏ Hàng", "info");
    return;
  }

  renderCartCheckoutData();
  setWizardStep(1);
  document.getElementById("cartModal")?.classList.remove("active");
  document.getElementById("cartCheckoutModal")?.classList.add("active");
}

function setWizardStep(stepNum) {
  currentCkStep = stepNum;

  document.querySelectorAll(".ck-step-node").forEach((node, idx) => {
    if (idx + 1 <= stepNum) {
      node.classList.add("active");
    } else {
      node.classList.remove("active");
    }
  });

  document.querySelectorAll(".ck-step-frame").forEach((frame, idx) => {
    if (idx + 1 === stepNum) {
      frame.classList.add("active");
    } else {
      frame.classList.remove("active");
    }
  });

  if (stepNum === 4) {
    populateStep4ReviewData();
  }
}

function populateStep4ReviewData() {
  const name = document.getElementById("ckGuestName")?.value || "Khách Hàng LeeKhoa";
  const phone = document.getElementById("ckGuestPhone")?.value || "Chưa nhập";
  const email = document.getElementById("ckGuestEmail")?.value || "Chưa nhập";

  let payText = "VietQR Napas 24/7";
  if (currentPayMethod === "card") payText = "Thẻ Quốc Tế Visa / Mastercard";
  if (currentPayMethod === "deposit") payText = "Cọc 30% Giữ Chỗ (70% khi Check-in)";

  if (document.getElementById("confirmGuestName")) document.getElementById("confirmGuestName").textContent = name;
  if (document.getElementById("confirmGuestPhone")) document.getElementById("confirmGuestPhone").textContent = phone;
  if (document.getElementById("confirmGuestEmail")) document.getElementById("confirmGuestEmail").textContent = email;
  if (document.getElementById("confirmPayMethodText")) document.getElementById("confirmPayMethodText").textContent = payText;
  if (document.getElementById("confirmVillaCount")) document.getElementById("confirmVillaCount").textContent = myCartState.length;

  let baseSum = 0;
  const listEl = document.getElementById("confirmVillasSummaryList");
  if (listEl) {
    listEl.innerHTML = myCartState.map(item => {
      baseSum += item.totalPrice;
      return `
        <div style="display: flex; justify-content: space-between; align-items: center; background: #FFFFFF; border: 1px solid var(--border-glass); padding: 0.6rem 0.8rem; border-radius: var(--radius-sm); font-size: 0.85rem;">
          <div>
            <strong>${item.villaName} (${item.city})</strong>
            <div style="font-size: 0.78rem; color: var(--text-muted);">${item.checkIn} ➔ ${item.checkOut} (${item.nights} đêm) · ${item.guests} người</div>
          </div>
          <strong style="color: var(--primary-emerald);">${formatCurrency(item.totalPrice)}</strong>
        </div>
      `;
    }).join('');
  }

  let finalGrand = baseSum + 1000000;
  if (appliedDiscountCode) finalGrand = finalGrand * 0.85;

  if (document.getElementById("confirmSubtotalVal")) document.getElementById("confirmSubtotalVal").textContent = formatCurrency(baseSum);
  if (document.getElementById("confirmGrandTotalVal")) document.getElementById("confirmGrandTotalVal").textContent = formatCurrency(finalGrand);
}

function renderCartCheckoutData() {
  const listContainer = document.getElementById("ckVillasReviewList");
  const subtotalEl = document.getElementById("ckSubtotalVal");
  const grandTotalEl = document.getElementById("ckGrandTotalVal");
  const qrAmountEl = document.getElementById("qrAmountVal");
  const dep30El = document.getElementById("deposit30Val");
  const dep70El = document.getElementById("deposit70Val");
  const promoRow = document.getElementById("ckPromoDiscountRow");

  if (!listContainer) return;

  let baseSum = 0;
  listContainer.innerHTML = myCartState.map(item => {
    baseSum += item.totalPrice;
    return `
      <div class="ck-villa-item">
        <img src="${item.image}" alt="${item.villaName}">
        <div class="ck-villa-details">
          <h4>${item.villaName} (${item.city})</h4>
          <p><i class="fa-solid fa-calendar"></i> ${item.checkIn} ➔ ${item.checkOut} (${item.nights} đêm) · ${item.guests} người</p>
          <span style="font-weight: 700; color: var(--primary-emerald);">${formatCurrency(item.totalPrice)}</span>
        </div>
      </div>
    `;
  }).join('');

  let finalGrand = baseSum + 1000000;
  if (appliedDiscountCode) {
    finalGrand = finalGrand * 0.85;
    if (promoRow) promoRow.style.display = "flex";
  } else {
    if (promoRow) promoRow.style.display = "none";
  }

  if (subtotalEl) subtotalEl.textContent = formatCurrency(baseSum);
  if (grandTotalEl) grandTotalEl.textContent = formatCurrency(finalGrand);
  if (qrAmountEl) qrAmountEl.textContent = formatCurrency(finalGrand);

  const dep30 = finalGrand * 0.3;
  const dep70 = finalGrand * 0.7;
  if (dep30El) dep30El.textContent = formatCurrency(dep30);
  if (dep70El) dep70El.textContent = formatCurrency(dep70);
}

/* --------------------------------------------------------------------------
   HEADER MEGA MENU INTERACTIVE LOGIC
   -------------------------------------------------------------------------- */
function initMegaMenuEvents() {
  document.querySelectorAll(".btn-mega-filter").forEach(btn => {
    btn.addEventListener("click", () => {
      switchViewRoute("home");
      activeCategoryFilter = btn.dataset.cat;
      renderVillaGrid();
      document.getElementById("villas")?.scrollIntoView({ behavior: "smooth" });
    });
  });

  document.querySelectorAll(".btn-mega-bed").forEach(pill => {
    pill.addEventListener("click", () => {
      switchViewRoute("home");
      document.querySelectorAll(".btn-mega-bed").forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      activeMinBeds = parseInt(pill.dataset.beds) || 0;
      renderVillaGrid();
      document.getElementById("villas")?.scrollIntoView({ behavior: "smooth" });
    });
  });

  document.querySelectorAll(".btn-mega-book-preview").forEach(btn => {
    btn.addEventListener("click", () => {
      openVillaModal(btn.dataset.id);
    });
  });

  document.querySelectorAll(".dest-item-chip").forEach(chip => {
    chip.addEventListener("click", () => {
      switchViewRoute("home");
      const locName = chip.dataset.location;
      filterVillasByLocation(locName);
    });
  });
}

/* --------------------------------------------------------------------------
   RECENTLY VIEWED HORIZONTAL CAROUSEL LOGIC
   -------------------------------------------------------------------------- */
function initRecentlyViewedCarousel() {
  const track = document.getElementById("recentCarouselTrack");
  const prevBtn = document.getElementById("btnRecentPrev");
  const nextBtn = document.getElementById("btnRecentNext");

  if (!track) return;

  const scrollAmount = 300;

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      track.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      track.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });
  }

  document.querySelectorAll(".recent-card-item").forEach(item => {
    item.addEventListener("click", () => {
      const vId = item.dataset.villa;
      openVillaModal(vId);
    });
  });
}

/* --------------------------------------------------------------------------
   TOAST NOTIFICATION SYSTEM
   -------------------------------------------------------------------------- */
function showToastNotification(message, title = "LeeKhoa Villas", type = "success") {
  const container = document.getElementById("toastContainer");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = `toast-card ${type}`;
  toast.innerHTML = `
    <div class="toast-icon">
      <i class="fa-solid ${type === 'success' ? 'fa-circle-check' : 'fa-circle-info'}"></i>
    </div>
    <div class="toast-content">
      <div class="toast-title">${title}</div>
      <div class="toast-message">${message}</div>
    </div>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.animation = "fadeToastOut 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards";
    setTimeout(() => toast.remove(), 400);
  }, 3500);
}

/* --------------------------------------------------------------------------
   MULTI-CURRENCY FORMATTER
   -------------------------------------------------------------------------- */
function formatCurrency(amountVND) {
  if (currentCurrency === "USD") {
    const usd = Math.round(amountVND * 0.000041);
    return "$" + new Intl.NumberFormat("en-US").format(usd);
  }
  if (currentCurrency === "EUR") {
    const eur = Math.round(amountVND * 0.000038);
    return "€" + new Intl.NumberFormat("de-DE").format(eur);
  }
  return new Intl.NumberFormat("vi-VN").format(amountVND) + " ₫";
}

function initCurrencySwitcher() {
  const select = document.getElementById("currencySelect");
  if (!select) return;

  select.addEventListener("change", (e) => {
    currentCurrency = e.target.value;
    renderVillaGrid();
    if (typeof renderCartList === "function") renderCartList();
    if (typeof renderTripsList === "function") renderTripsList();
    if (typeof updateExpSummary === "function") updateExpSummary();
    showToastNotification(`Đã chuyển đổi đơn vị tiền tệ sang ${currentCurrency}`, "Currency Switcher", "info");
  });
}

/* --------------------------------------------------------------------------
   SHOPPING CART MODAL & FUNCTIONALITY
   -------------------------------------------------------------------------- */
function initCartModalEvents() {
  const btnCart = document.getElementById("btnOpenCart");
  const mobileCart = document.getElementById("mobileCart");
  const modal = document.getElementById("cartModal");
  const closeBtn = document.getElementById("closeCartBtn");
  const checkoutBtn = document.getElementById("btnCartCheckout");

  function openCart() {
    renderCartList();
    if (modal) modal.classList.add("active");
  }

  function closeCart() {
    if (modal) modal.classList.remove("active");
  }

  if (btnCart) btnCart.addEventListener("click", openCart);
  if (mobileCart) mobileCart.addEventListener("click", openCart);
  if (closeBtn) closeBtn.addEventListener("click", closeCart);

  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeCart();
    });
  }

  if (checkoutBtn) {
    checkoutBtn.addEventListener("click", () => {
      openCartCheckoutWizard();
    });
  }
}

function renderCartList() {
  const container = document.getElementById("cartListContainer");
  const totalSumEl = document.getElementById("cartTotalSum");
  const cartModalCount = document.getElementById("cartModalCount");

  if (!container) return;
  updateBadges();

  if (cartModalCount) cartModalCount.textContent = myCartState.length;

  if (myCartState.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; color: var(--text-muted); padding: 2.5rem 0;">
        <i class="fa-solid fa-cart-flatbed" style="font-size: 2.5rem; margin-bottom: 1rem; color: var(--text-gold);"></i>
        <p>Giỏ hàng đặt villa của bạn đang trống.</p>
        <button class="btn-primary-small" id="btnExploreFromCart" style="margin-top: 1rem;">Khám phá Biệt thự</button>
      </div>
    `;
    if (totalSumEl) totalSumEl.textContent = formatCurrency(0);
    document.getElementById("btnExploreFromCart")?.addEventListener("click", () => {
      document.getElementById("cartModal")?.classList.remove("active");
      switchViewRoute("home");
      document.getElementById("villas")?.scrollIntoView({ behavior: "smooth" });
    });
    return;
  }

  let grandTotal = 0;
  container.innerHTML = myCartState.map(item => {
    grandTotal += item.totalPrice;
    return `
      <div style="display: flex; gap: 1rem; align-items: center; background: #F8FAFC; border: 1px solid var(--border-glass); padding: 0.9rem; border-radius: var(--radius-md); margin-bottom: 0.9rem;">
        <img src="${item.image}" alt="${item.villaName}" style="width: 85px; height: 85px; object-fit: cover; border-radius: var(--radius-sm);">
        <div style="flex-grow: 1;">
          <h4 style="font-family: var(--font-serif); font-size: 1.15rem; color: var(--text-main);">${item.villaName}</h4>
          <p style="font-size: 0.82rem; color: var(--text-muted);"><i class="fa-solid fa-calendar"></i> ${item.checkIn} ➔ ${item.checkOut} (${item.nights} đêm)</p>
          <span style="color: var(--text-gold); font-weight: 700; font-size: 0.92rem;">${formatCurrency(item.totalPrice)}</span>
        </div>
        <button class="btn-cancel-trip btn-remove-cart" data-cartid="${item.cartId}" title="Remove from cart">
          <i class="fa-solid fa-trash"></i>
        </button>
      </div>
    `;
  }).join('');

  if (totalSumEl) totalSumEl.textContent = formatCurrency(grandTotal);

  document.querySelectorAll(".btn-remove-cart").forEach(btn => {
    btn.addEventListener("click", () => {
      const cId = btn.dataset.cartid;
      myCartState = myCartState.filter(c => c.cartId !== cId);
      renderCartList();
      showToastNotification("Đã xoá biệt thự khỏi giỏ hàng.", "Giỏ hàng", "info");
    });
  });
}

function addToCart(villaId) {
  const villa = VILLAS_DATA.find(v => v.id === villaId);
  if (!villa) return;

  const newItem = {
    cartId: "CART-" + Math.floor(1000 + Math.random() * 9000),
    villaId: villa.id,
    villaName: villa.name,
    city: villa.city,
    image: villa.image,
    checkIn: "2026-08-15",
    checkOut: "2026-08-17",
    nights: 2,
    guests: villa.guests,
    pricePerNight: villa.pricePerNight,
    totalPrice: (villa.pricePerNight * 2) + 500000
  };

  myCartState.unshift(newItem);
  updateBadges();
  showToastNotification(`Đã thêm [${villa.name}] vào Giỏ Hàng Đặt Villa!`, "Giỏ Hàng", "success");
}

/* --------------------------------------------------------------------------
   WISHLIST MODAL & FUNCTIONALITY
   -------------------------------------------------------------------------- */
function initWishlistModalEvents() {
  const btnWishlist = document.getElementById("btnOpenWishlist");
  const mobileWishlist = document.getElementById("mobileWishlist");
  const modal = document.getElementById("wishlistModal");
  const closeBtn = document.getElementById("closeWishlistBtn");

  function openWishlist() {
    renderWishlist();
    if (modal) modal.classList.add("active");
  }

  function closeWishlist() {
    if (modal) modal.classList.remove("active");
  }

  if (btnWishlist) btnWishlist.addEventListener("click", openWishlist);
  if (mobileWishlist) mobileWishlist.addEventListener("click", openWishlist);
  if (closeBtn) closeBtn.addEventListener("click", closeWishlist);

  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeWishlist();
    });
  }
}

function updateBadges() {
  const wishBadge = document.getElementById("wishlistCount");
  const wishModalCount = document.getElementById("wishlistModalCount");
  if (wishBadge) wishBadge.textContent = myWishlistState.length;
  if (wishModalCount) wishModalCount.textContent = myWishlistState.length;

  const cartBadge = document.getElementById("cartCount");
  const mobileCartCount = document.getElementById("mobileCartCount");
  if (cartBadge) cartBadge.textContent = myCartState.length;
  if (mobileCartCount) mobileCartCount.textContent = myCartState.length;

  const tripsHeaderCount = document.getElementById("tripsHeaderCount");
  const tripsModalCount = document.getElementById("tripsModalCount");
  if (tripsHeaderCount) tripsHeaderCount.textContent = myTripsState.length;
  if (tripsModalCount) tripsModalCount.textContent = myTripsState.length;
}

function renderWishlist() {
  const container = document.getElementById("wishlistContainer");
  if (!container) return;

  const savedVillas = VILLAS_DATA.filter(v => myWishlistState.includes(v.id));
  updateBadges();

  if (savedVillas.length === 0) {
    container.innerHTML = `<p style="text-align: center; color: var(--text-muted); padding: 2rem;">Chưa có biệt thự nào trong danh sách yêu thích.</p>`;
    return;
  }

  container.innerHTML = savedVillas.map(villa => `
    <div style="display: flex; gap: 1rem; align-items: center; background: #F8FAFC; border: 1px solid var(--border-glass); padding: 0.8rem; border-radius: var(--radius-md); margin-bottom: 0.8rem;">
      <img src="${villa.image}" alt="${villa.name}" style="width: 80px; height: 80px; object-fit: cover; border-radius: var(--radius-sm);">
      <div style="flex-grow: 1;">
        <h4 style="font-family: var(--font-serif); font-size: 1.1rem; color: var(--text-main);">${villa.name}</h4>
        <p style="font-size: 0.8rem; color: var(--text-muted);">${villa.location}</p>
        <span style="color: var(--text-gold); font-weight: 700; font-size: 0.9rem;">${formatCurrency(villa.pricePerNight)} /night</span>
      </div>
      <button class="btn-primary-small btn-book-from-wishlist" data-id="${villa.id}">Book</button>
    </div>
  `).join('');

  document.querySelectorAll(".btn-book-from-wishlist").forEach(btn => {
    btn.addEventListener("click", () => {
      document.getElementById("wishlistModal")?.classList.remove("active");
      openVillaModal(btn.dataset.id);
    });
  });
}

/* --------------------------------------------------------------------------
   MY TRIPS DRAWER WITH CANCEL TRIP BUTTON
   -------------------------------------------------------------------------- */
function initTripsDrawer() {
  const btnTrips = document.getElementById("btnOpenTrips");
  const mobileTrips = document.getElementById("mobileMyTrips");
  const modal = document.getElementById("tripsModal");
  const closeBtn = document.getElementById("closeTripsBtn");

  function openTrips() {
    renderTripsList();
    if (modal) modal.classList.add("active");
  }

  function closeTrips() {
    if (modal) modal.classList.remove("active");
  }

  if (btnTrips) btnTrips.addEventListener("click", openTrips);
  if (mobileTrips) mobileTrips.addEventListener("click", openTrips);
  if (closeBtn) closeBtn.addEventListener("click", closeTrips);

  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeTrips();
    });
  }
}

function renderTripsList() {
  const container = document.getElementById("tripsListContainer");
  const tripsModalCount = document.getElementById("tripsModalCount");
  if (!container) return;

  updateBadges();
  if (tripsModalCount) tripsModalCount.textContent = myTripsState.length;

  if (myTripsState.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; color: var(--text-muted); padding: 2.5rem 0;">
        <i class="fa-solid fa-suitcase-rolling" style="font-size: 2.5rem; margin-bottom: 1rem; color: var(--text-gold);"></i>
        <p>Bạn chưa có chuyến đi nào được đặt giữ chỗ.</p>
        <button class="btn-primary-small" id="btnExploreVillasFromTrips" style="margin-top: 1rem;">Khám phá Villa ngay</button>
      </div>
    `;
    document.getElementById("btnExploreVillasFromTrips")?.addEventListener("click", () => {
      document.getElementById("tripsModal")?.classList.remove("active");
      switchViewRoute("home");
      document.getElementById("villas")?.scrollIntoView({ behavior: "smooth" });
    });
    return;
  }

  container.innerHTML = myTripsState.map(t => `
    <div style="background: #F8FAFC; border: 1px solid var(--border-glass); padding: 1.2rem; border-radius: var(--radius-md); margin-bottom: 1rem; position: relative;">
      <div style="display: flex; gap: 1rem; align-items: center; margin-bottom: 0.8rem;">
        <img src="${t.image || './assets/villa_azure_img_1785398933026.jpg'}" alt="${t.villaName}" style="width: 75px; height: 75px; object-fit: cover; border-radius: var(--radius-sm);">
        <div style="flex-grow: 1;">
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <h4 style="font-family: var(--font-serif); font-size: 1.2rem; color: var(--text-main);">${t.villaName}</h4>
            <span class="badge-instant">${t.status}</span>
          </div>
          <p style="font-size: 0.82rem; color: var(--text-muted); margin-top: 0.2rem;"><i class="fa-solid fa-location-dot"></i> ${t.city} · ${t.guests || 10} người</p>
          <p style="font-size: 0.82rem; color: var(--text-muted);"><i class="fa-solid fa-calendar"></i> ${t.checkIn} ➔ ${t.checkOut}</p>
        </div>
      </div>

      <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid var(--border-glass); padding-top: 0.8rem; margin-top: 0.5rem;">
        <div>
          <span style="font-size: 0.78rem; color: var(--text-muted); display: block;">Mã chuyến đi: <strong>${t.id}</strong></span>
          <span style="color: var(--text-gold); font-weight: 700; font-size: 1.05rem;">${formatCurrency(t.totalPrice)}</span>
        </div>

        <button class="btn-cancel-trip btn-trigger-cancel-trip" data-tripid="${t.id}" data-villaname="${t.villaName}">
          <i class="fa-solid fa-circle-xmark"></i> Hủy đặt phòng
        </button>
      </div>
    </div>
  `).join('');

  document.querySelectorAll(".btn-trigger-cancel-trip").forEach(btn => {
    btn.addEventListener("click", () => {
      const tripId = btn.dataset.tripid;
      const vName = btn.dataset.villaname;
      cancelTrip(tripId, vName);
    });
  });
}

function cancelTrip(tripId, villaName) {
  myTripsState = myTripsState.filter(t => t.id !== tripId);
  updateBadges();
  renderTripsList();
  showToastNotification(`Đã hủy giữ chỗ thành công cho [${villaName}] (Mã ${tripId}). Khoản tiền cọc sẽ được tự động hoàn lại trong 24h.`, "Hủy đặt biệt thự", "info");
}

/* --------------------------------------------------------------------------
   AUTH / SIGN IN MODAL LOGIC
   -------------------------------------------------------------------------- */
function initAuthModalEvents() {
  const authModal = document.getElementById("authModal");
  const googleAuthModal = document.getElementById("googleAuthModal");
  const btnSignIn = document.getElementById("btnSignIn");
  const mobileSignIn = document.getElementById("mobileSignIn");
  const closeBtn = document.getElementById("closeAuthBtn");
  const closeGoogleBtn = document.getElementById("closeGoogleAuthBtn");
  const btnBackHome = document.getElementById("btnAuthBackHome");
  const form = document.getElementById("signInForm");
  const togglePassBtn = document.getElementById("togglePasswordBtn");
  const passInput = document.getElementById("authPassword");
  const passEyeIcon = document.getElementById("passwordEyeIcon");
  const googleBtn = document.getElementById("btnGoogleLogin");
  const forgotPassBtn = document.getElementById("btnForgotPassword");
  const userDropdownMenu = document.getElementById("userDropdownMenu");
  const btnUserLogout = document.getElementById("btnUserLogout");
  const btnUserMenuTrips = document.getElementById("btnUserMenuTrips");
  const btnUserMenuWishlist = document.getElementById("btnUserMenuWishlist");

  const openAuth = () => authModal?.classList.add("active");
  const closeAuth = () => authModal?.classList.remove("active");
  const openGoogleAuth = () => {
    closeAuth();
    googleAuthModal?.classList.add("active");
  };
  const closeGoogleAuth = () => googleAuthModal?.classList.remove("active");

  if (btnSignIn) {
    btnSignIn.addEventListener("click", (e) => {
      e.stopPropagation();
      if (currentUser) {
        userDropdownMenu?.classList.toggle("active");
      } else {
        openAuth();
      }
    });
  }

  if (mobileSignIn) {
    mobileSignIn.addEventListener("click", () => {
      if (currentUser) {
        if (confirm(`Bạn có muốn đăng xuất tài khoản [${currentUser.name}] không?`)) {
          performLogout();
        }
      } else {
        openAuth();
      }
    });
  }

  // Close dropdown on outside click
  document.addEventListener("click", (e) => {
    if (userDropdownMenu && !userDropdownMenu.contains(e.target) && e.target !== btnSignIn) {
      userDropdownMenu.classList.remove("active");
    }
  });

  if (closeBtn) closeBtn.addEventListener("click", closeAuth);
  if (closeGoogleBtn) closeGoogleBtn.addEventListener("click", closeGoogleAuth);
  if (btnBackHome) btnBackHome.addEventListener("click", (e) => { e.preventDefault(); closeAuth(); });

  if (authModal) {
    authModal.addEventListener("click", (e) => {
      if (e.target === authModal) closeAuth();
    });
  }

  if (googleAuthModal) {
    googleAuthModal.addEventListener("click", (e) => {
      if (e.target === googleAuthModal) closeGoogleAuth();
    });
  }

  if (togglePassBtn && passInput && passEyeIcon) {
    togglePassBtn.addEventListener("click", () => {
      if (passInput.type === "password") {
        passInput.type = "text";
        passEyeIcon.classList.remove("fa-eye");
        passEyeIcon.classList.add("fa-eye-slash");
      } else {
        passInput.type = "password";
        passEyeIcon.classList.remove("fa-eye-slash");
        passEyeIcon.classList.add("fa-eye");
      }
    });
  }

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const inputVal = (document.getElementById("authEmail")?.value || "").trim();
      let displayName = "Khách Hàng";

      if (inputVal.includes("@")) {
        const rawName = inputVal.split("@")[0];
        displayName = rawName.charAt(0).toUpperCase() + rawName.slice(1);
      } else if (inputVal.length > 0) {
        displayName = "Khách Hàng (" + inputVal.slice(-4) + ")";
      }

      currentUser = {
        name: displayName,
        email: inputVal
      };

      updateHeaderUserUI();
      closeAuth();
      showToastNotification(`Chào mừng ${currentUser.name} đã đăng nhập tài khoản cá nhân!`, "Đăng Nhập Thành Công", "success");
    });
  }

  // Open Google Account Simulator
  if (googleBtn) {
    googleBtn.addEventListener("click", () => {
      openGoogleAuth();
    });
  }

  // Select predefined Google Demo Account
  document.querySelectorAll(".btn-select-gacc").forEach(btn => {
    btn.addEventListener("click", () => {
      const gname = btn.dataset.gname;
      const gemail = btn.dataset.gemail;

      currentUser = {
        name: gname,
        email: gemail
      };

      updateHeaderUserUI();
      closeGoogleAuth();
      showToastNotification(`Đăng nhập tài khoản Google thành công: ${gemail}`, "Google Auth", "success");
    });
  });

  // Custom Google Account Form
  document.getElementById("customGoogleForm")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const customEmail = document.getElementById("customGoogleEmail")?.value.trim();
    if (!customEmail) return;

    const rawName = customEmail.split("@")[0];
    const displayName = rawName.charAt(0).toUpperCase() + rawName.slice(1);

    currentUser = {
      name: displayName,
      email: customEmail
    };

    updateHeaderUserUI();
    closeGoogleAuth();
    showToastNotification(`Đăng nhập tài khoản Google [${customEmail}] thành công!`, "Google Auth", "success");
  });

  // Dropdown Menu Items
  if (btnUserMenuTrips) {
    btnUserMenuTrips.addEventListener("click", () => {
      userDropdownMenu?.classList.remove("active");
      renderTripsList();
      document.getElementById("tripsModal")?.classList.add("active");
    });
  }

  if (btnUserMenuWishlist) {
    btnUserMenuWishlist.addEventListener("click", () => {
      userDropdownMenu?.classList.remove("active");
      renderWishlistData();
      document.getElementById("wishlistModal")?.classList.add("active");
    });
  }

  if (btnUserLogout) {
    btnUserLogout.addEventListener("click", () => {
      performLogout();
    });
  }

  if (forgotPassBtn) {
    forgotPassBtn.addEventListener("click", (e) => {
      e.preventDefault();
      showToastNotification("Liên kết khôi phục mật khẩu đã được gửi về email của bạn.", "Quên mật khẩu", "info");
    });
  }
}

function performLogout() {
  const name = currentUser ? currentUser.name : "Tài khoản";
  currentUser = null;
  updateHeaderUserUI();
  document.getElementById("userDropdownMenu")?.classList.remove("active");
  showToastNotification(`Đã đăng xuất tài khoản ${name} thành công.`, "Đăng Xuất", "info");
}

function updateHeaderUserUI() {
  const btnSignIn = document.getElementById("btnSignIn");
  const mobileSignIn = document.getElementById("mobileSignIn");
  const userMenuName = document.getElementById("userMenuName");
  const userMenuEmail = document.getElementById("userMenuEmail");
  const userMenuAvatar = document.getElementById("userMenuAvatar");

  if (currentUser) {
    const initial = currentUser.name ? currentUser.name.charAt(0).toUpperCase() : "U";
    if (btnSignIn) {
      btnSignIn.innerHTML = `
        <i class="fa-solid fa-circle-user" style="color: #FEF08A; font-size: 1.15rem;"></i>
        <span>${currentUser.name}</span>
        <i class="fa-solid fa-chevron-down" style="font-size: 0.65rem; margin-left: 0.2rem;"></i>
      `;
      btnSignIn.style.fontWeight = "600";
    }
    if (mobileSignIn) {
      mobileSignIn.innerHTML = `<i class="fa-solid fa-circle-user"></i> ${currentUser.name} (Đăng xuất)`;
    }
    if (userMenuName) userMenuName.textContent = currentUser.name;
    if (userMenuEmail) userMenuEmail.textContent = currentUser.email || "user@gmail.com";
    if (userMenuAvatar) userMenuAvatar.textContent = initial;
  } else {
    if (btnSignIn) {
      btnSignIn.innerHTML = `Sign in`;
      btnSignIn.style.fontWeight = "600";
    }
    if (mobileSignIn) {
      mobileSignIn.innerHTML = `<i class="fa-solid fa-user"></i> Sign in / Sign up`;
    }
  }
}

/* --------------------------------------------------------------------------
   HERO AUTO SLIDER LOGIC
   -------------------------------------------------------------------------- */
function initHeroAutoSlider() {
  const slides = document.querySelectorAll(".hero-slide");
  const dots = document.querySelectorAll(".hero-slider-dots .dot");
  const prevBtn = document.getElementById("slidePrevBtn");
  const nextBtn = document.getElementById("slideNextBtn");

  if (slides.length === 0) return;

  let currentSlide = 0;
  let sliderTimer = null;

  function showSlide(index) {
    slides.forEach(s => s.classList.remove("active"));
    dots.forEach(d => d.classList.remove("active"));

    currentSlide = (index + slides.length) % slides.length;
    slides[currentSlide].classList.add("active");
    if (dots[currentSlide]) dots[currentSlide].classList.add("active");
  }

  function startAutoPlay() {
    stopAutoPlay();
    sliderTimer = setInterval(() => {
      showSlide(currentSlide + 1);
    }, 4000);
  }

  function stopAutoPlay() {
    if (sliderTimer) clearInterval(sliderTimer);
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      showSlide(currentSlide - 1);
      startAutoPlay();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      showSlide(currentSlide + 1);
      startAutoPlay();
    });
  }

  dots.forEach(dot => {
    dot.addEventListener("click", () => {
      const idx = parseInt(dot.dataset.index);
      showSlide(idx);
      startAutoPlay();
    });
  });

  startAutoPlay();
}

/* --------------------------------------------------------------------------
   HEADER SCROLL & NAVIGATION SMOOTH ANCHORS
   -------------------------------------------------------------------------- */
function initHeaderScroll() {
  const header = document.getElementById("mainHeader");
  if (!header) return;

  const updateHeaderState = () => {
    if (window.scrollY > 40) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  };

  window.addEventListener("scroll", updateHeaderState);
  updateHeaderState();
}

function initNavSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '#about' || targetId === '#blog' || targetId === '#home') return;
      const targetEl = document.querySelector(targetId);
      if (targetEl && currentRoute === 'home') {
        e.preventDefault();
        
        const headerOffset = 80;
        const elementPosition = targetEl.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

function initMobileDrawer() {
  const openBtn = document.getElementById("mobileMenuBtn");
  const closeBtn = document.getElementById("closeDrawerBtn");
  const drawer = document.getElementById("mobileDrawer");

  function closeDrawer() {
    if (drawer) drawer.classList.remove("open");
  }

  if (openBtn && closeBtn && drawer) {
    openBtn.addEventListener("click", () => drawer.classList.add("open"));
    closeBtn.addEventListener("click", closeDrawer);
  }

  // Auto close on route click
  drawer?.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", closeDrawer);
  });

  // Mobile action links
  document.getElementById("mobileCart")?.addEventListener("click", (e) => {
    e.preventDefault();
    closeDrawer();
    renderCartList();
    document.getElementById("cartModal")?.classList.add("active");
  });

  document.getElementById("mobileWishlist")?.addEventListener("click", (e) => {
    e.preventDefault();
    closeDrawer();
    renderWishlistList();
    document.getElementById("wishlistModal")?.classList.add("active");
  });

  document.getElementById("mobileMyTrips")?.addEventListener("click", (e) => {
    e.preventDefault();
    closeDrawer();
    renderTripsList();
    document.getElementById("tripsModal")?.classList.add("active");
  });

  document.getElementById("mobileSignIn")?.addEventListener("click", (e) => {
    e.preventDefault();
    closeDrawer();
    document.getElementById("authModal")?.classList.add("active");
  });
}

/* --------------------------------------------------------------------------
   RENDER VILLAS & DYNAMIC SIDEBAR FILTER LOGIC
   -------------------------------------------------------------------------- */
function renderVillaGrid(customFilterList = null) {
  const container = document.getElementById("villaGridContainer");
  const countLabel = document.getElementById("resultsCountLabel");
  if (!container) return;

  const priceChecked = Array.from(document.querySelectorAll('input[name="price"]:checked')).map(c => c.value);
  const amenityChecked = Array.from(document.querySelectorAll('input[name="amenity"]:checked')).map(c => c.value);
  const bookingChecked = Array.from(document.querySelectorAll('input[name="bookingType"]:checked')).map(c => c.value);

  let listToRender = customFilterList || VILLAS_DATA.filter(villa => {
    let catMatch = true;
    if (activeCategoryFilter === "beachfront") {
      catMatch = villa.location.toLowerCase().includes("beachfront") || villa.tags.some(t => t.toLowerCase().includes("beachfront"));
    } else if (activeCategoryFilter === "pool") {
      catMatch = villa.pool.toLowerCase().includes("pool") || villa.amenities.some(a => a.toLowerCase().includes("hồ bơi"));
    } else if (activeCategoryFilter === "instant") {
      catMatch = villa.instant === true;
    } else if (activeCategoryFilter === "families") {
      catMatch = villa.guests >= 10;
    } else if (activeCategoryFilter === "large") {
      catMatch = villa.guests >= 16;
    } else if (activeCategoryFilter === "quiet") {
      catMatch = villa.city === "Đà Lạt" || villa.city === "Long Hải" || villa.tags.some(t => t.toLowerCase().includes("quiet"));
    } else if (activeCategoryFilter === "pet") {
      catMatch = villa.tags.some(t => t.toLowerCase().includes("pet")) || villa.amenities.some(a => a.toLowerCase().includes("pet"));
    } else if (activeCategoryFilter === "event") {
      catMatch = villa.tags.some(t => t.toLowerCase().includes("event")) || villa.amenities.some(a => a.toLowerCase().includes("tiệc"));
    } else if (activeCategoryFilter === "luxury") {
      catMatch = villa.luxury === true || villa.tags.some(t => t.toLowerCase().includes("luxury"));
    } else if (activeCategoryFilter === "toprated") {
      catMatch = villa.rating >= 4.8;
    }

    let tabMatch = true;
    if (activeTabFilter === "beachfront") {
      tabMatch = villa.location.toLowerCase().includes("beachfront") || villa.tags.some(t => t.toLowerCase().includes("beachfront"));
    } else if (activeTabFilter === "toprated") {
      tabMatch = villa.rating >= 4.8;
    } else if (activeTabFilter === "luxury") {
      tabMatch = villa.luxury === true || villa.tags.some(t => t.toLowerCase().includes("luxury"));
    }

    let priceMatch = true;
    if (priceChecked.length > 0) {
      priceMatch = priceChecked.some(p => {
        if (p === "under5m") return villa.pricePerNight < 5000000;
        if (p === "5m10m") return villa.pricePerNight >= 5000000 && villa.pricePerNight <= 10000000;
        if (p === "10m20m") return villa.pricePerNight >= 10000000 && villa.pricePerNight <= 20000000;
        if (p === "over20m") return villa.pricePerNight > 20000000;
        return false;
      });
    }

    let bedsMatch = villa.beds >= activeMinBeds;

    let amenityMatch = true;
    if (amenityChecked.length > 0) {
      amenityMatch = amenityChecked.every(a => {
        if (a === "pool") return villa.pool.toLowerCase().includes("pool");
        if (a === "bbq") return villa.amenities.some(am => am.toLowerCase().includes("bbq"));
        if (a === "karaoke") return villa.amenities.some(am => am.toLowerCase().includes("karaoke"));
        if (a === "pet") return villa.tags.includes("Pet friendly") || villa.amenities.some(am => am.toLowerCase().includes("pet"));
        if (a === "event") return villa.tags.includes("Event villas") || villa.amenities.some(am => am.toLowerCase().includes("tiệc") || am.toLowerCase().includes("sân vườn"));
        return true;
      });
    }

    let bookingTypeMatch = true;
    if (bookingChecked.length > 0) {
      bookingTypeMatch = bookingChecked.every(b => {
        if (b === "instant") return villa.instant === true;
        if (b === "freeCancel") return villa.freeCancel === true;
        return true;
      });
    }

    return catMatch && tabMatch && priceMatch && bedsMatch && amenityMatch && bookingTypeMatch;
  });

  if (countLabel) {
    countLabel.textContent = `Showing ${listToRender.length} premium ${listToRender.length === 1 ? 'villa' : 'villas'}`;
  }

  if (listToRender.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 0; color: var(--text-muted);">
        <i class="fa-solid fa-house-crack" style="font-size: 3rem; margin-bottom: 1rem; color: var(--text-gold);"></i>
        <h3>Không tìm thấy biệt thự phù hợp với bộ lọc</h3>
        <p>Thử bỏ chọn một số tiêu chí hoặc bấm <strong>Reset all</strong> để xem toàn bộ biệt thự.</p>
        <button class="btn-primary-small" id="btnResetFilters" style="margin-top: 1rem;">Reset all filters</button>
      </div>
    `;
    document.getElementById("btnResetFilters")?.addEventListener("click", resetAllSidebarFilters);
    return;
  }

  container.innerHTML = listToRender.map(villa => {
    const isSaved = myWishlistState.includes(villa.id);
    return `
      <div class="villa-card" data-id="${villa.id}">
        <div class="villa-img-wrapper">
          <img src="${villa.image}" alt="${villa.name}" loading="lazy">
          <div class="villa-badge-top">
            ${villa.tags.map(t => `<span class="badge-curated">${t}</span>`).join('')}
          </div>
          <button class="btn-wishlist ${isSaved ? 'active' : ''}" data-id="${villa.id}" title="Save to wishlist">
            <i class="${isSaved ? 'fa-solid' : 'fa-regular'} fa-heart" style="${isSaved ? 'color: #E74C3C;' : ''}"></i>
          </button>
          <button class="btn-tour-badge btn-open-360" data-name="${villa.name}"><i class="fa-solid fa-street-view"></i> 360° Tour</button>
        </div>

        <div class="villa-info">
          <div class="villa-top-row">
            <h3 class="villa-name">${villa.name}</h3>
            <span class="villa-rating">★ ${villa.rating} (${villa.reviews})</span>
          </div>
          
          <p class="villa-location"><i class="fa-solid fa-location-dot"></i> ${villa.location}</p>

          <div class="villa-specs">
            <span><i class="fa-solid fa-users"></i> ${villa.guests} guests</span>
            <span>•</span>
            <span><i class="fa-solid fa-bed"></i> ${villa.beds} beds</span>
            <span>•</span>
            <span>🏊 ${villa.pool.includes("Pool") ? "Pool" : "Garden"}</span>
          </div>

          <div style="display: flex; gap: 0.4rem; margin-bottom: 1rem;">
            ${villa.instant ? `<span class="badge-instant">⚡ Instant</span>` : ''}
            ${villa.freeCancel ? `<span class="badge-freecancel">Free cancel</span>` : ''}
          </div>

          <div class="villa-bottom-row">
            <div class="villa-price">
              ${formatCurrency(villa.pricePerNight)} <span>/night</span>
            </div>
            <div style="display: flex; gap: 0.4rem;">
              <button class="btn-add-cart" data-id="${villa.id}" title="Thêm vào giỏ hàng"><i class="fa-solid fa-cart-plus"></i></button>
              <button class="btn-primary-small btn-view-villa" data-id="${villa.id}">Book Now</button>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');

  document.querySelectorAll(".btn-add-cart").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      addToCart(btn.dataset.id);
    });
  });

  document.querySelectorAll(".btn-wishlist").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const id = btn.dataset.id;
      if (myWishlistState.includes(id)) {
        myWishlistState = myWishlistState.filter(item => item !== id);
        showToastNotification("Đã xoá biệt thự khỏi danh sách yêu thích.", "Wishlist", "info");
      } else {
        myWishlistState.push(id);
        showToastNotification("Đã lưu biệt thự vào danh sách yêu thích ♡", "Wishlist", "success");
      }
      renderVillaGrid();
      updateBadges();
    });
  });

  document.querySelectorAll(".btn-open-360").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      open360TourModal(btn.dataset.name);
    });
  });

  document.querySelectorAll(".btn-view-villa").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      openVillaModal(btn.dataset.id);
    });
  });

  document.querySelectorAll(".villa-card").forEach(card => {
    card.addEventListener("click", () => {
      openVillaModal(card.dataset.id);
    });
  });
}

function initFilterEvents() {
  document.querySelectorAll(".cat-pill").forEach(pill => {
    pill.addEventListener("click", () => {
      document.querySelectorAll(".cat-pill").forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      activeCategoryFilter = pill.dataset.cat;
      renderVillaGrid();
    });
  });

  document.querySelectorAll(".tab-btn").forEach(tab => {
    tab.addEventListener("click", () => {
      document.querySelectorAll(".tab-btn").forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      activeTabFilter = tab.dataset.filter;
      renderVillaGrid();
    });
  });

  document.querySelectorAll(".dest-card").forEach(card => {
    card.addEventListener("click", () => {
      const locName = card.dataset.location;
      filterVillasByLocation(locName);
    });
  });
}

function initSidebarFilterEvents() {
  document.querySelectorAll('.sidebar-filter-card input[type="checkbox"]').forEach(input => {
    input.addEventListener('change', () => {
      renderVillaGrid();
    });
  });

  document.querySelectorAll('#bedroomPillsGroup .bed-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      document.querySelectorAll('#bedroomPillsGroup .bed-pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      activeMinBeds = parseInt(pill.dataset.beds) || 0;
      renderVillaGrid();
    });
  });

  document.getElementById("btnResetSidebarFilters")?.addEventListener("click", resetAllSidebarFilters);
}

function resetAllSidebarFilters() {
  document.querySelectorAll('.sidebar-filter-card input[type="checkbox"]').forEach(c => c.checked = false);
  document.querySelectorAll('#bedroomPillsGroup .bed-pill').forEach(p => p.classList.remove('active'));
  document.querySelector('#bedroomPillsGroup .bed-pill[data-beds="0"]')?.classList.add('active');
  activeMinBeds = 0;
  activeCategoryFilter = "all";
  activeTabFilter = "all";
  renderVillaGrid();
  showToastNotification("Đã reset toàn bộ bộ lọc về trạng thái ban đầu.", "Bộ lọc", "info");
}

function filterVillasByLocation(cityName) {
  const filtered = VILLAS_DATA.filter(v => v.city.toLowerCase().includes(cityName.toLowerCase()) || v.location.toLowerCase().includes(cityName.toLowerCase()));
  renderVillaGrid(filtered);
  document.getElementById("villas").scrollIntoView({ behavior: "smooth" });
}

function initSearchEvents() {
  const btnSearch = document.getElementById("btnExecuteSearch");
  if (!btnSearch) return;

  btnSearch.addEventListener("click", () => {
    const destSelect = document.getElementById("searchDestination");
    const selectedDest = destSelect.value;

    if (selectedDest !== "all") {
      filterVillasByLocation(selectedDest);
    } else {
      activeCategoryFilter = "all";
      activeTabFilter = "all";
      renderVillaGrid();
      document.getElementById("villas").scrollIntoView({ behavior: "smooth" });
    }
  });
}

/* --------------------------------------------------------------------------
   GOOGLE MAP INTERACTIVE SWITCHER
   -------------------------------------------------------------------------- */
function initGoogleMapSwitcher() {
  const mapButtons = document.querySelectorAll(".map-loc-btn");
  const iframe = document.getElementById("gmapIframe");
  const badgeEl = document.getElementById("mapLocBadge");
  const titleEl = document.getElementById("mapLocTitle");
  const descEl = document.getElementById("mapLocDesc");
  const filterBtn = document.getElementById("btnFilterMapCity");

  let currentLocName = "Vũng Tàu";

  mapButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      mapButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const lat = btn.dataset.lat;
      const lng = btn.dataset.lng;
      currentLocName = btn.dataset.name;

      if (iframe) {
        iframe.src = `https://maps.google.com/maps?q=${lat},${lng}&hl=vi&z=12&output=embed`;
      }

      const info = MAP_LOCATIONS[currentLocName];
      if (info) {
        if (badgeEl) badgeEl.textContent = info.badge;
        if (titleEl) titleEl.textContent = info.title;
        if (descEl) descEl.textContent = info.desc;
      }
    });
  });

  if (filterBtn) {
    filterBtn.addEventListener("click", () => {
      filterVillasByLocation(currentLocName);
    });
  }
}

/* --------------------------------------------------------------------------
   BESPOKE EXPERIENCES & OFFERS LOGIC
   -------------------------------------------------------------------------- */
function initOffersAndAddons() {
  const items = document.querySelectorAll("#expAddonGrid .exp-item");
  const clearBtn = document.getElementById("btnClearExpSelections");
  const personalizeBtn = document.getElementById("btnPersonalizeStay");

  function calcAndDisplayConciergeTotal() {
    let totalAddonCost = 0;
    const selectedList = [];

    document.querySelectorAll("#expAddonGrid .exp-item.active").forEach(item => {
      const price = parseInt(item.dataset.price) || 0;
      const name = item.dataset.addon || "";
      totalAddonCost += price;
      selectedList.push(name);
    });

    const summaryCountEl = document.getElementById("expSummaryCount");
    const summaryPriceEl = document.getElementById("expSummaryPriceTotal");

    if (summaryCountEl) summaryCountEl.textContent = `${selectedList.length} dịch vụ`;
    if (summaryPriceEl) summaryPriceEl.textContent = `+${formatCurrency(totalAddonCost)}`;
  }

  items.forEach(item => {
    item.addEventListener("click", (e) => {
      e.stopPropagation();
      item.classList.toggle("active");
      calcAndDisplayConciergeTotal();
    });
  });

  if (clearBtn) {
    clearBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      items.forEach(i => i.classList.remove("active"));
      calcAndDisplayConciergeTotal();
      showToastNotification("Đã bỏ chọn toàn bộ dịch vụ concierge bổ sung.", "Concierge", "info");
    });
  }

  if (personalizeBtn) {
    personalizeBtn.addEventListener("click", () => {
      const selectedAddons = Array.from(document.querySelectorAll("#expAddonGrid .exp-item.active")).map(i => i.dataset.addon);
      if (selectedAddons.length > 0) {
        showToastNotification(`Đã lưu ${selectedAddons.length} dịch vụ Concierge tùy chỉnh (${selectedAddons.join(", ")}).`, "Personalized Experience", "success");
      } else {
        showToastNotification("Vui lòng chọn ít nhất 1 trải nghiệm concierge để cá nhân hóa kỳ nghỉ.", "Bespoke Concierge", "info");
      }
    });
  }
}

/* --------------------------------------------------------------------------
   360 VIRTUAL TOUR MODAL
   -------------------------------------------------------------------------- */
function init360TourModalEvents() {
  const tourModal = document.getElementById("tour360Modal");
  const closeBtn = document.getElementById("closeTourBtn");

  if (closeBtn && tourModal) {
    closeBtn.addEventListener("click", () => tourModal.classList.remove("active"));
    tourModal.addEventListener("click", (e) => {
      if (e.target === tourModal) tourModal.classList.remove("active");
    });
  }
}

function open360TourModal(villaName) {
  const modal = document.getElementById("tour360Modal");
  const titleEl = document.getElementById("tourVillaTitle");
  if (!modal) return;

  if (titleEl) titleEl.textContent = `${villaName} — 360° Virtual Walkthrough`;
  modal.classList.add("active");
}

/* --------------------------------------------------------------------------
   INTERACTIVE BOOKING MODAL WITH EXTRA GUEST SURCHARGE CALCULATOR
   -------------------------------------------------------------------------- */
function initModalEvents() {
  const modal = document.getElementById("villaModal");
  const closeBtn = document.getElementById("closeModalBtn");

  if (closeBtn && modal) {
    closeBtn.addEventListener("click", () => modal.classList.remove("active"));
    modal.addEventListener("click", (e) => {
      if (e.target === modal) modal.classList.remove("active");
    });
  }
}

function openVillaModal(villaId) {
  const villa = VILLAS_DATA.find(v => v.id === villaId);
  if (!villa) return;

  const modal = document.getElementById("villaModal");
  const modalBody = document.getElementById("modalDynamicBody");
  const baseIncludedGuests = 6;

  modalBody.innerHTML = `
    <div class="modal-villa-hero">
      <img src="${villa.image}" alt="${villa.name}">
    </div>

    <div class="modal-villa-grid">
      <div class="modal-left">
        <h2 class="modal-villa-title">${villa.name}</h2>
        <p class="modal-villa-location"><i class="fa-solid fa-location-dot"></i> ${villa.location} &mdash; <strong>★ ${villa.rating}</strong> (${villa.reviews} đánh giá)</p>
        
        <p class="modal-villa-desc">${villa.description}</p>

        <span class="amenities-heading">✦ Tiện ích biệt thự cao cấp</span>
        <div class="modal-amenities">
          ${villa.amenities.map(a => `<div class="amenity-item"><i class="fa-solid fa-circle-check"></i> ${a}</div>`).join('')}
        </div>
      </div>

      <div class="modal-right">
        <div class="booking-box">
          <div class="booking-box-price">
            ${formatCurrency(villa.pricePerNight)}
            <span>/đêm &bull; Chuẩn ${baseIncludedGuests} khách</span>
          </div>

          <form id="modalBookingForm">
            <div class="booking-form-group">
              <label>Check-in / Check-out</label>
              <div class="date-row">
                <input type="date" id="mCheckIn" value="2026-08-12" required>
                <input type="date" id="mCheckOut" value="2026-08-14" required>
              </div>
            </div>

            <div class="booking-form-group">
              <label>Số lượng khách</label>
              <select id="mGuestCount">
                <option value="2">2 Khách (Standard)</option>
                <option value="4">4 Khách (Standard)</option>
                <option value="6">6 Khách (Đã gồm trong giá)</option>
                <option value="8">8 Khách (+2 khách phụ thu)</option>
                <option value="10" selected>10 Khách (+4 khách phụ thu)</option>
                <option value="12">12 Khách (+6 khách phụ thu)</option>
                <option value="16">16 Khách (+10 khách phụ thu)</option>
                <option value="20">20 Khách (+14 khách phụ thu)</option>
              </select>
            </div>

            <div class="booking-form-group">
              <label>Phương thức thanh toán</label>
              <select id="mPaymentMethod">
                <option value="QR">Chuyển khoản QR Napas 24/7</option>
                <option value="Visa">Thẻ Visa / Mastercard</option>
                <option value="Later">Cọc 30% &amp; Thanh toán khi nhận Villa</option>
              </select>
            </div>

            <div class="price-summary">
              <div class="summary-row">
                <span>Giá thuê biệt thự</span>
                <span id="subtotalPrice">${formatCurrency(villa.pricePerNight * 2)}</span>
              </div>

              <div class="summary-row" id="guestSurchargeRow">
                <span>Phụ thu số lượng khách</span>
                <span id="guestSurchargePrice" style="color: var(--text-gold); font-weight: 600;">0 ₫</span>
              </div>

              <div class="summary-row">
                <span>Phí dịch vụ & Quản gia</span>
                <span>500.000 ₫</span>
              </div>

              <div class="summary-row total">
                <span>Tổng chi phí toàn bộ:</span>
                <span id="totalPrice" style="color: var(--accent-gold); font-size: 1.15rem;">0 ₫</span>
              </div>
            </div>

            <div style="display: flex; gap: 0.6rem; margin-top: 1rem;">
              <button type="button" class="btn-outline" id="btnModalAddToCart" style="margin-top: 0;">
                <i class="fa-solid fa-cart-plus"></i> Thêm Giỏ Hàng
              </button>
              <button type="submit" class="btn-primary" style="flex-grow: 1; justify-content: center;">
                <i class="fa-solid fa-lock"></i> Đặt Ngay
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  `;

  const inInput = document.getElementById("mCheckIn");
  const outInput = document.getElementById("mCheckOut");
  const guestSelect = document.getElementById("mGuestCount");
  const subtotalEl = document.getElementById("subtotalPrice");
  const guestSurchargeEl = document.getElementById("guestSurchargePrice");
  const totalEl = document.getElementById("totalPrice");
  const btnAddToCart = document.getElementById("btnModalAddToCart");

  function calcPrice() {
    const d1 = new Date(inInput.value);
    const d2 = new Date(outInput.value);
    let nights = Math.max(1, Math.round((d2 - d1) / (1000 * 60 * 60 * 24)));
    if (isNaN(nights)) nights = 2;

    const selectedGuests = parseInt(guestSelect.value) || 10;
    const baseGuests = 6;
    const extraGuests = Math.max(0, selectedGuests - baseGuests);
    
    const extraGuestRatePerNight = 250000;
    const totalExtraGuestSurcharge = extraGuests * extraGuestRatePerNight * nights;

    const baseVillaTotal = villa.pricePerNight * nights;
    let combinedTotal = baseVillaTotal + totalExtraGuestSurcharge;

    const finalTotal = combinedTotal + 500000;

    subtotalEl.textContent = `${formatCurrency(baseVillaTotal)} (${nights} đêm)`;
    
    if (extraGuests > 0) {
      guestSurchargeEl.textContent = `+${formatCurrency(totalExtraGuestSurcharge)} (${extraGuests} khách x 250k/đêm)`;
      guestSurchargeEl.style.color = "var(--text-gold)";
    } else {
      guestSurchargeEl.textContent = `Miễn phí (${selectedGuests} khách chuẩn)`;
      guestSurchargeEl.style.color = "#166534";
    }

    totalEl.textContent = formatCurrency(finalTotal);
    return { nights, selectedGuests, extraGuests, totalExtraGuestSurcharge, finalTotal };
  }

  inInput.addEventListener("change", calcPrice);
  outInput.addEventListener("change", calcPrice);
  guestSelect.addEventListener("change", calcPrice);

  calcPrice();

  if (btnAddToCart) {
    btnAddToCart.addEventListener("click", () => {
      addToCart(villa.id);
      modal.classList.remove("active");
    });
  }

  document.getElementById("modalBookingForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const { nights, selectedGuests, extraGuests, finalTotal } = calcPrice();

    const newBooking = {
      id: "TRIP-" + Math.floor(1000 + Math.random() * 9000),
      villaName: villa.name,
      city: villa.city,
      image: villa.image,
      checkIn: inInput.value,
      checkOut: outInput.value,
      nights: nights,
      guests: selectedGuests,
      extraGuests: extraGuests,
      totalPrice: finalTotal,
      status: "Confirmed"
    };

    myTripsState.unshift(newBooking);
    updateBadges();
    modal.classList.remove("active");

    showSuccessBookingModal(newBooking);
  });

  modal.classList.add("active");
}

function showSuccessBookingModal(booking) {
  const modal = document.getElementById("successModal");
  const container = document.getElementById("successModalContent");
  if (!modal || !container) return;

  container.innerHTML = `
    <div class="animated-check-circle">
      <i class="fa-solid fa-check"></i>
    </div>
    
    <span class="success-eyebrow">✦ RESERVATION CONFIRMED ✦</span>
    <h2 class="success-title">Đặt Biệt Thự Thành Công!</h2>
    <p class="success-sub">Cảm ơn bạn đã lựa chọn <strong>LeeKhoa Villas</strong>. Quản gia cá nhân sẽ liên hệ hỗ trợ bạn trong 15 phút.</p>

    <div class="booking-receipt-box">
      <div class="receipt-row">
        <span>Biệt thự nghỉ dưỡng</span>
        <span>${booking.villaName} (${booking.city})</span>
      </div>
      <div class="receipt-row">
        <span>Mã giữ chỗ</span>
        <span class="badge-instant" style="font-size: 0.85rem;">${booking.id}</span>
      </div>
      <div class="receipt-row">
        <span>Thời gian lưu trú</span>
        <span>${booking.checkIn} ➔ ${booking.checkOut} (${booking.nights} đêm)</span>
      </div>
      <div class="receipt-row">
        <span>Số lượng khách</span>
        <span>${booking.guests} người ${booking.extraGuests > 0 ? `(+${booking.extraGuests} khách phụ thu)` : ''}</span>
      </div>
      <div class="receipt-row">
        <span>Trạng thái</span>
        <span style="color: #166534; font-weight: 700;"><i class="fa-solid fa-circle-check"></i> Confirmed & Saved</span>
      </div>
      <div class="receipt-row">
        <span>Tổng thanh toán toàn bộ</span>
        <span class="receipt-total-val">${formatCurrency(booking.totalPrice)}</span>
      </div>
    </div>

    <div class="success-actions-row">
      <button class="btn-primary" id="btnViewTripsFromSuccess">
        <i class="fa-solid fa-suitcase"></i> Xem My Trips (${myTripsState.length})
      </button>
      <button class="btn-outline" id="btnCloseSuccessModal" style="margin-top: 0;">
        Hoàn tất
      </button>
    </div>
  `;

  document.getElementById("btnViewTripsFromSuccess")?.addEventListener("click", () => {
    modal.classList.remove("active");
    renderTripsList();
    document.getElementById("tripsModal")?.classList.add("active");
  });

  document.getElementById("btnCloseSuccessModal")?.addEventListener("click", () => {
    modal.classList.remove("active");
  });

  document.getElementById("closeSuccessBtn")?.addEventListener("click", () => {
    modal.classList.remove("active");
  });

  modal.classList.add("active");
}

function initLanguageSwitcher() {
  const btnVi = document.getElementById("langVi");
  const btnEn = document.getElementById("langEn");

  if (btnVi && btnEn) {
    btnVi.addEventListener("click", () => {
      btnVi.classList.add("active");
      btnEn.classList.remove("active");
      showToastNotification("Đã chuyển ngôn ngữ sang Tiếng Việt", "Language", "info");
    });

    btnEn.addEventListener("click", () => {
      btnEn.classList.add("active");
      btnVi.classList.remove("active");
      showToastNotification("Language switched to English", "Language", "info");
    });
  }
}

/* --------------------------------------------------------------------------
   VIP CONTACT & CALLBACK REQUEST MODAL LOGIC
   -------------------------------------------------------------------------- */
function initContactModalEvents() {
  const contactModal = document.getElementById("contactModal");
  const btnOpenHeader = document.getElementById("btnOpenContactModal");
  const btnOpenAbout = document.getElementById("btnAboutOpenContact");
  const closeBtn = document.getElementById("closeContactModalBtn");
  const form = document.getElementById("contactForm");

  function openContact() {
    if (contactModal) contactModal.classList.add("active");
  }

  function closeContact() {
    if (contactModal) contactModal.classList.remove("active");
  }

  if (btnOpenHeader) btnOpenHeader.addEventListener("click", openContact);
  if (btnOpenAbout) btnOpenAbout.addEventListener("click", openContact);
  if (closeBtn) closeBtn.addEventListener("click", closeContact);

  if (contactModal) {
    contactModal.addEventListener("click", (e) => {
      if (e.target === contactModal) closeContact();
    });
  }

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("contactName")?.value || "Quý khách";
      const phone = document.getElementById("contactPhone")?.value || "";
      const dest = document.getElementById("contactDest")?.value || "Hồ Tràm";
      const ticketId = "LK-VIP-" + Math.floor(1000 + Math.random() * 9000);

      closeContact();
      form.reset();

      showToastNotification(
        `Yêu cầu tư vấn VIP (Mã ${ticketId}) của ${name} (${phone}) đã được chuyển tới Quản gia LeeKhoa. Chúng tôi sẽ gọi lại trong 15 phút cho biệt thự tại ${dest}!`,
        "✅ Tư Vấn VIP Đã Gửi",
        "success"
      );
    });
  }
}

/* --------------------------------------------------------------------------
   BLOG CATEGORY FILTER TABS & NEWSLETTER LOGIC
   -------------------------------------------------------------------------- */
function initBlogCategoryFilterEvents() {
  const tabs = document.querySelectorAll("#blogCategoryTabs .blog-cat-pill");
  const articles = document.querySelectorAll(".blog-grid-cards article");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");

      const category = tab.dataset.blogcat;
      articles.forEach(article => {
        if (category === "all" || article.dataset.blogcat === category) {
          article.style.display = "flex";
        } else {
          article.style.display = "none";
        }
      });
    });
  });
}

function initNewsletterForm() {
  const form = document.getElementById("newsletterForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = document.getElementById("newsletterEmail")?.value || "";
      form.reset();
      showToastNotification(
        `Cảm ơn bạn! Mã voucher ưu đãi 10% (LEEKHOAVIP10) đã gửi tới ${email}.`,
        "🎉 VIP Club Voucher",
        "success"
      );
    });
  }
}
