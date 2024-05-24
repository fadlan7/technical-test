function letterCountWithoutUpperOrLower(txt) {
    var counting = new Object();
    
    for (var i = 0; i < txt.length; i++) {
        var letter = txt[i].toLowerCase();
        if (/[a-z]/.test(letter)) {
            counting[letter] = (counting[letter] || 0) + 1;
        }
    }

    let result = '';
    for (let letter in counting) {
        result += letter + '=' + counting[letter] + ', ';
    }
    result = result.slice(0, -2);

    return result;
}

var txt = "We Always Mekar";
// var txt = "coding is fun";

console.log(letterCountWithoutUpperOrLower(txt));
