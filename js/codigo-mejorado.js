function eleccion(jugada){
    let elegiste =" "
   if(jugada== 1 ){
      elegiste = " 🪨."
   }else if(jugada == 2){
      elegiste = " 📄. "
   }else if(jugada == 3){
    elegiste = "✂️. "
   }else{
     elegiste = "Elegiste Mal"
   } 
   return elegiste 
  }  

  let = jugador = 0
  let = maquina = 0
  let max = 3
  let min = 1
  let triunfos = 0
  let perdidas  = 0
  let empates = 0

 while ( triunfos <3 && perdidas <3 ){
  
  maquina = Math.floor(Math.random()*(max - min +1) + min)
  jugador = prompt("Elije un Utencilio: 1 es Piedra 🪨, 2 es Papel  📄 y 3 es Tijera ✂️ ")

  //Elección del usuario  y la maquina  
  alert("Tu elijes: " + eleccion(jugador ))
  alert("La maquina elije: " + eleccion(maquina ))

  //Combate 
  if( (jugador == 1 && maquina == 3 ) || (jugador == 2 && maquina == 1 ) || (jugador == 3 && maquina == 2) ){
      alert("Le Ganaste a la Maquina. ")
      triunfos = triunfos + 1
  }else if( jugador == maquina ){
      alert("Lograste un empate con la Maquina. ")
      empates = empates + 1
 }else{
      alert("Perdiste Contra la Maquina. ")
      perdidas = perdidas + 1
  }
}
  alert(" Ganaste " + triunfos + " Perdiste: " + perdidas + " Empataste: " + empates + " El total de juegos fue de: " + (triunfos + perdidas + empates))