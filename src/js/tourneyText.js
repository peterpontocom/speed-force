const torneyTexts = [
  "Mais uma vez eu abandonei as coisas que eu amava, o meu lar, a minha família e os meus amigos. Troquei tudo por uma eternidade junto com a Samara. Se você estiver lendo esta carta significa que já não estou entre vocês. Sinto muito por deixar vocês, não se preocupem comigo. Eu estou feliz, eu escolhi isso. Eu escolhi o amor. Cuidem um dos outros",
  "Eu encontrei um amor para mim. Querida, entre de cabeça e me siga. Eu encontrei uma garota, linda e doce. Eu nunca soube que você era a pessoa que estava esperando por mim. Porque nós éramos apenas crianças quando nos apaixonamos. Não sabíamos o que era. Eu não vou desistir de você dessa vez. Mas querida, apenas me beije devagar. Seu coração é tudo o que eu tenho. E em seus olhos você está segurando o meu.",
  "Não deixe o amor passar. Quando encontrar alguém e esse alguém fizer seu coração parar de funcionar por alguns segundos, preste atenção: pode ser a pessoa mais importante da sua vida. Se os olhares se cruzarem e, neste momento, houver o mesmo brilho intenso entre eles, fique alerta: pode ser a pessoa que você está esperando desde o dia em que nasceu. Se o toque dos lábios for intenso, se o beijo for apaixonante, e os olhos se encherem d’água neste momento, perceba: existe algo mágico entre vocês. Se o primeiro e o último pensamento do seu dia for essa pessoa, se a vontade de ficar juntos chegar a apertar o coração, agradeça: Deus te mandou um presente: o amor. Por isso, preste atenção nos sinais. Não deixe que as loucuras do dia a dia o deixem cego para a melhor coisa da vida: o amor.",
  "O valor das coisas não está no tempo que elas duram, mas na intensidade com que acontecem. Por isso existem momentos inesquecíveis, coisas inexplicáveis e pessoas incomparáveis.",
  "Assim que se olharam, amaram-se; assim que se amaram, suspiraram; assim que suspiraram, perguntaram-se um ao outro o motivo; assim que descobriram o motivo, procuraram o remédio.",
  "Não deixe o barulho da opinião dos outros abafar sua voz interior. E mais importante, tenha a coragem de seguir seu coração e sua intuição. Eles de alguma forma já sabem o que você realmente quer se tornar. Tudo o mais é secundário",
  "A leitura após certa idade distrai excessivamente o espírito humano das suas reflexões criadoras. Todo o homem que lê demais e usa o cérebro de menos adquire a preguiça de pensar.",
  "O amigo deve ser como o dinheiro, cujo valor já conhecemos antes de termos necessidade dele. Para conhecermos os amigos é necessário passar pelo sucesso e pela desgraça. No sucesso, verificamos a quantidade e, na desgraça, a qualidade. Fiquei magoado, não por me teres mentido, mas por não poder voltar a acreditar-te.",
]

const textItems = document.querySelectorAll(".textItem")

const torneyTextsArea = document.querySelector(".text > p")

function textoEscolhido(n) {
  localStorage.setItem("textoTourney", n)
}
textItems.forEach((textItem, index) =>
  textItem.addEventListener("click", () => {
      textoEscolhido(index)
  })
)
torneyTextsArea.textContent = torneyTexts[localStorage.getItem("textoTourney")]