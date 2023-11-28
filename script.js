//S8-01 | 💪 Atividade - JavaScript: Desafio Portaria

let nomes = prompt("Digite seu nome: ");
let idade = prompt("Digite sua idade: ");
let estaAcompanhado = prompt("Você está acompanhado? [s/n]: ");

if (idade >= 18) {
    if (estaAcompanhado == "s") {
        alert("Entrada permitida para " + nomes + ": Conceder desconto.");
    } else {
        alert("Entrada permitida para " + nomes + ": Valor integral.");
    }
} else {
    alert("Entrada não permitida para " + nomes + ": Menor de idade.");
}

//S8-02 | 💪 Atividade - JavaScript: Aprovado ou Reprovado

let somaNota = 0;
let mediaNota = 0;
let presenca = 0;
let nome = prompt("Digite seu nome: ");

for (let i = 0; i < 6; i++) {
    let nota = parseInt(prompt("Digite a nota da matéria " + (i + 1) + ": "));

    if (nota < 0 || nota > 10 || isNaN(nota)) {
        alert("Nota inválida. Digite uma nota entre 0 e 10.");
        i--;
        continue;
    }

    somaNota += nota;
}

presenca = parseInt(prompt("Digite a presença do aluno (número de aulas frequentadas): "));

if (presenca < 1 || presenca > 10 || isNaN(presenca)) {
    alert("Presença inválida. Digite um valor entre 1 e 10.");
} else {

    let mediaNota = somaNota / 6;

    if (nome.length < 5) {
        alert("Nome inválido. O nome deve ter pelo menos 5 caracteres.");
    } else {

        if (mediaNota >= 8 && presenca >= 6) {
            alert("A nota do aluno " + nome + " é " + mediaNota.toFixed(1) + " e sua presença é " + presenca + ": Aluno aprovado!");
        } else {
            alert("A nota do aluno " + nome + " é " + mediaNota.toFixed(1) + " e sua presença é " + presenca + ": Aluno reprovado!");
        }
    }
}

//S8-03 | 💪 Atividade - JavaScript: Acerte o Número

function gerarNumeroAleatorio() {
  return Math.round(Math.random() * 20);
}

function verificarPalpite(numeroAleatorio, palpite) {
  let tentativa = 1;

  while (numeroAleatorio !== palpite) {
    alert("Tente novamente.");

    palpite = parseInt(
      prompt("Tente adivinhar o número gerado (entre 0 e 20):")
    );

    while (!/^\d+$/.test(palpite)) {
      alert("Por favor, digite um número inteiro positivo válido.");
      palpite = parseInt(
        prompt("Tente adivinhar o número gerado (entre 0 e 20):")
      );
    }

    tentativa++;
  }

  alert("Você acertou na tentativa " + tentativa + ".");
}

const numeroAleatorio = gerarNumeroAleatorio();
let palpiteUsuario = parseInt(
  prompt("Tente adivinhar o número gerado (entre 0 e 20):")
);

while (!/^\d+$/.test(palpiteUsuario)) {
  alert("Por favor, digite um número inteiro positivo válido.");
  palpiteUsuario = parseInt(
    prompt("Tente adivinhar o número gerado (entre 0 e 20):")
  );
}

verificarPalpite(numeroAleatorio, palpiteUsuario);


//S8-04 | 💪 Atividade - JavaScript: Enigma

function contarPalavras(texto) {
    const textoLimpo = texto.replace(/[^a-z]/g, ' ');
  
    const palavras = textoLimpo.split(' ');
  
    const palavrasFiltradas = palavras.filter(palavra => palavra !== '');
  
    return palavrasFiltradas.length;
  }
  
  const exemplo1 = contarPalavras("sss.aasd.sss");
  console.log(exemplo1); 
  
  const exemplo2 = contarPalavras("sssaasdsSs");
  console.log(exemplo2); 
  
  const exemplo3 = contarPalavras("sssa1asdss");
  console.log(exemplo3); 
  
//S8-05 | 💪 Atividade - JavaScript: Gestão de Perguntas

// Objeto question
function createQuestion(user, userQuestion) {
    return {
      user: user,
      userQuestion: userQuestion,
      vote: 0,
      answered: false,
    };
  }
  
  // Objeto slenzie
  function createSlenzie() {
    return {
      name: '',
      questions: [],
    };
  }
  
  // Função createEvent
  function createEvent(objEvent, eventName) {
    if (typeof eventName === 'string' && eventName.length >= 5) {
      objEvent.name = eventName;
      return objEvent;
    } else {
      return "The input value is invalid";
    }
  }
  
  // Função addQuestion
  function addQuestion(objEvent, objQuestion) {
    if (objEvent !== undefined && objQuestion !== undefined) {
      objEvent.questions.push(objQuestion);
      return objEvent;
    } else {
      return "The user or question cannot be undefined";
    }
  }
  
  // Função addVoteToQuestion
  function addVoteToQuestion(objEvent, questionIndex) {
    if (questionIndex >= 0 && questionIndex < objEvent.questions.length) {
      objEvent.questions[questionIndex].vote += 1;
      return "Vote registered successfully";
    } else {
      return "Question not found";
    }
  }
  
  // Função answerQuestion
  function answerQuestion(objEvent, questionIndex) {
    if (questionIndex >= 0 && questionIndex < objEvent.questions.length) {
      objEvent.questions[questionIndex].answered = true;
      return "Question answered successfully";
    } else {
      return "Question not found";
    }
  }
  
  // Função unansweredQuestions
  function unansweredQuestions(objEvent) {
    let output = [];
    for (let i = 0; i < objEvent.questions.length; i++) {
      if (!objEvent.questions[i].answered) {
        output.push(objEvent.questions[i]);
      }
    }
    return output;
  }
  
  const slenzieEvent = createSlenzie();
  createEvent(slenzieEvent, "Digital Event");
  
  const question1 = createQuestion("John Doe", "How does this system work?");
  const question2 = createQuestion("Jane Smith", "What are the main features?");
  addQuestion(slenzieEvent, question1);
  addQuestion(slenzieEvent, question2);
  
  console.log(slenzieEvent);
  
  addVoteToQuestion(slenzieEvent, 0);
  answerQuestion(slenzieEvent, 1);
  
  console.log(slenzieEvent);
  console.log(unansweredQuestions(slenzieEvent));
  

//S8-06 | 💪 Atividade - JavaScript: Caixa Eletrônico

  const user = {
    name: "Jhon Doyle Fox",
    savingsBalance: 500,
    cardsInformation: [
      {
        number: "5160 4196 4843 3388",
        creditBalance: 1000,
        ensign: "American Express",
      },
    ],
  };
  
  // Função para obter saldo
  function getBalance(user, accountType) {
    let balance;
    if (accountType === 1) {
      balance = user.savingsBalance;
    } else if (accountType === 2) {
      balance = user.cardsInformation[0].creditBalance;
    }
    return balance;
  }
  
  const responseBalance = parseInt(prompt("Digite 1 para poupança ou 2 para crédito:"));
  const balance = getBalance(user, responseBalance);
  alert("Saldo disponível: R$ " + balance);
  
  // Função para realizar depósito
  function makeDeposit(user, depositAmount) {
    if (typeof depositAmount !== 'number' || depositAmount <= 5 || depositAmount >= 500) {
      return "This value is not allowed";
    }
  
    user.savingsBalance += depositAmount;
    return "Deposit made successfully";
  }
  
  const valueForDeposit = parseInt(prompt("Digite o valor para depósito:"));
  const depositResult = makeDeposit(user, valueForDeposit);
  alert(depositResult);
  
  // Função para realizar saque
  function makeWithdrawal(user, withdrawalAmount, accountType) {
    if (typeof withdrawalAmount !== 'number' || withdrawalAmount <= 5 || withdrawalAmount >= 500) {
      return "This value is not allowed";
    }
  
    let availableBalance;
    if (accountType === 1) {
      availableBalance = user.savingsBalance;
    } else if (accountType === 2) {
      availableBalance = user.cardsInformation[0].creditBalance;
    }
  
    if (withdrawalAmount > availableBalance) {
      return "Balance unavailable";
    }
  
    if (accountType === 1) {
      user.savingsBalance -= withdrawalAmount;
    } else if (accountType === 2) {
      user.cardsInformation[0].creditBalance -= withdrawalAmount;
    }
  
    return "Withdrawal carried out.";
  }
  
  const responseWithdraw = parseInt(prompt("Digite 1 para poupança ou 2 para crédito:"));
  const withdrawnAmount = parseInt(prompt("Digite o valor para saque:"));
  const withdrawalResult = makeWithdrawal(user, withdrawnAmount, responseWithdraw);
  alert(withdrawalResult);
  

//S8-07 | 💪 Atividade - Javascript: Dados Escolares

const alunoCurso = {
    nome: "João",
    idade: 31,
    curso: "FullStack",
    instituicao: "Kenzie Br",
    materias: ["Html", "Css", "JavaScript", "Python"],
    situacaoMatricula: true,
  };
  
  // Função para consultar o curso
  function getTheCourse(aluno) {
    const curso = aluno.curso;
    alert("Curso: " + curso);
  }
  
  getTheCourse(alunoCurso);
  
  // Função para consultar as matérias
  function getTheSubjects(aluno) {
    const materias = aluno.materias;
    alert("Matérias: " + materias.join(", "));
  }
  
  getTheSubjects(alunoCurso);
  
  // Função para consultar a situação de matrícula
  function registrationStatus(aluno) {
    const situacaoMatricula = aluno.situacaoMatricula;
    if (situacaoMatricula) {
      alert("Aluno ativo");
    } else {
      alert("Aluno inativo");
    }
  }
  
  registrationStatus(alunoCurso);
  
  // Função para gerar carteirinha de estudante
  function generateStudentCard(aluno) {
    const cardInformation = `name: "${aluno.nome}", idade: "${aluno.idade}", curso: "${aluno.curso}", instituição: "${aluno.instituicao}"`;
    alert(cardInformation);
  }
  
  generateStudentCard(alunoCurso);

/*
S8-08 | 💪 Atividade - Lista de Codewars - Variáveis I

S8-09 | 💪 Atividade - Lista de Codewars - Variáveis II

S8-10 | 💪 Atividade - Lista de Codewars - Variáveis III

S8-11 | 💪 Atividade - Lista de Codewars - Variáveis IV

S8-12 | 💪 Atividade - Lista de Codewars - Arrays I

S8-13 | 💪 Atividade - Lista de Codewars - Arrays II

S8-14 | 💪 Atividade - Lista de Codewars - Arrays III

S8-15 | 💪 Atividade - Lista de Codewars - Arrays IV

S8-16 | 💪 Atividade - Lista de JavaScript - Debug I
*/

let secoesMercado = [];

let hortifruti = [];
let acougue = [];
let padaria = [];
let AdegaEBebidas = [];
let laticiniosEFrios = [];

//adicionarSecaoAoMercado: Corrigido o nome da função push para adicionar a nova seção ao mercado.
function adicionarSecaoAoMercado(secao) {
    secoesMercado.push(secao);
    return secoesMercado;
}

//adicionarItemASecao: Utilizado push para adicionar o novo item à seção.
function adicionarItemASecao(novoItem, secao) {
    secao.push(novoItem);
    return secao;
}

//retornarItemDaSecao: Corrigido o uso do splice para indexOf para encontrar a posição do item.
function retornarItemDaSecao(nomeItem, secao) {
    const posicao = secao.indexOf(nomeItem);
    const itemProcurado = secao[posicao];
    return itemProcurado;
}

//retornaUltimoItemDaSecao: Corrigido o índice para acessar o último item.
function retornaUltimoItemDaSecao(secao) {
    const ultimoItem = secao[secao.length - 1];
    return ultimoItem;
}

//consultaSecoesMercado: Corrigido o operador de incremento no loop.
function consultaSecoesMercado(secoesMercado) {
    for (let i = 0; i < secoesMercado.length; i++) {
        console.log(secoesMercado[i]);
    }
}

//somaItens: Removida a verificação desnecessária e adicionada a função return.
function somaItens(totalA, totalB) {
    return totalA + totalB;
}

function baterPonto(nome, numeroFicha) {
    const funcionarios = ["Sônia", "Cage", "Alex", "Liu Ken"];
    if (nome == funcionarios[numeroFicha]) {
        return "Turno processado";
    } else {
        return "Funcionario não cadastrado";
    }
}

//loginSistema: Corrigidos os erros de sintaxe e lógica. Utilizado um objeto listaUsuarios para armazenar os usuários e senhas.
function loginSistema(nomeUsuario, senhaUsuario) {
    const listaUsuarios = {
        luffy123: "326541",
        acer321: "741258",
        nami: "963258",
    };

    if (listaUsuarios[nomeUsuario] && listaUsuarios[nomeUsuario] === senhaUsuario) {
        return "Acesso liberado";
    } else {
        return "Acesso negado";
    }
}

adicionarSecaoAoMercado(hortifruti);
adicionarItemASecao("Maçã", hortifruti);
console.log(retornarItemDaSecao("Maçã", hortifruti));
console.log(retornaUltimoItemDaSecao(hortifruti));
consultaSecoesMercado(secoesMercado);
console.log(somaItens(1, 1));
console.log(baterPonto("Sônia", 0));
console.log(loginSistema("luffy123", "326541"));
console.log(loginSistema("luffy123", "senhaIncorreta"));

//S8-17 | 💪 Atividade - Lista de JavaScript - Debug II*/

/*insereProduto():
Problema: A função sempre está adicionando o produto na posição 1, o que faz com que a lista fique com um item vazio.
Solução: Use push para adicionar o produto no final da lista.*/

function insereProduto(produto) {
  const produtosCotacao = [];
  produtosCotacao.push(produtos);
  return produtosCotacao;
}

let produtos = criaProduto(100, 10, "Maçã");

/*criaProduto():
Problema: Uso incorreto de = na criação do objeto.
Solução: Use : para atribuir valores às propriedades do objeto.*/

function criaProduto(preco, quantidade, nome) {
  let produto = {
    preco: preco,
    quantidade: quantidade,
    nome: nome,
  };

  return produto;
}

let produto = criaProduto(100, 10, "Maçã");

console.log(produto);

/*renderizaProdutos():
Problema: O loop está indo até <= todosProdutos.length, causando um índice fora do intervalo.
Solução: Mude para < todosProdutos.length para evitar o índice fora do intervalo.*/

function criaProduto(preco, quantidade, nome) {
    return {
        preco: preco,
        quantidade: quantidade,
        nome: nome
    };
}

function renderizaProdutos(todosProdutos) {
  for (let i = 0; i < todosProdutos.length; i++) {
    console.log(todosProdutos[i].preco);
  }
}

let todosProdutos = [
  criaProduto(100, 10, "Maçã"),
  criaProduto(200, 10, "Maçã"),
  criaProduto(300, 10, "Maçã"),
];

renderizaProdutos(todosProdutos);

/*cadastraServicos():
Problema: A função push não retorna a lista atualizada, apenas o comprimento da lista.
Solução: Remova o console.log e simplesmente retorne a lista.*/

function cadastraServicos(servico) {
  listServico.push(servico);
  return listServico;
}

let listServico = [];

cadastraServicos(100);

console.log(listServico);

/*calculaValorServico():
Problema: A função só considera o primeiro serviço na lista.
Solução: Itere sobre todos os serviços na lista e acumule os valores.*/

let cliente = {
    servico: [
      {
        preco: 50,
        quantidade: 10
      },
      {
        preco: 5,
        quantidade: 10
      },
      {
        preco: 200,
        quantidade: 10
      }
    ]
  };

function calculaValorServico(clienteServicos) {
  let valorTotal = 0;

  for (let i = 0; i < clienteServicos.servico.length; i++) {
    valorTotal +=
      clienteServicos.servico[i].preco * clienteServicos.servico[i].quantidade;
  }

  return valorTotal;
}

console.log(calculaValorServico(cliente));

//S8-18 | 💪 Atividade - Lista de Codewars: Objetos I

//S8-19 | 💪 Atividade - Lista de Codewars: Objetos II