a = 3
b = 2
c = 4
console.log("a =", a)
console.log("b =", b)
console.log("c =", c)

if (a + b <= c || c + b <= a || a + c <= b) {
    console.log("Trougao ne postoji");
} else if (a === b && b === c) {
    console.log("Trougao je jednakostranicni");
} else if (a === b || a === c || b === c) {
    console.log("Trougao je jednakokraki")
} else {
    console.log("Trougao je raznokraki");
}