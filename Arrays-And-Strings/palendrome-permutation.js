/**
 * Palindrome Permutation
 * Input: Tact Coa
 * Output: true taco cat or atco cta
 */


const key = (obj) =>{
    return obj;
}

const palindromePermutation = (str1, str2) => {
   
    const arrStr1 = [...str1.toLowerCase()];
    const arrStr2 = [...str2.toLowerCase()];

    const me = Object.create({});
    for(let i=0; i< arrStr1.length; i++){
        let c = arrStr1[i];
        console.log(c);
        me.assign(c, i+1);
    }
    console.log('Map', map);

  
    for(let j=0; j<arrStr2.length; j++){
        let c = arrStr2[j];
        if(map.get(c)){
             map.delete(c);
        }else{
          return false;
        } 
        return true; 
     }
   
}



console.log(palindromePermutation('Tact Coa', 'super'))