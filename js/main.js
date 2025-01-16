const assets = document.querySelector('.assets');
const pageAssets = document.querySelector('.page2'); // Sélectionne un seul élément avec querySelector
const home = document.querySelector('.home');
const pageHome = document.querySelector('.pageHome');

assets.addEventListener('click', () => {
    pageAssets.style.display = "block";
    pageHome.style.display = "none";
    console.log("Page Features");
});

home.addEventListener('click', () => {
    pageAssets.style.display = "none";
    pageHome.style.display = "flex";
    console.log("Home Page");
});