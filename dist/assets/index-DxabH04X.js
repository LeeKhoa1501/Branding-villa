(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=[{id:`azure`,name:`Villa Azure`,location:`Bãi Sau, Vũng Tàu · 200m`,city:`Vũng Tàu`,rating:4.9,reviews:32,guests:12,beds:5,pool:`Pool & Ocean View`,pricePerNight:75e5,tags:[`Guest favorite`,`Beachfront`],instant:!0,freeCancel:!0,luxury:!1,image:`./assets/villa_azure_img_1785398933026.jpg`,description:`Biệt thự sát biển Bãi Sau với hồ bơi vô cực ngắm trọn đại dương. Không gian kiến trúc hiện đại, đầy đủ tiện nghi chuẩn 5 sao.`,amenities:[`Hồ bơi vô cực`,`Sát biển 200m`,`Dịch vụ BBQ`,`Karaoke & Sound`,`Bãi đỗ xe 4 ô tô`,`Quản gia riêng`]},{id:`serene`,name:`Villa Serene Coast`,location:`Hồ Tràm, Bà Rịa · Beachfront`,city:`Hồ Tràm`,rating:4.8,reviews:28,guests:16,beds:7,pool:`Private Infinity Pool`,pricePerNight:125e5,tags:[`Beachfront`],instant:!1,freeCancel:!0,luxury:!0,image:`./assets/villa_serene_img_1785398944559.jpg`,description:`Khu biệt thự nghỉ dưỡng riêng tư bên bãi biển Hồ Tràm với khuôn viên xanh rộng 1200m². Lý tưởng cho đoàn đông và gia đình đa thế hệ.`,amenities:[`Bãi biển riêng`,`Bể bơi 100m²`,`Bàn bida & Foosball`,`Dụng cụ BBQ ngoài trời`,`Bếp Chef chuyên nghiệp`,`Sân vườn tổ chức tiệc`]},{id:`indigo`,name:`Villa Indigo`,location:`Long Hải, Bà Rịa · 500m`,city:`Long Hải`,rating:4.7,reviews:19,guests:8,beds:4,pool:`Private Pool`,pricePerNight:52e5,tags:[`Quiet retreat`],instant:!0,freeCancel:!1,luxury:!1,image:`./assets/hero_slide_1.jpg`,description:`Villa phong cách Địa Trung Hải tối giản, không gian thanh bình tại Long Hải. Tận hưởng khí trời dịu mát và hồ bơi xanh ngọc.`,amenities:[`Hồ bơi nước mặn`,`Sân BBQ ngoài trời`,`Smart TV 75 inch`,`Bếp gia đình`,`Wifi tốc độ cao`,`Hỗ trợ mua hải sản`]},{id:`mosaic`,name:`Villa Mosaic`,location:`Đà Lạt, Lâm Đồng · Mountain`,city:`Đà Lạt`,rating:4.9,reviews:45,guests:10,beds:5,pool:`Pine Garden & Fireplace`,pricePerNight:68e5,tags:[`Top rated`,`★ Luxury`],instant:!0,freeCancel:!0,luxury:!0,image:`./assets/villa_mosaic_img_1785398954537.jpg`,description:`Biệt thự đồi thông Đà Lạt với tường kính panorama ôm trọn thung lũng sương mù. Có lò sưởi ấm cúng và khu vườn nướng BBQ chill đêm.`,amenities:[`View thung lũng thông`,`Lò sưởi phòng khách`,`Bồn tắm ngâm thảo mộc`,`Vườn tiệc nướng`,`Dịch vụ pha Coffee & Tea`,`Lửa trại ngoài trời`]},{id:`coral`,name:`Villa Coral`,location:`Bãi Ông Lang, Phú Quốc · Beachfront`,city:`Phú Quốc`,rating:5,reviews:12,guests:20,beds:8,pool:`Resort Pool & Lagoon`,pricePerNight:18e6,tags:[`Beachfront`,`★ Luxury`],instant:!1,freeCancel:!0,luxury:!0,image:`./assets/villa_coral_img_1785398966024.jpg`,description:`Đại dinh thự biển siêu sang tại đảo ngọc Phú Quốc. Hồ bơi nối dài ra bãi cát trắng, đầy đủ dịch vụ đầu bếp riêng và quản gia 24/7.`,amenities:[`Đầu bếp riêng`,`Quản gia 24/7`,`Bãi biển ngắm hoàng hôn`,`Xe đón tiễn sân bay`,`Thuyền Kayak & Sup`,`Phòng Sauna & Spa`]},{id:`horizon`,name:`Villa Ocean Horizon`,location:`Bãi Dài, Nha Trang · Oceanfront`,city:`Nha Trang`,rating:4.9,reviews:21,guests:14,beds:6,pool:`Oceanview Infinity Pool`,pricePerNight:145e5,tags:[`Beachfront`,`★ Luxury`],instant:!0,freeCancel:!0,luxury:!0,image:`./assets/hero_slide_2.jpg`,description:`Biệt thự biển ngắm hoàng hôn tuyệt đẹp tại bãi Dài Nha Trang. Kiến trúc giật cấp ấn tượng với hồ bơi vô cực tràn viền.`,amenities:[`View vịnh Nha Trang`,`Hồ bơi tràn bờ 120m²`,`Phòng chiếu phim gia đình`,`Bãi biển riêng`,`Rượu vang chào mừng`,`Quản gia 24/7`]},{id:`jade`,name:`Villa Jade`,location:`Bãi Trước, Vũng Tàu · 100m`,city:`Vũng Tàu`,rating:4.6,reviews:24,guests:14,beds:6,pool:`Pool & Garden View`,pricePerNight:92e5,tags:[`Guest favorite`],instant:!0,freeCancel:!0,luxury:!1,image:`./assets/hero_slide_3.jpg`,description:`Villa sang trọng tọa lạc tại lưng chừng đồi Bãi Trước Vũng Tàu, view ngắm biển và thành phố về đêm cực kỳ lãng mạn.`,amenities:[`Hồ bơi sân thượng`,`View biển & Thành phố`,`Dàn Karaoke hiện đại`,`Bàn bida lỗ`,`Bếp nướng BBQ`,`Đậu xe 3 ô tô`]}],t={blog1:{category:`CẨM NANG HỒ TRÀM`,title:`Top 5 Villa Biển Hồ Tràm Có Đầu Bếp Riêng Đáng Tiền Nhất 2026`,date:`28 Tháng 7, 2026 · 5 min read`,content:`
      <p style="margin-bottom: 1rem; line-height: 1.7;">Hồ Tràm đang trở thành thiên đường nghỉ dưỡng hàng đầu cho các gia đình và nhóm doanh nhân tại TP.HCM. Việc thuê một biệt thự riêng tư sát biển tích hợp dịch vụ Đầu Bếp Chuyên Nghiệp (Private Chef) không chỉ mang lại sự riêng tư tối đa mà còn mang đến trải nghiệm ẩm thực thượng hạng ngay tại bàn ăn villa.</p>
      <h4 style="font-family: var(--font-serif); font-size: 1.2rem; color: var(--primary-emerald); margin: 1.2rem 0 0.6rem 0;">1. Villa Serene Coast Hồ Tràm</h4>
      <p style="margin-bottom: 1rem; line-height: 1.7;">Sở hữu bãi biển riêng và khuôn viên sân vườn 1200m², Villa Serene Coast nổi bật với gói tiệc nướng hải sản BBQ chuẩn 5 sao. Đầu bếp riêng sẽ trực tiếp sơ chế tôm hùm, mực lá tươi sống và chế biến theo yêu cầu của trưởng đoàn.</p>
      <h4 style="font-family: var(--font-serif); font-size: 1.2rem; color: var(--primary-emerald); margin: 1.2rem 0 0.6rem 0;">2. Kinh nghiệm lựa chọn menu ăn uống</h4>
      <p style="line-height: 1.7;">Bạn nên chốt thực đơn với Quản gia Concierge trước 24 giờ check-in để bếp chuẩn bị nguyên liệu hải sản đánh bắt trong ngày tươi ngon nhất.</p>
    `},blog2:{category:`BÍ QUYẾT ĐẶT PHÒNG`,title:`Kinh Nghiệm Thuê Biệt Thự Nguyên Căn Cho Gia Đình 10-15 Người`,date:`25 Tháng 7, 2026 · 4 min read`,content:`
      <p style="margin-bottom: 1rem; line-height: 1.7;">Kỳ nghỉ đoàn đông đa thế hệ đòi hỏi sự cân bằng giữa không gian sinh hoạt chung rộng rãi và sự riêng tư cho người lớn tuổi cũng như trẻ nhỏ.</p>
      <h4 style="font-family: var(--font-serif); font-size: 1.2rem; color: var(--primary-emerald); margin: 1.2rem 0 0.6rem 0;">Các tiêu chí hàng đầu khi chọn Villa gia đình:</h4>
      <ul style="padding-left: 1.2rem; line-height: 1.8; margin-bottom: 1rem;">
        <li>Hồ bơi có khu vực mực nước nông an toàn cho trẻ em (0.8m - 1.2m).</li>
        <li>Phòng ngủ tầng trệt thuận tiện cho ông bà lớn tuổi di chuyển.</li>
        <li>Khu vực bếp gia đình trang bị đầy đủ tủ lạnh dung tích lớn và bếp nướng.</li>
      </ul>
    `},blog3:{category:`TRẢI NGHIỆM WELLNESS`,title:`Bí Quyết Thư Giãn Tối Đa Với Liệu Trình Onsen Khoáng Nóng Tại Villa`,date:`20 Tháng 7, 2026 · 6 min read`,content:`
      <p style="margin-bottom: 1rem; line-height: 1.7;">Ngâm mình trong bồn khoáng nóng thảo mộc Nhật Bản giữa không gian đồi thông se lạnh Đà Lạt là liệu pháp phục hồi sức khỏe tuyệt vời nhất hiện nay.</p>
      <p style="line-height: 1.7;">Tại NORA Villas, dịch vụ chuẩn bị bồn ngâm khoáng nóng thảo mộc Jacuzzi được tích hợp sẵn theo yêu cầu của khách hàng, giúp giảm căng thẳng và cải thiện giấc ngủ sâu.</p>
    `}},n=null,r=`VND`,i=`home`,a=[`azure`,`serene`,`coral`],o=[{cartId:`CART-101`,villaId:`serene`,villaName:`Villa Serene Coast`,city:`Hồ Tràm`,image:`./assets/villa_serene_img_1785398944559.jpg`,checkIn:`2026-08-20`,checkOut:`2026-08-22`,nights:2,guests:10,pricePerNight:125e5,totalPrice:255e5},{cartId:`CART-102`,villaId:`mosaic`,villaName:`Villa Mosaic`,city:`Đà Lạt`,image:`./assets/villa_mosaic_img_1785398954537.jpg`,checkIn:`2026-09-10`,checkOut:`2026-09-12`,nights:2,guests:8,pricePerNight:68e5,totalPrice:141e5}],s=[{id:`TRIP-8492`,villaName:`Villa Azure`,city:`Vũng Tàu`,image:`./assets/villa_azure_img_1785398933026.jpg`,checkIn:`2026-08-12`,checkOut:`2026-08-14`,totalPrice:155e5,guests:10,status:`Confirmed`},{id:`TRIP-3910`,villaName:`Villa Mosaic`,city:`Đà Lạt`,image:`./assets/villa_mosaic_img_1785398954537.jpg`,checkIn:`2026-09-01`,checkOut:`2026-09-03`,totalPrice:141e5,guests:8,status:`Confirmed`},{id:`TRIP-1049`,villaName:`Villa Coral`,city:`Phú Quốc`,image:`./assets/villa_coral_img_1785398966024.jpg`,checkIn:`2026-10-15`,checkOut:`2026-10-18`,totalPrice:545e5,guests:16,status:`Upcoming`}],c=`all`,l=`all`,u=0,d={"Vũng Tàu":{lat:`10.3460`,lng:`107.0843`,title:`Biệt thự Bãi Sau & Bãi Trước Vũng Tàu`,badge:`VŨNG TÀU`,desc:`Gần 48 khu villa sát biển có hồ bơi vô cực, cách TP.HCM chỉ 2 giờ di chuyển.`,count:`48 Villa`},"Hồ Tràm":{lat:`10.4633`,lng:`107.3916`,title:`Resort Villa Hồ Tràm - Bà Rịa`,badge:`HỒ TRÀM`,desc:`Thiên đường resort villa biển riêng tư với bãi cát trắng mịn màng.`,count:`23 Villa`},"Đà Lạt":{lat:`11.9404`,lng:`108.4583`,title:`Biệt thự Đồi Thông Đà Lạt`,badge:`ĐÀ LẠT`,desc:`Không gian nghỉ dưỡng ngàn hoa giữa rừng thông ngút ngàn và khí hậu se lạnh.`,count:`31 Villa`},"Phú Quốc":{lat:`10.2899`,lng:`103.9840`,title:`Đại Dinh Thự Biển Đảo Ngọc Phú Quốc`,badge:`PHÚ QUỐC`,desc:`Dinh thự sang trọng bên biển ngắm hoàng hôn ngọc bích đẹp nhất Việt Nam.`,count:`42 Villa`},"Nha Trang":{lat:`12.2388`,lng:`109.1967`,title:`Biệt thự Vịnh Biển Nha Trang`,badge:`NHA TRANG`,desc:`Tầm nhìn ôm trọn vịnh biển Nha Trang quyến rũ với tiện ích chuẩn 6 sao.`,count:`19 Villa`}};document.addEventListener(`DOMContentLoaded`,()=>{f(),L(),R(),B(),V(),H(),x(),U(),K(),Z(),F(),Y(),k(),E(),_(),h(),m(),T(),M(),ee(),q(),J(),z(),S(),A()});function f(){document.querySelectorAll(`.btn-nav-route`).forEach(e=>{e.addEventListener(`click`,t=>{let n=e.dataset.route;n&&p(n)})})}function p(e){i=e,document.querySelectorAll(`.page-view`).forEach(e=>{e.classList.remove(`active`)});let t=document.getElementById(`${e}View`);t&&t.classList.add(`active`),document.querySelectorAll(`.main-nav .nav-link`).forEach(t=>{t.classList.remove(`active`),t.dataset.route===e&&t.classList.add(`active`)});let n=document.getElementById(`mobileDrawer`);n&&n.classList.remove(`open`),window.scrollTo({top:0,behavior:`smooth`})}function m(){let e=document.getElementById(`blogReaderModal`),n=document.getElementById(`blogModalCategory`),r=document.getElementById(`blogModalBody`),i=document.getElementById(`closeBlogModalBtn`);document.querySelectorAll(`.btn-read-blog`).forEach(i=>{i.addEventListener(`click`,()=>{let a=t[i.dataset.blogid];a&&(n&&(n.textContent=a.category),r&&(r.innerHTML=`
          <h2 style="font-family: var(--font-serif); font-size: 1.8rem; color: var(--text-main); margin-bottom: 0.5rem; line-height: 1.3;">${a.title}</h2>
          <span style="font-size: 0.8rem; color: var(--text-muted); display: block; margin-bottom: 1.5rem;"><i class="fa-regular fa-calendar"></i> ${a.date}</span>
          ${a.content}
        `),e&&e.classList.add(`active`))})}),i&&e&&(i.addEventListener(`click`,()=>e.classList.remove(`active`)),e.addEventListener(`click`,t=>{t.target===e&&e.classList.remove(`active`)}))}function h(){let e=document.getElementById(`expDetailModal`),t=document.getElementById(`expModalTitle`),n=document.getElementById(`expModalDesc`),r=document.getElementById(`closeExpDetailBtn`),i=document.getElementById(`btnExpModalContact`);document.querySelectorAll(`.btn-open-exp-modal`).forEach(r=>{r.addEventListener(`click`,()=>{let i=r.dataset.title,a=r.dataset.desc;t&&(t.textContent=i),n&&(n.textContent=a),e&&e.classList.add(`active`)})}),r&&e&&(r.addEventListener(`click`,()=>e.classList.remove(`active`)),e.addEventListener(`click`,t=>{t.target===e&&e.classList.remove(`active`)})),i&&i.addEventListener(`click`,()=>{e&&e.classList.remove(`active`),C(`Đã ghi nhận yêu cầu trải nghiệm tiện ích! Quản gia riêng sẽ liên hệ bạn ngay.`,`Resort Concierge`,`success`)})}var g=`qr`;function _(){let e=document.getElementById(`cartCheckoutModal`),t=document.getElementById(`closeCartCheckoutBtn`),n=document.getElementById(`btnCkGotoStep2`),r=document.getElementById(`btnCkBackStep1`),i=document.getElementById(`btnCkGotoStep3`),a=document.getElementById(`btnCkBackStep2`),c=document.getElementById(`btnCkConfirmPayment`),l=document.getElementById(`ckNeedVatInvoice`),u=document.getElementById(`vatFieldsBox`),d=document.querySelectorAll(`.pay-tab-btn`),f=document.getElementById(`btnCopyAcc`),p=document.getElementById(`btnCopyMemo`);t&&e&&(t.addEventListener(`click`,()=>e.classList.remove(`active`)),e.addEventListener(`click`,t=>{t.target===e&&e.classList.remove(`active`)})),l&&u&&l.addEventListener(`change`,()=>{u.style.display=l.checked?`block`:`none`}),d.forEach(e=>{e.addEventListener(`click`,()=>{d.forEach(e=>e.classList.remove(`active`)),e.classList.add(`active`),g=e.dataset.paymethod,document.getElementById(`payViewQr`).style.display=g===`qr`?`flex`:`none`,document.getElementById(`payViewCard`).style.display=g===`card`?`block`:`none`,document.getElementById(`payViewDeposit`).style.display=g===`deposit`?`block`:`none`})}),f&&f.addEventListener(`click`,()=>{navigator.clipboard.writeText(`0901234567`),C(`Đã sao chép Số tài khoản MBBank!`,`Copy`,`info`)}),p&&p.addEventListener(`click`,()=>{navigator.clipboard.writeText(`NORACART84920`),C(`Đã sao chép Nội dung chuyển khoản!`,`Copy`,`info`)}),n&&n.addEventListener(`click`,()=>y(2)),r&&r.addEventListener(`click`,()=>y(1)),i&&i.addEventListener(`click`,()=>y(3)),a&&a.addEventListener(`click`,()=>y(2)),c&&c.addEventListener(`click`,()=>{if(o.length===0)return;let t=document.getElementById(`ckGuestName`).value||`Khách Hàng NORA`;o.forEach(e=>{s.unshift({id:`TRIP-`+Math.floor(1e3+Math.random()*9e3),villaName:e.villaName,city:e.city,image:e.image,checkIn:e.checkIn,checkOut:e.checkOut,totalPrice:e.totalPrice,guests:e.guests,status:`Confirmed`})}),o=[],A(),e.classList.remove(`active`),C(`Đã xác nhận đặt toàn bộ giỏ hàng cho ${t}! Voucher Check-in đã gửi về Email.`,`Thanh Toán Thành Công`,`success`),N(),document.getElementById(`tripsModal`)?.classList.add(`active`)})}function v(){if(o.length===0){C(`Giỏ hàng của bạn đang trống. Hãy thêm villa trước khi đặt!`,`Giỏ Hàng`,`info`);return}b(),y(1),document.getElementById(`cartModal`)?.classList.remove(`active`),document.getElementById(`cartCheckoutModal`)?.classList.add(`active`)}function y(e){document.querySelectorAll(`.ck-step-node`).forEach((t,n)=>{n+1<=e?t.classList.add(`active`):t.classList.remove(`active`)}),document.querySelectorAll(`.ck-step-frame`).forEach((t,n)=>{n+1===e?t.classList.add(`active`):t.classList.remove(`active`)})}function b(){let e=document.getElementById(`ckVillasReviewList`),t=document.getElementById(`ckSubtotalVal`),n=document.getElementById(`ckGrandTotalVal`),r=document.getElementById(`qrAmountVal`),i=document.getElementById(`deposit30Val`),a=document.getElementById(`deposit70Val`),s=document.getElementById(`ckPromoDiscountRow`);if(!e)return;let c=0;e.innerHTML=o.map(e=>(c+=e.totalPrice,`
      <div class="ck-villa-item">
        <img src="${e.image}" alt="${e.villaName}">
        <div class="ck-villa-details">
          <h4>${e.villaName} (${e.city})</h4>
          <p><i class="fa-solid fa-calendar"></i> ${e.checkIn} ➔ ${e.checkOut} (${e.nights} đêm) · ${e.guests} người</p>
          <span style="font-weight: 700; color: var(--primary-emerald);">${w(e.totalPrice)}</span>
        </div>
      </div>
    `)).join(``);let l=c+1e6;s&&(s.style.display=`none`),t&&(t.textContent=w(c)),n&&(n.textContent=w(l)),r&&(r.textContent=w(l));let u=l*.3,d=l*.7;i&&(i.textContent=w(u)),a&&(a.textContent=w(d))}function x(){document.querySelectorAll(`.btn-mega-filter`).forEach(e=>{e.addEventListener(`click`,()=>{p(`home`),c=e.dataset.cat,V(),document.getElementById(`villas`)?.scrollIntoView({behavior:`smooth`})})}),document.querySelectorAll(`.btn-mega-bed`).forEach(e=>{e.addEventListener(`click`,()=>{p(`home`),document.querySelectorAll(`.btn-mega-bed`).forEach(e=>e.classList.remove(`active`)),e.classList.add(`active`),u=parseInt(e.dataset.beds)||0,V(),document.getElementById(`villas`)?.scrollIntoView({behavior:`smooth`})})}),document.querySelectorAll(`.btn-mega-book-preview`).forEach(e=>{e.addEventListener(`click`,()=>{Q(e.dataset.id)})}),document.querySelectorAll(`.dest-item-chip`).forEach(e=>{e.addEventListener(`click`,()=>{p(`home`);let t=e.dataset.location;G(t)})})}function S(){let e=document.getElementById(`recentCarouselTrack`),t=document.getElementById(`btnRecentPrev`),n=document.getElementById(`btnRecentNext`);e&&(t&&t.addEventListener(`click`,()=>{e.scrollBy({left:-300,behavior:`smooth`})}),n&&n.addEventListener(`click`,()=>{e.scrollBy({left:300,behavior:`smooth`})}),document.querySelectorAll(`.recent-card-item`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.villa;Q(t)})}))}function C(e,t=`NORA Villas`,n=`success`){let r=document.getElementById(`toastContainer`);if(!r)return;let i=document.createElement(`div`);i.className=`toast-card ${n}`,i.innerHTML=`
    <div class="toast-icon">
      <i class="fa-solid ${n===`success`?`fa-circle-check`:`fa-circle-info`}"></i>
    </div>
    <div class="toast-content">
      <div class="toast-title">${t}</div>
      <div class="toast-message">${e}</div>
    </div>
  `,r.appendChild(i),setTimeout(()=>{i.style.animation=`fadeToastOut 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards`,setTimeout(()=>i.remove(),400)},3500)}function w(e){if(r===`USD`){let t=Math.round(e*41e-6);return`$`+new Intl.NumberFormat(`en-US`).format(t)}if(r===`EUR`){let t=Math.round(e*38e-6);return`€`+new Intl.NumberFormat(`de-DE`).format(t)}return new Intl.NumberFormat(`vi-VN`).format(e)+` ₫`}function T(){let e=document.getElementById(`currencySelect`);e&&e.addEventListener(`change`,e=>{r=e.target.value,V(),C(`Đã chuyển đổi đơn vị tiền tệ sang ${r}`,`Currency Switcher`,`info`)})}function E(){let e=document.getElementById(`btnOpenCart`),t=document.getElementById(`mobileCart`),n=document.getElementById(`cartModal`),r=document.getElementById(`closeCartBtn`),i=document.getElementById(`btnCartCheckout`);function a(){D(),n&&n.classList.add(`active`)}function o(){n&&n.classList.remove(`active`)}e&&e.addEventListener(`click`,a),t&&t.addEventListener(`click`,a),r&&r.addEventListener(`click`,o),n&&n.addEventListener(`click`,e=>{e.target===n&&o()}),i&&i.addEventListener(`click`,()=>{v()})}function D(){let e=document.getElementById(`cartListContainer`),t=document.getElementById(`cartTotalSum`),n=document.getElementById(`cartModalCount`);if(!e)return;if(A(),n&&(n.textContent=o.length),o.length===0){e.innerHTML=`
      <div style="text-align: center; color: var(--text-muted); padding: 2.5rem 0;">
        <i class="fa-solid fa-cart-flatbed" style="font-size: 2.5rem; margin-bottom: 1rem; color: var(--text-gold);"></i>
        <p>Giỏ hàng đặt villa của bạn đang trống.</p>
        <button class="btn-primary-small" id="btnExploreFromCart" style="margin-top: 1rem;">Khám phá Biệt thự</button>
      </div>
    `,t&&(t.textContent=w(0)),document.getElementById(`btnExploreFromCart`)?.addEventListener(`click`,()=>{document.getElementById(`cartModal`)?.classList.remove(`active`),p(`home`),document.getElementById(`villas`)?.scrollIntoView({behavior:`smooth`})});return}let r=0;e.innerHTML=o.map(e=>(r+=e.totalPrice,`
      <div style="display: flex; gap: 1rem; align-items: center; background: #F8FAFC; border: 1px solid var(--border-glass); padding: 0.9rem; border-radius: var(--radius-md); margin-bottom: 0.9rem;">
        <img src="${e.image}" alt="${e.villaName}" style="width: 85px; height: 85px; object-fit: cover; border-radius: var(--radius-sm);">
        <div style="flex-grow: 1;">
          <h4 style="font-family: var(--font-serif); font-size: 1.15rem; color: var(--text-main);">${e.villaName}</h4>
          <p style="font-size: 0.82rem; color: var(--text-muted);"><i class="fa-solid fa-calendar"></i> ${e.checkIn} ➔ ${e.checkOut} (${e.nights} đêm)</p>
          <span style="color: var(--text-gold); font-weight: 700; font-size: 0.92rem;">${w(e.totalPrice)}</span>
        </div>
        <button class="btn-cancel-trip btn-remove-cart" data-cartid="${e.cartId}" title="Remove from cart">
          <i class="fa-solid fa-trash"></i>
        </button>
      </div>
    `)).join(``),t&&(t.textContent=w(r)),document.querySelectorAll(`.btn-remove-cart`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.cartid;o=o.filter(e=>e.cartId!==t),D(),C(`Đã xoá biệt thự khỏi giỏ hàng.`,`Giỏ hàng`,`info`)})})}function O(t){let n=e.find(e=>e.id===t);if(!n)return;let r={cartId:`CART-`+Math.floor(1e3+Math.random()*9e3),villaId:n.id,villaName:n.name,city:n.city,image:n.image,checkIn:`2026-08-15`,checkOut:`2026-08-17`,nights:2,guests:n.guests,pricePerNight:n.pricePerNight,totalPrice:n.pricePerNight*2+5e5};o.unshift(r),A(),C(`Đã thêm [${n.name}] vào Giỏ Hàng Đặt Villa!`,`Giỏ Hàng`,`success`)}function k(){let e=document.getElementById(`btnOpenWishlist`),t=document.getElementById(`mobileWishlist`),n=document.getElementById(`wishlistModal`),r=document.getElementById(`closeWishlistBtn`);function i(){j(),n&&n.classList.add(`active`)}function a(){n&&n.classList.remove(`active`)}e&&e.addEventListener(`click`,i),t&&t.addEventListener(`click`,i),r&&r.addEventListener(`click`,a),n&&n.addEventListener(`click`,e=>{e.target===n&&a()})}function A(){let e=document.getElementById(`wishlistCount`),t=document.getElementById(`wishlistModalCount`);e&&(e.textContent=a.length),t&&(t.textContent=a.length);let n=document.getElementById(`cartCount`),r=document.getElementById(`mobileCartCount`);n&&(n.textContent=o.length),r&&(r.textContent=o.length);let i=document.getElementById(`tripsHeaderCount`),c=document.getElementById(`tripsModalCount`);i&&(i.textContent=s.length),c&&(c.textContent=s.length)}function j(){let t=document.getElementById(`wishlistContainer`);if(!t)return;let n=e.filter(e=>a.includes(e.id));if(A(),n.length===0){t.innerHTML=`<p style="text-align: center; color: var(--text-muted); padding: 2rem;">Chưa có biệt thự nào trong danh sách yêu thích.</p>`;return}t.innerHTML=n.map(e=>`
    <div style="display: flex; gap: 1rem; align-items: center; background: #F8FAFC; border: 1px solid var(--border-glass); padding: 0.8rem; border-radius: var(--radius-md); margin-bottom: 0.8rem;">
      <img src="${e.image}" alt="${e.name}" style="width: 80px; height: 80px; object-fit: cover; border-radius: var(--radius-sm);">
      <div style="flex-grow: 1;">
        <h4 style="font-family: var(--font-serif); font-size: 1.1rem; color: var(--text-main);">${e.name}</h4>
        <p style="font-size: 0.8rem; color: var(--text-muted);">${e.location}</p>
        <span style="color: var(--text-gold); font-weight: 700; font-size: 0.9rem;">${w(e.pricePerNight)} /night</span>
      </div>
      <button class="btn-primary-small btn-book-from-wishlist" data-id="${e.id}">Book</button>
    </div>
  `).join(``),document.querySelectorAll(`.btn-book-from-wishlist`).forEach(e=>{e.addEventListener(`click`,()=>{document.getElementById(`wishlistModal`)?.classList.remove(`active`),Q(e.dataset.id)})})}function M(){let e=document.getElementById(`btnOpenTrips`),t=document.getElementById(`mobileMyTrips`),n=document.getElementById(`tripsModal`),r=document.getElementById(`closeTripsBtn`);function i(){N(),n&&n.classList.add(`active`)}function a(){n&&n.classList.remove(`active`)}e&&e.addEventListener(`click`,i),t&&t.addEventListener(`click`,i),r&&r.addEventListener(`click`,a),n&&n.addEventListener(`click`,e=>{e.target===n&&a()})}function N(){let e=document.getElementById(`tripsListContainer`),t=document.getElementById(`tripsModalCount`);if(e){if(A(),t&&(t.textContent=s.length),s.length===0){e.innerHTML=`
      <div style="text-align: center; color: var(--text-muted); padding: 2.5rem 0;">
        <i class="fa-solid fa-suitcase-rolling" style="font-size: 2.5rem; margin-bottom: 1rem; color: var(--text-gold);"></i>
        <p>Bạn chưa có chuyến đi nào được đặt giữ chỗ.</p>
        <button class="btn-primary-small" id="btnExploreVillasFromTrips" style="margin-top: 1rem;">Khám phá Villa ngay</button>
      </div>
    `,document.getElementById(`btnExploreVillasFromTrips`)?.addEventListener(`click`,()=>{document.getElementById(`tripsModal`)?.classList.remove(`active`),p(`home`),document.getElementById(`villas`)?.scrollIntoView({behavior:`smooth`})});return}e.innerHTML=s.map(e=>`
    <div style="background: #F8FAFC; border: 1px solid var(--border-glass); padding: 1.2rem; border-radius: var(--radius-md); margin-bottom: 1rem; position: relative;">
      <div style="display: flex; gap: 1rem; align-items: center; margin-bottom: 0.8rem;">
        <img src="${e.image||`./assets/villa_azure_img_1785398933026.jpg`}" alt="${e.villaName}" style="width: 75px; height: 75px; object-fit: cover; border-radius: var(--radius-sm);">
        <div style="flex-grow: 1;">
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <h4 style="font-family: var(--font-serif); font-size: 1.2rem; color: var(--text-main);">${e.villaName}</h4>
            <span class="badge-instant">${e.status}</span>
          </div>
          <p style="font-size: 0.82rem; color: var(--text-muted); margin-top: 0.2rem;"><i class="fa-solid fa-location-dot"></i> ${e.city} · ${e.guests||10} người</p>
          <p style="font-size: 0.82rem; color: var(--text-muted);"><i class="fa-solid fa-calendar"></i> ${e.checkIn} ➔ ${e.checkOut}</p>
        </div>
      </div>

      <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid var(--border-glass); padding-top: 0.8rem; margin-top: 0.5rem;">
        <div>
          <span style="font-size: 0.78rem; color: var(--text-muted); display: block;">Mã chuyến đi: <strong>${e.id}</strong></span>
          <span style="color: var(--text-gold); font-weight: 700; font-size: 1.05rem;">${w(e.totalPrice)}</span>
        </div>

        <button class="btn-cancel-trip btn-trigger-cancel-trip" data-tripid="${e.id}" data-villaname="${e.villaName}">
          <i class="fa-solid fa-circle-xmark"></i> Hủy đặt phòng
        </button>
      </div>
    </div>
  `).join(``),document.querySelectorAll(`.btn-trigger-cancel-trip`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.tripid,n=e.dataset.villaname;P(t,n)})})}}function P(e,t){s=s.filter(t=>t.id!==e),A(),N(),C(`Đã hủy giữ chỗ thành công cho [${t}] (Mã ${e}). Khoản tiền cọc sẽ được tự động hoàn lại trong 24h.`,`Hủy đặt biệt thự`,`info`)}function F(){let e=document.getElementById(`authModal`),t=document.getElementById(`btnSignIn`),r=document.getElementById(`mobileSignIn`),i=document.getElementById(`closeAuthBtn`),a=document.getElementById(`btnAuthBackHome`),o=document.getElementById(`togglePasswordBtn`),s=document.getElementById(`authPassword`),c=document.getElementById(`passwordEyeIcon`),l=document.getElementById(`signInForm`),u=document.getElementById(`btnGoogleLogin`),d=document.getElementById(`btnForgotPassword`);function f(){e&&e.classList.add(`active`)}function p(){e&&e.classList.remove(`active`)}t&&t.addEventListener(`click`,f),r&&r.addEventListener(`click`,f),i&&i.addEventListener(`click`,p),a&&a.addEventListener(`click`,e=>{e.preventDefault(),p()}),e&&e.addEventListener(`click`,t=>{t.target===e&&p()}),o&&s&&c&&o.addEventListener(`click`,()=>{s.type===`password`?(s.type=`text`,c.classList.remove(`fa-eye`),c.classList.add(`fa-eye-slash`)):(s.type=`password`,c.classList.remove(`fa-eye-slash`),c.classList.add(`fa-eye`))}),l&&l.addEventListener(`submit`,e=>{e.preventDefault();let t=document.getElementById(`authEmail`).value,r=t.split(`@`)[0]||`User`;n={name:r.charAt(0).toUpperCase()+r.slice(1),email:t},I(),p(),C(`Chào mừng ${n.name} quay trở lại!`,`Member Access`,`success`)}),u&&u.addEventListener(`click`,()=>{n={name:`Lê Minh Khoa`,email:`khoa.le@noravilla.com`},I(),p(),C(`Đăng nhập tài khoản Google thành công!`,`Google Auth`,`success`)}),d&&d.addEventListener(`click`,e=>{e.preventDefault(),C(`Liên kết khôi phục mật khẩu đã được gửi về email của bạn.`,`Quên mật khẩu`,`info`)})}function I(){let e=document.getElementById(`btnSignIn`);e&&n&&(e.innerHTML=`<i class="fa-solid fa-circle-user" style="color: #FEF08A; font-size: 1.1rem;"></i> <span>${n.name}</span>`,e.style.fontWeight=`600`)}function L(){let e=document.querySelectorAll(`.hero-slide`),t=document.querySelectorAll(`.hero-slider-dots .dot`),n=document.getElementById(`slidePrevBtn`),r=document.getElementById(`slideNextBtn`);if(e.length===0)return;let i=0,a=null;function o(n){e.forEach(e=>e.classList.remove(`active`)),t.forEach(e=>e.classList.remove(`active`)),i=(n+e.length)%e.length,e[i].classList.add(`active`),t[i]&&t[i].classList.add(`active`)}function s(){c(),a=setInterval(()=>{o(i+1)},4e3)}function c(){a&&clearInterval(a)}n&&n.addEventListener(`click`,()=>{o(i-1),s()}),r&&r.addEventListener(`click`,()=>{o(i+1),s()}),t.forEach(e=>{e.addEventListener(`click`,()=>{o(parseInt(e.dataset.index)),s()})}),s()}function R(){let e=document.getElementById(`mainHeader`);if(!e)return;let t=()=>{window.scrollY>40?e.classList.add(`scrolled`):e.classList.remove(`scrolled`)};window.addEventListener(`scroll`,t),t()}function z(){document.querySelectorAll(`a[href^="#"]`).forEach(e=>{e.addEventListener(`click`,function(e){let t=this.getAttribute(`href`);if(t===`#`||t===`#about`||t===`#blog`||t===`#home`)return;let n=document.querySelector(t);if(n&&i===`home`){e.preventDefault();let t=n.getBoundingClientRect().top+window.pageYOffset-80;window.scrollTo({top:t,behavior:`smooth`})}})})}function B(){let e=document.getElementById(`mobileMenuBtn`),t=document.getElementById(`closeDrawerBtn`),n=document.getElementById(`mobileDrawer`);e&&t&&n&&(e.addEventListener(`click`,()=>n.classList.add(`open`)),t.addEventListener(`click`,()=>n.classList.remove(`open`)))}function V(t=null){let n=document.getElementById(`villaGridContainer`),r=document.getElementById(`resultsCountLabel`);if(!n)return;let i=Array.from(document.querySelectorAll(`input[name="price"]:checked`)).map(e=>e.value),o=Array.from(document.querySelectorAll(`input[name="amenity"]:checked`)).map(e=>e.value),s=Array.from(document.querySelectorAll(`input[name="bookingType"]:checked`)).map(e=>e.value),d=t||e.filter(e=>{let t=!0;c===`beachfront`&&(t=e.location.toLowerCase().includes(`beachfront`)||e.tags.includes(`Beachfront`)),c===`pool`&&(t=e.pool.toLowerCase().includes(`pool`)),c===`instant`&&(t=e.instant),c===`families`&&(t=e.guests>=10),c===`large`&&(t=e.guests>=16),c===`quiet`&&(t=e.city===`Đà Lạt`||e.city===`Long Hải`);let n=!0;l===`beachfront`&&(n=e.location.toLowerCase().includes(`beachfront`)||e.tags.includes(`Beachfront`)),l===`toprated`&&(n=e.rating>=4.8),l===`luxury`&&(n=e.luxury||e.pricePerNight>=1e7);let r=!0;i.length>0&&(r=i.some(t=>t===`under5m`?e.pricePerNight<5e6:t===`5m10m`?e.pricePerNight>=5e6&&e.pricePerNight<=1e7:t===`10m20m`?e.pricePerNight>=1e7&&e.pricePerNight<=2e7:t===`over20m`&&e.pricePerNight>2e7));let a=e.beds>=u,d=!0;o.length>0&&(d=o.every(t=>t===`pool`?e.pool.toLowerCase().includes(`pool`):t===`bbq`?e.amenities.some(e=>e.toLowerCase().includes(`bbq`)):t===`karaoke`?e.amenities.some(e=>e.toLowerCase().includes(`karaoke`)):t===`pet`?e.tags.includes(`Pet friendly`)||e.amenities.some(e=>e.toLowerCase().includes(`pet`)):t!==`event`||e.tags.includes(`Event villas`)||e.amenities.some(e=>e.toLowerCase().includes(`tiệc`)||e.toLowerCase().includes(`sân vườn`))));let f=!0;return s.length>0&&(f=s.every(t=>t===`instant`?e.instant===!0:t!==`freeCancel`||e.freeCancel===!0)),t&&n&&r&&a&&d&&f});if(r&&(r.textContent=`Showing ${d.length} premium ${d.length===1?`villa`:`villas`}`),d.length===0){n.innerHTML=`
      <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 0; color: var(--text-muted);">
        <i class="fa-solid fa-house-crack" style="font-size: 3rem; margin-bottom: 1rem; color: var(--text-gold);"></i>
        <h3>Không tìm thấy biệt thự phù hợp với bộ lọc</h3>
        <p>Thử bỏ chọn một số tiêu chí hoặc bấm <strong>Reset all</strong> để xem toàn bộ biệt thự.</p>
        <button class="btn-primary-small" id="btnResetFilters" style="margin-top: 1rem;">Reset all filters</button>
      </div>
    `,document.getElementById(`btnResetFilters`)?.addEventListener(`click`,W);return}n.innerHTML=d.map(e=>{let t=a.includes(e.id);return`
      <div class="villa-card" data-id="${e.id}">
        <div class="villa-img-wrapper">
          <img src="${e.image}" alt="${e.name}" loading="lazy">
          <div class="villa-badge-top">
            ${e.tags.map(e=>`<span class="badge-curated">${e}</span>`).join(``)}
          </div>
          <button class="btn-wishlist ${t?`active`:``}" data-id="${e.id}" title="Save to wishlist">
            <i class="${t?`fa-solid`:`fa-regular`} fa-heart" style="${t?`color: #E74C3C;`:``}"></i>
          </button>
          <button class="btn-tour-badge btn-open-360" data-name="${e.name}"><i class="fa-solid fa-street-view"></i> 360° Tour</button>
        </div>

        <div class="villa-info">
          <div class="villa-top-row">
            <h3 class="villa-name">${e.name}</h3>
            <span class="villa-rating">★ ${e.rating} (${e.reviews})</span>
          </div>
          
          <p class="villa-location"><i class="fa-solid fa-location-dot"></i> ${e.location}</p>

          <div class="villa-specs">
            <span><i class="fa-solid fa-users"></i> ${e.guests} guests</span>
            <span>•</span>
            <span><i class="fa-solid fa-bed"></i> ${e.beds} beds</span>
            <span>•</span>
            <span>🏊 ${e.pool.includes(`Pool`)?`Pool`:`Garden`}</span>
          </div>

          <div style="display: flex; gap: 0.4rem; margin-bottom: 1rem;">
            ${e.instant?`<span class="badge-instant">⚡ Instant</span>`:``}
            ${e.freeCancel?`<span class="badge-freecancel">Free cancel</span>`:``}
          </div>

          <div class="villa-bottom-row">
            <div class="villa-price">
              ${w(e.pricePerNight)} <span>/night</span>
            </div>
            <div style="display: flex; gap: 0.4rem;">
              <button class="btn-add-cart" data-id="${e.id}" title="Thêm vào giỏ hàng"><i class="fa-solid fa-cart-plus"></i></button>
              <button class="btn-primary-small btn-view-villa" data-id="${e.id}">Book Now</button>
            </div>
          </div>
        </div>
      </div>
    `}).join(``),document.querySelectorAll(`.btn-add-cart`).forEach(e=>{e.addEventListener(`click`,t=>{t.stopPropagation(),O(e.dataset.id)})}),document.querySelectorAll(`.btn-wishlist`).forEach(e=>{e.addEventListener(`click`,t=>{t.stopPropagation();let n=e.dataset.id;a.includes(n)?(a=a.filter(e=>e!==n),C(`Đã xoá biệt thự khỏi danh sách yêu thích.`,`Wishlist`,`info`)):(a.push(n),C(`Đã lưu biệt thự vào danh sách yêu thích ♡`,`Wishlist`,`success`)),V(),A()})}),document.querySelectorAll(`.btn-open-360`).forEach(e=>{e.addEventListener(`click`,t=>{t.stopPropagation(),X(e.dataset.name)})}),document.querySelectorAll(`.btn-view-villa`).forEach(e=>{e.addEventListener(`click`,t=>{t.stopPropagation(),Q(e.dataset.id)})}),document.querySelectorAll(`.villa-card`).forEach(e=>{e.addEventListener(`click`,()=>{Q(e.dataset.id)})})}function H(){document.querySelectorAll(`.cat-pill`).forEach(e=>{e.addEventListener(`click`,()=>{document.querySelectorAll(`.cat-pill`).forEach(e=>e.classList.remove(`active`)),e.classList.add(`active`),c=e.dataset.cat,V()})}),document.querySelectorAll(`.tab-btn`).forEach(e=>{e.addEventListener(`click`,()=>{document.querySelectorAll(`.tab-btn`).forEach(e=>e.classList.remove(`active`)),e.classList.add(`active`),l=e.dataset.filter,V()})}),document.querySelectorAll(`.dest-card`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.location;G(t)})})}function U(){document.querySelectorAll(`.sidebar-filter-card input[type="checkbox"]`).forEach(e=>{e.addEventListener(`change`,()=>{V()})}),document.querySelectorAll(`#bedroomPillsGroup .bed-pill`).forEach(e=>{e.addEventListener(`click`,()=>{document.querySelectorAll(`#bedroomPillsGroup .bed-pill`).forEach(e=>e.classList.remove(`active`)),e.classList.add(`active`),u=parseInt(e.dataset.beds)||0,V()})}),document.getElementById(`btnResetSidebarFilters`)?.addEventListener(`click`,W)}function W(){document.querySelectorAll(`.sidebar-filter-card input[type="checkbox"]`).forEach(e=>e.checked=!1),document.querySelectorAll(`#bedroomPillsGroup .bed-pill`).forEach(e=>e.classList.remove(`active`)),document.querySelector(`#bedroomPillsGroup .bed-pill[data-beds="0"]`)?.classList.add(`active`),u=0,c=`all`,l=`all`,V(),C(`Đã reset toàn bộ bộ lọc về trạng thái ban đầu.`,`Bộ lọc`,`info`)}function G(t){V(e.filter(e=>e.city.toLowerCase().includes(t.toLowerCase())||e.location.toLowerCase().includes(t.toLowerCase()))),document.getElementById(`villas`).scrollIntoView({behavior:`smooth`})}function K(){let e=document.getElementById(`btnExecuteSearch`);e&&e.addEventListener(`click`,()=>{let e=document.getElementById(`searchDestination`).value;e===`all`?(c=`all`,l=`all`,V(),document.getElementById(`villas`).scrollIntoView({behavior:`smooth`})):G(e)})}function q(){let e=document.querySelectorAll(`.map-loc-btn`),t=document.getElementById(`gmapIframe`),n=document.getElementById(`mapLocBadge`),r=document.getElementById(`mapLocTitle`),i=document.getElementById(`mapLocDesc`),a=document.getElementById(`btnFilterMapCity`),o=`Vũng Tàu`;e.forEach(a=>{a.addEventListener(`click`,()=>{e.forEach(e=>e.classList.remove(`active`)),a.classList.add(`active`);let s=a.dataset.lat,c=a.dataset.lng;o=a.dataset.name,t&&(t.src=`https://maps.google.com/maps?q=${s},${c}&hl=vi&z=12&output=embed`);let l=d[o];l&&(n&&(n.textContent=l.badge),r&&(r.textContent=l.title),i&&(i.textContent=l.desc))})}),a&&a.addEventListener(`click`,()=>{G(o)})}function J(){document.querySelectorAll(`#expAddonGrid .exp-item`).forEach(e=>{e.addEventListener(`click`,()=>{e.classList.toggle(`active`)})}),document.getElementById(`btnPersonalizeStay`)?.addEventListener(`click`,()=>{let e=Array.from(document.querySelectorAll(`#expAddonGrid .exp-item.active`)).map(e=>e.dataset.addon);e.length>0?C(`Đã lưu ${e.length} dịch vụ Concierge tùy chỉnh (${e.join(`, `)}).`,`Personalized Experience`,`success`):C(`Vui lòng chọn ít nhất 1 trải nghiệm concierge để cá nhân hóa kỳ nghỉ.`,`Bespoke Concierge`,`info`)})}function Y(){let e=document.getElementById(`tour360Modal`),t=document.getElementById(`closeTourBtn`);t&&e&&(t.addEventListener(`click`,()=>e.classList.remove(`active`)),e.addEventListener(`click`,t=>{t.target===e&&e.classList.remove(`active`)}))}function X(e){let t=document.getElementById(`tour360Modal`),n=document.getElementById(`tourVillaTitle`);t&&(n&&(n.textContent=`${e} — 360° Virtual Walkthrough`),t.classList.add(`active`))}function Z(){let e=document.getElementById(`villaModal`),t=document.getElementById(`closeModalBtn`);t&&e&&(t.addEventListener(`click`,()=>e.classList.remove(`active`)),e.addEventListener(`click`,t=>{t.target===e&&e.classList.remove(`active`)}))}function Q(t){let n=e.find(e=>e.id===t);if(!n)return;let r=document.getElementById(`villaModal`),i=document.getElementById(`modalDynamicBody`);i.innerHTML=`
    <div class="modal-villa-hero">
      <img src="${n.image}" alt="${n.name}">
    </div>

    <div class="modal-villa-grid">
      <div class="modal-left">
        <h2 class="modal-villa-title">${n.name}</h2>
        <p class="modal-villa-location"><i class="fa-solid fa-location-dot"></i> ${n.location} &mdash; <strong>★ ${n.rating}</strong> (${n.reviews} đánh giá)</p>
        
        <p class="modal-villa-desc">${n.description}</p>

        <span class="amenities-heading">✦ Tiện ích biệt thự cao cấp</span>
        <div class="modal-amenities">
          ${n.amenities.map(e=>`<div class="amenity-item"><i class="fa-solid fa-circle-check"></i> ${e}</div>`).join(``)}
        </div>
      </div>

      <div class="modal-right">
        <div class="booking-box">
          <div class="booking-box-price">
            ${w(n.pricePerNight)}
            <span>/đêm &bull; Chuẩn 6 khách</span>
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
                <span id="subtotalPrice">${w(n.pricePerNight*2)}</span>
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
  `;let a=document.getElementById(`mCheckIn`),o=document.getElementById(`mCheckOut`),c=document.getElementById(`mGuestCount`),l=document.getElementById(`subtotalPrice`),u=document.getElementById(`guestSurchargePrice`),d=document.getElementById(`totalPrice`),f=document.getElementById(`btnModalAddToCart`);function p(){let e=new Date(a.value),t=new Date(o.value),r=Math.max(1,Math.round((t-e)/(1e3*60*60*24)));isNaN(r)&&(r=2);let i=parseInt(c.value)||10,s=Math.max(0,i-6),f=s*25e4*r,p=n.pricePerNight*r,m=p+f+5e5;return l.textContent=`${w(p)} (${r} đêm)`,s>0?(u.textContent=`+${w(f)} (${s} khách x 250k/đêm)`,u.style.color=`var(--text-gold)`):(u.textContent=`Miễn phí (${i} khách chuẩn)`,u.style.color=`#166534`),d.textContent=w(m),{nights:r,selectedGuests:i,extraGuests:s,totalExtraGuestSurcharge:f,finalTotal:m}}a.addEventListener(`change`,p),o.addEventListener(`change`,p),c.addEventListener(`change`,p),p(),f&&f.addEventListener(`click`,()=>{O(n.id),r.classList.remove(`active`)}),document.getElementById(`modalBookingForm`).addEventListener(`submit`,e=>{e.preventDefault();let{nights:t,selectedGuests:i,extraGuests:c,finalTotal:l}=p(),u={id:`TRIP-`+Math.floor(1e3+Math.random()*9e3),villaName:n.name,city:n.city,image:n.image,checkIn:a.value,checkOut:o.value,nights:t,guests:i,extraGuests:c,totalPrice:l,status:`Confirmed`};s.unshift(u),A(),r.classList.remove(`active`),$(u)}),r.classList.add(`active`)}function $(e){let t=document.getElementById(`successModal`),n=document.getElementById(`successModalContent`);!t||!n||(n.innerHTML=`
    <div class="animated-check-circle">
      <i class="fa-solid fa-check"></i>
    </div>
    
    <span class="success-eyebrow">✦ RESERVATION CONFIRMED ✦</span>
    <h2 class="success-title">Đặt Biệt Thự Thành Công!</h2>
    <p class="success-sub">Cảm ơn bạn đã lựa chọn <strong>NORA Villas</strong>. Quản gia cá nhân sẽ liên hệ hỗ trợ bạn trong 15 phút.</p>

    <div class="booking-receipt-box">
      <div class="receipt-row">
        <span>Biệt thự nghỉ dưỡng</span>
        <span>${e.villaName} (${e.city})</span>
      </div>
      <div class="receipt-row">
        <span>Mã giữ chỗ</span>
        <span class="badge-instant" style="font-size: 0.85rem;">${e.id}</span>
      </div>
      <div class="receipt-row">
        <span>Thời gian lưu trú</span>
        <span>${e.checkIn} ➔ ${e.checkOut} (${e.nights} đêm)</span>
      </div>
      <div class="receipt-row">
        <span>Số lượng khách</span>
        <span>${e.guests} người ${e.extraGuests>0?`(+${e.extraGuests} khách phụ thu)`:``}</span>
      </div>
      <div class="receipt-row">
        <span>Trạng thái</span>
        <span style="color: #166534; font-weight: 700;"><i class="fa-solid fa-circle-check"></i> Confirmed & Saved</span>
      </div>
      <div class="receipt-row">
        <span>Tổng thanh toán toàn bộ</span>
        <span class="receipt-total-val">${w(e.totalPrice)}</span>
      </div>
    </div>

    <div class="success-actions-row">
      <button class="btn-primary" id="btnViewTripsFromSuccess">
        <i class="fa-solid fa-suitcase"></i> Xem My Trips (${s.length})
      </button>
      <button class="btn-outline" id="btnCloseSuccessModal" style="margin-top: 0;">
        Hoàn tất
      </button>
    </div>
  `,document.getElementById(`btnViewTripsFromSuccess`)?.addEventListener(`click`,()=>{t.classList.remove(`active`),N(),document.getElementById(`tripsModal`)?.classList.add(`active`)}),document.getElementById(`btnCloseSuccessModal`)?.addEventListener(`click`,()=>{t.classList.remove(`active`)}),document.getElementById(`closeSuccessBtn`)?.addEventListener(`click`,()=>{t.classList.remove(`active`)}),t.classList.add(`active`))}function ee(){let e=document.getElementById(`langVi`),t=document.getElementById(`langEn`);e&&t&&(e.addEventListener(`click`,()=>{e.classList.add(`active`),t.classList.remove(`active`),C(`Đã chuyển ngôn ngữ sang Tiếng Việt`,`Language`,`info`)}),t.addEventListener(`click`,()=>{t.classList.add(`active`),e.classList.remove(`active`),C(`Language switched to English`,`Language`,`info`)}))}