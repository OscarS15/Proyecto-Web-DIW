// Botón "Subir"
const myButton = document.getElementById("myBtn");

window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        myButton.style.display = "block";
    } else {
        myButton.style.display = "none";
    }
};

function scrollToTop() {
    document.body.scrollTop = 0; // Para Safari
    document.documentElement.scrollTop = 0; // Para otros navegadores
}

// Efecto de máquina de escribir
const textElement = document.getElementById("texto");
const text = textElement.innerHTML;
textElement.innerHTML = "";

let i = 0;
const speed = 50;

function typeWriter() {
    if (i < text.length) {
        textElement.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    } else {
        textElement.style.borderRight = "none";
    }
}

typeWriter();

// Menú hamburguesa
function toggleMenu() {
    const menu = document.querySelector('.navbar-menu');
    menu.classList.toggle('active');
}