# Cartão de Crédito

No contexto global, cria função isValidCard

No contexto da função isValidCard:
Cria variável cardNumber para guardar o número informado pelo prompt;
Cria variável element para economizar dígitos de código pegando elemento pelo id;
cria variável sumDigits com valor 0 para armazenar o a soma futuramente
Inverte cardNumber com os métodos .split('').reverse().join('')
Cria if para verificar se cardNumber não está vazio;

Cria primeiro loop for, percorre os caracteres de cardNumber.
No contexto do primeiro loop for, pega o valor decimal do caractere atual (i) e guarda em charNumber

No contexto do primeiro for, com o primeiro if verifica se charNumber é um número de 0 a 9. Caso não seja, printa mensagem de erro na tela.

No contexto do primeiro for, com o segundo if verifico se o caractere atual (i) está em um índice ímpar quando módulo 2 do índice for igual a 1 (i % 2 ==1), dentro da string, para efetuar o cálculo

No contexto do segundo if, multiplica o caractere atual charNumber por 2, como pede o algorítimo de Luhn, criando uma string a partir do charNumber, convertendo essa string pra numero e multiplicando por 2. Guarda em outra variável doubleDigitString;
No mesmo contexto, percorre cada digito (j) de doubleDigitString para gerar outro dígito a ser somado. Guarda em digitToSum;
Somo o digitToSum 

No contexto do primeiro for, else, não soma o digito verificador somo o caractere atual if(i !== 0).

No contexto do primeiro for, verifica se está no último elemento e valida o digito verificador com if;
Converte o resultado da soma sumDigits em um array de caracteres arrayDigits com toString().split('');
Pega o último caractere e converte em número guardando na variavel checkDigit com Math.abs(checkDigit - 10);
Verifica se o dígito é igual ao checkDigit com outro if, se for igual pinta na tela mensagem informando que o número é válido, e da um return false. Se não for igual, else, printa mensagem informando que o número é inválido, da um false return.

















