const sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
const secctionReiniciar = document.getElementById("reiniciar")
const botonMascotaJugador = document.getElementById("boton-mascota") 
const botonReiniciar = document.getElementById("boton-reiniciar") 
secctionReiniciar.style.display = "none"

const sectionSeleccionarMascota = document.getElementById("seleccionar-mascota")

const spamMascotaJugador = document.getElementById("mascota-jugador")

const spamMascotaMaquina = document.getElementById("mascota-enemigo")

const spamVidasJugador = document.getElementById("vidas-jugador")
const spamVidasEnemigo = document.getElementById("vidas-enemigo")

const sectionMensajes = document.getElementById("resultado")
const ataquesDelJugador = document.getElementById("ataques-del-jugador")
const ataquesDelEnemigo = document.getElementById("ataques-del-enemigo")
const contendorTarjetas = document.getElementById('contenedorTarjetas')
const contenedorAtaques = document.getElementById('contenedorAtaques')

let mokepones = []
let ataqueJugador = []
let ataqueEnemigo = []
let opcionDeMokepones 

let inputHipodoge 
let inputCapipepo
let inputRatigueya 
let inputLangostelvis 
let inputTucapalma
let inputPydos 

let mascotaJugador
let ataquesMokepon
let ataquesMokeponEnemigo  
let botonFuego 
let botonAgua
let botonTierra 
let botones = []
let indexAtaqueJugador 
let indexAtaqueEnemigo
let victoriasJugador = 0 
let victoriasEnemigo = 0
let vidasJugador = 3
let vidasEnemigo = 3


class  Mokepon{
   constructor(nombre, foto, vida,){
     this.nombre = nombre
     this.foto = foto
     this.vida = vida
     this.ataques = []
   }
}

let hipodoge = new Mokepon("Hipodoge", "assets/mokepons_mokepon_hipodoge_attack.png", 5);

let capipepo = new Mokepon("Capipepo", "assets/mokepons_mokepon_capipepo_attack.png", 5);

let ratigueya = new Mokepon("Ratigueya", "assets/mokepons_mokepon_ratigueya_attack.png", 5);

let langostelvis = new Mokepon("Langostelvis", "assets/langostelvis.png", 5)

let tucalpama = new Mokepon("Tucapalma", "assets/mokepons_mokepon_tucapalma_attack.jpg", 5);

let pydos = new Mokepon("Pydos", "assets/Pydos.png", 5);

hipodoge.ataques.push(
  {nombre : "💧", id : "boton-agua"},
  {nombre : "💧", id : "boton-agua"},
  {nombre : "💧", id : "boton-agua"},
  {nombre : "🔥", id : "boton-fuego"},
  {nombre : "🪴", id : "boton-tierra"},
)

capipepo.ataques.push(
  {nombre : "🪴", id : "boton-tierra"},
  {nombre : "🪴", id : "boton-tierra"},
  {nombre : "🪴", id : "boton-tierra"},
  {nombre : "💧", id : "boton-agua"},
  {nombre : "🔥", id : "boton-fuego"},
)

ratigueya.ataques.push(
  {nombre : "🔥", id : "boton-fuego"},
  {nombre : "🔥", id : "boton-fuego"},
  {nombre : "🔥", id : "boton-fuego"},
  {nombre : "💧", id : "boton-agua"},
  {nombre : "🪴", id : "boton-tierra"},
)

mokepones.push(hipodoge, capipepo, ratigueya)


function iniciaJuego(){

   sectionSeleccionarAtaque.style.display = "none"

   mokepones.forEach((mokepon) => {
     opcionDeMokepones = `
     <input type="radio" name="mascota" id=${mokepon.nombre} />
     <label class = "tarjetaDeMokepon" for = ${mokepon.nombre}>
       <p>${mokepon.nombre}</p> 
       <img src = ${mokepon.foto} alt= ${mokepon.nombre}>
     </label>
     `
     contendorTarjetas.innerHTML  += opcionDeMokepones

     inputHipodoge = document.getElementById("Hipodoge")
     inputCapipepo = document.getElementById("Capipepo")
     inputRatigueya = document.getElementById("Ratigueya")
     inputLangostelvis = document.getElementById("Langostelvis")
     inputTucapalma = document.getElementById("Tucapalma")
     inputPydos = document.getElementById("Pydos")

   })
   botonMascotaJugador.addEventListener("click",seleccionarMascotaJugador)

   botonReiniciar.addEventListener("click",reiniciarJuego)
}

function seleccionarMascotaJugador(){
    
        sectionSeleccionarMascota.style.display = "none"

        sectionSeleccionarAtaque.style.display = "flex"


    if(inputHipodoge.checked){
      spamMascotaJugador.innerHTML = inputHipodoge.id
      mascotaJugador = inputHipodoge.id
    }else if(inputCapipepo.checked){
      spamMascotaJugador.innerHTML = inputCapipepo.id
      mascotaJugador = inputCapipepo.id
    }else if(inputRatigueya.checked){
      spamMascotaJugador.innerHTML = inputRatigueya.id
      mascotaJugador = inputRatigueya.id
    }else if(inputLangostelvis.checked){
      spamMascotaJugador.innerHTML = inputLangostelvis.id
      mascotaJugador = inputLangostelvis.id
    }else if(inputTucapalma.checked){
      spamMascotaJugador.innerHTML = inputTucapalma.id
      mascotaJugador = inputTucapalma.id
    }else if(inputPydos.checked){
      spamMascotaJugador.innerHTML = inputPydos.id
      mascotaJugador = inputPydos.id
    }else{
      alert("No elejiste tu mascota, elijela.")
      reiniciarJuego() 
    }
extraerAtaques(mascotaJugador)  
seleccionarMascotaEnemigo()
}

function extraerAtaques(mascotaJugador){
    let ataques
    for (let i = 0; i < mokepones.length; i++) {
     if (mascotaJugador === mokepones[i].nombre) {
          ataques = mokepones[i].ataques 
     }
    }
    mostrarAtaques(ataques) 
} 

function mostrarAtaques(ataques){
   ataques.forEach((ataque) => {
   ataquesMokepon = `<button id = ${ataque.id} class = "botonDeAtaque BAtaque" >${ataque.nombre}</button>`

   contenedorAtaques.innerHTML += ataquesMokepon 
   })
    botonFuego = document.getElementById("boton-fuego")
    botonAgua =  document.getElementById("boton-agua")
    botonTierra = document.getElementById("boton-tierra")
    botones = document.querySelectorAll(".BAtaque")
}

function secuenciaAtaque(){
  botones.forEach((boton) => {
    boton.addEventListener('click', (e) => {
       if (e.target.textContent === '🪴') {
         ataqueJugador.push("Tierra. 🪴 ")
         console.log(ataqueJugador)
         boton.style.background = '#898bc2'
         //botonTierra.disabled = true 
      }else if(
        e.target.textContent === "💧"){
        ataqueJugador.push("Agua. 💧 ")
        console.log(ataqueJugador)
        boton.style.background = '#898bc2'
        //botonAgua.disabled = true 
      }else{
        ataqueJugador.push("Fuego. 🔥 " )
        console.log(ataqueJugador)
        boton.style.background = '#898bc2'
        //botonFuego.disabled = true
       }
       ataqueAleatorio()
    })
  }) 
  
}

function seleccionarMascotaEnemigo(){
    let mascotaMaquina = aleatorio(0, mokepones.length -1)
      spamMascotaMaquina.innerHTML = mokepones[mascotaMaquina].nombre
      ataquesMokeponEnemigo = mokepones[mascotaMaquina].ataques
      secuenciaAtaque()
}

function ataqueAleatorio(){
  let elementoAleatorio = aleatorio(0, ataquesMokeponEnemigo.length -1)

  if(elementoAleatorio == 0 || elementoAleatorio == 1){
     ataqueEnemigo.push("Fuego. 🔥 ")
  }else if(elementoAleatorio == 3 || elementoAleatorio == 4 ){
    ataqueEnemigo.push("Agua. 💧 ")
  }else{
    ataqueEnemigo.push( "Tierra. 🪴 ")
  }
  console.log(ataqueEnemigo)
  iniciarPelea()
}


function iniciarPelea(){
 if (ataqueJugador.length === 5) {
  combate()
 }}

function indexAmbosOponentes(jugador, enemigo){
  indexAtaqueJugador = ataqueJugador[jugador]
  indexAtaqueEnemigo = ataqueEnemigo[enemigo] 
}
function combate(){
  for (let index = 0; index < ataqueJugador.length; index++) {
    if(ataqueJugador[index] === ataqueEnemigo[index]){
      indexAmbosOponentes(index, index)
      crearMensaje("Empataste.|:")
    }else if((ataqueJugador[index] == "Fuego. 🔥 "  && ataqueEnemigo[index] == "Tierra. 🪴 ") || (ataqueJugador[index] = "Agua. 💧 " && ataqueEnemigo[index] == "Fuego. 🔥 " ) || (ataqueJugador[index] == "Tierra. 🪴 " && ataqueEnemigo[index] == "Agua. 💧 ")){
      indexAmbosOponentes(index, index)
      crearMensaje("felicidades Ganaste!!")
      victoriasJugador ++
      spamVidasJugador.innerHTML  = victoriasJugador
    }else{
      indexAmbosOponentes(index, index)
      crearMensaje("Perdiste.):")
      victoriasEnemigo ++
      spamVidasEnemigo.innerHTML = victoriasEnemigo 
    }}
  revisarVictorias()
} 

function revisarVictorias(){
  if (victoriasJugador === victoriasEnemigo){
    crearMensajeFinal("Esto es un empate entre ustedes")
  }else if(victoriasJugador > victoriasEnemigo){
    crearMensajeFinal( "Felicidades 🥺, Ganaste el juego!!! 🎉 ")
  }else {
    crearMensajeFinal("Lo lamento perdiste, 😩 ni modos.")
  }
}

function crearMensaje(resultado){

 let nuevoAtaqueDelJugador = document.createElement("P")
 let nuevoAtaqueDelEnemigo = document.createElement("P")
 
 sectionMensajes.innerHTML = resultado
 nuevoAtaqueDelJugador.innerHTML = indexAtaqueJugador
 nuevoAtaqueDelEnemigo.innerHTML = indexAtaqueEnemigo

 ataquesDelJugador.appendChild( nuevoAtaqueDelJugador)
 ataquesDelEnemigo.appendChild( nuevoAtaqueDelEnemigo)
}

function crearMensajeFinal(resultadoFinal){
  sectionMensajes.innerHTML = resultadoFinal
   secctionReiniciar.style.display = "block"
}

function reiniciarJuego(){
  location.reload()
}

function aleatorio(min, max){
  return Math.floor(Math.random()*(max-min+1)+min)
}

window.addEventListener("load", iniciaJuego)
    
  
