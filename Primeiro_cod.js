Number.prototype.situacao = function (inicio, fim) {
    return this >= inicio && this <= fim
}

exam0 = 10;
    price0 = 6;
exam1 = 7;
    price1 = 10 - price0;

    const average1 = (exam0*price0 + exam1*price1) / (price0+price1);

        if (average1.situacao (9, 10)) {
            console.log("Parabéns, você superou a média estipulada em seu primeiro semestre\n" + "Sua média é: " + average1.toFixed(1) + "\n");
        } else if (average1.situacao (7, 8.9)) {
            console.log("Parabéns, você foi atingiu a nota do primeiro semestre\n" + "Sua média é: " + average1.toFixed(1) + "\n");
        } else {
            console.log("Infelizmente você não atingiu a média do primeiro semestre:(\n" + "Sua média é: " + average1.toFixed(1) + "\n")
        }

exam0 = 9;
    price0 = 7;
exam1 = 10;
    price0 = 10 - price0; 

    const average2 = (exam0*price0 + exam1*price1) / (price0+price1);

        if (average2.situacao (9, 10)) {
            console.log("Parabéns, você superou a média estipulada em seu segundo semestre\n" + "Sua média é: " + average2.toFixed(1) + "\n");
        } else if (average2.situacao (7, 8.9)) {
            console.log("Parabéns, você atingiu a média do segundo semestre\n" + "Sua média é: " + average2.toFixed(1) + "\n");
        } else {
            console.log("Infelizmente você não atingiu a média do segundo semestre :(\n" + "Sua média é: " + average2.toFixed(1) + "\n")
        }  

exam0 = 10;
    price0 = 5;
exam1 = 10;
    price0 = 10 - price0; 

    const average3 = (exam0*price0 + exam1*price1) / (price0+price1);

        if (average3.situacao (9, 10)) {
            console.log("Parabéns, você superou a média estipulada em seu terceiro semestre\n" + "Sua média é: " + average3.toFixed(1) + "\n");
        } else if (average3.situacao (7, 8.9)) {
            console.log("Parabéns, você atingiu a média do terceiro semestre\n" + "Sua média é: " + average3.toFixed(1) + "\n");
        } else {
            console.log("Infelizmente você não atingiu a média do terceiro semestre :(\n" + "Sua média é: " + average3.toFixed(1) + "\n")
        }

exam0 = 9;
    price0 = 7;
exam1 = 10;
    price1 = 10 - price0;

    const average4 = (exam0*price0 + exam1*price1) / (price0+price1);

        if (average4.situacao (9, 10)) {
            console.log("Parabéns, você superou a média estipulada em seu quarto semestre\n" + "Sua média é: " + average4.toFixed(1) + "\n");
        } else if (average4.situacao (7, 8.9)) {
            console.log("Parabéns, você atingiu a média do quarto semestre\n" + "Sua média é: " + average4.toFixed(1) + "\n");
        } else {
            console.log("Infelizmente você não atingiu a média do quarto semestre :(\n" + "Sua média é: " + average4.toFixed(1) + "\n")    
        }

const AverageEnd = (average1 + average2 + average3 + average4) / 4;

    switch(Math.floor(AverageEnd)){
        case 10: case 9:
            console.log('Parabéns, você foi excelente')
        break
        case 8: case 7: case 6:
            console.log('Você foi aprovado')
        break
        case 5: 
            console.log('Você esta de recuperação')
        break
        case 4: case 3: case 2:
            console.log('Você não atigiu a média e reprovou')
        break
        case 1: case 0:
            console.log('Você reprovou mas, pare te ajudar, temos um programa de reforço, você se interresa')
        break
        default:
            console.log('inválida')
    }   