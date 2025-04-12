let base = 1;
while (true) {
    let cubo = base ** 3;
    if (cubo > 100) break;
    console.log (`O cubo de ${base} é ${cubo}`);
    base++;
}