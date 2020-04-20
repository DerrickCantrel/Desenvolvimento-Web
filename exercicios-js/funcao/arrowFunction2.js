//Só pra descontrair MOZÃOOO ps: enferrujado em JavaScript
function Pessoa() {
    this.idade = 0

    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000)
}

new Pessoa