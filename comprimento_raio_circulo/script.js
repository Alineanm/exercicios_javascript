let condicional = prompt ('Você entrará com o valor de comprimento ou ráio?')
if (condicional === 'raio' || condicional === 'ráio') {
    let raio = prompt ('Digite o valor do raio:')
    let pi = 3.14
    let comprimento = 2*raio*pi
    console.log ('O comprimento do círculo é: ' + comprimento.toFixed(1))
} else {
    let comprimento2 = prompt ('Digite o valor do comprimento:')
    let pi = 3.14
    let raio = (comprimento2/(2*pi))
    console.log ('O ráio do círculo é: ' + raio.toFixed(1))
}

