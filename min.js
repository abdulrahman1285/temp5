let navbar = document.querySelector('.navbar');
let men = document.querySelector("#menu-icon");


men.onclick = ()=>{
    men.classList.toggle('bx-x');
    navbar.classList.toggle('show');
}
