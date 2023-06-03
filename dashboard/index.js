const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const closeMdl = document.querySelector("#close-modal");
const themeToggler = document.querySelector(".theme-toggler");
const createNew = document.querySelector("#new")
const menuModal = document.querySelector(".modal")


menuBtn.addEventListener('click',() => {
    sideMenu.style.display = 'block';
}) 

closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
})

closeMdl.addEventListener('click', () => {
    menuModal.style.display = 'none';
})

themeToggler.addEventListener('click', () =>{
    document.body.classList.toggle('dark-theme-variables')

    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active')
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active')
})

createNew.addEventListener('click', () => {
    menuModal.style.display = 'flex';
})