clearArr = (arr) => {
    arr = arr.filter((el) => Boolean(el));
    return arr;
};

// clearArr = (arr) => arr.filter((el) => !!el);

niz = [NaN, 0, 15, false, -22, "", undefined, 47, null];

console.log(niz);
console.log(clearArr(niz));