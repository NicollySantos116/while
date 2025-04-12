let total = 0;
let moedas = 0;
while (total < 12){
    total += 3;
    moedas++;
    console.log(`Moeda ${moedas}: Total= R$${total}`);
}
console.log(`Total de moedas usadas: ${moedas}`);