// Keep navbar in sync with all pages
document.addEventListener("DOMContentLoaded", function () {
  const navbarContainer = document.getElementById("navbar-container");
  if (navbarContainer) {
    fetch("navbar.html")
      .then((response) => response.text())
      .then((html) => {
        navbarContainer.innerHTML = html;
      })
      .catch((error) => {
        console.warn("Error loading navbar:", error);
      });
  }
});
