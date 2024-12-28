// function toggleMenu() {
//     const menu = document.querySelector(".menu-links");
//     const icon = document.querySelector(".hamburger-icon");
//     menu.classList.toggle("open");
//     icon.classList.toggle("open");
//   }

function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");

  // Ensure elements exist
  if (!menu || !icon) {
    console.error("Menu or icon element not found!");
    return;
  }

  // Toggle the menu
  const isOpen = menu.classList.toggle("open");
  icon.classList.toggle("open");

  // Scroll to the top if the menu is being opened
  if (isOpen) {
    console.log("Menu opened. Scrolling to top...");
    window.scrollTo(0, 0); // Directly scrolls to the top
  } else {
    console.log("Menu closed.");
  }
}