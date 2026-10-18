// Nosso bichinho virtual começa aqui!
console.log("Bichinho carregado!");



const olhos = document.getElementById("olhos"); // const(variavel), olhos(nome da variavel), document.getElementById("olhos")(pega o elemento do html com id olhos)    
const pupilas = document.getElementById("pupilas"); // const(variavel), pupilas(nome da variavel), document.getElementById("pupilas")(pega o elemento do html com id pupilas)

function piscar() { // função piscar() que vai ser chamada a cada 3 segundos

    
    // Fecha os olhos e esconde as pupilas
    olhos.src = "bichinho/olhos_fechados.png";  // muda a imagem dos olhos para olhos fechados
    pupilas.style.visibility = "hidden"; // esconde as pupilas


    // Abre os olhos e mostra as pupilas novamente
    setTimeout(() => { // função anônima que vai ser chamada após 150 milissegundos
    pupilas.style.visibility = "visible"; // mostra as pupilas novamente
    olhos.src = "bichinho/olhos_abertos.png"; // abre os olhos novamente
}, 150);
}
// Pisca a cada 3 segundos
setInterval(piscar, 3000);
