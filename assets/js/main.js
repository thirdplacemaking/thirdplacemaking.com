let toggleBtn = document.getElementById('menu-toggle');
let menu = document.getElementById('menu-main');

document.addEventListener('DOMContentLoaded', function() {
  toggleBtn.addEventListener('click', () => {
    let expanded = toggleBtn.getAttribute("aria-expanded") == "true" ? "false" : "true";
    toggleBtn.setAttribute("aria-expanded", expanded);
    document.body.classList.toggle("top-0");
    document.body.classList.toggle("fixed");
  })
})

window.addEventListener('resize', function() {
  if (window.innerWidth >= 768) {
    toggleBtn.setAttribute("aria-expanded", "false");
    document.body.classList.remove("top-0", "fixed");
  }
});
