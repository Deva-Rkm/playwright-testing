import{test}from'@playwright/test'
test("swap 2 numbers",async({})=>{
    let a =10;
    let b = 20;
    [a,b]=[b,a];
console.log(a);
console.log(b);
})

