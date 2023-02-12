const darkButton = document.getElementById('dark')
const silverkButton = document.getElementById('silver')
const solarButton = document.getElementById('solar')
const body = document.body;

//Apply the cached theme on reload

const theme = localStorage.getItem('theme');
const isSolar = localStorage.getItem('isSolar')

if (theme) {
    body.classList.add(theme);
    isSolar && body.classList.add('solar');
}

//Button Event Handlers

darkButton.onclick = () => {
        body.classList.replace('silver', 'dark');
        localStorage.setItem('theme', 'dark')
};

silverkButton.onclick = () => {
    body.classList.replace('dark', 'silver');
    localStorage.setItem('theme', 'silver')
};

solarButton.onclick = () => { 
    if (body.classList.contains('solar')) {
        body.classList.remove('solar')
        solarButton.style.cssText = `
        --bg-solar: var(--yellow);
        `
        solarButton.innerText = 'solarize';
    } else {

        solarButton.style.cssText = `
        --bg-solar: white;
        `
        body.classList.add('solar');    
    }
};