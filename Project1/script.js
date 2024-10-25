// Hämtar alla länkar på hemsidan.
const links = document.querySelectorAll('nav a');

// Loopar alla länkar och ser vilken som är aktiv.
links.forEach((link) => {
  if (link.href === window.location.href) {
    link.classList.add('active');

    // Lägger till klassen .active på de länkar som är aktiva.
  }
});
