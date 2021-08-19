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