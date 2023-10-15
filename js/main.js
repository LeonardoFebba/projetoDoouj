const texts = [
    "Moldando o futuro educacional no metaverso.",
    "Conectamos escolhas a oportunidades ilimitadas",
    "Inovação e excelência - nosso compromisso com o futuro."
];

let currentTextIndex = 0; 
let currentIndex = 0;
const speed = 50; 
const repeatDelay = 2000; 

function typeWriter() {
    if (currentTextIndex < texts.length) {
        const currentText = texts[currentTextIndex];
        if (currentIndex < currentText.length) {
            document.getElementById("content").innerHTML += currentText.charAt(currentIndex);
            currentIndex++;
            setTimeout(typeWriter, speed);
        } else {
            setTimeout(() => {
                currentIndex = 0;
                currentTextIndex++;
                document.getElementById("content").innerHTML = "";
                typeWriter();
            }, repeatDelay);
        }
    } else {
        currentTextIndex = 0;
        typeWriter(); 
    }
}
window.onload = function () {
    typeWriter();
};

const menuLinks = document.querySelectorAll('.menu-nav a');


menuLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();

    const targetId = link.getAttribute('href').substring(1);


    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});