// Mobile menu toggle
function toggleMenu() {
  const nav = document.querySelector(".nav-links");
  nav.style.display = nav.style.display === "flex" ? "none" : "flex";
  nav.style.position = "absolute";
  nav.style.top = "100%";
  nav.style.left = "0";
  nav.style.right = "0";
  nav.style.flexDirection = "column";
  nav.style.background = "rgba(10, 10, 15, 0.95)";
  nav.style.padding = "1rem 2rem";
  nav.style.backdropFilter = "blur(20px)";
  nav.style.borderBottom = "1px solid var(--border)";
}

// Form submission
function handleSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const btn = e.target.querySelector('button[type="submit"]');
  const originalText = btn.innerHTML;

  const data = new FormData(form);

  btn.innerHTML = '<i class="fas fa-check"></i> Sending...';
  btn.disabled;
  btn.style.background = "linear-gradient(135deg, #00b894, #00d4aa)";

  fetch(
    "https://script.google.com/macros/s/AKfycbxkVX8Q7EufupFFrXoiu6KkbmEYd9M0hA9O_TLHtvTL4ueB7417Kn8Wd46SxWISUanb/exec",
    {
      method: "POST",
      body: data,
    },
  )
    .then(() => {
      btn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
      btn.style.background = "linear-gradient(135deg, #00b894, #00d4aa)";
      form.reset();
      setTimeout(() => {
        btn.innerHTML = originalText;
        btn.style.background = "";
        btn.disabled = false;
      }, 3000);
    })
    .catch((err) => {
      btn.innerHTML = "Failed. Try again.";
      btn.disabled = false;
    });
}
// Scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, observerOptions);

document.querySelectorAll(".fade-in").forEach((el) => {
  observer.observe(el);
});

// Navbar background on scroll
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.style.background = "rgba(10, 10, 15, 0.98)";
    navbar.style.boxShadow = "0 4px 30px rgba(0, 0, 0, 0.3)";
  } else {
    navbar.style.background = "rgba(10, 10, 15, 0.9)";
    navbar.style.boxShadow = "none";
  }
});

// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});
