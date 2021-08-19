niz = []
let suma = 0;
duz_niza = prompt("Duzina niza: ");
for (let i = 0; i < duz_niza; i++) {
    el = parseInt(prompt("Unesite element: "));
    niz.push(el)

    // suma = suma + el;
    suma += el;
}

alert("Zbir je: " + suma)
console.log(suma)