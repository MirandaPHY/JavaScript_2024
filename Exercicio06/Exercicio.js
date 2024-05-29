// Relógio Customizado:
// Faça o seu próprio relógio, com fuso horários, timers, 
//pomodoro, blocos de estudo, enfim, pode ir longe com esse projeto e se 
// tornar extremamente útil no seu dia-a-dia.

// Path: Exercicio06/Exercicio.js


function relogio {
    let data = new Date();
    let hora = data.getHours();
    let minuto = data.getMinutes();
    let segundo = data.getSeconds();
    let horaImprimivel = hora + ":" + minuto + ":" + segundo;
    console.log(horaImprimivel);
}

setInterval(relogio, 1000);
  