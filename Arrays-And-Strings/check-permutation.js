/**
 * Permutation whether two strings are in permutation
 * 
 */

(function(){

    const isPermutationNotEfficient = (str1, str2) => {

        // O(nlogn) this is not efficient.
        const arrStr1 = [...str1].sort();
        const arrStr2 = [...str2].sort();

        if(arrStr1.length === arrStr2.length){
        for(let i=0; i<arrStr1.length; i++){
            if(arrStr1[i] != arrStr2[i]){
                    return false;
               }
            return true;
        }
    }
    }

    const isPermutationEfficientAndLinear = (str1, str2) => {
        const arrStr1 = [...str1];
        const arrStr2 = [...str2];
        const hash = {};

        // Store it in hash 
        for(let i=0; i< arrStr1.length; i++){
            let c = arrStr1[i];
            if(hash[c]){
                hash[c]++;
            }else{
                hash[c] = 1;
            }
        }

        console.log('Hash place', hash);

        for(let j=0; j< arrStr2.length; j++){
            let c = arrStr2[j];
            if(hash[c] && hash[c]!==0){
                console.log(hash);
                hash[c] --;
            }else{
                return false
            }
        }
        return true;
    }




    console.log(isPermutationNotEfficient('cfab', 'bafc'))
    console.log(isPermutationEfficientAndLinear('cfab', 'bafc'))
})();