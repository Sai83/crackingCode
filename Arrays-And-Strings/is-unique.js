/**
 * Implememt an algorithm to determine string has all unique characters using ES-6 Set
 */
(function(){
    const uniqueCharacters = (str) => {
      let value = [...new Set(str)];
      console.log(value)

      if(str.length === value.length){
          return true;
      }
      
      return false;

    };

    // No set solution iterating between two for loops.
    const  uniqueCharactersNoSet = (str) => {
        for(let i=0; i< str.length; i++){
            for(let j=i+1; j< str.length; j++){
                return (str[i] === str[j])
            }
        }
    }


    
    console.log(uniqueCharacters('abdda'));
    console.log('No Set', uniqueCharactersNoSet('abdda'))
})();
