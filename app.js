/*
  01

  - Utilizando function declaration, implemente uma função que recebe 2 números  
    por parâmetro e retorna o resultado da multiplicação entre esses 2 números;
  - Previna que esses parâmetros recebam undefined;
  - Exiba o resultado no console, sem inserir um console.log() dentro da função.
*/
function multiplicacao(a = 0, b = 0) {
    if (a === undefined || b === undefined) {
        throw new Error('Ambos os parâmetros devem ser definidos');
    }

    return a * b;
}

const resultado = multiplicacao(5, 3);
console.log(resultado);

/*
  02

  - Faça o mesmo que o exercício acima pede, mas desta vez, implemente uma  
    **function expression** que retorne o resultado da **divisão** entre esses  
    2 números.
*/
const divisao = function(a = 0, b = 1) {
    if (a === undefined || b === undefined) {
        throw new Error('Ambos os parâmetros devem ser definidos');
    }

    return a / b;
};

//const resultado = divisao(10, 2);
console.log(resultado);

/*
  03

  - Implemente uma função que apenas exibe no console o valor recebido por  
    parâmetro;
  - Previna que o parâmetro dessa função receba undefined;
  - Faça a string abaixo ser exibida 7x no console;
  - A cada exibição, substitua o "X" pela informação correta;
  - Não repita (manualmente) a invocação da função ou do console.log().

  "Esta é a Xª vez que essa string é exibida."
*/
function exibirString(vezes = 1) {
    if (vezes === undefined) {
        throw new Error('O parâmetro "vezes" não pode ser undefined');
    }

    for (let i = 1; i <= vezes; i++) {
        console.log(`Esta é a ${i}ª vez que essa string é exibida.`);
    }
}

exibirString(7);

/*
  04

  - Comente o código acima, de forma que a string não seja mais exibida no  
    console;
  - Implemente uma função que retorna um novo array com as strings do array  
    "millennialWords" em letras maiúsculas;
  - Exiba o novo array no console, sem inserir um console.log() dentro da  
    função.
*/

const millennialWords = ['lol', 'yolo', 'troll', 'stalkear', 'selfie', 'influencer', 'crush', 'fitness', 'hater', 'bae', 'random', 'kawaii', 'outfit', 'mood', 'fail']
// Definindo a lista de palavras utilizadas por millennials


/**
 * Função que recebe um array de palavras e retorna um novo array com as palavras em letras maiúsculas.
 * @param {string[]} words O array de palavras.
 * @returns {string[]} Um novo array com as palavras em letras maiúsculas.
 */
function convertToUpperCase(words) {
    // Verifica se o parâmetro é um array
    if (!Array.isArray(words)) {
        throw new Error('O parâmetro "words" deve ser um array');
    }

    // Mapeia o array de palavras e retorna um novo array com as palavras em letras maiúsculas
    return words.map(word => word.toUpperCase());
}

// Chama a função convertToUpperCase com o array millennialWords e exibe o resultado no console
console.log(convertToUpperCase(millennialWords));

/*
  05

  - Implemente uma função que retorna se um número é positivo;
  - Use essa função para descobrir quantos números positivos o array 
    "randomNumbers" possui;
  - Exiba a frase abaixo no console, inserindo as informações corretas.

  "O array "randomNumbers" possui XX números, sendo XX positivos e XX negativos."
*/

const randomNumbers = [-2, 93, 34, -1, 1, 93, 11, -7, 47, -3]
// Array de números aleatórios

/**
 * Função que verifica se um número é positivo.
 * @param {number} number O número a ser verificado.
 * @returns {boolean} true se o número é positivo, false caso contrário.
 */
function isPositive(number) {
    return number > 0;
}

/**
 * Função que conta quantos números positivos e negativos existem em um array.
 * @param {number[]} numbers O array de números.
 * @returns {object} Um objeto contendo a contagem de números positivos e negativos.
 */
function countPositiveNegative(numbers) {
    // Inicializa as variáveis de contagem
    let positiveCount = 0;
    let negativeCount = 0;

    // Itera sobre o array de números
    for (const number of numbers) {
        // Verifica se o número é positivo usando a função isPositive
        if (isPositive(number)) {
            positiveCount++;
        } else {
            negativeCount++;
        }
    }

    // Retorna um objeto com a contagem de números positivos e negativos
    return {
        positive: positiveCount,
        negative: negativeCount
    };
}

// Chama a função countPositiveNegative com o array randomNumbers
const counts = countPositiveNegative(randomNumbers);

// Exibe a frase com as informações corretas no console
console.log(`O array "randomNumbers" possui ${randomNumbers.length} números, sendo ${counts.positive} positivos e ${counts.negative} negativos.`);

/*
  06

  - Descomente a invocação da função abaixo e implemente-a;
  - Ela deve retornar um novo array com apenas os números ímpares do array 
    passado por argumento;
  - Exiba o novo array no console, sem inserir um console.log() dentro da  
    função.
*/

// getOddNumbers([83, 52, 31, 73, 98, 37, 61, 56, 12, 24, 35, 3, 34, 80, 42])
/**
 * Função que retorna um novo array contendo apenas os números ímpares do array fornecido.
 * @param {number[]} numbers O array de números.
 * @returns {number[]} Um novo array contendo apenas os números ímpares.
 */
function getOddNumbers(numbers) {
    // Filtra os números ímpares do array e retorna um novo array
    return numbers.filter(number => number % 2 !== 0);
}

// Exibe o novo array no console
console.log(getOddNumbers([83, 52, 31, 73, 98, 37, 61, 56, 12, 24, 35, 3, 34, 80, 42]));

/*
  07

  - Forme uma frase com o array abaixo e exiba-a no console.
*/

const functions = [
  function () { return 'Plymouth' },
  function () { return 'é' },
  function () { return 'uma' },
  function () { return 'cidade' },
  function () { return 'fantasma' },
  function () { return 'localizada' },
  function () { return 'na' },
  function () { return 'ilha' },
  function () { return 'de' },
  function () { return 'Montserrat,' },
  function () { return 'um' },
  function () { return 'território' },
  function () { return 'ultramarino' },
  function () { return 'do' },
  function () { return 'Reino' },
  function () { return 'Unido' },
  function () { return 'localizado' },
  function () { return 'na' },
  function () { return 'cadeia' },
  function () { return 'de' },
  function () { return 'Ilhas' },
  function () { return 'de' },
  function () { return 'Sotavento' },
  function () { return 'nas' },
  function () { return 'Pequenas' },
  function () { return 'Antilhas,' },
  function () { return 'Índias' },
  function () { return 'Ocidentais.' }
]