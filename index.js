const perguntas = [
    {
      pergunta: "Qual é a finalidade do comando 'console.log()' em JavaScript?",
      respostas: [
        "Exibir uma mensagem de erro",
        "Imprimir dados no console",
        "Criar uma variável"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a função do operador '===' em comparações em JavaScript?",
      respostas: [
        "Comparação de valores sem considerar o tipo",
        "Atribuição de valores",
        "Comparação estrita de valores e tipos"
      ],
      correta: 2
    },
    {
      pergunta: "Como se declara uma variável em JavaScript?",
      respostas: [
        "let myVar;",
        "const myVar = 10;",
        "ambas as opções acima estão corretas"
      ],
      correta: 2
    },
    {
      pergunta: "O que é uma função em JavaScript?",
      respostas: [
        "Um tipo de dado",
        "Um bloco de código reutilizável",
        "Uma variável global"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a diferença entre 'let' e 'const' na declaração de variáveis?",
      respostas: [
        "Nenhuma, são sinônimos",
        "let é usado para valores constantes, const para variáveis",
        "let permite reatribuição, const cria variáveis imutáveis"
      ],
      correta: 2
    },
    {
      pergunta: "O que é o DOM em JavaScript?",
      respostas: [
        "Um método de criptografia",
        "Um modelo de objeto para manipular documentos HTML",
        "Uma linguagem de programação"
      ],
      correta: 1
    },
    {
      pergunta: "Como se realiza uma iteração sobre os elementos de um array em JavaScript?",
      respostas: [
        "Usando a estrutura 'if-else'",
        "Com a declaração 'switch'",
        "Utilizando loops como 'for' ou 'forEach'"
      ],
      correta: 2
    },
    {
      pergunta: "O que é o JSON em JavaScript?",
      respostas: [
        "Um método de formatação de texto",
        "Uma linguagem de estilização",
        "Um formato de dados leve e intercambiável"
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a diferença entre 'null' e 'undefined' em JavaScript?",
      respostas: [
        "São iguais, usados de forma intercambiável",
        "'null' representa a ausência de valor, 'undefined' é atribuído explicitamente",
        "Ambos representam valores vazios"
      ],
      correta: 1
    },
    {
      pergunta: "Como se adiciona um evento a um elemento HTML usando JavaScript?",
      respostas: [
        "Apenas com CSS",
        "Usando o atributo 'event'",
        "Através do método 'addEventListener'"
      ],
      correta: 2
    },
  ];
  
  //define a variavel que vai buscar a div com o id quiz
  const quiz = document.querySelector('#quiz')
  
  //define a variavel que vai buscar o template
  const template = document.querySelector('template')
  
  //aumenta ou diminui o numero de respostas corretas
  const corretas = new Set()
  
  const totalDePerguntas = perguntas.length
  
  //verifica os acertos e subistitui o numero de perguntas corretas pelo tamanho da const corretas
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  // loop ou laço de repetição
  for(const item of perguntas) {
    //clonar o template das perguntas
    const quizItem = template.content.cloneNode(true)
  
    //Muda o título das perguntas
    quizItem.querySelector('h3').textContent = item.pergunta
  
    for(let resposta of item.respostas) {
      //clona e busca onde deve ser colocado as informações das perguntas
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
  
      //Muda o título das respostas
      dt.querySelector('span').textContent = resposta
  
      //adciona no input os atributos name e pergunta com o numero dela
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
  
      //muda o value do input das pergundas com base no array respostas
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
  
      //verifica se a resposta assinalada é a correta
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
  
        //diminui o numero de respostas corretas
        corretas.delete(item)
  
        //aumenta o numero de respostas corretas
        if (estaCorreta) {
          corretas.add(item)
        }
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
  
      quizItem.querySelector('dl').appendChild(dt)
    }
  
    // remove o "Resposta A" das perguntas
    quizItem.querySelector('dl dt').remove()
  
    // Coloca a pergunta na tela
    quiz.appendChild(quizItem)
  }