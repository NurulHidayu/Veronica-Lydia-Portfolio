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
// 2) ACTIVE NAV LINK ON SCROLL
// ===============================
const sections = document.querySelectorAll('main section[id]');
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
// 4) PORTFOLIO PROJECT DATA & POPUP
// ===============================
const projects = [
  {
    title: 'Mythborne 3D Game',
    description: 'An interactive 3D mythborne game created in Unity focusing on atmosphere, narrative and basic gameplay mechanics.'
  },
  {
    title: 'ART Transportation App',
    description: 'A mobile UI/UX prototype designed in Figma for ART public transport with booking and ticket UI flows.'
  },
  {
    title: 'UI & Data Mini Projects',
    description: 'Course mini projects combining UI layouts, SQL queries and simple API usage.'
  },
  {
    title: 'Volunteer & Event Design',
    description: 'Digital posters and social graphics designed for university and community programmes.'
  },
  {
    title: 'Programming Exercises',
    description: 'C++, Java and Python exercises focused on logic, algorithms and problem solving.'
  },
  {
    title: 'Exploratory Web Pages',
    description: 'Responsive web layouts using only HTML, CSS and vanilla JavaScript.'
  }
];

const portfolioGrid = document.getElementById('portfolioGrid');

if (portfolioGrid) {
  projects.forEach((project) => {
    const item = document.createElement('button');
    item.type = 'button';
    item.className = 'portfolio-item';
    item.setAttribute('aria-label', project.title);
    item.innerHTML = `<span>${project.title}</span>`;

    item.addEventListener('click', () => {
      alert(project.title + '\n\n' + project.description);
    });

    portfolioGrid.appendChild(item);
  });
}


// ===============================
// 5) CONTACT FORM VALIDATION (FRONT-END ONLY)
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
// 6) FOOTER YEAR AUTO UPDATE
// ===============================
document.getElementById('year').textContent = new Date().getFullYear();
