document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");

  const onScroll = () => {
    if (!header) return;
    header.classList.toggle("scrolled", window.scrollY > 12);
  };

  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  if (toggle && links) {
    toggle.addEventListener("click", () => {
      links.classList.toggle("open");
    });

    links.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => links.classList.remove("open"));
    });
  }

  if (form && status) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      status.classList.add("show");
      status.textContent =
        "Thanks — your message is ready. Email us at contact@dlperformancemarketing.com and we'll reply within 24 hours.";
      form.reset();
    });
  }
});
