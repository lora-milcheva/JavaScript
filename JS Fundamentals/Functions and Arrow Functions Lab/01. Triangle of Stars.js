function printTriangle (n) {
    for (let i = 1; i <= n; i++) {
        printStar(i);
    }
    for (let i = n - 1; i >= 0; i--) {
        printStar(i);
    }

    function printStar (n) {
        console.log('*'.repeat(n));
    }
}


printTriangle(5);