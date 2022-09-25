const caesarCipher = require("./caesarCipher");

test("one word shift 0",()=>{
    const word = "one"
    expect(caesarCipher(word,0)).toBe("one")
})
test("one word shift 1",()=>{
    const word = "one"
    expect(caesarCipher(word,1)).toBe("pof")
})
test("one word shift 26",()=>{
    const word = "one"
    expect(caesarCipher(word,25)).toBe("nmd")
})
test("one word with punctuation",()=>{
    const word = "one,"
    expect(caesarCipher(word,11)).toBe("zyp,")
})
test("two word",()=>{
    const word = "one,two"
    expect(caesarCipher(word,1)).toBe("pof,uxp")
})