function calc_Medias (...notas) {
        if (notas.length === 0) return 0
        let soma = notas.reduce((acumulador, atual) => acumulador + atual, 0)
        return soma / notas.length
}

let entradas = prompt ('Digite as todas todas separadas por vírgulas: ')
let notas = entradas.split(',').map(Number)
let medias = calc_Medias (...notas)

alert (medias.toFixed(2))