function velikoSlovo(rec) {
    rec = rec.toUpperCase();
    console.log(rec);
    // return rec;
}

velikoSlovo('daada');


//DRUGI NACIN

function toCapitalize(arg1) {
    let local_arg1 = arg1.split("");

    local_arg1[0] = local_arg1[0].toUpperCase();

    for (let i = 0; i < arg1.length; i++) {
        if (arg1[i] === " ") {
            local_arg1[i + 1] = arg1[i + 1].toUpperCase();
        }
    }
    return local_arg1.join("");
}
console.log(toCapitalize("the quick brown fox"));

//Najduza rec u recenici
function najduzaRec(recenica) {
    let local_str = recenica.split(" ");
    let najduza_rec = local_str[0];
    for (let i = 0; i < local_str.length; i++) {
        if (najduza_rec.length < local_str[i].length)
            najduza_rec = local_str[i];
    }

    return najduza_rec;
}

console.log(najduzaRec("Web Development Tutorial"));