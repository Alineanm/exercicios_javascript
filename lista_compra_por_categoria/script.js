let item_list = ' '
let categoria_list = ' '
let higiene = []
let hortfrut = []
let laticinios = []
let acougue = []
let frios = []
let bebidas = []
let alimentos = []
let mat_limpeza = []

let include_list = 'sim'
while (include_list.toLowerCase() != 'não') {
        let include_list = prompt ('Deseja incluir algum item na lista de compras?')
        while (include_list.toLowerCase() != 'sim' && include_list != 'não') {
                alert ('Opção inválida! Inclua sim ou não')
                include_list.toLowerCase() = prompt ('Deseja incluir algum item na lista de compras?')
        }
        if (include_list.toLowerCase() == 'não') {
                break
        }
        item_list = prompt ('O que deseja incluir?')
        categoria_list = prompt ('Em qual categoria você deseja inluir: higiene, hortfrut, laticinios, acougue, frios, bebidas, alimentos')
        if (categoria_list.toLowerCase() === 'higiene') {
                higiene.push (item_list)
        } else if (categoria_list.toLowerCase() === 'hortfrut') {
                hortfrut.push (item_list)
        } else if (categoria_list.toLowerCase() === 'laticinios') {
                laticinios.push (item_list)
        } else  if (categoria_list.toLowerCase() === 'acougue') {
                acougue.push (item_list)
        } else  if (categoria_list.toLowerCase() === 'frios') {
                frios.push (item_list)
        } else  if (categoria_list.toLowerCase() === 'bebidas') {
                bebidas.push (item_list)
        } else  if (categoria_list.toLowerCase() === 'alimentos') {
                alimentos.push (item_list)
        } else if (categoria_list.toLowerCase() === 'mat_limpeza') {
                mat_limpeza.push (item_list)
        } else {
                alert ('Esta opção é invalida. Digite uma das categorias válidas:  higiene, hortfrut, laticinios, acougue, frios, bebidas, alimentos.')
        }
}
alert ('Sua lista de compras é: Higiene: ' + higiene + ' Hortfrut: ' + hortfrut + ' Laticinios: ' + laticinios + ' Acougue: ' + acougue + ' Frios: ' + frios + ' Bebidas: ' + bebidas + ' Alimentos: ' + alimentos)