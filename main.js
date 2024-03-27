// Función para convertir de Peso Mexicano a Bitcoin, Ethereum o Litecoin
function convertMXNToCrypto(value, cryptocurrency) {
    switch (cryptocurrency) {
      case 1: // Bitcoin
        // Supongamos que 1 Peso Mexicano equivale a 0.000001 Bitcoin
        return value * 0.000001;
      case 2: // Ethereum
        // Supongamos que 1 Peso Mexicano equivale a 0.00002 Ethereum
        return value * 0.00002;
      case 3: // Litecoin
        // Supongamos que 1 Peso Mexicano equivale a 0.0002 Litecoin
        return value * 0.0002;
      default:
        return null;
    }
  }
  
  // Función para convertir de Real Brasileño a Bitcoin, Ethereum o Litecoin
  function convertBRLToCrypto(value, cryptocurrency) {
    switch (cryptocurrency) {
      case 1: // Bitcoin
        // Supongamos que 1 Real Brasileño equivale a 0.0000001 Bitcoin
        return value * 0.0000001;
      case 2: // Ethereum
        // Supongamos que 1 Real Brasileño equivale a 0.00001 Ethereum
        return value * 0.00001;
      case 3: // Litecoin
        // Supongamos que 1 Real Brasileño equivale a 0.0001 Litecoin
        return value * 0.0001;
      default:
        return null;
    }
  }
  
  // Función para convertir de Euro a Bitcoin, Ethereum o Litecoin
  function convertEURToCrypto(value, cryptocurrency) {
    switch (cryptocurrency) {
      case 1: // Bitcoin
        // Supongamos que 1 Euro equivale a 0.0001 Bitcoin
        return value * 0.0001;
      case 2: // Ethereum
        // Supongamos que 1 Euro equivale a 0.00002 Ethereum
        return value * 0.00002;
      case 3: // Litecoin
        // Supongamos que 1 Euro equivale a 0.0002 Litecoin
        return value * 0.0002;
      default:
        return null;
    }
  }
  
  // Función principal para realizar la conversión
  function convertToCrypto(value, currency, cryptocurrency) {
    switch (currency) {
      case 1: // Peso Mexicano
        return convertMXNToCrypto(value, cryptocurrency);
      case 2: // Real Brasileño
        return convertBRLToCrypto(value, cryptocurrency);
      case 3: // Euro
        return convertEURToCrypto(value, cryptocurrency);
      default:
        return null;
    }
  }
  
  // Solicitar al usuario su nombre
  let userName = prompt("Ingrese su nombre:");
  
  // Solicitar al usuario el valor, la moneda y la criptomoneda
  let inputValue = parseFloat(prompt("Ingrese el valor a convertir:"));
  if (isNaN(inputValue)) {
    alert("Por favor, ingrese un valor numérico válido.");
  } else {
    let inputCurrency = parseInt(
      prompt(
        "Ingrese la moneda desde la que desea convertir:\n1. Peso Mexicano\n2. Real Brasileño\n3. Euro"
      )
    );
    if (![1, 2, 3].includes(inputCurrency)) {
      alert("Por favor, seleccione una opción válida.");
    } else {
      let inputCrypto = parseInt(
        prompt(
          "Ingrese la criptomoneda a la que desea convertir:\n1. Bitcoin\n2. Ethereum\n3. Litecoin"
        )
      );
      if (![1, 2, 3].includes(inputCrypto)) {
        alert("Por favor, seleccione una opción válida.");
      } else {
        // Realizar la conversión y mostrar el resultado
        let currencyName = "";
        let cryptoName = "";
        switch (inputCurrency) {
          case 1:
            currencyName = "Peso Mexicano";
            break;
          case 2:
            currencyName = "Real Brasileño";
            break;
          case 3:
            currencyName = "Euro";
            break;
        }
        switch (inputCrypto) {
          case 1:
            cryptoName = "Bitcoin";
            break;
          case 2:
            cryptoName = "Ethereum";
            break;
          case 3:
            cryptoName = "Litecoin";
            break;
        }
        let result = convertToCrypto(inputValue, inputCurrency, inputCrypto);
        if (result !== null) {
          alert(
            `Hola ${userName}, el valor ingresado de ${inputValue} ${currencyName} es equivalente a ${result} ${cryptoName}.`
          );
        } else {
          alert(
            "Opción no válida. Por favor, elija entre Bitcoin (1), Ethereum (2) o Litecoin (3)."
          );
        }
      }
    }
  }
  