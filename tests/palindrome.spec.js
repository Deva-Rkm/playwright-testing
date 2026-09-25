import{test} from '@playwright/test'
test("palindrome",async({page})=>{
    let a = "madam";
    let reverse = a.split("").reverse().join("");
    if (a===reverse){
        console.log("palindrome");
    }
    else {
        console.log("not a palindrome");

    }
    
});