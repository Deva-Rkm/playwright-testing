import{test} from '@playwright/test'
test("String reverse",async({})=>{
    let arr = "hello";
    let reverse =arr.split("").reverse().join("");
    console.log(reverse);

})