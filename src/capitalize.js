function capitalize(string=""){
    return string.split(" ").map(el=>el.replace(el.charAt(0),el.charAt(0).toUpperCase())).join(" ");
}
module.exports = capitalize;