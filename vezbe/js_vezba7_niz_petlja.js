for (let i = 6; i > 0; i--) {
    console.log(i);
}

for (let i = 1; i <= 10; i++) {
    if (i !== 7) {
        console.log(i);
    }

}

//drugi nacina
for (let i = 1; i <= 10; i++) {
    if (i === 7) {
        continue
    }
    console.log(i);
}
//napisati zbir parnih brojeva od 1 do 20
let suma = 0;
for (let i = 0; i <= 20; i += 2) {
    suma += i
    console.log("Nakon broja", i, ", zbir je:", suma)
}

for (let i = 0; i < 6; i++) {
    if (i < 3) {
        console.log("python")
    } else {
        console.log("super je")
    }
}

//prirodni broj i ispisati njegove djeljitelje
let n = 12;
for (let i = 0; i <= n; i++) {
    if (n % i === 0) {
        console.log(i)
    }
}

inp = "aabbbcccabddaa"
res = "a2b3c3a1b1d2a2"