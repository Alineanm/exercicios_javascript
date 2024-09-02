let caminho = prompt ('Escolha entre os dois caminhos da trilha de Desenvolvedor Web: Front-End ou Back-End')
if (caminho == 'Front-end' || caminho == 'front-end' || caminho == 'Front-End' || caminho == 'frontend' || caminho == 'Frontend' || caminho == 'FrontEnd'){
    alert ('Você escolheu Front-End. Qual trilha prefere agora?')
    let caminho_Front = prompt ('Você prefere aprender: React ou Vue')
    if (caminho_Front == 'React' || caminho_Front == 'react'){
        alert ('React é uma ótima escolha para criar interfaces dinâmicas!')
        let caminho_Aperfeicoamento_Front = prompt ('Digite continuar para seguir na área escolhida ou digite Fullstack caso deseje seguir essa nova trilha')
        if (caminho_Aperfeicoamento_Front == 'continuar' || caminho_Aperfeicoamento_Front == 'Continuar'){
            alert("Especializar-se na sua área escolhida é uma ótima maneira de se tornar um expert!")
            novas_Tecnologias_Front = prompt ('Digite apenas uma tecnologia que você deseja aprender.')
            alert(`Legal! Aprender ${novas_Tecnologias_Front} é uma ótima ideia!`)
            cont_Front = prompt ('Inclua mais uma tecnologia ou difite ok para encerrar o programa')
            while (cont_Front != 'ok') {
                alert(`Legal! Aprender ${cont_Front} é uma ótima ideia!`)
                cont_Front = prompt ('Inclua mais uma tecnologia ou digite ok para encerrar o programa')
            }
        } else if (caminho_Aperfeicoamento_Front == 'Fullstack' || caminho_Aperfeicoamento_Front == 'fullstack') {
            alert ('Tornar-se Fullstack permite que você trabalhe com diversas tecnologias!')
        } else {
            alert("Opção inválida. Escolha entre continua e Fullstack.")
        }    
    } else if (caminho_Front == 'Vue' || caminho_Front == 'vue'){
        alert ('Vue é excelente para começar com frameworks JavaScript!')
        let caminho_Aperfeicoamento_Front = prompt ('Digite continuar para seguir na área escolhida ou digite Fullstack caso deseje seguir essa nova trilha')
        if (caminho_Aperfeicoamento_Front == 'continuar' || caminho_Aperfeicoamento_Front == 'Continuar'){
            alert("Especializar-se na sua área escolhida é uma ótima maneira de se tornar um expert!")
            novas_Tecnologias_Front = prompt ('Digite apenas uma tecnologia que você deseja aprender.')
            alert(`Legal! Aprender ${novas_Tecnologias_Front} é uma ótima ideia!`)
            cont_Front = prompt ('Inclua mais uma tecnologia ou digite ok para encerrar o programa')
            while (cont_Front != 'ok') {
                alert(`Legal! Aprender ${cont_Front} é uma ótima ideia!`)
                cont_Front = prompt ('Inclua mais uma tecnologia ou digite ok para encerrar o programa')
            }
        } else if (caminho_Aperfeicoamento_Front == "Fullstack" || caminho_Aperfeicoamento_Front == "fulstack") {
            alert ('Tornar-se Fullstack permite que você trabalhe com diversas tecnologias!')
        } else {
            alert("Opção inválida. Escolha entre continua e Fullstack.")
        }
    } else {
        alert("Opção inválida. Escolha entre React ou Vue.")
    }
}else if (caminho == 'Back-end' || caminho == 'back-end' || caminho == 'Back-End' || caminho == 'backend' || caminho == 'Backend' || caminho == 'BackEnd') {
    alert ('Você escolheu Back-End. Qual trilha prefere agora?')
    let caminho_Back = prompt ('Você prefere aprender: C# ou Java')
    if (caminho_Back == 'c#' || caminho_Back == 'C#' || caminho_Back == 'C' || caminho_Back == 'c'){
        alert ('C# é muito utilizado em desenvolvimento de aplicações empresariais!')
        let caminho_Aperfeicoamento_Back = prompt ('Digite continuar para seguir na área escolhida ou digite Fullstack caso deseje seguir essa nova trilha')
        if (caminho_Aperfeicoamento_Back == 'continuar' || caminho_aperfeicoamento_back == 'Continuar'){
            alert("Especializar-se na sua área escolhida é uma ótima maneira de se tornar um expert!")
            novas_Tecnologias_Back = prompt ('Digite apenas uma tecnologia que você deseja aprender.')
            alert(`Legal! Aprender ${novas_Tecnologias_Back} é uma ótima ideia!`)
            cont_Back = prompt ('Inclua mais uma tecnologia ou digite ok para encerrar o programa')
            while (cont_Back != 'ok') {
                alert(`Legal! Aprender ${cont_Back} é uma ótima ideia!`)
                cont_Back = prompt ('Inclua mais uma tecnologia ou digite ok para encerrar o programa')
            }
        } else if (caminho_Aperfeicoamento_Back == 'Fullstack' || caminho_aperfeicoamento_back == 'fullstack') {
            alert ('Tornar-se Fullstack permite que você trabalhe com diversas tecnologias!')
        } else {
            alert("Opção inválida. Escolha entre Continuar ou Fullstack")
        }
    } else if (caminho_Back == 'Java' || caminho_Back == 'java') {
        alert ('Java é uma linguagem robusta e amplamente usada!')
        let caminho_Aperfeicoamento_Back = prompt ('Digite continuar para seguir na área escolhida ou digite Fullstack caso deseje seguir essa nova trilha')
        if (caminho_Aperfeicoamento_Back == 'continuar' || caminho_aperfeicoamento_back == 'Continuar'){
            alert("Especializar-se na sua área escolhida é uma ótima maneira de se tornar um expert!")
            novas_Tecnologias_Back = prompt ('Digite apenas uma tecnologia que você deseja aprender.')
            alert(`Legal! Aprender ${novas_Tecnologias_Back} é uma ótima ideia!`)
            cont_Back = prompt ('Inclua mais uma tecnologia ou digite ok para encerrar o programa')
            while (cont_Back != 'ok') {
                alert(`Legal! Aprender ${cont_Back} é uma ótima ideia!`)
                cont_Back = prompt ('Inclua mais uma tecnologia ou digite ok para encerrar o programa')
            }
        } else if (caminho_Aperfeicoamento_Back == 'Fullstack' || caminho_aperfeicoamento_back == 'fullstack') {
            alert ('Tornar-se Fullstack permite que você trabalhe com diversas tecnologias!')
        } else {
            alert("Opção inválida. Escolha entre Continuar ou Fullstack")
        }
    } else {
        alert("Opção inválida. Escolha entre C# ou Java")
    }
} else {
    alert("Opção inválida. Escolha entre Front-End ou Back-End.")
}
alert(`Obrigada por participar do Jogo`)