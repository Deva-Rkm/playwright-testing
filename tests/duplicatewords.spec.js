import {test} from '@playwright/test'
test("duplicatewords",async({})=>{
    let words = "programming";
    for(let i=0;i<words.length;i++){
        for (let j=i+1;j<words.length;j++){
            if(words[i]===words[j]){
console.log(words[i])
// break;

            }
            }
        }
  

})