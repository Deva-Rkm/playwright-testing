import{test} from '@playwright/test'
test("second largest",async({})=>{
    let arr = [10,40,70,20,5,80,90,100];
    arr.sort((a,b)=>b-a);
    console.log(arr[1]);
})