import{test}from'@playwright/test'
test("Words Reverse",async({})=>{
    let arr = "i love world";
    let reverse = arr.split(" ").reverse().join(" ");
    console.log(reverse);

})