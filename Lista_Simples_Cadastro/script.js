let nome = prompt ('Qual seu nome:')
let idade = prompt ('Quantos anos você tem? ')
let linguagem = prompt ('Qual linguagem de programação você usa?')
let tempoProfissao = prompt ('Quanto tempo de profissão você tem?')
let senioridade = prompt ('Qual sua senioridade?')
let ingles = prompt ('Você é fluente em inglês?')

if (ingles == 'sim'){
    console.log ('Olá, ' + nome + ' você tem ' + idade + ' anos e já está programando com ' + linguagem + '. Tem ' + tempoProfissao + ' anos de profisso e hoje é fluente em inglês.')
}else {
    console.log ('Olá, ' + nome + ' você tem ' + idade + ' anos e já está programando com ' + linguagem + '. Tem ' + tempoProfissao + ' anos de profisso e hoje não é fluente em inglês.')
}

gosto = prompt ('Você gosta de estudar' + linguagem + '? Resposta com o número 1 para SIM ou 2 para NÂO.')

if (gosto == 1){
    console.log ('Muito bom! Continue estudando e você terá muito sucesso.')
} else {
    console.log ('Ahh que pena... Já tentou aprender outras linguagens?')
}
