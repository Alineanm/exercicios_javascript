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
                let excluir = prompt ('Deseja excluir algum dos elementos da lista? Sim ou Não')
                if (excluir.toLowerCase() == 'sim') {
                        if (higiene.length === 0 && hortfrut.length === 0 && laticinios.length === 0 && acougue.length === 0 && frios.length === 0 && bebidas.length === 0 && alimentos.length === 0 && mat_limpeza.length === 0  ){
                                alert(`A lista está vazia! Não há o que remover`);
                                break
                        } else {
                                alert ('Aqui está sua lista atual de compras:')
                                alert ('Higiene: ' + higiene + ' Hortfrut: ' + hortfrut + ' Laticinios: ' + laticinios + ' Acougue: ' + acougue + ' Frios: ' + frios + ' Bebidas: ' + bebidas + ' Alimentos: ' + alimentos)
                                let item_excluir = prompt ('Escreva qual item deseja deletar:')
                                if(higiene.indexOf(item_excluir) != -1){
                                        higiene.splice(higiene.indexOf(item_excluir), 1);
                                        alert('O item ' + item_excluir + ' foi removido com sucesso!')
                                } else if(hortfrut.indexOf(item_excluir) != -1){
                                        hortfrut.splice(hortfrut.indexOf(item_excluir), 1);
                                        alert('O item ' + item_excluir + ' foi removido com sucesso!')
                                } if(laticinios.indexOf(item_excluir) != -1){
                                        laticinios.splice(laticinios.indexOf(item_excluir), 1);
                                        alert('O item ' + item_excluir + ' foi removido com sucesso!')
                                } else if(acougue.indexOf(item_excluir) != -1){
                                        acougue.splice(acougue.indexOf(item_excluir), 1);
                                        alert('O item ' + item_excluir + ' foi removido com sucesso!')
                                } else if(frios.indexOf(item_excluir) != -1){
                                        frios.splice(frios.indexOf(item_excluir), 1);
                                        alert('O item ' + item_excluir + ' foi removido com sucesso!')
                                } else if(bebidas.indexOf(item_excluir) != -1){
                                        bebidas.splice(bebidas.indexOf(item_excluir), 1);
                                        alert('O item ' + item_excluir + ' foi removido com sucesso!')
                                } else if(alimentos.indexOf(item_excluir) != -1){
                                        alimentos.splice(alimentos.indexOf(item_excluir), 1);
                                        alert('O item ' + item_excluir + ' foi removido com sucesso!')
                                } else if(mat_limpeza.indexOf(item_excluir) != -1){
                                        mat_limpeza.splice(mat_limpeza.indexOf(item_excluir), 1);
                                        alert('O item ' + item_excluir + ' foi removido com sucesso!')
                                }
                        }
                } else {                
                        break
        }
        }
        if (include_list.toLowerCase() == 'sim') {
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
}
alert ('Sua lista de compras é: Higiene: ' + higiene + ' Hortfrut: ' + hortfrut + ' Laticinios: ' + laticinios + ' Acougue: ' + acougue + ' Frios: ' + frios + ' Bebidas: ' + bebidas + ' Alimentos: ' + alimentos)