let navbarStatus = false;
const toggleNavbar = () => {
  console.log(navbarStatus);
  const navbar_links = document.getElementById("navbar_links");
  const overlay = document.getElementById("overlay");
  if (navbarStatus) {
    navbar_links.classList.add("opac");
    overlay.classList.add("overlay_visible");
  } else {
    navbar_links.classList.remove("opac");
    overlay.classList.remove("overlay_visible");
  }
  navbarStatus = !navbarStatus;
};



const toggleMenu1 = (menu_1, menu_2, navbar_links) => {
  if (currentWidth <= 500) {
    menu_1.style.display = menu_1.style.display == "none" ? "block" : "none";
    menu_2.style.display = "none";
    if(menu_1.style.display == "block"){
      navbar_links.classList.remove("height70");
      navbar_links.classList.add("height60");
      menu_1.classList.add("dropdown_content_visible")
    } else {
      navbar_links.classList.remove("height60");
      menu_1.classList.remove("dropdown_content_visible")
    }
  }
};

const toggleMenu2 = (menu_1, menu_2, navbar_links) => {
  if (currentWidth <= 500) {
    menu_2.style.display = menu_2.style.display == "none" ? "block" : "none";
    menu_1.style.display = "none";
    if(menu_2.style.display == "block"){
      menu_2.classList.add("dropdown_content_visible")
      navbar_links.classList.remove("height60");
      navbar_links.classList.add("height70");
    } else {
      menu_2.classList.remove("dropdown_content_visible")
      navbar_links.classList.remove("height70");
    }
  }
};

let currentWidth = window.screen.availWidth;
const toggleMenu = (index) => {
  const menu_1 = document.getElementById("menu_1");
  const menu_2 = document.getElementById("menu_2");
  const navbar_links = document.getElementById("navbar_links");
  switch (index) {
    case 1:
      toggleMenu1(menu_1, menu_2, navbar_links);
      break;
    case 2:
      toggleMenu2(menu_1, menu_2, navbar_links);
      break;
    case 3:
      if (currentWidth <= 500) {
        console.log("working");
        menu_2.style.display = "none";
        menu_1.style.display = "none";
        navbar_links.classList.remove("height60");
        navbar_links.classList.remove("height70");
        menu_1.classList.remove("dropdown_content_visible");
        menu_2.classList.remove("dropdown_content_visible");
      }
      break;
    default:
      return;
  }
};

const onOverlayClick = () => {
  toggleMenu(3);
  toggleNavbar();
};



