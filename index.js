let nomeDoHeroi = "Rômulo";

let experienciaHeroi = 800; 

if(experienciaHeroi < 1000) {
    console.log("O Herói de " + nomeDoHeroi + " está no nível Ferro")
}else if(experienciaHeroi >= 1001 && experienciaHeroi < 2001){
    console.log("O Herói de " + nomeDoHeroi + " está no nível Bronze")
}else if(experienciaHeroi >= 2001 && experienciaHeroi < 5001){
    console.log("O Herói de " + nomeDoHeroi + " está no nível Prata")
}else if(experienciaHeroi >= 5001 && experienciaHeroi < 7001){
    console.log("O Herói de " + nomeDoHeroi + " está no nível Ouro")
}else if(experienciaHeroi >= 7001 && experienciaHeroi < 8001){
    console.log("O Herói de " + nomeDoHeroi + " está no nível Platina")
}else if(experienciaHeroi >= 8001 && experienciaHeroi < 9001){
    console.log("O Herói de " + nomeDoHeroi + " está no nível Ascendente")
}else if(experienciaHeroi >= 9001 && experienciaHeroi < 10001){
    console.log("O Herói de " + nomeDoHeroi + " está no nível Imortal")
}else{
    console.log("O Herói de " + nomeDoHeroi + " está no nível Radiante")}

let contador = 0;
do {
    contador++
} while (contador <1);