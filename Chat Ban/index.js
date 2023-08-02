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

//   In this example there is a little program that simulates a chat ban system in an online Game,
//  in the program there's the player object that contains a certain amount of gameplay free Time
//  and returns whatever the player types in the chat.

//   Inside the "banPlayer" function we receive a text that represents what the player typed in the chat,
// and the object that represents that specific player, in this case player1. In this function we got the "option"
// object that stores the banning time and the reason why they got banned.

//   Inside the banning function the player's "talk" function is activated with the given "text" parameter.
// If the function's result is equal to a "bad word", which means, an unallowed word, the banning time will be subtracted
// from the player's "freeTime", in this case called "banTime", also it's informed in the chat that the player lost a certain amount of days from the "freeTime"
// for the reason that is represented as "reason", and  it shows the amount of time the player got left.

//   It's a simple program, yet it's great for exercising how parameters work within functions!
