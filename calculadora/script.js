let num1 = 0
let num2 = 0
resultado = 0

function soma (num1, num2) {
        resultado = num1 + num2
        return resultado
}

function subtracao (num1, num2) {
        if (num1 < num2) {
                resultado = num2 - num1
        } else {
                resultado = num1 - num2
        }
        return resultado
}

function multiplicacao (num1, num2) {
        resultado = num1 * num2
        return resultado
}

function divisao (num1, num2) {
        if (num1 < num2) {
                resultado = num2 / num1
                return resultado
        } else {
                resultado = num1 / num2
                return resultado
        }
}

let opcao = prompt ('Escolha uma das 5 opções: Soma, Subtracao, Multiplicação, Divisão ou sair')
while (opcao.toLowerCase() != 'soma' && opcao != 'subtracao' && opcao.toLowerCase() != 'multiplicação' && opcao.toLowerCase() != 'divisão' && opcao.toLowerCase() != 'sair') {
        alert ('Opção inválida! Inclua uma das opções válidas: Soma, Subtracao, Multiplicação, Divisão ou Sair')
        opcao = prompt ('Escolha uma das 5 opções: Soma, Subtracao, Multiplicação, Divisão ou sair')
}

switch (opcao) {
        case 'soma':
                let num1_soma = Number (prompt ('Digite o primeiro numero a ser somado'))
                let num2_soma = Number (prompt ('Digite o segundo numero a ser somado'))
                alert ('A soma é:' + soma(num1_soma, num2_soma))
                break
        case 'subtracao':
                let num1_sub = Number (prompt ('Digite o primeiro numero a ser somado'))
                let num2_sub = Number (prompt ('Digite o segundo numero a ser somado'))
                alert ('A soma é:' + soma(num1_sub, num2_sub))
                break
        case 'multiplicacao':
                let num1_mult = Number (prompt ('Digite o primeiro numero a ser somado'))
                let num2_mult = Number (prompt ('Digite o segundo numero a ser somado'))
                alert ('A soma é:' + soma(num1_mult, num2_mult))
                break
        case 'divisao':
                let num1_div = Number (prompt ('Digite o primeiro numero a ser somado'))
                let num2_div = Number (prompt ('Digite o segundo numero a ser somado'))
                alert ('A soma é:' + soma(num1_div, num2_div))
                break
        case 'sair':
                break
}

/*if (opcao.toLowerCase() == 'soma') {
        let num1_soma = Number (prompt ('Digite o primeiro numero a ser somado'))
        let num2_soma = Number (prompt ('Digite o segundo numero a ser somado'))
        alert ('A soma é:' + soma(num1_soma, num2_soma))
    
} else if (opcao.toLowerCase() == 'subtracao') {
        let num1_sub = Number (prompt ('Digite o primeiro numero a ser subtraido'))
        let num2_sub = Number (prompt ('Digite o segundo numero a ser subtraido'))
        alert ('A subração é:' + subtracao(num1_sub, num2_sub))

} else if (opcao.toLowerCase() == 'multiplicacao') {
        let mum1_mul = Number (prompt ('Digite o primeiro numero a ser multiplicado'))
        let num2_mul = Number (prompt ('Digite o segundo numero a ser multiplicado'))
        alert ('A multiplicação é:' + multiplicacao(mum1_mul, num2_mul))

} else if (opcao.toLowerCase() == 'divisao') {
        let num1_div = Number (prompt ('Digite o primeiro numero a ser dividido'))
        let num2_div = Number (prompt ('Digite o segundo numero a ser dividido'))
        alert ('A divisão é:' + divisao(num1_div, num2_div))
}*/