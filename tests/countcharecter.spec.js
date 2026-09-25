import {test} from '@playwright/test'
test("count charecter",async({})=>{
    let str = "hello";
    let char = 'l';
    let count = 0;

    for (let c of str){
        if (c === char){
            count ++;
        }
    // console.log(count);
    }
    console.log(count);
})