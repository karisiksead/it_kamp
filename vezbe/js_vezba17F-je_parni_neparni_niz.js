//Pronaci uljeza u nizu. Ako je parni niz, pronaci neparni broj i obrnuto

function findOutlier(intigers) {
    parni = 0;
    neparni = 0;
    for (let i = 0; i < 3; i++) {
        if (intigers[i] % 2 === 0) {
            parni++;
        } else {
            neparni = i;
        }
    }
    if (parni === 2) {
        return intigers[neparni];
    }
    if (parni >= 2) {
        for (let i = 0; i < array.length; i++) {
            const element = array[i];

        }
    }
}