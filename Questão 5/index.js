const str = "Target"; // string a ser invertida
let strInvertida = "";

// Percorre a string da última posição até a primeira posição
for (let i = str.length - 1; i >= 0; i--) {
  strInvertida += str[i];
}

console.log(strInvertida); // imprime a string invertida no console
