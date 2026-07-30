const mensagens = [
  "💙 Um amigo verdadeiro é um tesouro para toda a vida.",
  "🤝 A amizade transforma momentos simples em lembranças inesquecíveis.",
  "😊 Amigos fazem os dias difíceis parecerem mais leves.",
  "❤️ Feliz Dia da Amizade! Nunca deixe de valorizar quem está ao seu lado.",
  "🌟 Grandes amizades tornam a vida extraordinária."
];

function trocarMensagem(){

    const indice = Math.floor(Math.random() * mensagens.length);

    document.getElementById("texto").innerHTML = mensagens[indice];

}
