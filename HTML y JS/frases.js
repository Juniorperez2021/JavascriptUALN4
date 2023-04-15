function generarFrase() {
    var mnemonico = document.getElementById("mnemonic").value.toUpperCase();
    var frase = "";
    for (var i = 0; i < mnemonico.length; i++) {
      var letra = mnemonico.charAt(i);
      switch(letra) {
        case "A":
          frase += "Amarillo<br>";
          break;
        case "B":
          frase += "Bolígrafo<br>";
          break;
        case "C":
          frase += "Camión<br>";
          break;
        case "D":
          frase += "Dinero<br>";
          break;
        case "E":
          frase += "Escuela<br>";
          break;
        case "F":
          frase += "Fuego<br>";
          break;
        case "G":
          frase += "Guitarra<br>";
          break;
        case "H":
          frase += "Hotel<br>";
          break;
        case "I":
          frase += "Isla<br>";
          break;
        case "J":
          frase += "Jirafa<br>";
          break;
        case "K":
          frase += "Kilómetro<br>";
          break;
        case "L":
          frase += "Lápiz<br>";
          break;
        case "M":
          frase += "Manzana<br>";
          break;
        case "N":
          frase += "Nube<br>";
          break;
        case "O":
          frase += "Ojo<br>";
          break;
        case "P":
          frase += "Perro<br>";
          break;
        case "Q":
          frase += "Química<br>";
          break;
        case "R":
          frase += "Radio<br>";
          break;
        case "S":
          frase += "Sol<br>";
          break;
        case "T":
          frase += "Tigre<br>";
          break;
        case "U":
          frase += "Uvas<br>";
          break;
        case "V":
          frase += "Vaso<br>";
          break;
        case "W":
          frase += "Waffle<br>";
          break;
        case "X":
          frase += "Xilófono<br>";
          break;
        case "Y":
          frase += "Yate<br>";
          break;
        case "Z":
          frase += "Zapato<br>";
          break;
        default:
          break;
      }
    }
    document.getElementById("frase").innerHTML = frase;
  }
  
  var btnGenerar = document.querySelector("input[type='button']");
  btnGenerar.addEventListener("click", generarFrase);
  