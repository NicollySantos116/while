let soma = 0;
let contador = 1;
let usados = 0;
while(soma < 40){
    soma += contador;
    usados++;
    contador++;
}
console.log (`Soma final: ${soma}` );
console.log(`Números usados: ${usados}`);