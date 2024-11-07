// Desafio  Calculadora de partidas rankeadas
verificarVitoriasDoHeroi()

function verificarVitoriasDoHeroi(sucesso) {
    let finalRankeadas = sucesso
    const imortal= " "  

    if (sucesso > 10){
        finalRankeadas = ferro;
       
    } else if (sucesso > 10 && sucesso< 20){
        finalRankeadas = bronze;
    } else if (sucesso > 20 && sucesso < 50){
        finalRankeadas = prata;
    } else if (sucesso > 50 && sucesso < 80){
        finalRankeadas = ouro;
    } else if (sucesso > 80 && sucesso < 90) {
        finalRankeadas = diamante;
    } else (sucesso >= 101)
        finalRankeadas = imortal
         
}

let valor = 0;
let vitorias = (valor > 50);
let derrotas = (valor <= 50);
let saldoRankeadas = (vitorias - derrotas);

console.log ("O Herói tem de saldo de:" + saldoRankeadas, "está no nível de:"  + " " );

 
    
