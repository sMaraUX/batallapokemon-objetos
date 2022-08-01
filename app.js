class Pokemon {
 constructor(nombre, vida, elemento, ataques){
    this.nombre = nombre
    this.vida = vida
    this.ataques = ataques
    this.elemento = elemento
    }
        batalla(ataques) { //metodo de batalla
          const damageElectrico = (this.vida * 0.15) //metodo para calcular daño segun elemento
          this.vida -= ataques 
           if (this.elemento == "Agua"){
           } else { 
            this.vida -= damageElectrico
           }
            if(this.vida > 0 ) {
              alert(`${this.nombre} recibio el golpe y sus puntos se redujeron a ${this.vida}`)
            } else {
                console.log(`${this.nombre} ha sido derrotado`)
            }
        }   
       
}

class Pikachu extends Pokemon {
  super(nombre, vida, elemento, impactTrueno) {
  this.impactTrueno = impactTrueno
  }

    impacTrueno(oponente) {
        console.log(`${this.nombre} ha lanzado un Impact Trueno!`)
        oponente.batalla(this.impacTrueno)
      }
}

class Charmander extends Pokemon {
  super(nombre, vida, elemento, lanzaLlamas) {
  this.lanzaLlamas = lanzaLlamas
  }

    lanzaLlamas(oponente) {
        console.log(`${this.nombre} ha lanzado Lanzallamas!`)
        oponente.batalla(this.lanzaLlamas)
      }

      
}

const pikachu = new Pikachu("Pikachu", 1000, "Electrico", [ImpactTrueno = 220, Rayo = 300, Coletazo = 50])
const charmander = new Charmander("Charmander", 1000, "Fuego", [Lanzallamas = 200, Ascuas = 120, Tackle = 50])

console.log(pikachu.batalla(charmander))

class Entrenador {
  constructor(nombre, pokemons){
     this.nombre = nombre
     this.pokemons = pokemons
     }
    }
/* comienza el juego
    alert("Bienvenidos a su primer batalla Pokemon");

    const entrenador1 = new Entrenador(prompt("Ingrese el nombre del primer entrenador"), 
    prompt("Elija sus dos Pokemons: 1. Pikachu | 2. Charmander | 3. Squirtle | 4. Bulbasaur"))
    const entrenador2 = new Entrenador(prompt("Ingrese el nombre del segundo entrenador"),
    prompt("Elija sus dos Pokemons: 1. Pikachu | 2. Charmander | 3. Squirtle | 4. Bulbasaur"))

/*

let jugador1 = prompt("Ingresa el nombre del primer jugador");

let jugador2 = prompt("Ingresa el nombre del segundo jugador");

let pokemon1 = prompt(jugador1 +" Selecciona tu Pokemon inicial: Pikachu / Bulbasaur / Charmander / Squirtle").toLowerCase();
let pokemon2 = prompt(jugador2 +" Selecciona tu Pokemon inicial: Pikachu / Bulbasaur / Charmander / Squirtle").toLowerCase();

let puntosVidaply1 = 1000;
let puntosVidaply2 = 1000;

let pikachu = 500;
let bulbasaur = 350;
let charmander = 400;
let squirtle = 450;

function batalla1() {
  switch (pokemon1) {
    case "pikachu":
      atkPkm1 = puntosVidaply2 - pikachu;
      alert(
        "Jugador " + jugador1 + " Tus puntos de vida se redujeron a " + atkPkm1
      );
      break;

    case "bulbasaur":
      atkPkm1 = puntosVidaply2 - bulbasaur;
      alert(
        "Jugador " + jugador1 + " Tus puntos de vida se redujeron a " + atkPkm1
      );
      break;

    case "charmander":
      atkPkm1 = puntosVidaply2 - charmander;
      alert(
        "Jugador " + jugador1 + " Tus puntos de vida se redujeron a " + atkPkm1
      );
      break;

    case "squirtle":
      atkPkm1 = puntosVidaply2 - squirtle;
      alert(
        "Jugador " + jugador1 + " Tus puntos de vida se redujeron a " + atkPkm1
      );
      break;

    default:
      alert(
        "Jugador " + jugador1 + " Este no es tu Pokemón, inténtalo de nuevo"
      );
      batalla1();
  }
}

function batalla2() {
  switch (pokemon2) {
    case "pikachu":
      atkPkm2 = puntosVidaply1 - pikachu;
      alert(
        "Jugador " + jugador2 + " Tus puntos de vida se redujeron a " + atkPkm2
      );
      break;

    case "bulbasaur":
      atkPkm2 = puntosVidaply1 - bulbasaur;
      alert(
        "Jugador " + jugador2 + " Tus puntos de vida se redujeron a " + atkPkm2
      );
      break;

    case "charmander":
      atkPkm2 = puntosVidaply1 - charmander;
      alert(
        "Jugador " + jugador2 + " Tus puntos de vida se redujeron a " + atkPkm2
      );
      break;

    case "squirtle":
      atkPkm2 = puntosVidaply1 - squirtle;
      alert(
        "Jugador " + jugador2 + " Tus puntos de vida se redujeron a " + atkPkm2
      );
      break;

    default:
      alert(
        "Jugador " + jugador2 + " Este no es tu Pokemón, inténtalo de nuevo"
      );
      batalla2();
  }
}
alert(
  "Escogieron a sus compañeros! Tendrán su primera batalla a continuación!"
);

batalla1();
batalla2();

if (atkPkm1 < atkPkm2) {
  alert("El ganador de esta batalla es " + jugador2 + "!");
}
if (atkPkm1 > atkPkm2) {
  alert("El ganador de esta batalla es " + jugador1 + "!");
}

if (atkPkm2 == atkPkm1) {
  alert("Los pokemon pelearon duro pero están igualados!");
  alert("Es un empate!");
}


 function nuevoJuego() 
 {
     pokemon1 = prompt (jugador1 + " Selecciona tu Pokemon inicial: Pikachu / Bulbasaur / Charmander / Squirtle").toLowerCase()
     pokemon2 = prompt (jugador2 + " Selecciona tu Pokemon inicial: Pikachu / Bulbasaur / Charmander / Squirtle").toLowerCase()
    batalla1()
    batalla2()
        if(atkPkm1 < atkPkm2) {
        alert("El ganador de esta batalla es " + jugador2+ "!")
        }
        if(atkPkm1 > atkPkm2) {
        alert("El ganador de esta batalla es " + jugador1 + "!")
        }
        if(atkPkm2 == atkPkm1) {
        alert("Los pokemon pelearon duro pero están igualados!")
        alert("Es un empate!")
        }
    }

  let pregunta = prompt("Desean volver a jugar? SI - NO").toLowerCase()

  if(pregunta == "si") {
    nuevoJuego()
  }
  if(pregunta == "no") {
    alert("Adios entrenadores!")
  } else {
    alert("Nos vemos la próxima!")
  }
*/
    

 /*     damage(elemento) {
        if (this.elemento == "Electrico") {

          switch(this.elemento){
            case "Electrico":
            damage = (this.vida * 0.15)
            return (this.vida - damage)
            break

            case "Planta":
          }
        }
       } */
       