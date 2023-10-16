const textArray = [
  "Lolita Vladimir Nabokov Lolita, luz de minha vida, labareda em minha carne. Minha alma, minha lama. Lo-li-ta: a ponta da língua descendo em três saltos pelo céu da boca para tropeçar de leve, no terceiro, contra os dentes. Lo. Li. Ta. Pela manhã ela era Lô, não mais que Lô, com seu metro e quarenta e sete de altura e calçando uma única meia soquete. Era Lola ao vestir os jeans desbotados. Era Dolly na escola. Era Dolores sobre a linha pontilhada. Mas em meus braços sempre foi Lolita",
  "Nenhuma noite por mais escura que seja pode impedir o amanhecer. Não há derrota que derrube, quem nasceu para vencer. Quando a gente pensa que sabe todas as respostas, vem a vida e muda todas as perguntas. Não importa o que tiraram de você, o que importa é o que você vai fazer com o que sobrou. Felicidade é aprender com as derrotas e festejar com as vitórias... Por isso não deixe seu tempo acabar sem aproveitá-lo cada segundo. Lembre-se que o tempo é precioso e o futuro é promissor a cada um de nós! O que tiver para fazer agora... Faça! Pois o passado não volta e o futuro pode não acontecer. Viva hoje como se não houvesse o amanhã, nunca desista de teus projetos e sonhos. Por que mesmo antes de serem projetados por você, já foi projetado e anotado por Deus. Se Deus encheu tua vida de obstáculos, É porque ele acredita na tua capacidade de passar por cima de cada um deles. O que não te mata te deixa mais forte. O homem planeja o seu caminho, mas é Deus quem lhe dirige os passos.",
  "Tenho lido os filósofos. São uns caras realmente estranhos, engraçados e loucos. Jogadores. Descartes veio e disse: é pura bobagem o que esses caras estão falando. Disse que a matemática era o modelo da verdade absoluta e óbvia. Mecanismo. Então, Hume veio com seu ataque à validade do conhecimento cientifico causal. E depois veio Kierkegaard: 'Enfio meu dedo na existência - não tem cheiro de nada. Onde estou?'. E depois veio Sartre, que sustentava que a existência é absurda. Adoro esses caras. Embalam o mundo. Será que tinham dor de cabeça por pensar dessa forma? será que uma torrente de escuridão rugia entre seus dentes? Quando você pega homens como esses e os compara aos homens que vejo caminhando nas ruas ou comendo em cafés ou aparecendo na tela da TV, a diferença é tão grande que alguma coisa se contorce dentro de mim, me chutando as tripas. - Charles Bukowski",
  "Eu tenho a sensação que a sociedade permite que os homens sejam loucos e engraçados desde sempre. É bonito o menino falar palavrão, é bonito o menino arrotar, soltar pum... A menina que faz isso é louca. Então a mulher tem medo de se expor ao ridículo. [...] A mulher quer pagar de gostosa mas não quer ser comediante, não quer ser ridícula. - Dani Calabresa",
  "Mais uma vez eu abandonei as coisas que eu amava, o meu lar, a minha família e os meus amigos. Troquei tudo por uma eternidade junto com a Samara. Se você estiver lendo esta carta significa que já não estou entre vocês. Sinto muito por deixar vocês, não se preocupem comigo. Eu estou feliz, eu escolhi isso. Eu escolhi o amor. Cuidem um dos outros",
  "Eu encontrei um amor para mim. Querida, entre de cabeça e me siga. Eu encontrei uma garota, linda e doce. Eu nunca soube que você era a pessoa que estava esperando por mim. Porque nós éramos apenas crianças quando nos apaixonamos. Não sabíamos o que era. Eu não vou desistir de você dessa vez. Mas querida, apenas me beije devagar. Seu coração é tudo o que eu tenho. E em seus olhos você está segurando o meu.",
  "Não deixe o amor passar. Quando encontrar alguém e esse alguém fizer seu coração parar de funcionar por alguns segundos, preste atenção: pode ser a pessoa mais importante da sua vida. Se os olhares se cruzarem e, neste momento, houver o mesmo brilho intenso entre eles, fique alerta: pode ser a pessoa que você está esperando desde o dia em que nasceu. Se o toque dos lábios for intenso, se o beijo for apaixonante, e os olhos se encherem d’água neste momento, perceba: existe algo mágico entre vocês. Se o primeiro e o último pensamento do seu dia for essa pessoa, se a vontade de ficar juntos chegar a apertar o coração, agradeça: Deus te mandou um presente: o amor. Por isso, preste atenção nos sinais. Não deixe que as loucuras do dia a dia o deixem cego para a melhor coisa da vida: o amor.",
  "O valor das coisas não está no tempo que elas duram, mas na intensidade com que acontecem. Por isso existem momentos inesquecíveis, coisas inexplicáveis e pessoas incomparáveis.",
  "Assim que se olharam, amaram-se; assim que se amaram, suspiraram; assim que suspiraram, perguntaram-se um ao outro o motivo; assim que descobriram o motivo, procuraram o remédio.",
  "Não deixe o barulho da opinião dos outros abafar sua voz interior. E mais importante, tenha a coragem de seguir seu coração e sua intuição. Eles de alguma forma já sabem o que você realmente quer se tornar. Tudo o mais é secundário",
  "A leitura após certa idade distrai excessivamente o espírito humano das suas reflexões criadoras. Todo o homem que lê demais e usa o cérebro de menos adquire a preguiça de pensar.",
  "O amigo deve ser como o dinheiro, cujo valor já conhecemos antes de termos necessidade dele. Para conhecermos os amigos é necessário passar pelo sucesso e pela desgraça. No sucesso, verificamos a quantidade e, na desgraça, a qualidade. Fiquei magoado, não por me teres mentido, mas por não poder voltar a acreditar-te.",
]

const Gametext = document.querySelector(".text > p")

function randomText(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)

  return Math.floor(Math.random() * (max - min) + min)
}

function doReload() {
  return textArray[randomText(0,textArray.length)]
}

Gametext.textContent = doReload();