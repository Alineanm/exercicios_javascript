let base = prompt ('Vamos calcular a potencialização. Entre com o valor da base: ')
let expoente = prompt ('Agora entre com o valor do expoente. Elevado a quanto?')
let pot = base
for (let i = 1; i < expoente; i++){
    pot = pot*base
}
console.log ('O resultado é: ' + pot)