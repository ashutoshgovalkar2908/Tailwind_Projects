document.querySelector("#hamburger").addEventListener("click",displayMenu);

function displayMenu(){
    let menu = document.querySelector("#menu");
    menu.style.display="block";
}

document.querySelector("#close-icon").addEventListener("click",hideMenu);

function hideMenu(){
    let hide = document.querySelector("#menu");
    hide.style.display="none";
}