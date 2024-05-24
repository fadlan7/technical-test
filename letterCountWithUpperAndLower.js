function letterCOuntWithUpperAndLower(words) {
    var counting = new Object();

    for (const word of words) {
        for (const letter of word) {
            if (/[a-zA-Z]/.test(letter)) {
                counting[letter] = (counting[letter] || 0) + 1;
            }
        }
    }

    const sorted = Object.entries(counting).sort((a, b) => b[1] - a[1]);

    let result = '';
    for (const [letter] of sorted) {
        result += `${letter}`;
    }

    return result;
}

const words = ["Abc", "bCd"];
// const words = ['Pendanaan', 'Terproteksi', 'Untuk', 'Dampak', 'Berarti'];
console.log(letterCOuntWithUpperAndLower(words));
