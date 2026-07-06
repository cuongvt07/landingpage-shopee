// Flexible data definition for Feelex Hold On 10ml landing page
window.LANDING_PAGE_DATA = {
    product: {
        name: "Phao Cứu Hộ Tự Động VibeCar",
        brand: "VibeCar",
        capacity: "20 × 10 cm (gấp gọn)",
        expiry: "Bảo hành 12 tháng",
        origin: "Chính hãng",
        weight: "~600 g",
        image: "/phao/image/phao-11.jpg",
        // Ảnh chính dạng slider (vuốt được). Thêm/bớt/đổi đường dẫn ảnh ở đây.
        images: [
            "/phao/image/phao-11.jpg",
            "/phao/image/phao-01.jpg", "/phao/image/phao-02.jpg", "/phao/image/phao-03.jpg",
            "/phao/image/phao-04.jpg", "/phao/image/phao-05.jpg", "/phao/image/phao-06.jpg",
            "/phao/image/phao-07.jpg", "/phao/image/phao-08.jpg", "/phao/image/phao-09.jpg",
            "/phao/image/phao-10.jpg", "/phao/image/phao-12.jpg",
            "/phao/image/phao-13.jpg", "/phao/image/phao-14.jpg", "/phao/image/phao-15.jpg",
            "/phao/image/phao-16.jpg", "/phao/image/phao-17.jpg", "/phao/image/phao-18.jpg",
            "/phao/image/phao-19.jpg", "/phao/image/phao-20.jpg"
        ],
        description: "Phao cứu hộ tự động tích hợp cảm biến thông minh tự bung trong 3 giây khi tiếp xúc nước, kèm búa thoát hiểm phá kính và dây cứu sinh chịu lực ≥ 200kg — bảo vệ tính mạng khi ô tô gặp sự cố dưới nước, đi biển hay dã ngoại."
    },
    price: {
        original: "350.000đ",
        sale: "220.000đ",
        discount: "37%",
        savingText: "Tiết kiệm -37%",
        shippingVoucher: "Miễn phí vận chuyển đơn từ 2 sản phẩm",
        paymentMethod: "Thanh toán khi nhận hàng (COD)"
    },
    shipping: [
        "Miễn phí vận chuyển",
        "Đổi trả trong vòng 7 ngày, hàng đổi dễ dàng, hoàn hàng miễn phí",
        "Hỗ trợ 24/7"
    ],
    benefits: [
        "Tự động bung trong 3 giây khi tiếp xúc nước",
        "Búa thoát hiểm phá kính cường lực & lưỡi cắt dây an toàn",
        "Dây cứu sinh chịu lực kéo ≥ 200 kg",
        "Trọng lượng nhẹ ~600g, gấp gọn dễ mang theo",
        "Thiết kế tái sử dụng — chỉ thay bình CO2 & viên cảm biến",
        "An toàn cho ô tô, tàu thuyền, câu cá, trekking"
    ],
    ingredients: [
        "Vỏ ngoài: Nylon chống thấm + chống tia UV",
        "Cơ chế: Cảm biến tự bung / Giật tay thủ công",
        "Bình khí nén: CO2 24 Gr",
        "Kích thước gấp gọn: 20 × 10 cm",
        "Trọng lượng: ~600 g",
        "Sức tải nổi: 1 người lớn (~120 kg)",
        "Phụ kiện kèm theo: Búa thoát hiểm, dây cứu sinh",
        "Màu sắc: Cam phản quang độ sáng cao"
    ],
    instructions: [
        "Tự động kích hoạt: viên nén cảm biến tan trong 3 giây, đâm thủng bình CO2 để phao tự bơm căng",
        "Giật dây thiết bị: giật mạnh dây đỏ để chủ động bung phao khi cần",
        "Phá kính thoát thân: dùng búa đa năng phá kính ô tô và cắt đai an toàn"
    ],
    reputation: {
        productRating: "4.9/5 (1.2k đánh giá)",
        reviewsCount: "1.2k đánh giá",
        soldCount: "5.000+",
        shopRating: "4.9",
        itemsCount: "42",
        ordersCount: "8.560",
        responseRate: "100% (trong 24h)",
        deliveryRate: "98%",
        sellerName: "VibeCar"
    },
    commitments: [
        "Chính hãng 100%, kiểm tra kỹ trước khi giao",
        "Bảo hành 12 tháng, đổi trả 1-1 miễn phí"
    ],
    address: "VibeCar — Hệ thống phân phối toàn quốc",
    reviews: [
        { name: "Minh Quân", rating: 5, comment: "Phao chắc chắn, để trong cốp ô tô rất yên tâm. Test thử bung nhanh đúng vài giây, đóng gói kỹ càng." },
        { name: "Thu Hà", rating: 5, comment: "Mua cho cả nhà đi biển, gọn nhẹ dễ mang theo. Shop tư vấn nhiệt tình, giao hàng nhanh." },
        { name: "Anh Tuấn", rating: 5, comment: "Có kèm búa phá kính với dây cứu sinh nên rất đáng tiền. Yên tâm mỗi lần lái xe qua cầu." },
        { name: "Hoàng Nam", rating: 5, comment: "Sản phẩm đúng mô tả, phản quang sáng, bơm căng chắc chắn. Sẽ mua thêm tặng bạn bè." },
        { name: "Lê Vy", rating: 5, comment: "Nhỏ gọn, đi câu cá mang theo rất tiện. Giá tốt, chất lượng ổn." }
    ]
};

function updateStaticTexts() {
    const config = window.LANDING_PAGE_DATA;
    if (!config) return;
    
    // 1. Page Title and Meta Tags
    document.title = `${config.product.name.toUpperCase()} - CHÍNH HÃNG ${config.product.brand.toUpperCase()}`;
    
    const descMeta = document.querySelector('meta[name="description"]');
    if (descMeta) descMeta.setAttribute('content', `${config.product.name} chính hãng từ ${config.product.brand}. ${config.product.description}`);
    
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', `${config.product.name.toUpperCase()} - CHÍNH HÃNG ${config.product.brand.toUpperCase()}`);
    
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', `${config.product.name} chính hãng từ ${config.product.brand}. ${config.product.description}`);

    // 2. Header Title
    const headerTitle = document.querySelector('#PARAGRAPH160 .ladi-paragraph');
    if (headerTitle) headerTitle.innerHTML = `${config.product.name}`;

    // 3. Hero Section Prices and Details
    const salePrice = document.querySelector('#HEADLINE4 .ladi-headline');
    if (salePrice) salePrice.innerHTML = config.price.sale;
    
    const originalPrice = document.querySelector('#HEADLINE5 .ladi-headline');
    if (originalPrice) originalPrice.innerHTML = config.price.original;
    
    const savingText = document.querySelector('#PARAGRAPH6 .ladi-paragraph span');
    if (savingText) {
        savingText.innerHTML = `-${config.price.discount}`;
        savingText.style.backgroundColor = 'transparent';
        savingText.style.color = 'rgba(255, 255, 255, 0.9)';
        savingText.style.fontWeight = 'bold';
        savingText.style.borderRadius = '0';
        savingText.style.padding = '0';
    }
    
    const mainProductDetails = document.querySelector('#PARAGRAPH7 .ladi-paragraph');
    if (mainProductDetails) {
        mainProductDetails.innerHTML = `${config.product.name}<br><span class="SmallText1-Semibold" style="color: #00D1FF; font-weight: 600;">Đơn vị cung cấp: ${config.reputation.sellerName}</span>`;
    }

    // Stats block
    const soldCountEl = document.querySelector('#PARAGRAPH12 .ladi-paragraph');
    if (soldCountEl) soldCountEl.innerHTML = config.reputation.soldCount;
    
    const productRatingEl = document.querySelector('#PARAGRAPH8 .ladi-paragraph');
    if (productRatingEl) productRatingEl.innerHTML = config.reputation.productRating.split('/')[0];
    
    const reviewsCountEl = document.querySelector('#PARAGRAPH9 .ladi-paragraph span');
    if (reviewsCountEl) reviewsCountEl.innerHTML = `(${config.reputation.reviewsCount})`;

    // 4. Shipping Vouchers & Policy in Section 2
    const voucherEl = document.querySelector('#PARAGRAPH23 .ladi-paragraph');
    if (voucherEl) voucherEl.innerHTML = `&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;${config.price.shippingVoucher}`;
    
    const returnPolicyEl = document.querySelector('#PARAGRAPH25 .ladi-paragraph');
    if (returnPolicyEl) returnPolicyEl.innerHTML = config.shipping[1];

    // 5. Reviews Header
    const reviewsHeaderEl = document.querySelector('#PARAGRAPH32 .ladi-paragraph');
    if (reviewsHeaderEl) reviewsHeaderEl.innerHTML = `Đánh giá của khách hàng ( ${config.reputation.reviewsCount} )`;
    
    const reviewsSubRatingEl = document.querySelector('#PARAGRAPH33 .ladi-paragraph');
    if (reviewsSubRatingEl) reviewsSubRatingEl.innerHTML = config.reputation.productRating.split('/')[0];

    // 6. Review list mapping (dynamic loops)
    const reviewNames = [
        '#HEADLINE11 .ladi-headline', // Review 1
        '#HEADLINE12 .ladi-headline', // Review 2
        '#HEADLINE13 .ladi-headline', // Review 3
        '#HEADLINE18 .ladi-headline', // Review 4
        '#HEADLINE15 .ladi-headline'  // Review 5
    ];
    const reviewComments = [
        '#PARAGRAPH122 .ladi-paragraph',
        '#PARAGRAPH123 .ladi-paragraph',
        '#PARAGRAPH124 .ladi-paragraph',
        '#PARAGRAPH137 .ladi-paragraph',
        '#PARAGRAPH126 .ladi-paragraph'
    ];
    
    config.reviews.forEach((review, idx) => {
        if (idx < reviewNames.length) {
            const nameEl = document.querySelector(reviewNames[idx]);
            if (nameEl) nameEl.innerHTML = `${review.name}<br>`;
            
            const commentEl = document.querySelector(reviewComments[idx]);
            if (commentEl) commentEl.innerHTML = review.comment || '(Không có nội dung chi tiết)';
        }
    });

    // 7. Seller Info Section
    const sellerNameEl = document.querySelector('#PARAGRAPH39 .ladi-paragraph');
    if (sellerNameEl) sellerNameEl.innerHTML = config.reputation.sellerName;
    
    const shopRatingEl = document.querySelector('#PARAGRAPH41 .ladi-paragraph');
    if (shopRatingEl) shopRatingEl.innerHTML = config.reputation.shopRating;
    
    const shopItemsEl = document.querySelector('#PARAGRAPH49 .ladi-paragraph');
    if (shopItemsEl) shopItemsEl.innerHTML = config.reputation.itemsCount;
    
    const shopSalesEl = document.querySelector('#PARAGRAPH48 .ladi-paragraph');
    if (shopSalesEl) shopSalesEl.innerHTML = config.reputation.ordersCount;
    
    const shopResponseEl = document.querySelector('#PARAGRAPH46 .ladi-paragraph');
    if (shopResponseEl) shopResponseEl.innerHTML = config.reputation.responseRate;
    
    const shopDeliveryEl = document.querySelector('#PARAGRAPH47 .ladi-paragraph');
    if (shopDeliveryEl) shopDeliveryEl.innerHTML = config.reputation.deliveryRate;

    // 8. Description Title
    const descTitleEl = document.querySelector('#PARAGRAPH61 .ladi-paragraph');
    if (descTitleEl) descTitleEl.innerHTML = config.product.name;

    // 9. Popup/Checkout details
    const popupTitleEl = document.querySelector('#PARAGRAPH106 .ladi-paragraph');
    if (popupTitleEl) popupTitleEl.innerHTML = `${config.product.name}`;
    
    const popupSalePriceEl = document.querySelector('#PARAGRAPH107 .ladi-paragraph');
    if (popupSalePriceEl) popupSalePriceEl.innerHTML = config.price.sale;
    
    const popupOriginalPriceEl = document.querySelector('#PARAGRAPH108 .ladi-paragraph');
    if (popupOriginalPriceEl) popupOriginalPriceEl.innerHTML = config.price.original;
    
    const popupBrandEl = document.querySelector('#PARAGRAPH109 .ladi-paragraph');
    if (popupBrandEl) popupBrandEl.innerHTML = config.reputation.sellerName;
    
    const popupSavingsEl = document.querySelector('#PARAGRAPH159 .ladi-paragraph');
    if (popupSavingsEl) popupSavingsEl.innerHTML = `Tiết kiệm -${config.price.discount}`;

    const popupTextMap = {
        '#PARAGRAPH110 .ladi-paragraph': 'Vận chuyển giao nhanh toàn quốc',
        '#PARAGRAPH111 .ladi-paragraph': 'Đơn vị vận chuyển Viettel Post',
        '#PARAGRAPH112 .ladi-paragraph': '2 - 5 ngày',
        '#PARAGRAPH113 .ladi-paragraph': 'Giao hàng',
        '#PARAGRAPH114 .ladi-paragraph': '45.000đ',
        '#PARAGRAPH115 .ladi-paragraph': 'Giao nhanh',
        '#PARAGRAPH116 .ladi-paragraph': 'Ưu đãi từ VIBECAR',
        '#PARAGRAPH117 .ladi-paragraph': config.price.shippingVoucher,
        '#PARAGRAPH118 .ladi-paragraph': 'Hết hạn sau 3 giờ',
        '#PARAGRAPH119 .ladi-paragraph': config.price.paymentMethod,
        '#PARAGRAPH120 .ladi-paragraph': 'COD',
        '#PARAGRAPH159 .ladi-paragraph': config.price.savingText
    };

    Object.entries(popupTextMap).forEach(([selector, text]) => {
        const element = document.querySelector(selector);
        if (element) element.innerHTML = text;
    });

    // Update checkout checkbox/radio values and labels
    const radioContainers = document.querySelectorAll('#FORM_ITEM18 .ladi-form-checkbox-item');
    if (radioContainers.length >= 2) {
        const radio1 = radioContainers[0].querySelector('input');
        const label1 = radioContainers[0].querySelector('span');
        if (radio1 && label1) {
            radio1.value = `Mua 1 phao: ${config.price.sale} + 30k phí ship.`;
            label1.innerHTML = `Mua 1 phao: ${config.price.sale} + 30k phí ship.`;
        }
        const radio2 = radioContainers[1].querySelector('input');
        const label2 = radioContainers[1].querySelector('span');
        if (radio2 && label2) {
            radio2.value = `Mua 2 phao chỉ còn: 440.000đ + Miễn Phí Vận Chuyển.`;
            label2.innerHTML = `Mua 2 phao chỉ còn: 440.000đ + Miễn Phí Vận Chuyển.`;
        }
    }

    const popupRadios = document.querySelectorAll('#FORM_ITEM18 .ladi-form-checkbox-item');
    const popupRadio1 = popupRadios[0];
    const popupRadio2 = popupRadios[1];
    if (popupRadio1) {
        const input = popupRadio1.querySelector('input');
        const label = popupRadio1.querySelector('span');
        if (input) input.value = `Mua 1 phao: ${config.price.sale} + 30k phí ship.`;
        if (label) label.innerHTML = `Mua 1 phao: ${config.price.sale} + 30k phí ship.`;
    }
    if (popupRadio2) {
        const input = popupRadio2.querySelector('input');
        const label = popupRadio2.querySelector('span');
        if (input) input.value = 'Mua 2 phao chỉ còn: 440.000đ + Miễn Phí Vận Chuyển.';
        if (label) label.innerHTML = 'Mua 2 phao chỉ còn: 440.000đ + Miễn Phí Vận Chuyển.';
    }

    // 10. Update product images dynamically
    const productImg = config.product.image || "/phao/image/feelex_hold_on.png";
    const imgSelectors = [
        '#IMAGE4 .ladi-image-background',
        '#IMAGE24 .ladi-image-background',
        '#GALLERY1 .ladi-gallery .ladi-gallery-view-item[data-index="0"]',
        '#GALLERY1 .ladi-gallery .ladi-gallery-control-item[data-index="0"]'
    ];
    imgSelectors.forEach(sel => {
        const el = document.querySelector(sel);
        if (el) el.style.backgroundImage = `url('${productImg}')`;
    });
}

function initDynamicSection() {
    const config = window.LANDING_PAGE_DATA;
    const container = document.querySelector('#SECTION25 .ladi-container');
    if (!container) return;
    
    // Hide old hardcoded instructions block
    const oldP = document.getElementById('PARAGRAPH157');
    if (oldP) oldP.style.display = 'none';
    
    // Append feelex container
    const feelexContainer = document.createElement('div');
    feelexContainer.className = 'feelex-info-container';
    feelexContainer.innerHTML = `
        <div class="feelex-tabs">
            <button class="feelex-tab-btn active" data-tab="details">Thông Tin</button>
            <button class="feelex-tab-btn" data-tab="benefits">Công Dụng</button>
            <button class="feelex-tab-btn" data-tab="ingredients">Thành Phần</button>
            <button class="feelex-tab-btn" data-tab="instructions">Cách Dùng</button>
        </div>

        <div class="feelex-tab-content active" id="tab-details">
            <div class="feelex-card glassmorphic animate-float">
                <h3 class="feelex-card-title">Thông tin sản phẩm</h3>
                <table class="feelex-table">
                    <tr><td><strong>Tên sản phẩm</strong></td><td>${config.product.name}</td></tr>
                    <tr><td><strong>Thương hiệu</strong></td><td>${config.product.brand}</td></tr>
                    <tr><td><strong>Dung tích</strong></td><td>${config.product.capacity}</td></tr>
                    <tr><td><strong>Hạn sử dụng</strong></td><td>${config.product.expiry}</td></tr>
                    <tr><td><strong>Xuất xứ</strong></td><td>${config.product.origin}</td></tr>
                    <tr><td><strong>Trọng lượng</strong></td><td>${config.product.weight}</td></tr>
                </table>
            </div>
            
            <div class="feelex-card glassmorphic">
                <h3 class="feelex-card-title">Giá & Khuyến mãi</h3>
                <table class="feelex-table">
                    <tr><td><strong>Giá gốc</strong></td><td><span class="original-price">${config.price.original}</span></td></tr>
                    <tr><td><strong>Giá khuyến mãi</strong></td><td><span class="sale-price">${config.price.sale}</span> <span class="discount-badge">Giảm ${config.price.discount}</span></td></tr>
                    <tr><td><strong>Voucher ship</strong></td><td>${config.price.shippingVoucher}</td></tr>
                    <tr><td><strong>Thanh toán</strong></td><td>${config.price.paymentMethod}</td></tr>
                </table>
            </div>

            <div class="feelex-card glassmorphic">
                <h3 class="feelex-card-title">Vận chuyển & Đổi trả</h3>
                <ul class="feelex-list-check">
                    ${config.shipping.map(item => `<li>${item}</li>`).join('')}
                </ul>
            </div>
        </div>

        <div class="feelex-tab-content" id="tab-benefits">
            <div class="feelex-card glassmorphic">
                <h3 class="feelex-card-title">Công dụng chính</h3>
                <ul class="feelex-list-check">
                    ${config.benefits.map(item => `<li>${item}</li>`).join('')}
                </ul>
            </div>
        </div>

        <div class="feelex-tab-content" id="tab-ingredients">
            <div class="feelex-card glassmorphic">
                <h3 class="feelex-card-title">Thành phần chính</h3>
                <div class="feelex-badges">
                    ${config.ingredients.map(item => `<span class="feelex-badge">${item}</span>`).join('')}
                </div>
            </div>
        </div>

        <div class="feelex-tab-content" id="tab-instructions">
            <div class="feelex-card glassmorphic">
                <h3 class="feelex-card-title">Hướng dẫn sử dụng</h3>
                <ol class="feelex-list-step">
                    ${config.instructions.map(item => `<li>${item}</li>`).join('')}
                </ol>
            </div>

            <div class="feelex-card glassmorphic border-alert">
                <h3 class="feelex-card-title text-alert">Cam kết từ VibeCar</h3>
                <ul class="feelex-list-check check-alert">
                    ${config.commitments.map(item => `<li>${item}</li>`).join('')}
                </ul>
            </div>
            
            <div class="feelex-card glassmorphic">
                <h3 class="feelex-card-title">Địa chỉ cửa hàng</h3>
                <p class="feelex-address">${config.address}</p>
            </div>
        </div>
    `;
    container.appendChild(feelexContainer);
}

function setupTabs() {
    const buttons = document.querySelectorAll('.feelex-tab-btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const contents = document.querySelectorAll('.feelex-tab-content');
            contents.forEach(c => c.classList.remove('active'));
            
            const tabId = btn.getAttribute('data-tab');
            const target = document.getElementById(`tab-${tabId}`);
            if (target) target.classList.add('active');
        });
    });
}

function setupSummaryBuyButton() {
    const summaryBuyButton = document.querySelector('.feelex-summary-buy');
    if (!summaryBuyButton) return;

    summaryBuyButton.addEventListener('click', () => {
        openOrderPopup('.feelex-deal-form');
    });
}

function setupDealCountdown() {
    const dayEls = document.querySelectorAll('[data-countdown-day]');
    const hourEls = document.querySelectorAll('[data-countdown-hour]');
    const minuteEls = document.querySelectorAll('[data-countdown-minute]');
    const secondEls = document.querySelectorAll('[data-countdown-second]');
    if (!dayEls.length || !hourEls.length || !minuteEls.length || !secondEls.length) return;

    let remainingSeconds = (11 * 60 * 60) + (52 * 60) + 27;
    const pad = value => String(value).padStart(2, '0');

    const render = () => {
        const days = Math.floor(remainingSeconds / 86400);
        const hours = Math.floor((remainingSeconds % 86400) / 3600);
        const minutes = Math.floor((remainingSeconds % 3600) / 60);
        const seconds = remainingSeconds % 60;

        const values = {
            day: pad(days),
            hour: pad(hours),
            minute: pad(minutes),
            second: pad(seconds)
        };

        dayEls.forEach(element => { element.textContent = values.day; });
        hourEls.forEach(element => { element.textContent = values.hour; });
        minuteEls.forEach(element => { element.textContent = values.minute; });
        secondEls.forEach(element => { element.textContent = values.second; });

        syncLadiCountdown(values);

        remainingSeconds = Math.max(remainingSeconds - 1, 0);
    };

    render();
    setInterval(render, 1000);
}

function syncLadiCountdown(values) {
    const countdownMap = {
        '#COUNTDOWN_ITEM1 .ladi-countdown-text span': values.day,
        '#COUNTDOWN_ITEM2 .ladi-countdown-text span': values.hour,
        '#COUNTDOWN_ITEM3 .ladi-countdown-text span': values.minute,
        '#COUNTDOWN_ITEM4 .ladi-countdown-text span': values.second
    };

    Object.entries(countdownMap).forEach(([selector, value]) => {
        const element = document.querySelector(selector);
        if (element) element.textContent = value;
    });
}

const JAPANHOURSE_LEADS_API = '/api/japanhourse-leads';

function getFormValue(form, name) {
    const field = form && form.elements ? form.elements[name] : null;
    if (!field) return '';
    return String(field.value || '').trim();
}

function isValidLead(values) {
    return Boolean(values.name && values.phone && values.address);
}

// Toast nổi (tự ẩn) — dùng cho thông báo gửi form
function showToast(text, isError) {
    let toast = document.getElementById('phao-toast');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'phao-toast';
        toast.className = 'phao-toast';
        document.body.appendChild(toast);
    }
    toast.textContent = (isError ? '⚠️ ' : '✅ ') + text;
    toast.classList.toggle('phao-toast--error', !!isError);
    // reflow để animation chạy lại
    void toast.offsetWidth;
    toast.classList.add('phao-toast--show');
    clearTimeout(toast._hideTimer);
    toast._hideTimer = setTimeout(function () {
        toast.classList.remove('phao-toast--show');
    }, 4000);
}

function setDealFormMessage(form, text, isError) {
    const message = form.querySelector('.feelex-form-message');
    if (message) {
        message.textContent = text;
        message.style.color = isError ? '#c22323' : '#168a53';
    }
    if (!/đang gửi/i.test(text)) showToast(text, isError);
}

function setFormSubmitting(form, isSubmitting) {
    const button = form.querySelector('button[type="submit"]');
    if (!button) return;
    button.disabled = isSubmitting;
    button.classList.toggle('is-loading', isSubmitting);
    button.setAttribute('aria-busy', isSubmitting ? 'true' : 'false');
    button.dataset.originalText = button.dataset.originalText || button.textContent;
    button.textContent = isSubmitting ? 'Đang gửi...' : button.dataset.originalText;
}

async function submitLeadToGoogleSheet(values) {
    const response = await fetch(JAPANHOURSE_LEADS_API, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
    });

    let data = {};
    try {
        data = await response.json();
    } catch (error) {
        data = {};
    }

    if (!response.ok) {
        throw new Error(data.message || 'Không thể gửi thông tin. Vui lòng thử lại.');
    }

    return data;
}

// Bắn sự kiện Purchase vào Facebook Pixel CHỈ khi khách ĐẶT HÀNG THÀNH CÔNG
// (gọi trong nhánh success sau khi lưu đơn — KHÔNG tính người chỉ vào web hay mở form rồi bỏ)
function trackOrderConversion(values) {
    if (typeof window.fbq !== 'function') return;
    const qty = parseInt(values && values.quantity, 10) || 1;
    try {
        window.fbq('track', 'Purchase', {
            value: qty * 220000,
            currency: 'VND',
            content_name: 'Phao Cứu Hộ Tự Động VibeCar',
            content_type: 'product',
            content_ids: ['phao-cuu-ho-vibecar'],
            contents: [{ id: 'phao-cuu-ho-vibecar', quantity: qty }],
            num_items: qty
        });
    } catch (e) {
        // không chặn luồng nếu pixel lỗi
    }
}

function setupDealForm() {
    const form = document.querySelector('.feelex-order-form');
    if (!form) return;

    form.addEventListener('submit', async event => {
        event.preventDefault();
        const values = getDealFormValues();

        if (!isValidLead(values)) {
            form.reportValidity();
            setDealFormMessage(form, 'Vui lòng nhập Họ và Tên, Số điện thoại và Địa chỉ.', true);
            return;
        }

        setDealFormMessage(form, 'Đang gửi thông tin...', false);
        setFormSubmitting(form, true);

        try {
            await submitLeadToGoogleSheet(values);
            trackOrderConversion(values);
            setDealFormMessage(form, 'Đã gửi thông tin thành công. Tư vấn viên sẽ liên hệ lại sớm.', false);
            form.reset();
            syncDealFormToPopup();
        } catch (error) {
            setDealFormMessage(form, error.message || 'Không thể gửi thông tin. Vui lòng thử lại.', true);
        } finally {
            setFormSubmitting(form, false);
        }

    });
    form.addEventListener('input', syncDealFormToPopup);
    form.addEventListener('change', syncDealFormToPopup);
}

function getDealFormValues() {
    const form = document.querySelector('.feelex-order-form');
    if (!form) return {};

    return {
        name: getFormValue(form, 'name'),
        email: getFormValue(form, 'email'),
        phone: getFormValue(form, 'phone'),
        quantity: getFormValue(form, 'quantity') || '1',
        address: getFormValue(form, 'address')
    };
}

function setPopupInput(selector, value) {
    const input = document.querySelector(selector);
    if (!input || value === undefined) return;

    input.value = value;
    input.dispatchEvent(new Event('input', { bubbles: true }));
    input.dispatchEvent(new Event('change', { bubbles: true }));
}

function syncDealFormToPopup() {
    const values = getDealFormValues();
    const popupForm = document.querySelector('#FORM4 form');
    if (!popupForm) return;

    setPopupInput('#FORM_ITEM10 input[name="name"]', values.name);
    setPopupInput('#FORM_ITEM12 input[name="phone"]', values.phone);
    setPopupInput('#FORM_ITEM16 input[name="address"]', values.address);

    let emailInput = popupForm.querySelector('input[name="email"]');
    if (!emailInput) {
        emailInput = document.createElement('input');
        emailInput.type = 'hidden';
        emailInput.name = 'email';
        popupForm.appendChild(emailInput);
    }
    emailInput.value = values.email || '';

    let quantityInput = popupForm.querySelector('input[name="quantity"]');
    if (!quantityInput) {
        quantityInput = document.createElement('input');
        quantityInput.type = 'hidden';
        quantityInput.name = 'quantity';
        popupForm.appendChild(quantityInput);
    }
    quantityInput.value = values.quantity || '1';

    disableRemovedPopupBlocks();
}

function disableRemovedPopupBlocks() {
    ['#FORM_ITEM17', '#FORM_ITEM18'].forEach(selector => {
        const block = document.querySelector(selector);
        if (block) block.style.display = 'none';

        document.querySelectorAll(`${selector} input, ${selector} select, ${selector} textarea`).forEach(element => {
            element.required = false;
            element.disabled = true;
            element.removeAttribute('required');
        });
    });
}

function clearPopupValidation() {
    ['#FORM_ITEM10', '#FORM_ITEM12', '#FORM_ITEM16', '#FORM_ITEM_QUANTITY'].forEach(selector => {
        const element = document.querySelector(selector);
        if (element) element.classList.remove('is-invalid');
    });
}

function validatePopupRequiredFields(values) {
    clearPopupValidation();

    const requiredFields = [
        ['#FORM_ITEM10', values.name],
        ['#FORM_ITEM12', values.phone],
        ['#FORM_ITEM16', values.address],
        ['#FORM_ITEM_QUANTITY', Number(values.quantity) > 0]
    ];

    const missingFields = requiredFields.filter(([, value]) => !value);
    missingFields.forEach(([selector]) => {
        const element = document.querySelector(selector);
        if (element) element.classList.add('is-invalid');
    });

    if (missingFields.length) {
        const firstInvalidInput = document.querySelector(`${missingFields[0][0]} input`);
        if (firstInvalidInput) firstInvalidInput.focus();
        return false;
    }

    return true;
}

function getPopupFormValues() {
    const popupForm = document.querySelector('#FORM4 form');
    if (!popupForm) return {};

    return {
        name: getFormValue(popupForm, 'name'),
        email: getFormValue(popupForm, 'email'),
        phone: getFormValue(popupForm, 'phone'),
        quantity: getFormValue(popupForm, 'quantity') || '1',
        address: getFormValue(popupForm, 'address')
    };
}

function getPopupMessageElement() {
    const popupForm = document.querySelector('#FORM4 form');
    if (!popupForm) return null;

    let message = popupForm.querySelector('.feelex-popup-form-message');
    if (!message) {
        message = document.createElement('p');
        message.className = 'feelex-popup-form-message';
        message.style.cssText = [
            'position:absolute',
            'left:0',
            'right:0',
            'bottom:-34px',
            'margin:0',
            'font-size:13px',
            'line-height:1.35',
            'text-align:center',
            'font-family:Arial,sans-serif'
        ].join(';');
        popupForm.appendChild(message);
    }

    return message;
}

function setPopupMessage(text, isError) {
    const message = getPopupMessageElement();
    if (message) {
        message.textContent = text;
        message.style.color = isError ? '#c22323' : '#168a53';
    }
    if (!/đang gửi/i.test(text)) showToast(text, isError);
}

function setPopupSubmitting(isSubmitting) {
    const popupSubmitButton = document.getElementById('BUTTON6');
    if (!popupSubmitButton) return;
    popupSubmitButton.classList.toggle('is-loading', isSubmitting);
    popupSubmitButton.setAttribute('aria-busy', isSubmitting ? 'true' : 'false');
}

async function submitPopupOrder(event) {
    if (event) {
        event.preventDefault();
        event.stopImmediatePropagation();
    }

    disableRemovedPopupBlocks();
    const values = getPopupFormValues();

    if (!validatePopupRequiredFields(values)) {
        setPopupMessage('Vui lòng nhập đầy đủ Họ và Tên, Số điện thoại, Địa chỉ và Số lượng.', true);
        return;
    }

    setPopupMessage('Đang gửi thông tin...', false);
    setPopupSubmitting(true);

    try {
        await submitLeadToGoogleSheet(values);
        trackOrderConversion(values);
        setPopupMessage('Đã gửi thông tin thành công. Tư vấn viên sẽ liên hệ lại sớm.', false);
    } catch (error) {
        setPopupMessage(error.message || 'Không thể gửi thông tin. Vui lòng thử lại.', true);
    } finally {
        setPopupSubmitting(false);
    }
}

function setupPopupOrderForm() {
    const popupForm = document.querySelector('#FORM4 form');
    const popupSubmitButton = document.getElementById('BUTTON6');

    if (popupForm) {
        popupForm.addEventListener('submit', submitPopupOrder, true);
        popupForm.addEventListener('input', () => {
            clearPopupValidation();
            setPopupMessage('', false);
        });
    }

    if (popupSubmitButton) {
        popupSubmitButton.addEventListener('click', submitPopupOrder, true);
    }
}

function openOrderPopup(fallbackTarget) {
    syncDealFormToPopup();

    const primaryBuyButton = document.getElementById('BUTTON2');
    if (primaryBuyButton) {
        primaryBuyButton.click();
        return;
    }

    const target = document.querySelector(fallbackTarget);
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function setupStickyCta() {
    const triggerOrder = fallbackTarget => openOrderPopup(fallbackTarget);

    const storeButton = document.querySelector('[data-feelex-store]');
    const chatButton = document.querySelector('[data-feelex-chat]');
    const cartButton = document.querySelector('[data-feelex-cart]');
    const buyButton = document.querySelector('[data-feelex-buy]');

    if (storeButton) {
        storeButton.addEventListener('click', () => {
            const shopCard = document.querySelector('.feelex-shop-card');
            if (shopCard) shopCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
        });
    }

    if (chatButton) {
        chatButton.addEventListener('click', () => triggerOrder('.feelex-deal-form'));
    }

    if (cartButton) {
        cartButton.addEventListener('click', () => triggerOrder('.feelex-deal-form'));
    }

    if (buyButton) {
        buyButton.addEventListener('click', () => triggerOrder('.feelex-deal-form'));
    }
}

function setupReviewVideoLightbox() {
    const videoButtons = document.querySelectorAll('.feelex-review-video[data-video-src]');
    if (!videoButtons.length) return;

    const lightbox = document.createElement('div');
    lightbox.className = 'feelex-video-lightbox';
    lightbox.setAttribute('role', 'dialog');
    lightbox.setAttribute('aria-modal', 'true');
    lightbox.setAttribute('aria-label', 'Video đánh giá sản phẩm');
    lightbox.innerHTML = `
        <div class="feelex-video-lightbox-frame">
            <button type="button" class="feelex-video-lightbox-close" aria-label="Đóng video">×</button>
            <video controls playsinline></video>
        </div>
    `;
    document.body.appendChild(lightbox);

    const modalVideo = lightbox.querySelector('video');
    const closeButton = lightbox.querySelector('.feelex-video-lightbox-close');

    const closeLightbox = () => {
        lightbox.classList.remove('is-open');
        document.body.style.overflow = '';
        if (modalVideo) {
            modalVideo.pause();
            modalVideo.removeAttribute('src');
            modalVideo.load();
        }
    };

    const openLightbox = src => {
        if (!modalVideo || !src) return;
        modalVideo.src = src;
        lightbox.classList.add('is-open');
        document.body.style.overflow = 'hidden';
        modalVideo.play().catch(() => {});
    };

    videoButtons.forEach(button => {
        button.addEventListener('click', () => {
            openLightbox(button.getAttribute('data-video-src'));
        });
    });

    if (closeButton) {
        closeButton.addEventListener('click', closeLightbox);
    }

    lightbox.addEventListener('click', event => {
        if (event.target === lightbox) closeLightbox();
    });

    document.addEventListener('keydown', event => {
        if (event.key === 'Escape' && lightbox.classList.contains('is-open')) {
            closeLightbox();
        }
    });
}

// Biến ảnh chính thành slider vuốt được (thay ruột LadiPage gallery)
function initMainSlider() {
    const config = window.LANDING_PAGE_DATA || {};
    const gallery = document.querySelector('#GALLERY1 .ladi-gallery');
    if (!gallery || gallery.dataset.phaoSlider === '1') return;

    let images = (config.product && config.product.images) || [];
    if (!Array.isArray(images) || images.length === 0) {
        images = [config.product && config.product.image].filter(Boolean);
    }
    if (images.length === 0) return;

    const slider = document.createElement('div');
    slider.className = 'phao-slider';
    slider.innerHTML =
        '<div class="phao-slider__track">' +
        images.map(function (src) {
            return '<div class="phao-slider__slide" style="background-image:url(\'' + src + '\')"></div>';
        }).join('') +
        '</div>' +
        '<button type="button" class="phao-slider__arrow phao-slider__arrow--prev" aria-label="Ảnh trước">‹</button>' +
        '<button type="button" class="phao-slider__arrow phao-slider__arrow--next" aria-label="Ảnh sau">›</button>' +
        '<div class="phao-slider__dots">' +
        images.map(function (_, i) {
            return '<span class="phao-slider__dot' + (i === 0 ? ' active' : '') + '" data-i="' + i + '"></span>';
        }).join('') +
        '</div>';

    gallery.innerHTML = '';
    gallery.appendChild(slider);
    gallery.dataset.phaoSlider = '1';

    const track = slider.querySelector('.phao-slider__track');
    const dots = Array.prototype.slice.call(slider.querySelectorAll('.phao-slider__dot'));
    const slideW = function () { return track.clientWidth || 1; };

    slider.querySelector('.phao-slider__arrow--prev').addEventListener('click', function () {
        track.scrollBy({ left: -slideW(), behavior: 'smooth' });
    });
    slider.querySelector('.phao-slider__arrow--next').addEventListener('click', function () {
        track.scrollBy({ left: slideW(), behavior: 'smooth' });
    });
    dots.forEach(function (d) {
        d.addEventListener('click', function () {
            track.scrollTo({ left: slideW() * Number(d.dataset.i), behavior: 'smooth' });
        });
    });
    track.addEventListener('scroll', function () {
        const idx = Math.round(track.scrollLeft / slideW());
        dots.forEach(function (d, i) { d.classList.toggle('active', i === idx); });
    }, { passive: true });

    if (images.length <= 1) {
        slider.querySelectorAll('.phao-slider__arrow, .phao-slider__dots').forEach(function (e) {
            e.style.display = 'none';
        });
    }
}

// Tab đầu trang (Tổng quan / Đánh giá / Mô tả / Đề xuất) -> cuộn tới đúng khối
function setupNavTabs() {
    const HEADER_OFFSET = 96; // trừ chiều cao thanh header dính trên cùng
    const map = {
        PARAGRAPH161: null,                     // Tổng quan -> lên đầu trang
        PARAGRAPH162: '.feelex-review-panel',   // Đánh giá
        PARAGRAPH163: '.feelex-product-detail', // Mô tả
        PARAGRAPH164: '.feelex-deal-form'       // Đề xuất -> khu đặt mua
    };

    function scrollToSel(sel) {
        if (!sel) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return;
        }
        const el = document.querySelector(sel);
        if (!el) return;
        const y = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
        window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
    }

    Object.keys(map).forEach(function (id) {
        const el = document.getElementById(id);
        if (!el) return;
        el.style.cursor = 'pointer';
        el.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            scrollToSel(map[id]);
        }, true); // capture: chặn action mặc định của LadiPage
    });
}

document.addEventListener('DOMContentLoaded', () => {
    updateStaticTexts();
    initMainSlider();
    setupNavTabs();
    disableRemovedPopupBlocks();
    setupSummaryBuyButton();
    setupDealCountdown();
    setupDealForm();
    setupPopupOrderForm();
    setupStickyCta();
    setupReviewVideoLightbox();
    
    // Hide Prettyskin descriptive picture sections
    const sectionsToHide = ['#SECTION5', '#SECTION6', '#SECTION19', '#SECTION21', '#SECTION22', '#SECTION25', '#SECTION27', '#SECTION28'];
    sectionsToHide.forEach(sel => {
        const el = document.querySelector(sel);
        if (el) el.style.display = 'none';
    });
    
    // Hide review attachments showing Prettyskin products
    const reviewAttachments = ['#GROUP63', '#GROUP70', '#GROUP76', '#GROUP79', '#GROUP78'];
    reviewAttachments.forEach(sel => {
        const el = document.querySelector(sel);
        if (el) el.style.display = 'none';
    });
});

window.addEventListener('load', () => {
    setTimeout(updateStaticTexts, 200);
    setTimeout(updateStaticTexts, 600);
    setTimeout(updateStaticTexts, 1200);
    // đảm bảo slider vẫn còn sau khi runtime LadiPage khởi tạo gallery
    setTimeout(initMainSlider, 300);
    setTimeout(initMainSlider, 900);
});
