function printSquare (n = 5) {
    for (let i = 1; i <= n; i++) {
        printStar(n);
    }

    function printStar (n) {
        console.log('*' + ' *'.repeat(n - 1));
    }
}


printSquare(6);