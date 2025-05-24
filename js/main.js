// Rien à cacher/afficher dynamiquement — tout reste visible en permanence

// Scroll fluide vers les sections du site au clic sur la navbar
document.querySelector('.assets')?.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('#gameplay')?.scrollIntoView({ behavior: 'smooth' });
});

document.querySelector('.home')?.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('#home')?.scrollIntoView({ behavior: 'smooth' });
});
document.querySelector('.pageupdate')?.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('#update')?.scrollIntoView({ behavior: 'smooth' });
});
document.querySelector('.pageequipe')?.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('#equipe')?.scrollIntoView({ behavior: 'smooth' });
});
