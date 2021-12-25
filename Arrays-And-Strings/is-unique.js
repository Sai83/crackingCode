/**
 * Implememt an algorithm to determine string has all unique characters using ES-6 Set
 */
(function(){
    const uniqueCharacters = (str) => {
      let value = [...new Set(str)];
      console.log(value)

      if(str.length === value.length){
          return false;
      }
      
      return true;

    };
    
    console.log(uniqueCharacters('abcd'));
})();
