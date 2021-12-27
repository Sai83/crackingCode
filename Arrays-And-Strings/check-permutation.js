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




    console.log(isPermutationNotEfficient('cfab', 'bafc'))
})();