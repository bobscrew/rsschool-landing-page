export function initBurger() {
  const burger = document.querySelector("[data-burger]");
  const menu = document.getElementById("mobileMenu");

  if (!burger || !menu) return;

  const links = menu.querySelectorAll("a");

  function isOpen() {
    return menu.classList.contains("is-open");
  }

  function openMenu() {
    menu.classList.add("is-open");
    burger.classList.add("is-open");
    burger.setAttribute("aria-expanded", "true");
    burger.setAttribute("aria-label", "Закрыть меню");
    document.body.classList.add("menu-open");
  }

  function closeMenu() {
    menu.classList.remove("is-open");
    burger.classList.remove("is-open");
    burger.setAttribute("aria-expanded", "false");
    burger.setAttribute("aria-label", "Открыть меню");
    document.body.classList.remove("menu-open");
  }

  function toggleMenu() {
    if (isOpen()) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  burger.addEventListener("click", toggleMenu);

  links.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && isOpen()) {
      closeMenu();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 768 && isOpen()) {
      closeMenu();
    }
  });
}