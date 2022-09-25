const capitalize = require("./capitalize");

test("one",()=>{
    expect(capitalize("one")).toBe("One")
})
test("two",()=>{
    expect(capitalize("one two")).toBe("One Two")
})
test("three",()=>{
    expect(capitalize("one two three")).toBe("One Two Three")
})