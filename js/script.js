/* Header scroll effect */
window.addEventListener("scroll", () => {
  const header = document.getElementById("header");
  if (window.scrollY > 50) {
    header.classList.add("glass");
  } else {
    header.classList.remove("glass");
  }
});

/* Mobile menu toggle */
(function () {
  const toggles = document.querySelectorAll(".menu-toggle");
  toggles.forEach((toggle) => {
    const container = toggle.closest(".nav-container") || document;
    const menu = container.querySelector(".nav-links");
    if (!menu) return;

    function setOpen(open) {
      toggle.classList.toggle("open", open);
      menu.classList.toggle("open", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    }

    toggle.addEventListener("click", function (e) {
      e.stopPropagation();
      setOpen(!menu.classList.contains("open"));
    });

    // Close when a menu link is clicked
    menu.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", function () {
        setOpen(false);
      });
    });

    // Close when clicking outside
    document.addEventListener("click", function (e) {
      if (!container.contains(e.target)) setOpen(false);
    });

    // Close on Escape
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") setOpen(false);
    });
  });
})();
