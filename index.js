var dataDoEvento = 24 ;
var idadeDoPraticipante = 19;
var numeroDeParticipantes = 99;

if (dataDoEvento >= 24 ){
    console.log("permisão para criar o evento.");
}  else{
    console.log("sem permisão para criar o evento.");
} 
if (idadeDoPraticipante >=18) {
    console.log("permisão para criar o evento.");
} else {
    console.log("sem permisão para criar o evento.");
}
if (numeroDeParticipantes <= 99){
    console.log("Evento criado.")
}else{
    console.log("O evento não pode ser criado por ter atingido o numero maximo de participantes.");
}

