alert("Seja bem vindo ao nosso questionário! Vamos continuar!")

nome = prompt("Digite seu nome: ", "Escreva aqui")
idade = parseInt(prompt("Digite sua idade: ", "Digite aqui"))
cidade = prompt("Você acha que São Paulo é uma cidade bem preparada para pessoas que são deficientes motoras?")
cidade.toLowerCase()
if(cidade == "sim"){
    sim = prompt("Teria alguma melhora a se fazer em seu ponto de vista?")
}else{
   sugestao = prompt("Por que? Você teria alguma sugestão de melhoria?")
}

transporte = prompt("Qual tipo de meio de transporte público você acha que os deficientes tem mais acesso?")
motorista = prompt("Você acha que os responsáveis pelo direcionamento desse transporte são completamentre capacitados para lidar com pessoas necessitadas?")
tecnologia = prompt("Em sua opinião a tecnologia pode ser um meio para melhorar a acessibilidade para essas pessoas?")
sociedade = prompt("Você acha que a sociedade de uma maneira geral faz algo para ajudar as pessoas necessitadas?")
sugestao = prompt("Deixe alguma sugestão para nós de como acha que podemos ajudar os deficientes motores. Seria de extrema ajuda.")
agradecimento = alert("Muito obrigado por responder as nossas perguntas!")

document.write("Nome: " + nome + "<br>")
document.write("Idade: " + idade + "<br>")
document.write("E-mail: " + email + "<br>")
