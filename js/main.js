// Sélection des éléments
const assets = document.querySelector('.assets');
const home = document.querySelector('.home');
const pageAssets = document.querySelector('.pagegameplay');
const pageHome = document.querySelector('.pageHome');

// Vérification de l'existence des éléments
if (assets && home && pageAssets && pageHome) {
    assets.addEventListener('click', () => {
        pageAssets.style.display = "flex";
        pageHome.style.display = "none";
        console.log("Page Features affichée, Home caché");
    });

    home.addEventListener('click', () => {
        pageHome.style.display = "flex";
        pageAssets.style.display = "none";
        console.log("Page Home affichée, Features cachée");
    });
} else {
    console.error("erreur");
}


