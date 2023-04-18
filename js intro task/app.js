let num = 548;
for (i = 0; i <= num; i++) {

    if (num % 2 == 0) {
        num /= 2
    }
    else if (num % 2 != 0) {
        num += 1
    }
    console.log(num);
}