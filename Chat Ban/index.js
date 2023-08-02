// ----- code -----

let player1 = {
  freeTime: 20,
  talk: (text) => {
    console.log(text);
    return text;
  },
};

function banPlayer(text, obj) {
  let options = {
    banTime: 30,
    reason: "bad conduct",
  };

  let word = obj.talk(text);
  if (word == "bad word") {
    obj.freeTime -= options.banTime;
    console.log(
      "player lost",
      options.banTime,
      "days for",
      options.reason,
      "the remaining time is",
      obj.freeTime,
      "days"
    );
  }
}

// ----- test -----

banPlayer("bad word", player1);

// ----- Brazilian Portuguese -----

//     Nesse exemplo tem um mini programa que simula um sistema de banimento de chat
//   em um jogo online,nele nós temos o objeto player que contém um tempo livre de
//   jogo e retorna o que o player falar no chat.

//     Na função “banPlayer” nós recebemos um texto que representa o que o jogador disse no chat
//   e o objeto que representa o jogador específico, no caso o player1, nessa função temos o objeto “option”
//   que armazena o tempo de banimento e a razão do banimento.

//     Dentro da função de banimento a função “talk” do player é ativada com o parâmetro “text” que foi passado.
//   Se o resultado da função for igual a uma “bad word”, ou seja, uma palavra não permitida, será subtraído do “freeTime”
//   do player o tempo de banimento, no caso, o “banTime”, além disso, informa no chat que o jogador perdeu tantos dias de “freeTime”
//   pelo motivo que está representado como “reason” e mostra o tempo restante que o player ainda possui.

//     Um programa simples porém ótimo para exercitar como funciona a passagem de parâmetros em funções!

// ----- English -----
