exam0 = 10;
    price0 = 6;
exam1 = 7;
    price1 = 10 - price0;

    const average1 = (exam0*price0 + exam1*price1) / (price0+price1);

        if (average1 >= 7) {
            console.log("Parabéns, você atingiu a média do primeiro semestre\n" + "Sua média é: " + average1.toFixed(0) + "\n");
        } else {
            console.log("Infelizmente você não atingiu a média do primeiro semestre :(\n" + "Sua média é: " + average1.toFixed(0) + "\n");
        }

exam0 = 9;
    price0 = 7;
exam1 = 10;
    price0 = 10 - price0; 

    const average2 = (exam0*price0 + exam1*price1) / (price0+price1);

        if (average2 >= 7) {
            console.log("Parabéns, você atingiu a média do segundo semestre\n" + "Sua média é: " + average2.toFixed(0) + "\n");
        } else {
            console.log("Infelizmente você não atingiu a média do segundo semestre :(\n" + "Sua média é: " + average2.toFixed(0) + "\n");
        }   

exam0 = 3;
    price0 = 5;
exam1 = 0;
    price0 = 10 - price0; 

    const average3 = (exam0*price0 + exam1*price1) / (price0+price1);

    if (average3 >= 7) {
        console.log("Parabéns, você atingiu a média do terceiro semestre\n" + "Sua média é: " + average3.toFixed(0) + "\n");
    } else {
        console.log("Infelizmente você não atingiu a média do terceiro semestre :(\n" + "Sua média é: " + average3.toFixed(0) + "\n");
    }   


const AverageEnd = (average1 + average2 + average3) / 3;

    if (AverageEnd >= 7) {
        console.log("Parabéns, você atingiu a média do esperada e passou de ano\n" + "Sua média é: " + AverageEnd.toFixed(0));
    } else {
        console.log("Infelizmente você não atingiu a média do espera e reprovou :(\n" + "Sua média é: " + AverageEnd.toFixed(0));
    }
