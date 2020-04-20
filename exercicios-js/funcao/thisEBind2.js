//Só pra descontrair MOZÃOOO ps: enferrujado em JavaScript
function Amor() {
    this.nome = 'Lara',
    this.declaracao = 'Eu te Amo'
    this.vezes = 0
    
    const self = this
    let you = ' '
    setInterval(function() {
        self.vezes += 100
        you = self.nome + ' ' + self.declaracao + ' ' + self.vezes + ' ' + 'Milhões!!!'
        console.log(you.toUpperCase())
    }/*.bind(this)*/, 800)
}

new Amor