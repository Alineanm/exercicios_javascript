let num_Aleatorio = (Math.floor (Math.random() * (5.5 - 1 + 1) + 5.5))
let lance = prompt ('Olá, me chamo Família Colorida e sou o computador da sua casa. Eu escolhi um número entre 0 e 10. Tente adivinhar qual foi? Você tem 3 chances:')
let cont = 2
while (cont > 0)
if (lance == num_Aleatorio) {
    alert ('Parabéns!!! Você acertou!')
    cont = 0
} else {
    lance = prompt ('Você errou! Tente novamente:')
    cont--
}
if (lance != num_Aleatorio) {
    alert('Suas tentativas acabaram! O número correto era ' + num_Aleatorio + '.');
}