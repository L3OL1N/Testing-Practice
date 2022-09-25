const reverseString = require("./reverseString")

test("one",()=>{
    expect(reverseString("one")).toBe("eno");
})
test("two",()=>{
    expect(reverseString("one two")).toBe("owt eno");
})