function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function renderModalContent(product) {
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

  return `
    <div class="modal__media">${mediaHtml}</div>
    <span class="modal__brand">${escapeHtml(product.brand)}</span>
    <h2 class="modal__title" id="modalTitle">${escapeHtml(product.title)}</h2>
    <p class="modal__desc">${escapeHtml(product.description)}</p>
    <div class="modal__specs">${specsHtml}</div>
    <div class="modal__price-row">
      <span class="modal__price-label">Базовая цена</span>
      <span class="modal__price">${product.basePrice} ${product.currency}</span>
    </div>
  `;
}

let modal = null;
let contentRoot = null;

export function initModal() {
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
  });
}

export function openModal(product) {
  if (!modal || !contentRoot) return;
  contentRoot.innerHTML = renderModalContent(product);
  modal.showModal();
  document.body.classList.add("modal-open");
}