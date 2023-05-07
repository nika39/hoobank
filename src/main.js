window.addEventListener("load", function () {
  const togglerEl = document.querySelector(".navbar__toggler");
  const navbarEL = document.querySelector(".navbar");

  togglerEl.addEventListener("click", function () {
    if (navbarEL.classList.contains("navbar--is-open")) {
      navbarEL.classList.remove("navbar--is-open");
    } else {
      navbarEL.classList.add("navbar--is-open");
    }
  });
});
