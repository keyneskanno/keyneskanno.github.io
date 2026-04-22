document.addEventListener("contextmenu", function (e) {
        e.preventDefault();
        alert(
          "© Conteúdo protegido por direitos autorais - Cultiva Bytes 2026",
        );
        return false;
      });
      document.body.style.userSelect = "none";
      document.body.style.webkitUserSelect = "none";
      document.body.style.MozUserSelect = "none";
      document.body.style.msUserSelect = "none";
      document.addEventListener("keydown", function (e) {
        if (e.ctrlKey && (e.key === "c" || e.key === "C")) {
          e.preventDefault();
          return false;
        }
      });

(function () {
        var toggle = document.querySelector(".menu-toggle");
        var nav = document.getElementById("site-nav");
        if (!toggle || !nav) return;
        toggle.addEventListener("click", function (e) {
          var isOpen = nav.classList.toggle("open");
          toggle.classList.toggle("open", isOpen);
          toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
        });

        // Close menu when clicking a link
        nav.addEventListener("click", function (e) {
          if (e.target.tagName === "A") {
            nav.classList.remove("open");
            toggle.classList.remove("open");
            toggle.setAttribute("aria-expanded", "false");
          }
        });

        // Close on outside click
        document.addEventListener("click", function (e) {
          if (!nav.classList.contains("open")) return;
          var withinNav = nav.contains(e.target) || toggle.contains(e.target);
          if (!withinNav) {
            nav.classList.remove("open");
            toggle.classList.remove("open");
            toggle.setAttribute("aria-expanded", "false");
          }
        });
      })();

document.addEventListener("DOMContentLoaded", function () {
        const images = document.querySelectorAll("img");
        images.forEach(function (img) {
          const originalSrc = img.getAttribute("src");
          if (!originalSrc) return;

          const basePath = originalSrc.substring(
            0,
            originalSrc.lastIndexOf("."),
          );
          const extensions = [
            ".png",
            ".jpeg",
            ".JPG",
            ".webp",
            ".PNG",
            ".JPEG",
          ];
          let attempt = 0;

          img.addEventListener("error", function () {
            if (attempt < extensions.length) {
              img.src = basePath + extensions[attempt];
              attempt++;
            } else {
              img.style.display = "none";

              const serviceCard = img.closest(".service-card");
              if (serviceCard) serviceCard.classList.add("no-image");

              const heroWrapper = img.closest(".hero-image-wrapper");
              if (heroWrapper)
                heroWrapper.innerHTML =
                  '<i class="ph-fill ph-tooth" style="font-size: 100px; color: var(--accent-pink); opacity: 0.3;"></i>';

              const whyUsWrapper = img.closest(".why-us-image");
              if (whyUsWrapper)
                whyUsWrapper.innerHTML =
                  '<i class="ph-fill ph-heart" style="font-size: 100px; color: var(--accent-purple); opacity: 0.3;"></i>';
            }
          });
        });
      });

