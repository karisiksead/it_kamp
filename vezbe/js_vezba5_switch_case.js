br1 = 4;
br2 = 7;
operacija = "*"

switch (operacija) {
    case "-":
        console.log(br1 - br2);
        break;
    case "plus":
    case "+":
        console.log(br1 + br2);
        break;
    case "*":
        console.log(br1 * br2);
        break;
    case "/":
        console.log(br1 / br2);
        break;
    default:
        console.log("Neispravan oprator")
}

godina = 2023;
mesec = 2;

switch (mesec) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        console.log("Mesec ima 31 dan")
        break;
    case 2:
        if ((godina % 4 === 0 && !(godina % 100 === 0)) || godina % 400 === 0) {
            console.log("Ima 29 dana")
        } else {
            console.log("Ima 28 dana")
        }
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        console.log("Mesec ima 30 dana")
        break;
    default:
        console.log("Neispravan unos")
}