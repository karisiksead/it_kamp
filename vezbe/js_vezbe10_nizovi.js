niz = [43, 56, 23, 89, 88, 90, 99, 652];
niz.sort();
niz.sort(function(a, b) { return a - b })
console.log(niz)
    // treci = niz.slice(2, 0)

treci = niz.slice(niz.length - 3, niz.length - 2)
    //drugi nacin
console.log(niz[niz.length - 3])

console.log("Treci po velicini je: " + treci)

//Drugi nacin sortiranja bez metode sort()

niz = [43, 56, 23, 89, 88, 90, 99, 652];
maxEl = niz[0];
minEl = niz[0];
for (let i = 0; i < niz.length; i++) {
    if (niz[i] > maxEl) {
        maxEl = niz[i];
    }
    if (niz[i] < minEl) {
        minEl = niz[i];
    }

}
console.log(niz);
console.log("Maximani je: ", maxEl);
console.log("Minimani je: ", minEl);