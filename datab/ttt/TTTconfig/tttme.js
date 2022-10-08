const tttme = (pushname, userWins, userDefeats, userTies, userPoints) => {
  return `
「 🌀💮 TRES EN RAYA💮🌀 」
by: Resen
❖ NOMBRE: ${pushname} 

    ➣ Victorias: ${userWins} 🎊
    ➣ Derrotas: ${userDefeats} 💥
    ➣ Empates : ${userTies} 🌀
    ➣ Puntos  : ${userPoints} ✨
    `
}

exports.tttme = tttme