/* ============================================
   PAWFECT -?Interactive Scripts
   ============================================ */


// -- Contact Email (obfuscated) ------------
function getContactEmail() {
  return 'wy' + '1234561995' + '@' + 'outlook.com';
}

// -- Product Data --------------------------
const products = [
  {
    id: 1,
    name: 'CloudRest Orthopedic Bed',
    category: 'beds',
    price: 89,
    emoji: '',
    bg: 'linear-gradient(135deg, #e8d5c4, #d4a574)',
    badge: 'Bestseller',
    badgeType: 'bestseller',
    colors: ['#c4a882', '#8b7355', '#d4c4b0'],
    desc: 'Memory foam, removable washable cover'
  },
  {
    id: 2,
    name: 'Wool Cave Snuggle Pod',
    category: 'beds',
    price: 129,
    originalPrice: 159,
    emoji: '',
    bg: 'linear-gradient(135deg, #d4c5b9, #b8956a)',
    badge: 'Sale',
    badgeType: 'sale',
    colors: ['#d4c5b9', '#9b8a7a', '#e8ddd0'],
    desc: 'Hand-felted merino wool, self-warming'
  },
  {
    id: 3,
    name: 'Bounce Natural Rubber Ball',
    category: 'toys',
    price: 18,
    emoji: '',
    bg: 'linear-gradient(135deg, #c8d6c0, #8a9a7b)',
    badge: null,
    badgeType: null,
    colors: ['#8a9a7b', '#c8d6c0', '#e8b44f'],
    desc: '100% natural rubber, non-toxic, squeaker-free'
  },
  {
    id: 4,
    name: 'Rope Tug Durable Set (3pk)',
    category: 'toys',
    price: 32,
    emoji: '',
    bg: 'linear-gradient(135deg, #c4d1d8, #7a8e9b)',
    badge: 'New',
    badgeType: 'bestseller',
    colors: ['#7a8e9b', '#c4d1d8', '#4a6a7a'],
    desc: 'Organic cotton rope, dental-friendly'
  },
  {
    id: 5,
    name: 'Ceramic Elevated Bowl Set',
    category: 'feeding',
    price: 68,
    originalPrice: 85,
    emoji: '',
    bg: 'linear-gradient(135deg, #e0d5c5, #c9a87c)',
    badge: 'Sale',
    badgeType: 'sale',
    colors: ['#e0d5c5', '#c9a87c', '#f5efe5'],
    desc: 'Hand-glazed ceramic, bamboo stand, 2 bowls'
  },
  {
    id: 6,
    name: 'Slow Feeder Puzzle Mat',
    category: 'feeding',
    price: 36,
    emoji: '',
    bg: 'linear-gradient(135deg, #d5e0d0, #9ab08a)',
    badge: null,
    badgeType: null,
    colors: ['#9ab08a', '#d5e0d0', '#6b8a5e'],
    desc: 'Food-grade silicone, anxiety-reducing design'
  },
  {
    id: 7,
    name: 'Italian Leather Collar',
    category: 'accessories',
    price: 54,
    emoji: '',
    bg: 'linear-gradient(135deg, #d8ccc4, #a0846c)',
    badge: 'Premium',
    badgeType: 'bestseller',
    colors: ['#a0846c', '#6b4e3d', '#2d1f14'],
    desc: 'Full-grain Italian leather, brass hardware'
  },
  {
    id: 8,
    name: 'Reflective Rope Leash',
    category: 'accessories',
    price: 42,
    emoji: '',
    bg: 'linear-gradient(135deg, #c8d4dc, #7a8ea0)',
    badge: null,
    badgeType: null,
    colors: ['#7a8ea0', '#c8d4dc', '#2c3e50'],
    desc: 'Climbing rope, reflective weave, carabiner clip'
  },
  {
    id: 9,
    name: 'Memory Foam Travel Mat',
    category: 'beds',
    price: 75,
    emoji: '',
    bg: 'linear-gradient(135deg, #dcc8b8, #b8845c)',
    badge: null,
    badgeType: null,
    colors: ['#b8845c', '#dcc8b8', '#8b6b4a'],
    desc: 'Roll-up design, waterproof bottom, carry strap'
  },
  {
    id: 10,
    name: 'Interactive Treat Dispenser',
    category: 'toys',
    price: 28,
    emoji: '',
    bg: 'linear-gradient(135deg, #d0dcc8, #8ea87a)',
    badge: 'Popular',
    badgeType: 'bestseller',
    colors: ['#8ea87a', '#d0dcc8', '#e8b44f'],
    desc: 'Adjustable difficulty, dishwasher safe'
  },
  {
    id: 11,
    name: 'Bamboo Storage Bin',
    category: 'accessories',
    price: 48,
    emoji: '',
    bg: 'linear-gradient(135deg, #d8d0c0, #b8a080)',
    badge: null,
    badgeType: null,
    colors: ['#b8a080', '#d8d0c0', '#8a7a60'],
    desc: 'Sustainably harvested bamboo, foldable'
  },
  {
    id: 12,
    name: 'Pet Water Fountain',
    category: 'feeding',
    price: 59,
    emoji: '',
    bg: 'linear-gradient(135deg, #c8dce0, #7aa8b0)',
    badge: 'New',
    badgeType: 'bestseller',
    colors: ['#7aa8b0', '#c8dce0', '#f5f5f5'],
    desc: 'Triple filtration, ultra-quiet pump, 2.5L'
  },
  {
    id: 13,
    name: 'Custom Pet Portrait Necklace',
    category: 'jewelry',
    price: 199,
    image: 'images/necklace-cat-orange.jpg',
    bg: 'linear-gradient(135deg, #e8e0d8, #c4b8a8)',
    badge: 'Bestseller',
    badgeType: 'bestseller',
    colors: ['#d4c4b0', '#c4a882', '#e8ddd0'],
    desc: 'Hand-sculpted sterling silver, custom enamel painting from your pet photo'
  },
  {
    id: 14,
    name: 'Custom French Bulldog Necklace',
    category: 'jewelry',
    price: 199,
    image: 'images/necklace-frenchie.jpg',
    bg: 'linear-gradient(135deg, #e5ddd5, #c8b898)',
    badge: null,
    badgeType: null,
    colors: ['#c8b898', '#e5ddd5', '#a89070'],
    desc: 'Sterling silver pendant, hand-painted enamel details from your Frenchie photo'
  },
  {
    id: 15,
    name: 'Custom Tabby Cat Necklace',
    category: 'jewelry',
    price: 199,
    image: 'images/necklace-cat-tabby.jpg',
    bg: 'linear-gradient(135deg, #e0dcd5, #b5a898)',
    badge: 'Popular',
    badgeType: 'bestseller',
    colors: ['#b5a898', '#e0dcd5', '#8a7a6a'],
    desc: 'Handcrafted silver charm, detailed tabby stripe enamelwork from your cat photo'
  },
  {
    id: 16,
    name: 'Custom Calico Cat Necklace',
    category: 'jewelry',
    price: 199,
    image: 'images/necklace-cat-calico.jpg',
    bg: 'linear-gradient(135deg, #e5dcd0, #c8b498)',
    badge: null,
    badgeType: null,
    colors: ['#c8b498', '#e5dcd0', '#9b7a5a'],
    desc: 'Sterling silver pendant, tri-color calico enamel painting from your cat photo'
  }
];

// -- Reviews Data --------------------------
const reviews = [
  {
    stars: 5,
    text: 'The CloudRest bed is incredible. My senior golden retriever used to struggle getting up -?now she sleeps through the night and wakes up with so much more energy. Worth every penny.',
    author: 'Sarah M.',
    location: ' California, USA',
    avatar: '',
    avatarBg: '#e8d5c4'
  },
  {
    stars: 5,
    text: 'I was skeptical about the price but the Wool Cave is genuinely beautiful. It looks like a designer piece in our living room, and our cat hasn\'t left it since it arrived. Shipping to Australia was fast too!',
    author: 'James L.',
    location: ' Sydney, Australia',
    avatar: '',
    avatarBg: '#c8d6c0'
  },
  {
    stars: 5,
    text: 'Finally found a collar that doesn\'t irritate my dog\'s skin. The Italian leather is so soft and the brass hardware still looks brand new after 6 months of daily use. Ordering a second color.',
    author: 'Emma K.',
    location: ' London, UK',
    avatar: '',
    avatarBg: '#d4c5b9'
  },
  {
    stars: 4,
    text: 'Great quality products and the international shipping was surprisingly quick (8 days to Germany). The ceramic bowls are gorgeous -?they feel like something from a high-end kitchen store.',
    author: 'Markus W.',
    location: ' Berlin, Germany',
    avatar: '',
    avatarBg: '#c4d1d8'
  },
  {
    stars: 5,
    text: 'Ordered the Rope Tug set and Bounce Ball for our new puppy. Both are holding up amazingly well against his sharp little teeth. Love that everything is natural materials -?no weird chemical smells.',
    author: 'Yuki T.',
    location: ' Tokyo, Japan',
    avatar: '',
    avatarBg: '#d0dcc8'
  },
  {
    stars: 5,
    text: 'The water fountain is a game changer. Our two cats drink so much more now and the filter lasts ages. Customer service was super helpful when I had a question about voltage compatibility.',
    author: 'Marie D.',
    location: ' Paris, France',
    avatar: '',
    avatarBg: '#c8dce0'
  }
];

// -- Cart State ----------------------------
let cart = [];

// -- DOM Elements --------------------------
const productGrid = document.getElementById('productGrid');
const reviewGrid = document.getElementById('reviewGrid');
const cartSidebar = document.getElementById('cartSidebar');
const cartOverlay = document.getElementById('cartOverlay');
const cartItems = document.getElementById('cartItems');
const cartCount = document.getElementById('cartCount');
const cartTotal = document.getElementById('cartTotal');
const cartFooter = document.getElementById('cartFooter');
const cartBtn = document.getElementById('cartBtn');
const cartClose = document.getElementById('cartClose');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const header = document.getElementById('header');
const toast = document.getElementById('toast');
const checkoutBtn = document.getElementById('checkoutBtn');
const newsletterForm = document.getElementById('newsletterForm');

// -- Render Products -----------------------
function renderProducts(filter = 'all') {
  const filtered = filter === 'all' ? products : products.filter(p => p.category === filter);
  
productGrid.innerHTML = filtered.map(p => {
    let badgeHtml = p.badge ? '<span class="product-badge ' + p.badgeType + '">' + p.badge + '</span>' : '';
    let imgHtml = p.image ? '<img src="' + p.image + '" alt="' + p.name + '" class="product-photo" loading="lazy">' : '<span class="product-emoji">' + (p.emoji || '') + '</span>';
    let oldPriceHtml = p.originalPrice ? '<span class="product-price-old">$' + p.originalPrice + '</span>' : '';
    let colorsHtml = p.colors.map(function(c) { return '<span class="product-color" style="background:' + c + '" title="Color option"></span>'; }).join('');
    return '<div class="product-card" data-id="' + p.id + '">' +
      badgeHtml +
      '<div class="product-img" style="background:' + p.bg + '">' + imgHtml + '</div>' +
      '<div class="product-info">' +
        '<h3 class="product-name">' + p.name + '</h3>' +
        '<p class="product-meta">' + p.desc + '</p>' +
        '<div class="product-price-row">' +
          '<span class="product-price">$' + p.price + '</span>' +
          oldPriceHtml +
        '</div>' +
        '<div class="product-colors">' + colorsHtml + '</div>' +
      '</div>' +
    '</div>';
  }).join('');


  // Attach click to product images (quick add)
  document.querySelectorAll('.product-img').forEach(img => {
    img.addEventListener('click', (e) => {
      const card = e.target.closest('.product-card');
      const id = parseInt(card.dataset.id);
      addToCart(id);
    });
  });
}

// -- Render Reviews ------------------------
function renderReviews() {
  
reviewGrid.innerHTML = reviews.map(r => {
    let starsHtml = '';
    for (let i = 0; i < 5; i++) { starsHtml += i < r.stars ? '★' : '☆'; }
    return '<div class="review-card">' +
      '<div class="review-stars">' + starsHtml + '</div>' +
      '<p class="review-text">"' + r.text + '"</p>' +
      '<div class="review-author">' +
        '<div class="review-avatar" style="background:' + r.avatarBg + '">' + r.avatar + '</div>' +
        '<div class="review-author-info">' +
          '<strong>' + r.author + '</strong>' +
          '<span>' + r.location + '</span>' +
        '</div>' +
      '</div>' +
    '</div>';
  }).join('');

}

// -- Cart Functions ------------------------
function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ ...product, qty: 1 });
  }
  updateCart();
  showToast(`Added to cart!`);
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  updateCart();
}

function updateQty(productId, delta) {
  const item = cart.find(i => i.id === productId);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    removeFromCart(productId);
    return;
  }
  updateCart();
}

function updateCart() {
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  cartCount.textContent = totalItems;
  cartCount.classList.add('bump');
  setTimeout(() => cartCount.classList.remove('bump'), 200);

  if (cart.length === 0) {
    cartItems.innerHTML = '<p class="cart-empty">Your cart is empty</p>';
    cartFooter.style.display = 'none';
  } else {
    cartItems.innerHTML = cart.map(item => `
      <div class="cart-item">
        <div class="cart-item-img" style="background:${item.bg}">${item.emoji}</div>
        <div class="cart-item-info">
          <h4>${item.name}</h4>
          <span class="cart-item-price">$${item.price}</span>
          <div class="cart-item-qty">
            <button onclick="updateQty(${item.id}, -1)">-?/button>
            <span>${item.qty}</span>
            <button onclick="updateQty(${item.id}, 1)">+</button>
          </div>
          <div class="cart-item-remove" onclick="removeFromCart(${item.id})">Remove</div>
        </div>
      </div>
    `).join('');
    cartFooter.style.display = 'block';
    cartTotal.textContent = `$${totalPrice.toFixed(2)}`;
  }
}

function openCart() {
  cartSidebar.classList.add('open');
  cartOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  cartSidebar.classList.remove('open');
  cartOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

// -- Toast ---------------------------------
let toastTimer;
function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2500);
}

// -- Product Filters -----------------------
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderProducts(btn.dataset.filter);
  });
});

// -- FAQ Accordion -------------------------
document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.parentElement;
    const isActive = item.classList.contains('active');
    // Close all
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
    // Open clicked (unless it was already open)
    if (!isActive) item.classList.add('active');
  });
});

// -- Mobile Menu ---------------------------
mobileMenuBtn.addEventListener('click', () => {
  mobileMenuBtn.classList.toggle('active');
  mobileMenu.classList.toggle('open');
  document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
});

document.querySelectorAll('.mobile-link').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenuBtn.classList.remove('active');
    mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
  });
});

// -- Cart Toggle ---------------------------
cartBtn.addEventListener('click', openCart);
cartClose.addEventListener('click', closeCart);
cartOverlay.addEventListener('click', closeCart);

// -- PayPal Payment Modal ------------------
const paymentOverlay = document.getElementById('paymentOverlay');
const paymentModal = document.getElementById('paymentModal');
const paymentClose = document.getElementById('paymentClose');
const paymentTotal = document.getElementById('paymentTotal');

function openPayment() {
  if (cart.length === 0) return;
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  paymentTotal.textContent = `$${total.toFixed(2)}`;
  paymentModal.classList.add('open');
  paymentOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closePayment() {
  paymentModal.classList.remove('open');
  paymentOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

checkoutBtn.addEventListener('click', () => {
  closeCart();
  setTimeout(openPayment, 400);
});

paymentClose.addEventListener('click', closePayment);
paymentOverlay.addEventListener('click', closePayment);

// -- Legal Modals (Privacy & Terms) --------
const legalOverlay = document.getElementById('legalOverlay');
const privacyModal = document.getElementById('privacyModal');
const termsModal = document.getElementById('termsModal');
const privacyLink = document.getElementById('privacyLink');
const termsLink = document.getElementById('termsLink');
const privacyClose = document.getElementById('privacyClose');
const termsClose = document.getElementById('termsClose');

function openLegal(modal) {
  modal.classList.add('open');
  legalOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLegal() {
  privacyModal.classList.remove('open');
  termsModal.classList.remove('open');
  legalOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

// -- Support Page Modals -------------------
const contactModal = document.getElementById('contactModal');
const shippingModal = document.getElementById('shippingModal');
const returnsModal = document.getElementById('returnsModal');
const sizeModal = document.getElementById('sizeModal');
const trackModal = document.getElementById('trackModal');

const allLegalModals = [privacyModal, termsModal, contactModal, shippingModal, returnsModal, sizeModal, trackModal];

function openLegal(modal) {
  modal.classList.add('open');
  legalOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLegal() {
  allLegalModals.forEach(m => m.classList.remove('open'));
  legalOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

privacyLink.addEventListener('click', (e) => { e.preventDefault(); openLegal(privacyModal); });
termsLink.addEventListener('click', (e) => { e.preventDefault(); openLegal(termsModal); });
privacyClose.addEventListener('click', closeLegal);
termsClose.addEventListener('click', closeLegal);

document.getElementById('contactLink').addEventListener('click', (e) => { e.preventDefault(); openLegal(contactModal); });
document.getElementById('shippingLink').addEventListener('click', (e) => { e.preventDefault(); openLegal(shippingModal); });
document.getElementById('returnsLink').addEventListener('click', (e) => { e.preventDefault(); openLegal(returnsModal); });
document.getElementById('sizeLink').addEventListener('click', (e) => { e.preventDefault(); openLegal(sizeModal); });
document.getElementById('trackLink').addEventListener('click', (e) => { e.preventDefault(); openLegal(trackModal); });

document.getElementById('contactClose').addEventListener('click', closeLegal);
document.getElementById('shippingClose').addEventListener('click', closeLegal);
document.getElementById('returnsClose').addEventListener('click', closeLegal);
document.getElementById('sizeClose').addEventListener('click', closeLegal);
document.getElementById('trackClose').addEventListener('click', closeLegal);

legalOverlay.addEventListener('click', closeLegal);

// -- Track Order Form ----------------------
document.getElementById('trackBtn').addEventListener('click', () => {
  const input = document.getElementById('trackInput');
  const result = document.getElementById('trackResult');
  const trackingNumber = input.value.trim();
  const sanitized = trackingNumber.replace(/[<>"']/g, '').substring(0, 50);
  if (!sanitized) {
    result.style.display = 'block';
    result.textContent = 'Please enter a tracking number.';
    result.style.color = '#c17a4e';
    return;
  }
  if (!/^[A-Za-z0-9-]{8,30}$/.test(sanitized)) {
    result.style.display = 'block';
    result.textContent = 'Invalid tracking number format. Please check and try again.';
    result.style.color = '#c17a4e';
    return;
  }
  result.style.display = 'block';
  result.style.color = 'var(--color-slate)';
  result.innerHTML = 'Tracking <strong>' + sanitized + '</strong>: Your package is currently in transit. Estimated delivery: <strong>3-5 business days</strong>. For real-time tracking, please check the link sent to your email or contact <strong>' + getContactEmail() + '</strong>.';
  input.value = '';
});

// -- Newsletter ----------------------------
newsletterForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const input = newsletterForm.querySelector('input');
  const email = input.value.trim();
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    showToast('Please enter a valid email address.');
    return;
  }
  showToast('Welcome to the pack! Check your inbox for 10% off.');
  newsletterForm.reset();
});

// -- Header Scroll Effect ------------------
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// -- Smooth Scroll for Nav Links -----------
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    // Skip links that have an id (handled by other event listeners)
    if (anchor.id) return;
    const href = anchor.getAttribute('href');
    if (href === '#') return;
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// -- Intersection Observer: Animate on Scroll --
const observerOptions = { threshold: 0.15, rootMargin: '0px 0px -40px 0px' };
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe section elements for scroll reveal
document.querySelectorAll('.category-card, .product-card, .review-card, .faq-item, .about-feat').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});

// -- Initialize ----------------------------
renderProducts();
renderReviews();
updateCart();
