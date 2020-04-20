function tratarErroELancar(erro) {
    // throw new Error ('...') 
    // throw 10
    // throw true
    // throw 'Mensagem'
    throw {
        nome: nome.erro,
        msg: mensagem.erro,
        data: new Date,
    }
}

function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        tratarErroELancar(e)
    } finally {
        console.log('Final.')
    }
}

const obj = { nome: "João" } // Erro na chamada do atributo
imprimirNomeGritado(obj)