const ttthelp = (prefix) => {
    return `
「 \u{1F4AE} TRES EN RAYA \u{1F4AE} 」
By: Juls Modders
◪ VERSION BETA, PUEDE TENER ALGUNOS BUGS..

◪ JUEGO SOLO  PARA GRUPOS

◪ INICIAR
  │
  ├─ ❏ Para iniciar digite:
  │     └「 ${prefix}ttt [ DIFICULDAD ] 」
  └─ ❏ Solo 1 perona por vez

◪ DIFICULDAD
  │
  ├─ ❏ easy : totalmente aleatório
  │     (Mayormente este comando es para que pierda)
  ├─ ❏ normal : 66% de chance a ganar
  ├─ ❏ hard : 100% de chance a ganar
  └─ ❏ impossible : Jaja nunca ganas xd

◪ TEMPORIZADOR
  │
  ├─ ❏ Se va a reiniciar automáticamente después de 4 │ minutos
  │
  └─ ❏ La partida terminará 
           automaticamente después de 4 minutos

◪ COMANDOS
  │
  ├─ ❏ Para marcar digite:
  │     └「 ${prefix}coord [ COORDENADA ] 」
  │
  └─ ❏ Ejemplo:
	        └「   ${prefix}coord a1 
	               ----------------------
	                1️⃣2️⃣3️⃣
	               A❌🔲🔲
	               B️🔲🔲🔲
	               C🔲🔲🔲  」

◪ SU ESTADO
  │
  └─ ❏ Para ver su Estado digite:
          └「 ${prefix}tttme 」

◪ RECOMPENSAS
  │
  ├─ ❏ EASY
  │     ├ Victoria : +「 25 / 50 」
  │     └ Derrota : -「 200 / 200 」
  │
  ├─ ❏ NORMAL
  │     ├ Victoria : +「 75 / 150 」
  │     └ Derrota : -「 75 / 150 」
  │
  ├─ ❏ HARD
  │     ├ Victoria : +「 200 / 400 」
  │     └ Derrota : -「 25 / 50 」
  │
  ├─ ❏ IMPOSSIBLE
  │     ├ Victoria : +「 1000 / 2000 」
  │     └ Derrota : -「 0 / 0 」
  │
  ├─ ❏ EMPATE
  │     └「 0 / 0 」
  │ 
  └─ ❏ PARTIDA NO FINALIZADA
          └ -「 75 / 150 」
`
}

exports.ttthelp = ttthelp