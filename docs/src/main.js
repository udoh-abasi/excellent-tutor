var nav = document.querySelector("#nav_bar");
var navButton = document.querySelector("#nav_button");
var menuIcon = document.querySelector("#menu_icon");

var home_link = document.querySelector("#home_link");
var about_link = document.querySelector("#about_link");
var contact_link = document.querySelector("#contact_link");
var meet_link = document.querySelector("#meet_link");


// Get the media query which you want to add the class
var media_query = window.matchMedia("(max-width: 843px)");

navButton.addEventListener("click", ShowHideMenu);

home_link.addEventListener("click", ShowHideMenu);
about_link.addEventListener("click", ShowHideMenu);
contact_link.addEventListener("click", ShowHideMenu);
meet_link.addEventListener("click", ShowHideMenu);

// So, this will add the 'showmenu' class, only if we are in the specified media query
function ShowHideMenu() {
    if (media_query.matches) {
        nav.classList.toggle("showmenu");
        menuIcon.classList.toggle("fa-xmark")
    }
}

