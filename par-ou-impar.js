
const parOuImpar = process.argv[2]
const valor = Number(process.argv[3])

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
  
const numeroAleatorioEntreZeroeDez = getRndInteger(0, 10)

if((parOuImpar === "par" && (valor + numeroAleatorioEntreZeroeDez) % 2 === 0) || (parOuImpar === "impar" && (valor + numeroAleatorioEntreZeroeDez) % 2 !== 0)){

    console.log("Voce escolheu", parOuImpar ,"e jogou",valor,". Seu adversario jogou",numeroAleatorioEntreZeroeDez,". O resultado foi",valor + numeroAleatorioEntreZeroeDez,". Voce ganhou!")

} else {

    console.log("Voce escolheu", parOuImpar ,"e jogou",valor,". Seu adversario jogou",numeroAleatorioEntreZeroeDez,". O resultado foi",valor + numeroAleatorioEntreZeroeDez,". Voce perdeu!")
}