// let num = 548;
// for (i = 0; i <= num; i++) {

//     if (num % 2 == 0) {
//         num /= 2
//     }
//     else if (num % 2 != 0) {
//         num += 1
//     }
//     console.log(num);
// }]
let num = 584;
function sum(num) {
    let a = Math.floor(num / 100);
    let b = Math.floor((num % 100) / 10);
    let c = num % 10;
    let max = num;
    if (b * 100 + a * 10 + c > max) {
        max = b * 100 + a * 10 + c;
    }
    if (c * 100 + b * 10 + a > max) {
        max = c * 100 + b * 10 + a;
    }
    if (c * 100 + a * 10 + b > max) {
        max = c * 100 + a * 10 + b;
    }
    return max *2;
}
console.log(sum(num));
