
alert('Bienvenido a jugar Cachipum')
let numjuegos = parseInt(prompt('Ingrese su número de jugadas'));

let victoriasJugador = 0;
let victoriasMaquina = 0;
// este for recorrera la cantidad de jugada que indicara el usuario mas arriba
for (let i = 0; i < numjuegos; i++) {
    let maquina = Math.floor(Math.random() * 3) + 1; //le sumo +1 para que me tome las opcines que quiere tener el ususario
    let jugador = parseInt(prompt('Elige: 1 - Piedra, 2 - Papel, 3 - Tijeras'));
    
    alert('Elegiste ' + eleccion(jugador));
    alert('La máquina eligió ' + eleccion(maquina));

    if (jugador === maquina) {
        alert('Empataste');
    } else if ((jugador === 1 && maquina === 3) || (jugador === 2 && maquina === 1) || (jugador === 3 && maquina === 2)) {
        alert('Ganaste');
        victoriasJugador++;
    } else {
        alert('Perdiste');
        victoriasMaquina++;
    }
}

alert('jugador' + victoriasJugador + ' victorias');
alert('máquina' + victoriasMaquina + ' victorias');

function eleccion(jugada) {
    let resultado = '';

    if (jugada === 1) {
        resultado = 'Piedra';
    } else if (jugada === 2) {
        resultado = 'Papel';
    } else if (jugada === 3) {
        resultado = 'Tijeras';
    } else {
        resultado = 'es incorrecto';
    }
    return resultado;
}