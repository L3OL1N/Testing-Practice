function reverseString(string=""){
    return string.split(" ").map(el=>el.split("").reverse().join("")).reverse().join(" ");
}

module.exports = reverseString;