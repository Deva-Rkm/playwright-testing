import{test} from '@playwright/test'
test("duplicate numbers",async({})=>{
    let arr = [10,20,30,40,10,30];
    let duplicate = [];

    for(let i = 0; i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]===arr[j]){
            duplicate.push(arr[i]);
    //   console.log(duplicate);
      
        }
     
    }

    
    }
    console.log(duplicate);
})