const mensagens = [
"A amizade verdadeira é um tesouro que dura para sempre. 💙",
"Um amigo de verdade está ao seu lado nos bons e maus momentos. 🤝",
"Grandes amizades tornam a vida muito mais especial. 😊",
"Feliz Dia da Amizade! Que nunca faltem pessoas especiais na sua vida! 🎉",
"Amigos transformam momentos simples em lembranças inesquecíveis. ❤️"
];

const texto = document.getElementById("mensagem");
const botao = document.getElementById("btn");

botao.addEventListener("click", () => {
    const aleatoria = Math.floor(Math.random() * mensagens.length);
    texto.textContent = mensagens[aleatoria];
});

function criarCoracao(){

    const coracao = document.createElement("div");
    coracao.classList.add("heart");

    coracao.innerHTML="❤️";

    coracao.style.left=Math.random()*100+"vw";
    coracao.style.top="100vh";
    coracao.style.fontSize=(20+Math.random()*30)+"px";
    coracao.style.animationDuration=(4+Math.random()*3)+"s";

    document.body.appendChild(coracao);

    setTimeout(()=>{
        coracao.remove();
    },7000);

}

setInterval(criarCoracao,300);
