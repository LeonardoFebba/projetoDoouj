const texts = [
    "Moldando o futuro educacional no metaverso.",
    "Conectamos escolhas a oportunidades educacionais ilimitadas",
    "Inovação, excelência e ética - nosso compromisso com o futuro."
];

let currentTextIndex = 0; // Índice atual do texto
let currentIndex = 0; // Índice atual do caractere no texto atual
const speed = 50; // Velocidade de digitação em milissegundos
const repeatDelay = 2000; // Tempo de pausa entre os textos em milissegundos

function typeWriter() {
    if (currentTextIndex < texts.length) {
        const currentText = texts[currentTextIndex];
        if (currentIndex < currentText.length) {
            document.getElementById("content").innerHTML += currentText.charAt(currentIndex);
            currentIndex++;
            setTimeout(typeWriter, speed);
        } else {
            // Passar para o próximo texto após uma pausa
            setTimeout(() => {
                currentIndex = 0;
                currentTextIndex++;
                document.getElementById("content").innerHTML = ""; // Limpar o texto anterior
                typeWriter(); // Chamar a função novamente para o próximo texto
            }, repeatDelay);
        }
    } else {
        // Se todos os textos foram exibidos, reinicie o ciclo
        currentTextIndex = 0;
        typeWriter(); // Chamar a função novamente para iniciar o ciclo novamente
    }
}

// Iniciar a máquina de escrever quando a página carregar
window.onload = function () {
    typeWriter();
};