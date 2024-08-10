const toggleTheme = document.getElementById('toggle-theme');
const toggleIcon = document.getElementById('toggle-icon');
const toggleText = document.getElementById('toggle-text');

/*toggle icon navbar */
let menuIcon = document.querySelector('#menu__icon');
let navbar = document.querySelector('.navbar');

//Cambiar de idiomas los textos
const flagsElement = document.getElementById("flags");
const textsToChange = document.querySelectorAll("[data-section]");

const changeLanguage = async language => {
    const requestJson = await fetch(`./languages/${language}.json`)
    const texts = await requestJson.json();

    // console.log(texts);
    for (const textToChange of textsToChange) {
        const section = textToChange.dataset.section;
        const value = textToChange.dataset.value;

        // console.log(section, value); //verificar los datos 
        textToChange.innerHTML = texts[section][value];
    }
};

flagsElement.addEventListener('click', (e) => {
    changeLanguage(e.target.parentElement.dataset.language);
});


/*ahora vamos a escuchar el clic*/
toggleTheme.addEventListener('click', (e) => { /*cundo escucha el click cambia la clase si no la tiene se la pone y si la tiene se la quita*/
    e.preventDefault();
    document.body.classList.toggle('dark');
    if (toggleIcon.src.includes('moon.svg')) {/*cambio icono*/
        toggleIcon.src = 'assets/images/icons/sun.svg';
        toggleText.textContent = 'Light Mode'; /*cambio text*/
    } else {
        toggleIcon.src = 'assets/images/icons/moon.svg';
        toggleText.textContent = 'Dark Mode'; /*cambio text*/
    }

});


menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


/*scroll sections active link*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    /*sticky navbar*/
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /*sremove toggle icon and navbar when click (scroll)*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}

/*sremove toggle icon and navbar when click (scroll)*/
ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services__content, .projects__box, .contact form, .skill__content', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about__img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about__content', { origin: 'right' });


/*TYPED JS*/
const typed = new Typed('.multiple__text', {
    strings: ['Desarrollador Web', 'Backend'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

window.addEventListener("scroll", function () {
    let boton = document.getElementById("btn");
    if (window.scrollY <= 0) {
        boton.style.display = "none"; // o boton.remove() si se quiere eliminar el botón
    } else {
        boton.style.display = "block"; // o boton.style.display = "" si se quiere mostrar el botón
    }
});