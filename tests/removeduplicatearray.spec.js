import {test} from '@playwright/test'
test("remove duplicate" , async ({})=>{
    let arr = [10,20,20,30,40,10];
    let unique =[...new Set(arr)];
    console.log(unique);
})