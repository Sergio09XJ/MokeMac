const sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
const botonMascotaJugador = document.getElementById("boton-mascota")
const mensajes = document.getElementById("mensajes")
const botonReiniciar = document.getElementById("Reiniciar")
const mensajeReiniciar = document.getElementById("mensaje-reiniciar")

const sectionSeleccionarMascota = document.getElementById("seleccionar-mascota")
const spanMascotaJugador = document.getElementById("mascota-jugador")

const spanMascotaEnemigo = document.getElementById("mascota-enemigo")

const spanVidasJugador = document.getElementById("vidas-jugador")
const spanVidasEnemigo = document.getElementById("vidas-enemigo")

const spanAtaquesJugador = document.getElementById("mensajesJugador")  
const spanAtaquesEnemigo = document.getElementById("mensajesEnemigo") 
const contenedorTarjetas = document.getElementById("contenedor-tarjetas")
const contenedorAtaques = document.getElementById("contenedor-ataques")

const sectionVerMapa = document.getElementById("sectionVerMapa")
const mapa = document.getElementById("mapa")

let jugadorId = null
let enemigoId = null 
let mokepones = []
let mokeponesEnemigos = []

let ataque 
let ataqueJugador = []
let ataqueEnemigo = []
let ataqueMokeponEnemigo 
let mascotaJugador
let mascotaJugadorObjeto 

let vidasJugador = 3
let vidasEnemigo = 3

let victoriasJugador = 0
let victoriasEnemigo = 0

let inputHipodoge 
let inputCapipepo 
let inputRatigueya
let inputLangostelvis
let inputTucapalma
let inputPydos

let cHipodoge 
let cCapipepo 
let cRatigueya
let cLangostelvis
let cTucapalma
let cPydos

let botonFuego
let botonTierra
let botonAgua 
let botonMagia
let botonAire 
let botonRayo 

let botones = []

let indexAtaqueJugador 
let indexAtaqueEnemigo 

let lienzo = mapa.getContext("2d")
let intervalo 
let mapaBackground = new Image()
mapaBackground.src = "assetsM/mokemap.png"
let alturaQueBuscamos 
let anchoMapa = window.innerWidth - 20
const anchoMax = 500 

if(anchoMapa > anchoMax){
   anchoMapa = anchoMax - 20 
}

alturaQueBuscamos = anchoMapa * 400 / 600


mapa.width = anchoMapa
mapa.height = alturaQueBuscamos

 class Mokepon{
  constructor(nombre, imagen, vida, imagenmapa, id = null, ){
   this.nombre = nombre
   this.imagen = imagen 
   this.vida = vida 
   this.ataques = []
   this.ancho  = 40
   this.alto  = 40
   this.x =  aleatorio(0, mapa.width - this.ancho )
   this.y =  aleatorio(0, mapa.height - this.alto)
   this.mapaImagen = new Image()
   this.mapaImagen.src = imagenmapa
   this.velocidadX = 0 
   this.velocidadY = 0
   this.id = id 
 }

  pintarMokepon(){
    lienzo.drawImage(
      this.mapaImagen,
      this.x,
      this.y,
      this.ancho,
      this.alto,
    )
  }

}

 let hipodoge = new  Mokepon("Hipodoge","assetsM/mokepons_mokepon_hipodoge_attack.png" , 5, "assetsM/hipodoge.png");
 let capipepo = new Mokepon("Capipepo", "assetsM/mokepons_mokepon_capipepo_attack.png", 5, "assetsM/capipepo.png");
 let ratigueya = new  Mokepon("Ratigueya", "assetsM/mokepons_mokepon_ratigueya_attack.png", 5, "assetsM/ratigueya.png");
 let langostelvis = new  Mokepon("Langostelvis","assetsM/mokepons_mokepon_langostelvis_attack.png" , 5, "assetsM/mokepons_mokepon_langostelvis_attack.png");
 let tucapalma = new Mokepon("Tucapalma", "assetsM/mokepons_mokepon_tucapalma_attack.png", 5, "assetsM/mokepons_mokepon_tucapalma_attack.png");
 let pydos = new  Mokepon("Pydos", "assetsM/mokepons_mokepon_pydos_attack.png", 5, "assetsM/mokepons_mokepon_pydos_attack.png");

 const HIPODOGE_ATAQUES = [
    {nombre: "Agua 💧 ", id: "boton-agua"},
    {nombre: "Agua 💧 ", id: "boton-agua"},
    {nombre: "Agua 💧 ", id: "boton-agua"},
    {nombre: "Tierra 🪴 ", id: "boton-tierra"},
    {nombre: "Fuego 🔥 ", id: "boton-fuego"},
 ]
 hipodoge.ataques.push(...HIPODOGE_ATAQUES)

 const CAPIPEPO_ATAQUES = [  
    {nombre: "Tierra 🪴 ", id: "boton-tierra"},
    {nombre: "Tierra 🪴 ", id: "boton-tierra"},
    {nombre: "Tierra 🪴 ", id: "boton-tierra"},
    {nombre: "Agua 💧 ", id: "boton-agua"},
    {nombre: "Fuego 🔥 ", id: "boton-fuego"},
 ]
 capipepo.ataques.push(...CAPIPEPO_ATAQUES)

 const RATIGUEYA_ATAQUES = [ 
   {nombre: "Fuego 🔥 ", id: "boton-fuego"},
   {nombre: "Fuego 🔥 ", id: "boton-fuego"},
   {nombre: "Fuego 🔥 ", id: "boton-fuego"},
   {nombre: "Tierra 🪴 ", id: "boton-tierra"},
   {nombre: "Agua 💧 ", id: "boton-agua"},
 ]
 ratigueya.ataques.push(...RATIGUEYA_ATAQUES)

 const LANGOSTELVIS_ATAQUES = [
   {nombre: "Magia ✯ ", id: "boton-magia"},
   {nombre: "Magia ✯ ", id: "boton-magia"},
   {nombre: "Magia ✯ ", id: "boton-magia"},
   {nombre: "Aire 💨 ", id: "boton-aire"},
   {nombre: "Rayo ⚡️ ", id: "boton-rayo"},
 ]
 langostelvis.ataques.push(...LANGOSTELVIS_ATAQUES)

 const TUCAPALMA_ATAQUES = [
   {nombre: "Aire 💨 ", id: "boton-aire"},
   {nombre: "Aire 💨 ", id: "boton-aire"},
   {nombre: "Aire 💨 ", id: "boton-aire"},
   {nombre: "Magia ✯ ", id: "boton-magia"},
   {nombre: "Rayo ⚡️ ", id: "boton-rayo"},
 ]
 tucapalma.ataques.push(...TUCAPALMA_ATAQUES)

 const PYDOS_ATAQUES = [
   {nombre: "Rayo ⚡️ ", id: "boton-rayo"},
   {nombre: "Rayo ⚡️ ", id: "boton-rayo"},
   {nombre: "Rayo ⚡️ ", id: "boton-rayo"},
   {nombre: "Magia ✯ ", id: "boton-magia"},
   {nombre: "Aire 💨 ", id: "boton-aire"},
 ]
 pydos.ataques.push(...PYDOS_ATAQUES)

 mokepones.push(hipodoge, capipepo, ratigueya, langostelvis, tucapalma, pydos)

function iniciarJuego(){
    sectionSeleccionarAtaque.style.display = "none"
    sectionVerMapa.style.display = "none"

    mokepones.forEach((mokepon) => {
      opcionDeMokepones = `
      <input type = "radio" name = "mascota" id = ${mokepon.nombre} >
      <label id = "mascota" class = ${mokepon.nombre} for = ${mokepon.nombre}>
        <p id = "nombre-de-mascota" >${mokepon.nombre}</p>
        <img src = ${mokepon.imagen} alt = ${mokepon.nombre}>
      </label>` 
      
      contenedorTarjetas.innerHTML += opcionDeMokepones;

    

       cHipodoge = document.getElementsByClassName("Hipodoge")
       cCapipepo = document.getElementsByClassName("Capipepo")
       cRatigueya =  document.getElementsByClassName("Ratigueya")
       cLangostelvis = document.getElementsByClassName("Langostelvis")
       cTucapalma = document.getElementsByClassName("Tucapalma")
       cPydos = document.getElementsByClassName("Pydos")
    
    })
      
       inputHipodoge = document.getElementById("Hipodoge")
       inputCapipepo = document.getElementById("Capipepo")
       inputRatigueya =  document.getElementById("Ratigueya")
       inputLangostelvis = document.getElementById("Langostelvis")
       inputTucapalma = document.getElementById("Tucapalma")
       inputPydos = document.getElementById("Pydos")

    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)

    mensajes.style.display = "none"
    botonReiniciar.addEventListener("click", reiniciar)
    botonReiniciar.style.display = "none"
    mensajeReiniciar.style.display = "none"

    unirseAlJuego()
    
}

function unirseAlJuego(){
  fetch("http://macbook-airx9.local:8000/unirse")
   .then(function(res){
      if(res.ok){
        res.text()
            .then(function(respuesta){
              console.log(respuesta)
              jugadorId = respuesta
            })
      }
   })
}

function seleccionarMascotaJugador(){
   if(inputHipodoge.checked){
    spanMascotaJugador.innerHTML = inputHipodoge.id
    mascotaJugador = inputHipodoge.id
   }else if(inputCapipepo.checked){
    spanMascotaJugador.innerHTML = inputCapipepo.id
    mascotaJugador = inputCapipepo.id
   }else if(inputRatigueya.checked){
    spanMascotaJugador.innerHTML = inputRatigueya.id
    mascotaJugador = inputRatigueya.id
   }else if(inputLangostelvis.checked){
    spanMascotaJugador.innerHTML = inputLangostelvis.id
    mascotaJugador = inputLangostelvis.id
   }else if(inputTucapalma.checked){
    spanMascotaJugador.innerHTML = inputTucapalma.id
    mascotaJugador = inputTucapalma.id
   }else if(inputPydos.checked){
    spanMascotaJugador.innerHTML = inputPydos.id
    mascotaJugador = inputPydos.id
   }else{
    alert("Elige una Mascota")
    //location.reload()
    return
   }
    sectionSeleccionarMascota.style.display = "none"
    seleccionarMokepon(mascotaJugador) 

    extraerAtaques(mascotaJugador)
    sectionVerMapa.style.display = "flex"
    iniciarMapa()
    color
}

function seleccionarMokepon(mascotaJugador){
  fetch(`http://macbook-airx9.local:8000/mokepon/${jugadorId}`, {
    method:"post",  
    headers :{
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      mokepon : mascotaJugador
    })
  })
}

function extraerAtaques(mascotaJugador){
   let ataques 
   for (let i = 0; i < mokepones.length; i++) {
       if(mascotaJugador == mokepones[i].nombre){
         ataques = mokepones[i].ataques
       }
   }
   mostrarAtaques(ataques)
}

function mostrarAtaques(ataques){
   
  ataques.forEach((ataque) => {
    ataqueMokepon = `
    <button id = ${ataque.id} class = "botonDeAtaque BAtaque"> ${ataque.nombre}</button>` 
    
    contenedorAtaques.innerHTML += ataqueMokepon;
  }) 
    botonFuego = document.getElementById("boton-fuego")
    botonTierra = document.getElementById("boton-tierra")
    botonAgua = document.getElementById("boton-agua")
    botonMagia = document.getElementById("boton-magia")
    botonAire = document.getElementById("boton-aire")
    botonRayo = document.getElementById("boton-rayo")

    botones = document.querySelectorAll(" .BAtaque")
  
}

function secuenciaAtaque(){
  botones.forEach((boton) => {
    boton.addEventListener("click", (e) => {

     if(e.target.textContent == " Fuego 🔥 "){
        ataqueJugador.push("Fuego")
        console.log(ataqueJugador)
        boton.style.background = "rgba(255, 0, 0, 0.458)"
        mensajeReiniciar.style.display = "flex"
        //botonFuego.disabled = true

     } else if(e.target.textContent == " Agua 💧 "){
        ataqueJugador.push("Agua")
        console.log(ataqueJugador)
        boton.style.background = "#00a6ff75"   
        mensajeReiniciar.style.display = "flex"
        //botonAgua.disabled = true

     } else if(e.target.textContent == " Magia ✯ "){
        ataqueJugador.push("Magia")
        console.log(ataqueJugador)
        boton.style.background = "#9276e05c"   
        mensajeReiniciar.style.display = "flex"
        //botonAgua.disabled = true

     } else if(e.target.textContent == " Aire 💨 "){
        ataqueJugador.push("Aire")
        console.log(ataqueJugador)
        boton.style.background = "#ECF2FF"   
        mensajeReiniciar.style.display = "flex"
        //botonAgua.disabled = true

     } else if(e.target.textContent == " Rayo ⚡️ "){
        ataqueJugador.push("Rayo")
        console.log(ataqueJugador)
        boton.style.background = "#ffd95a6e"   
        mensajeReiniciar.style.display = "flex"
        //botonAgua.disabled = true
      
     } else{
        ataqueJugador.push("Tierra")
        console.log(ataqueJugador)
        boton.style.background =  "#00ff556f"
        mensajeReiniciar.style.display = "flex"
        //botonTierra.disabled = true
     }
       if (ataqueJugador.length == 5){
        enviarAtaques()
       }
       
    })
  })
}

function enviarAtaques(){
  fetch(`http://macbook-airx9.local:8000/mokepon/${jugadorId}/ataques`, {
     method: "Post",
     headers: {
       "Content-Type": "application/json"
     },
     body: JSON.stringify({
     
       ataques: ataqueJugador 
     })
  }) 

  intervalo = setInterval(obtenerAtaques, 50)
}

function obtenerAtaques(){
  fetch(`http://macbook-airx9.local:8000/mokepon/${enemigoId}/ataques`)
  .then(function (res){
    if(res.ok){
      res.json()
         .then(function ({ataques}){
            if (ataques.length == 5){
               ataqueEnemigo = ataques 
               Pelea()
            }
         })
    }
  })
}

function seleccionarMascotaEnemigo(enemigo){
  spanMascotaEnemigo.innerHTML = enemigo.nombre
  ataqueMokeponEnemigo = enemigo.ataques 
  secuenciaAtaque()
  } 


//function ataqueAleatorioEnemigo(){
//    console.log("Ataques Enemigo ",ataqueMokeponEnemigo )
//    let ataqueAleatorio = aleatorio(0,ataqueMokeponEnemigo.length -1 )
//
//    if(ataqueAleatorio == 0 || ataqueAleatorio == 1 ){
//        ataqueEnemigo.push("Fuego")
//      }else if(ataqueAleatorio == 3 || ataqueAleatorio == 4){
//        ataqueEnemigo.push("Agua")
//      }else{
//        ataqueEnemigo.push("Tierra")
//      }
//      console.log(ataqueEnemigo)
//      iniciarPelea()
//}
//function iniciarPelea(){
//  if(ataqueJugador.length == 5){
//    Pelea()
//  }
//}

function indexAmbosOponentes(jugador,enemigo){
 indexAtaqueJugador = ataqueJugador[jugador]
 indexAtaqueEnemigo = ataqueEnemigo[enemigo]
}

function Pelea(){
  clearInterval(intervalo)
  
  for (let index = 0; index < ataqueJugador.length; index++) {
    if(ataqueJugador[index] == ataqueEnemigo[index]){
      indexAmbosOponentes(index, index)
      crearMensajeFinal("Empate.")
      console.log("Empate")
      crearMensaje()
    }else if(ataqueJugador[index] == "Fuego" && ataqueEnemigo[index] == "Tierra" || ataqueJugador[index] == "Agua" && ataqueEnemigo[index] == "Fuego" || ataqueJugador[index] == "Tierra" && ataqueEnemigo[index] == "Agua" ||
             ataqueJugador[index] == "Magia" && ataqueEnemigo[index] == "Aire" || ataqueJugador[index] == "Rayo" && ataqueEnemigo[index] == "Aire"  || ataqueJugador[index] == "Rayo" && ataqueEnemigo[index] == "Magia"
            ){
      indexAmbosOponentes(index, index)
      crearMensajeFinal("Ganaste!!")
      crearMensaje("mensajesjugador")
      victoriasJugador ++
      spanVidasJugador.innerHTML = victoriasJugador 
      console.log("Ganaste")
    }else {
      indexAmbosOponentes(index, index)
      crearMensajeFinal("Perdiste!!")
      crearMensaje("mensajesEnemigo")
      victoriasEnemigo ++
      spanVidasEnemigo.innerHTML = victoriasEnemigo
      console.log("Perdiste")
    }
    
  
    revisarVidas()
}
}

function revisarVidas(){
    if(victoriasEnemigo == victoriasJugador){
     crearMensajeFinal("Empataste el juego de la vida")
     finalFinalesco()
    }else if(victoriasJugador > victoriasEnemigo){
    crearMensajeFinal("Ganaste el juego de tu vida!!")
     finalFinalesco()
    }else{
      crearMensajeFinal("Perdiste el juego de la vida!!")
      finalFinalesco()
    }
}

function crearMensaje(){
  let parrafoJugador = document.createElement("p")
  parrafoJugador.innerHTML =  indexAtaqueJugador
  let parrafoEnemigo = document.createElement("p")
  parrafoEnemigo.innerHTML = indexAtaqueEnemigo

  spanAtaquesJugador.appendChild(parrafoJugador)
  spanAtaquesEnemigo.appendChild(parrafoEnemigo) 
  
}

function crearMensajeFinal(resultadoFinal){
 ("mensajeFinal")  
 mensajefinal.innerHTML = resultadoFinal
}  
 
function finalFinalesco(){
    botonReiniciar.style.display = "flex"
    mensajes.style.display = "grid"
}    


function aleatorio(min, max){
    return Math.floor(Math.random()*(max-min + 1) + min )
}
 
function reiniciar(){
   botonReiniciar = location.reload()
}

function pintarCanvas(){
  mascotaJugadorObjeto.x = mascotaJugadorObjeto.x + mascotaJugadorObjeto.velocidadX 
  mascotaJugadorObjeto.y = mascotaJugadorObjeto.y + mascotaJugadorObjeto.velocidadY
  lienzo.clearRect( 0, 0, mapa.width, mapa.height)
  lienzo.drawImage(
    mapaBackground,
    0,
    0,
    mapa.width,
    mapa.height
  )
  mascotaJugadorObjeto.pintarMokepon()

  enviarPosicion( mascotaJugadorObjeto.x,  mascotaJugadorObjeto.y)

  mokeponesEnemigos.forEach(function (mokepon){
    mokepon.pintarMokepon()
    revisarColision(mokepon)
  })
 
}

function enviarPosicion(x, y){
  fetch(`http://macbook-airx9.local:8000/mokepon/${jugadorId}/posicion`, {
    method: "post",
    headers: {
      "Content-Type": "application/json"
    }, 
    body: JSON.stringify({
      x,
      y
   })
  })
    .then(function(res) {
      if (res.ok){
         res.json()
            .then(function ({enemigos}){
               console.log(enemigos)  
               mokeponesEnemigos = enemigos.map(function(enemigo){
                  let  mokeponEnemigo = null 
                  const mokeponNombre = enemigo.mokepon.nombre || ""
                  if(mokeponNombre == "Hipodoge") {
                     mokeponEnemigo = new  Mokepon("Hipodoge","assetsM/mokepons_mokepon_hipodoge_attack.png" , 5, "assetsM/hipodoge.png", enemigo.id)
                  } else if (mokeponNombre == "Capipepo"){
                     mokeponEnemigo = new Mokepon("Capipepo", "assetsM/mokepons_mokepon_capipepo_attack.png", 5, "assetsM/capipepo.png", enemigo.id)
                  } else if (mokeponNombre == "Ratigueya"){
                     mokeponEnemigo = new  Mokepon("Ratigueya", "assetsM/mokepons_mokepon_ratigueya_attack.png", 5, "assetsM/ratigueya.png", enemigo.id)
                  }else if (mokeponNombre == "Langostelvis"){
                    mokeponEnemigo = new Mokepon("Langostelivs","assetsM/mokepons_mokepon_langostelvis_attack.png" , 5, "assetsM/mokepons_mokepon_langostelvis_attack.png", enemigo.id)
                 } else if (mokeponNombre == "Tucapalma"){
                    mokeponEnemigo = new  Mokepon("Tucapalma", "assetsM/mokepons_mokepon_tucapalma_attack.png", 5, "assetsM/mokepons_mokepon_tucapalma_attack.png", enemigo.id)
                 }else if (mokeponNombre == "Pydos"){
                  mokeponEnemigo = new Mokepon("Pydos", "assetsM/mokepons_mokepon_pydos_attack.png", 5, "assetsM/mokepons_mokepon_pydos_attack.png", enemigo.id)
               }

                  mokeponEnemigo.x = enemigo.x
                  mokeponEnemigo.y = enemigo.y

                 return mokeponEnemigo
               })
                           
            })
    }
  })
}

function Arriba(){
  mascotaJugadorObjeto.velocidadY = -5
  
}
function Abajo(){
  mascotaJugadorObjeto.velocidadY = 5

}
function Izquierda(){
  mascotaJugadorObjeto.velocidadX = -5
  
}
function Derecha(){
  mascotaJugadorObjeto.velocidadX = 5

  pintarCanvas()
}

function detenermovimiento(){
  mascotaJugadorObjeto.velocidadX = 0;
  mascotaJugadorObjeto.velocidadY = 0;
}

function sePresionoUnaTecla(event){
   switch (event.key) {
    case "ArrowUp":
      Arriba()  
      break
    case "ArrowDown":
      Abajo()
      break  
    case "ArrowLeft":
      Izquierda()
      break
    case "ArrowRight":
      Derecha() 
      break
    default:
      break;
   }
}

function iniciarMapa(){
  
  mascotaJugadorObjeto = obtenerObjetoMascota(mascotaJugador)
  console.log(mascotaJugadorObjeto, mascotaJugador)
  intervalo = setInterval(pintarCanvas, 50)
  window.addEventListener("keydown", sePresionoUnaTecla)
  window.addEventListener("keyup", detenermovimiento)
}

function obtenerObjetoMascota(){
  for (let i = 0; i < mokepones.length; i++) {
    if(mascotaJugador == mokepones[i].nombre){
      return mokepones[i]
    }
}
}


function revisarColision(enemigo){

  const arribaEnemigo = enemigo.y 
  const abajoEnemigo = enemigo.y + enemigo.alto 
  const derechaEnemigo = enemigo.x + enemigo.ancho 
  const izquierdaEnemigo = enemigo.x

  const arribaMascota = mascotaJugadorObjeto.y  
  const abajoMascota = mascotaJugadorObjeto.y + mascotaJugadorObjeto.alto 
  const derechaMascota = mascotaJugadorObjeto.x + mascotaJugadorObjeto.ancho 
  const izquierdaMascota = mascotaJugadorObjeto.x
  if(
    abajoMascota < arribaEnemigo || arribaMascota > abajoEnemigo || derechaMascota < izquierdaEnemigo || izquierdaMascota > derechaEnemigo 
  ){
     return 
  }
  detenermovimiento() 
  clearInterval(intervalo)
  console.log("Se detecto una colision")

  enemigoId = enemigo.id 
  sectionSeleccionarAtaque.style.display = "flex"
  sectionVerMapa.style.display = "none" 
  seleccionarMascotaEnemigo(enemigo)
}




window.addEventListener("load", iniciarJuego)
  
