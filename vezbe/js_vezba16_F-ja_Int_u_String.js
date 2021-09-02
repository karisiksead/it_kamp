//Kreirati broj telefona od Niza brojeva

function createPhoneNumber(numbers) {
    sign = ["(", ")", " ", "-"];
    sign_ind = [0, 4, 5, 9];
    for (let i = 0; i < sign.length; i++) {
        numbers.splice(sign_ind[i], 0, sign[i]);

    }
    return numbers.join("")
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))