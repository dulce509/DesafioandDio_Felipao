
//Escrevendo as classes de um jogo

class heroiGenerico {
	constructor (heroiGuerreiro,heroiMago){
    this.heroiGuerreiro = heroiGuerreiro
    this.heroiMago = heroiMago
           
    }
	atacar(){
    console.log(`O guerreiro atacou com ${this.heroiGuerreiro} e não usou magia`)
    }
    revidar(){
    console.log( `O mago atacou com ${this.heroiMago} ganhando muitos pontos`)
    }
}

let heroiAventura = new heroiGenerico ( "espada", "bola magica")

let heroiDesafiador = new heroiGenerico ("pouco desafio", "bola magica")
heroiAventura.atacar()
heroiDesafiador.revidar()
