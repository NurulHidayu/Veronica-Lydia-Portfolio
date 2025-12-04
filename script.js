// ===============================
// 1) MOBILE MENU TOGGLE
// ===============================
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.getElementById('navLinks');

if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}

// Close menu when clicking a nav link on mobile
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});


// ===============================
// 2) ACTIVE NAV LINK ON SCROLL (SCROLLSPY)
// ===============================
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-link');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navAnchors.forEach((a) => {
          a.classList.toggle('active', a.getAttribute('href') === '#' + id);
        });
      }
    });
  },
  { threshold: 0.35 }
);

sections.forEach((section) => observer.observe(section));


// ===============================
// 3) TYPEWRITER EFFECT (HERO ROLE)
// ===============================
const roles = [
  'Multimedia Computing Student',
  'UI / UX Enthusiast',
  'Unity & Web Developer'
];

const roleElement = document.getElementById('typed-role');
let roleIndex = 0;
let charIndex = 0;
let typingForward = true;

function typeLoop() {
  const current = roles[roleIndex];

  if (typingForward) {
    charIndex++;
    if (charIndex === current.length + 4) typingForward = false;
  } else {
    charIndex--;
    if (charIndex === 0) {
      typingForward = true;
      roleIndex = (roleIndex + 1) % roles.length;
    }
  }

  roleElement.textContent = current.substring(0, Math.max(charIndex, 1));
  setTimeout(typeLoop, 90);
}

if (roleElement) typeLoop();


// ===============================
// 4) CONTACT FORM VALIDATION (FRONT-END ONLY)
// ===============================
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    formStatus.classList.remove('error');

    const name = document.getElementById('fullname').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
      formStatus.textContent = 'Please fill in all required fields.';
      formStatus.classList.add('error');
      return;
    }

    const emailPattern = /\S+@\S+\.\S+/;
    if (!emailPattern.test(email)) {
      formStatus.textContent = 'Please enter a valid email address.';
      formStatus.classList.add('error');
      return;
    }

    formStatus.textContent = 'Sending message...';

    setTimeout(() => {
      formStatus.textContent = 'Thank you! Your message has been sent (demo only).';
      contactForm.reset();
    }, 700);
  });
}


// ===============================
// 5) SCROLL REVEAL ANIMATION
// ===============================
const reveals = document.querySelectorAll('.reveal');

window.addEventListener('scroll', () => {
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    const winHeight = window.innerHeight;

    if (top < winHeight - 100) {
      el.classList.add('active');
    }
  });
});


// ===============================
// 6) FOOTER YEAR AUTO UPDATE
// ===============================
document.getElementById('year').textContent = new Date().getFullYear();

