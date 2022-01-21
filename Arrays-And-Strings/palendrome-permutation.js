/**
 * Palindrome Permutation
 * Input: carerac
 * Output: true taco cat or atco cta
 */

(function(){

    const palindromePermutation = (str) => {
        const arrStr1 = [...str];
        const hash = {};

        for(let i=0; i<arrStr1.length; i++){
            let c = arrStr1[i];
            if(hash[c]){
                hash[c]++;
            }else{
               hash[c] = 1; 
            }
        }
        
        let count = 0;
          Object.keys(hash).forEach((key) => {
            const value = hash[key];
            count+= value%2;
        })
        console.log(count);
        return count<=1;
                
    }
    
    
    
    
    console.log(palindromePermutation('Tact Coa'))
    //console.log(palindromePermutation('carerac'))
})();


