console.log("Da li DRUGI niz sadrzi sve elemente PRVOG niza?");
n = 0;
niz_1 = ['sead', 'miki', 'oki', 'cici'];
niz_2 = ['sead', 'dfvg', 'dadasd', 'miki', 'rtw', 'oki', 'eqw', 'eqwqw', 'cici', 'joio'];

for (let i = 0; i < niz_1.length; i++) {
    // if (niz_2.includes(niz_1[i])) {
    //     console.log(i + 1, "element 1. niza se nalazi u 2. nizu");
    //     n++
    // }
    for (let j = 0; j < niz_2.length; j++) {
        if (niz_1[i] === niz_2[j]) {
            console.log(i + 1, "element 1. niza se nalazi u 2. nizu");
            n++;
        }
    }
}
if (n === niz_1.length) {
    console.log("*** SADRZI ***");
} else {
    console.log("*** NE SADRZI sve elemente ***")
}