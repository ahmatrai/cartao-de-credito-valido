function isValidCard() {
  var cardNumber = prompt("Insira o número do cartão");
  var element = document.getElementById("resultado");
  var sumDigits = 0;

  // Invertemos o cardNumber
  cardNumber = cardNumber.split('').reverse().join('');

  if (cardNumber !== "") {
    // Percorro caractere por caractere da string (cardNumber)
    for(var i = 0; i < cardNumber.length; i++) {

      // Pego o valor decimal do caractere atual,
      // definido por i e joga em charNumber
      charNumber = cardNumber.charCodeAt(i);
      console.log(charNumber);

      // verifico se charNumber é um número de 0 a 9
      if (!(charNumber >= 48 && charNumber <= 57)) {
        element.innerHTML = "Digite apenas números";
        return false;
      }

      // verifico se o caractere atual está em um indice impar
      // dentro da string para efetuar o calculo
      if(i % 2 == 1) {
        // multiplico o caractere atual por 2
        var doubleDigit = parseInt(String.fromCharCode(charNumber)) * 2;
        var doubleDigitString = doubleDigit.toString();

        // percorro cada digito do doubleDigitString para gerar o digito a ser
        // somado 
        var digitToSum = 0;
        for(var j = 0; j < doubleDigitString.length; j++) {
          digitToSum += parseInt(String.fromCharCode(doubleDigitString.charCodeAt(j)));
        }

        // somo o digito a somar
        sumDigits += digitToSum;        
      } else {
        // não somo o digito verificador
        if(i !== 0) {
          // simplesmente somo o caractere atual
          sumDigits += parseInt(String.fromCharCode(charNumber));
        }
      }

      // verifico se estou no último elemento e valido o 
      // digito verificador
      if(i == (cardNumber.length - 1)) {
        // converto o resultado da soma num array de caracteres
        var arrayDigits = sumDigits.toString().split('');

        // pego o ultimo caractere e converto ele em numero
        var checkDigit = parseInt(arrayDigits[arrayDigits.length - 1]);
        if(checkDigit > 0) {
          checkDigit = Math.abs(checkDigit - 10);
        }

        // verifico se o digito é igual ao checkDigit
        charNumber = cardNumber.charCodeAt(0);
        if(checkDigit === parseInt(String.fromCharCode(charNumber))) {
          element.innerHTML = "O número do cartão é válido: " + String.fromCharCode(charNumber) +
          " - " + checkDigit.toString();
          return false;          
        } else {
          element.innerHTML = "O número do cartão é inválido: " + String.fromCharCode(charNumber) +
          " - " + checkDigit.toString();
          return false;           
        }
      }      
    }
  }

  element.innerHTML = "Não foi inserido um número válido"
  return false;
}
