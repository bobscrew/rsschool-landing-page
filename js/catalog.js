import { categories, products } from "./data/products.js";
import { initTheme } from "./theme.js";

const VISIBLE_INITIAL = 6;

/* === Какие id категорий допустимы в URL === */
const VALID_CATEGORY_IDS = categories.map(c => c.id);

/* === Получить категорию из hash или вернуть первую === */
function getCategoryFromHash() {
  const hash = decodeURIComponent(location.hash.replace("#", ""));
  return VALID_CATEGORY_IDS.includes(hash) ? hash : categories[0].id;
}

const state = {
  activeCategory: getCategoryFromHash(),
  visibleCount: VISIBLE_INITIAL,
};

/* ============ DOM ============ */
const grid         = document.getElementById("catalogGrid");
const filtersRoot  = document.querySelector(".catalog__filters");
const moreBtn      = document.querySelector("[data-show-more]");
const countLabel   = document.querySelector("[data-catalog-count]");
const metaLabel    = document.querySelector("[data-catalog-label]");

/* ============ УТИЛИТЫ ============ */
function getByCategory(categoryId) {
  return products.filter(p => p.category === categoryId);
}

function formatPrice(n, currency = "$") {
  return `${n} ${currency}`;
}

function escapeXml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}


function placeholderSvg(product) {
  const brand = escapeXml(product.brand.toUpperCase());
  const title = escapeXml(product.title.toUpperCase());

  return `
    <svg
      class="card__placeholder"
      viewBox="0 0 800 600"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="${escapeXml(product.title)}"
      preserveAspectRatio="xMidYMid slice"
    >
      <rect width="800" height="600" class="ph-bg"/>
      <g class="ph-grid">
        <line x1="0"   y1="150" x2="800" y2="150"/>
        <line x1="0"   y1="300" x2="800" y2="300"/>
        <line x1="0"   y1="450" x2="800" y2="450"/>
        <line x1="200" y1="0"   x2="200" y2="600"/>
        <line x1="400" y1="0"   x2="400" y2="600"/>
        <line x1="600" y1="0"   x2="600" y2="600"/>
      </g>
      <text x="40" y="80"  class="ph-tag">// ${brand}</text>
      <text x="40" y="490" class="ph-brand">${brand}</text>
      <text x="40" y="545" class="ph-title">${title}</text>
      <rect x="40" y="560" width="60" height="4" class="ph-accent"/>
    </svg>
  `;
}


function cardTemplate(product) {
  const specEntries = Object.entries(product.specs).slice(0, 3);
  const specsHtml = specEntries
    .map(([, v]) => `<span>${v}</span>`)
    .join("");

  const compatCount = product.compatibleWith?.length ?? 0;


  const mediaHtml = product.image
    ? `
      <img
        class="card__img"
        src="${product.image}"
        alt="${escapeXml(product.description)}"
        loading="lazy"
        onerror="this.replaceWith(makeFallbackSvg('${product.id}'))"
      >
    `
    : placeholderSvg(product);

  return `
    <article class="card" data-id="${product.id}" tabindex="0" role="button" aria-label="${escapeXml(product.title)}">
      <div class="card__media">
        ${mediaHtml}
        <span class="card__brand-tag">${product.brand}</span>
      </div>

      <div class="card__body">
        <h3 class="card__title">${product.title}</h3>
        <p class="card__desc">${product.description}</p>
        <div class="card__specs">${specsHtml}</div>
        <div class="card__footer">
          <span class="card__price">
            <span class="card__price-from mono">ОТ</span>${formatPrice(product.basePrice, product.currency)}
          </span>
          <span class="card__compat mono">// совместимо: ${compatCount}</span>
        </div>
      </div>
    </article>
  `;
}


window.makeFallbackSvg = function (productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return "";

  const brand = escapeXml(product.brand.toUpperCase());
  const title = escapeXml(product.title.toUpperCase());

  const wrapper = document.createElement("div");
  wrapper.innerHTML = `
    <svg
      class="card__placeholder"
      viewBox="0 0 800 600"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="${escapeXml(product.title)}"
      preserveAspectRatio="xMidYMid slice"
    >
      <rect width="800" height="600" class="ph-bg"/>
      <g class="ph-grid">
        <line x1="0"   y1="150" x2="800" y2="150"/>
        <line x1="0"   y1="300" x2="800" y2="300"/>
        <line x1="0"   y1="450" x2="800" y2="450"/>
        <line x1="200" y1="0"   x2="200" y2="600"/>
        <line x1="400" y1="0"   x2="400" y2="600"/>
        <line x1="600" y1="0"   x2="600" y2="600"/>
      </g>
      <text x="40" y="80"  class="ph-tag">// ${brand}</text>
      <text x="40" y="490" class="ph-brand">${brand}</text>
      <text x="40" y="545" class="ph-title">${title}</text>
      <rect x="40" y="560" width="60" height="4" class="ph-accent"/>
    </svg>
  `;
  return wrapper.firstElementChild;
};


function renderFilters() {
  filtersRoot.innerHTML = categories.map(cat => {
    const count = getByCategory(cat.id).length;
    const isActive = cat.id === state.activeCategory ? " is-active" : "";
    return `
      <button
        type="button"
        class="filter-btn${isActive}"
        role="tab"
        aria-selected="${cat.id === state.activeCategory}"
        data-category="${cat.id}"
      >
        ${cat.name}
        <span class="filter-btn__count">(${count})</span>
      </button>
    `;
  }).join("");

  filtersRoot.querySelectorAll("[data-category]").forEach(btn => {
    btn.addEventListener("click", () => {
      const next = btn.dataset.category;
      if (next === state.activeCategory) return;

      state.activeCategory = next;
      state.visibleCount = VISIBLE_INITIAL;

      setCategoryHash(next);

      renderFilters();
      renderGrid();
    });
  });
}


function setCategoryHash(categoryId) {
  const url = `${location.pathname}${location.search}#${categoryId}`;
  history.replaceState(null, "", url);
}


function renderGrid() {
  const list = getByCategory(state.activeCategory);
  const visible = list.slice(0, state.visibleCount);

  grid.innerHTML = visible.map(cardTemplate).join("");

  grid.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", () => {
    });
    card.addEventListener("keydown", e => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
      }
    });
  });


  const hasMore = list.length > state.visibleCount;
  moreBtn.hidden = !hasMore;
  if (hasMore) {
    moreBtn.textContent = `Показать ещё → (${list.length - state.visibleCount})`;
  }


  const catName = categories.find(c => c.id === state.activeCategory)?.name ?? "";
  metaLabel.textContent = `// Категория: ${catName} — показано ${visible.length} из ${list.length}`;
}


moreBtn.addEventListener("click", () => {
  const list = getByCategory(state.activeCategory);

  state.visibleCount = Math.min(
    state.visibleCount + VISIBLE_INITIAL,
    list.length
  );

  renderGrid();
});


function renderCount() {
  countLabel.textContent = `// ${products.length} ПОЗИЦИЙ`;
}


window.addEventListener("hashchange", () => {
  const next = getCategoryFromHash();
  if (next !== state.activeCategory) {
    state.activeCategory = next;
    state.visibleCount = VISIBLE_INITIAL;
    renderFilters();
    renderGrid();
  }
});


function init() {
  initTheme();
  renderCount();
  renderFilters();
  renderGrid();

  if (!location.hash) {
    setCategoryHash(state.activeCategory);
  }
}

init();