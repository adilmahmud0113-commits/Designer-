<!DOCTYPE html>
<html lang="bn">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>StyleHub Fashion</title>

<style>
*{box-sizing:border-box;margin:0;padding:0;font-family:Arial,sans-serif}
body{background:#f5f5f7;color:#18181b;padding-bottom:75px}
header{background:#111;color:white;padding:20px}
.top{display:flex;justify-content:space-between;align-items:center}
.logo{font-size:25px;font-weight:bold;letter-spacing:2px}
.icon{background:#333;color:white;border:0;border-radius:50%;width:38px;height:38px;font-size:18px}
.search{display:flex;gap:10px;margin-top:18px}
.search input{flex:1;padding:13px;border:0;border-radius:12px;font-size:15px}
.search button{border:0;border-radius:12px;padding:0 15px}
.container{max-width:1000px;margin:auto;padding:20px}
.page{display:none}
.page.active{display:block}
.hero{background:linear-gradient(135deg,#18181b,#52525b);color:white;padding:28px 22px;border-radius:20px;margin-bottom:22px}
.hero h1{font-size:28px;margin-bottom:10px}
.hero p{color:#ddd;line-height:1.5}
.hero button{margin-top:18px;padding:12px 20px;border:0;border-radius:25px;font-weight:bold}
.categories{display:flex;gap:10px;overflow-x:auto;margin:20px 0}
.categories button{white-space:nowrap;padding:10px 18px;border:1px solid #ddd;border-radius:25px;background:white}
.categories button.active{background:#111;color:white}
.section-title{display:flex;justify-content:space-between;margin-bottom:15px}
.products{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:15px}
.card{background:white;border-radius:16px;overflow:hidden;box-shadow:0 4px 15px #00000010}
.card img{width:100%;height:190px;object-fit:cover}
.card-content{padding:13px}
.card h3{font-size:16px;margin-bottom:7px}
.card p{font-size:13px;color:#777;margin-bottom:10px}
.price{font-weight:bold;font-size:18px}
.actions{display:flex;gap:8px;margin-top:10px}
.view{flex:1;padding:10px;border:0;border-radius:8px;background:#111;color:white}
.fav{width:40px;border:1px solid #ddd;border-radius:8px;background:white;font-size:18px}
.empty{text-align:center;padding:35px;color:#777;display:none}
.bottom-nav{position:fixed;bottom:0;left:0;right:0;background:white;border-top:1px solid #ddd;display:flex;justify-content:space-around;padding:10px 5px;z-index:5}
.bottom-nav button{border:0;background:none;color:#777;font-size:12px}
.bottom-nav button.active{color:#111;font-weight:bold}
.bottom-nav span{display:block;font-size:22px;margin-bottom:3px}
.profile{background:white;border-radius:18px;padding:25px;text-align:center}
.avatar{font-size:55px;margin-bottom:10px}
.profile h2{margin-bottom:8px}
.profile p{color:#777;margin-bottom:20px}
.profile button{padding:12px 20px;border:0;border-radius:10px;background:#111;color:white}
.modal{display:none;position:fixed;inset:0;background:#0009;z-index:10;align-items:center;justify-content:center;padding:20px}
.details{background:white;border-radius:20px;max-width:400px;width:100%;padding:20px;position:relative}
.details img{width:100%;height:260px;object-fit:cover;border-radius:15px}
.close{position:absolute;right:15px;top:15px;border:0;background:#111;color:white;border-radius:50%;width:32px;height:32px}
.details h2{margin-top:15px}
.details p{margin-top:10px;color:#777;line-height:1.5}
.details button{margin-top:15px;width:100%;padding:12px;border:0;border-radius:10px;background:#111;color:white}
body.dark{background:#18181b;color:white}
body.dark .card,body.dark .profile,body.dark .details,body.dark .bottom-nav{background:#27272a;color:white}
body.dark .categories button,body.dark .fav{background:#333;color:white;border-color:#555}
body.dark .card p,body.dark .details p,body.dark .profile p{color:#bbb}
body.dark .bottom-nav{border-color:#444}
body.dark .bottom-nav button{color:#aaa}
body.dark .bottom-nav button.active{color:white}
</style>
</head>

<body>

<header>
  <div class="top">
    <div class="logo">STYLEHUB</div>
    <button class="icon" onclick="toggleDark()">🌙</button>
  </div>

  <div class="search">
    <input id="searchInput" placeholder="Search fashion..." oninput="searchProducts()">
    <button onclick="searchProducts()">🔍</button>
  </div>
</header>

<div class="container">

  <!-- HOME -->
  <section class="page active" id="home">
    <div class="hero">
      <h1>Dress Your Style ✨</h1>
      <p>Discover modern outfits made for your unique style.</p>
      <button onclick="showPage('shop')">Shop Collection →</button>
    </div>

    <div class="section-title">
      <h2>Popular Designs</h2>
      <span>🔥</span>
    </div>

    <div class="products" id="homeProducts"></div>
  </section>

  <!-- SHOP -->
  <section class="page" id="shop">
    <div class="section-title">
      <h2>Shop Collection</h2>
      <span>🛍️</span>
    </div>

    <div class="categories">
      <button class="active" onclick="filterProducts('all',this)">All</button>
      <button onclick="filterProducts('kurta',this)">Kurta</button>
      <button onclick="filterProducts('shirt',this)">Shirts</button>
      <button onclick="filterProducts('formal',this)">Formal</button>
      <button onclick="filterProducts('jacket',this)">Jackets</button>
    </div>

    <div class="products" id="shopProducts"></div>
    <div class="empty" id="empty">কোনো পোশাক পাওয়া যায়নি।</div>
  </section>

  <!-- FAVORITES -->
  <section class="page" id="favorites">
    <div class="section-title">
      <h2>My Favorites ❤️</h2>
    </div>
    <div class="products" id="favProducts"></div>
    <div class="empty" id="favEmpty">এখনও কোনো Favorite নেই।</div>
  </section>

  <!-- PROFILE -->
  <section class="page" id="profile">
    <div class="profile">
      <div class="avatar">👤</div>
      <h2>StyleHub Member</h2>
      <p>Welcome to your fashion profile.</p>
      <button onclick="alert('Profile feature coming soon!')">Edit Profile</button>
    </div>
  </section>

</div>

<!-- BOTTOM NAVIGATION -->
<nav class="bottom-nav">
  <button class="active" onclick="showPage('home',this)">
    <span>🏠</span>Home
  </button>
  <button onclick="showPage('shop',this)">
    <span>🛍️</span>Shop
  </button>
  <button onclick="showPage('favorites',this)">
    <span>❤️</span>Favorites
  </button>
  <button onclick="showPage('profile',this)">
    <span>👤</span>Profile
  </button>
</nav>

<!-- PRODUCT DETAILS -->
<div class="modal" id="modal">
  <div class="details">
    <button class="close" onclick="closeDetails()">✕</button>
    <img id="detailImg" src="" alt="Product">
    <h2 id="detailName"></h2>
    <p id="detailDesc"></p>
    <h3 id="detailPrice" style="margin-top:12px"></h3>
    <button onclick="addDetailFavorite()">❤️ Add to Favorites</button>
  </div>
</div>

<script>
const products = [
  {
    id:1,
    name:"Premium Black Kurta",
    category:"kurta",
    desc:"Elegant traditional wear",
    price:"₹1,499",
    img:"https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=500"
  },
  {
    id:2,
    name:"Classic White Shirt",
    category:"shirt",
    desc:"Smart casual collection",
    price:"₹999",
    img:"https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500"
  },
  {
    id:3,
    name:"Modern Formal Suit",
    category:"formal",
    desc:"Perfect for special occasions",
    price:"₹2,999",
    img:"https://images.unsplash.com/photo-1598808503746-f34c53b9323e?w=500"
  },
  {
    id:4,
    name:"Designer Indo-Western",
    category:"kurta",
    desc:"Festive fashion collection",
    price:"₹2,499",
    img:"https://images.unsplash.com/photo-1627225924765-552d49cf47ad?w=500"
  },
  {
    id:5,
    name:"Urban Denim Jacket",
    category:"jacket",
    desc:"Street style collection",
    price:"₹1,899",
    img:"https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500"
  },
  {
    id:6,
    name:"Oversized Black Shirt",
    category:"shirt",
    desc:"Minimal modern style",
    price:"₹1,199",
    img:"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500"
  }
];

let favorites = [];
let currentProduct = null;
let currentCategory = "all";

function productCard(p){
  const isFav = favorites.includes(p.id);

  return `
    <div class="card">
      <img src="${p.img}" alt="${p.name}">
      <div class="card-content">
        <h3>${p.name}</h3>
        <p>${p.desc}</p>
        <div class="price">${p.price}</div>
        <div class="actions">
          <button class="view" onclick="openDetails(${p.id})">View</button>
          <button class="fav" onclick="toggleFavorite(${p.id})">${isFav?"♥":"♡"}</button>
        </div>
      </div>
    </div>
  `;
}

function renderHome(){
  document.getElementById("homeProducts").innerHTML =
    products.slice(0,4).map(productCard).join("");
}

function renderShop(){
  const q = document.getElementById("searchInput").value.toLowerCase();

  const list = products.filter(p =>
    (currentCategory==="all" || p.category===currentCategory) &&
    p.name.toLowerCase().includes(q)
  );

  document.getElementById("shopProducts").innerHTML =
    list.map(productCard).join("");

  document.getElementById("empty").style.display =
    list.length ? "none" : "block";
}

function renderFavorites(){
  const list = products.filter(p => favorites.includes(p.id));

  document.getElementById("favProducts").innerHTML =
    list.map(productCard).join("");

  document.getElementById("favEmpty").style.display =
    list.length ? "none" : "block";
}

function showPage(page,button){
  document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"));
  document.getElementById(page).classList.add("active");

  document.querySelectorAll(".bottom-nav button").forEach(b=>b.classList.remove("active"));
  if(button) button.classList.add("active");

  if(page==="home") renderHome();
  if(page==="shop") renderShop();
  if(page==="favorites") renderFavorites();
}

function filterProducts(category,button){
  currentCategory = category;
  document.querySelectorAll(".categories button").forEach(b=>b.classList.remove("active"));
  button.classList.add("active");
  renderShop();
}

function searchProducts(){
  currentCategory = "all";
  document.querySelectorAll(".categories button").forEach((b,i)=>{
    b.classList.toggle("active",i===0);
  });
  showPage("shop");
  renderShop();
}

function toggleFavorite(id){
  if(favorites.includes(id)){
    favorites = favorites.filter(x=>x!==id);
  }else{
    favorites.push(id);
  }
  renderHome();
  renderShop();
  renderFavorites();
}

function openDetails(id){
  currentProduct = products.find(p=>p.id===id);
  document.getElementById("detailImg").src = currentProduct.img;
  document.getElementById("detailName").textContent = currentProduct.name;
  document.getElementById("detailDesc").textContent = currentProduct.desc;
  document.getElementById("detailPrice").textContent = currentProduct.price;
  document.getElementById("modal").style.display = "flex";
}

function closeDetails(){
  document.getElementById("modal").style.display = "none";
}

function addDetailFavorite(){
  toggleFavorite(currentProduct.id);
  alert("Favorite list updated ❤️");
}

function toggleDark(){
  document.body.classList.toggle("dark");
}

renderHome();
renderShop();
renderFavorites();
</script>

</body>
</html>
  
