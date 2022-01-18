// function onclick remove class and active new class
let show = document.querySelector(".show");
let removeActive = document.querySelector(".crad");
let btn = document.querySelector(".btn");

btn.onclick = () => {
    show.style.display = 'flex';
    removeActive.style.display = 'none';
};