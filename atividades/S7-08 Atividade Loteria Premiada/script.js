/*Você está trabalhando na loteria federal e um cliente se aproxima e fala que foi premiado.

Os dados do ganhador já estão no sistema e você agora só deve comparar se as informações prestadas pelo suposto ganhador são realmente verdadeiras. Pegue os documentos necessários e faça a consulta.
Dados do Ganhador

let ganhador = {
  nome: 'Adamastor',
  nascimento: '16/09/1986',
  cpf: '123.321.789-98',
  estadoCivil: 'Casado'
}

Lembre-se que esta é uma estrutura de objeto e não de array. Sendo assim, para acessar alguma propriedade você deve usar o ..

Crie uma função que irá receber o nome e cpf do suposto ganhador.
Dentro da função você deverá comparar os dados recebidos com os dados existentes.
A função deve retornar uma string: "É ganhador!" ou "Não é ganhador!".
Desenvolva uma lógica para que o nome sempre tenha a primeira letra maiúscula e as restantes minúsculas.

dica: Procure pelo método toUpperCase().*/

function verificaGanhador(nome, cpf) {
  let ganhador = {
    nome: "Adamastor",
    nascimento: "16/09/1986",
    cpf: "123.321.789-98",
    estadoCivil: "Casado",
  };

  if (
    nome.toUpperCase() === ganhador.nome.toUpperCase() &&
    cpf === ganhador.cpf
  ) {
    return "É ganhador!";
  } else {
    return "Não é ganhador!";
  }
}

console.log(verificaGanhador("Adamastor", "123.321.789-98"));

/*O gerente da loteria, pediu para que você guarde as informações das pessoas que vieram atrás do prêmio.

Antes você recebia o objeto e fazia a comparação. Agora você precisa armazená-lo em uma variável e inseri-lo em uma lista, mediante a uma condição.

A lista deverá ter o nome que achar mais conveniente.

    Crie uma variável para guardar o objeto recebido.
    Com base no exercício anterior, insira todos que não ganharam o prêmio em um array.
    Crie uma função que recebe um objeto.
    Crie um array e insira o objeto passado.
    Retorne uma string contendo o número de pessoas que vieram atrás do prêmio, mas não eram ganhadores.

Importante: O passo a passo serve para auxiliar, mas é interessante ressaltar que existem muitas maneiras de chegar nos resultados esperados.*/

const ganhador = {
  nome: "Adamastor",
  nascimento: "16/09/1986",
  cpf: "123.321.789-98",
  estadoCivil: "Solteiro",
};

const participantes = [
  {
    nome: "Leandra",
    nascimento: "07/01/1955",
    cpf: "433.259.325-00",
    estadoCivil: "Casado",
  },
  {
    nome: "Bianca",
    nascimento: "22/05/1995",
    cpf: "987.654.321-01",
    estadoCivil: "Solteira",
  },
  {
    nome: "Pedro",
    nascimento: "16/09/1986",
    cpf: "222.333.800-57",
    estadoCivil: "Casado",
  },
  {
    nome: "Maria",
    nascimento: "07/01/1955",
    cpf: "745.556.843-31",
    estadoCivil: "Solteiro",
  },
  {
    nome: "Lucas",
    nascimento: "12/12/1990",
    cpf: "111.222.333-44",
    estadoCivil: "Solteiro",
  },
  {
    nome: "Juliana",
    nascimento: "30/03/1982",
    cpf: "555.666.777-88",
    estadoCivil: "Casada",
  },
  {
    nome: "Roberto",
    nascimento: "05/08/1977",
    cpf: "999.888.777-66",
    estadoCivil: "Casado",
  },
  {
    nome: "Carla",
    nascimento: "18/06/1993",
    cpf: "123.456.789-00",
    estadoCivil: "Solteira",
  },
  {
    nome: "Fernando",
    nascimento: "25/04/1988",
    cpf: "876.543.210-99",
    estadoCivil: "Solteiro",
  },
  {
    nome: "Raquel",
    nascimento: "02/11/1975",
    cpf: "321.654.987-88",
    estadoCivil: "Casada",
  },
];

const armazenarParticipante = (participante) =>
  participante.nome.toUpperCase() !== ganhador.nome.toUpperCase() ||
  participante.cpf !== ganhador.cpf;

const naoGanhadores = participantes.filter(armazenarParticipante);

const resultado = `Número de pessoas que vieram atrás do prêmio, mas não eram ganhadores: ${naoGanhadores.length}`;
console.log(resultado);
