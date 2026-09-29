function escapeHtml(str) {
    return String(str)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&apos;");
}

function calcPrice(product, selected) {
    let total = product.basePrice;
    product.params.forEach((param) => {
        const value = selected[param.id];
        const option = param.options.find((o) => o.value === value);
        if (option) total += option.priceModifier;
    });
    return total;
}

function renderParams(product, selected) {
    return product.params.map((param) => {
        const optionsHtml = param.options.map((opt) => {
            const isActive = selected[param.id] === opt.value ? " is-active" : "";
            return `
        <button
          type="button"
          class="modal__param-option${isActive}"
          data-param="${param.id}"
          data-value="${opt.value}"
        >${escapeHtml(opt.label)}</button>
      `;
        }).join("");

        const current = param.options.find((o) => o.value === selected[param.id]);
        const note = current?.descNote ? `<p class="modal__param-note" data-param-note="${param.id}">${escapeHtml(current.descNote)}</p>` : "";

        return `
      <div class="modal__param">
        <span class="modal__param-label">${escapeHtml(param.label)}</span>
        <div class="modal__param-options">${optionsHtml}</div>
        ${note}
      </div>
    `;
    }).join("");
}

function renderCompat(product, allProducts) {
    const items = (product.compatibleWith || [])
        .map((id) => allProducts.find((p) => p.id === id))
        .filter(Boolean);

    if (items.length === 0) return "";

    const listHtml = items.map((item) => `
    <li class="modal__compat-item">
      <button
        type="button"
        class="modal__compat-link"
        data-compat-id="${item.id}"
      >
        <span class="modal__compat-brand mono">${escapeHtml(item.brand)}</span>
        <span class="modal__compat-title">${escapeHtml(item.title)}</span>
      </button>
    </li>
  `).join("");

    return `
    <div class="modal__compat">
      <h3 class="modal__compat-heading">// Совместимо с:</h3>
      <ul class="modal__compat-list">${listHtml}</ul>
    </div>
  `;
}

function renderModalContent(product, allProducts, selected) {
    const specsHtml = Object.entries(product.specs)
        .map(([key, value]) => `
      <div class="modal__spec">
        <span class="modal__spec-key">${escapeHtml(key)}</span>
        <span class="modal__spec-value">${escapeHtml(String(value))}</span>
      </div>
    `)
        .join("");

    const mediaHtml = product.image
        ? `<img src="${product.image}" alt="${escapeHtml(product.description)}">`
        : "";

    const price = calcPrice(product, selected);

    return `
    <div class="modal__media">
      ${mediaHtml}
      <div class="modal__media-overlay">
        <span class="modal__brand">${escapeHtml(product.brand)}</span>
        <h2 class="modal__title" id="modalTitle">${escapeHtml(product.title)}</h2>
      </div>
    </div>
    <p class="modal__desc">${escapeHtml(product.description)}</p>
    <div class="modal__specs">${specsHtml}</div>
    <div class="modal__params">${renderParams(product, selected)}</div>
    ${renderCompat(product, allProducts)}
    <div class="modal__price-row">
      <span class="modal__price-label">Итоговая цена</span>
      <span class="modal__price" data-modal-price>${price} ${product.currency}</span>
    </div>
  `;
}

let modal = null;
let contentRoot = null;
let currentProduct = null;
let selectedParams = {};
let allProducts = [];

function updatePrice() {
    if (!currentProduct) return;
    const priceEl = modal.querySelector("[data-modal-price]");
    if (!priceEl) return;
    priceEl.textContent = `${calcPrice(currentProduct, selectedParams)} ${currentProduct.currency}`;
}

function handleOptionClick(btn) {
    const paramId = btn.dataset.param;
    const value = btn.dataset.value;

    if (!paramId || !value) return;
    if (selectedParams[paramId] === value) return;

    selectedParams[paramId] = value;

    const param = currentProduct.params.find((p) => p.id === paramId);
    const option = param?.options.find((o) => o.value === value);

    const wrapper = btn.closest(".modal__param");
    wrapper.querySelectorAll(".modal__param-option").forEach((el) => {
        el.classList.toggle("is-active", el.dataset.value === value);
    });

    const noteEl = wrapper.querySelector(`[data-param-note="${paramId}"]`);
    if (noteEl && option?.descNote) {
        noteEl.textContent = option.descNote;
    }

    updatePrice();
}

function handleCompatClick(btn, allProducts) {
    const id = btn.dataset.compatId;
    const product = allProducts.find((p) => p.id === id);
    if (!product) return;
    openModal(product, allProducts);
}

function attachModalEvents(product, products) {
    contentRoot.querySelectorAll(".modal__param-option").forEach((btn) => {
        btn.addEventListener("click", () => handleOptionClick(btn));
    });

    contentRoot.querySelectorAll(".modal__compat-link").forEach((btn) => {
        btn.addEventListener("click", () => handleCompatClick(btn, products));
    });
}

export function initModal(products = []) {
    allProducts = products;
    modal = document.getElementById("productModal");
    if (!modal) return;

    contentRoot = modal.querySelector("[data-modal-content]");

    const closeBtn = modal.querySelector("[data-modal-close]");
    closeBtn?.addEventListener("click", () => modal.close());

    modal.addEventListener("click", (e) => {
        if (e.target === modal) modal.close();
    });

    modal.addEventListener("close", () => {
        document.body.classList.remove("modal-open");
        if (contentRoot) contentRoot.innerHTML = "";
        currentProduct = null;
        selectedParams = {};
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && modal?.open) {
            e.preventDefault();
            modal.close();
        }
    });
}

export function openModal(product, products) {
    if (!modal || !contentRoot || !product) return;

    currentProduct = product;
    const pool = products || allProducts;

    selectedParams = {};
    product.params.forEach((param) => {
        selectedParams[param.id] = param.default;
    });

    contentRoot.innerHTML = renderModalContent(product, pool, selectedParams);
    attachModalEvents(product, pool);

    modal.showModal();
    document.body.classList.add("modal-open");
}