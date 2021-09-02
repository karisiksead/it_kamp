//napisati f-ju koja iz niza pronalazi 'nule' i prebacuje ih na kraj niza


niz = [false, 1, 0, 3, 2, 0, 1, 2, 'a'];

function pronadjiNule(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0 || arr[i - 1] === 0) {
            arr.splice(i, 1);
            arr.push(0);
        }
    }
    return arr;
}

console.log(pronadjiNule(niz));