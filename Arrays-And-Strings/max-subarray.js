(function(){
    const maxSubArray = (nums) => {
        let prev = 0;
        let max = -Number.MAX_VALUE;
        
         
        for(let i=0; i<nums.length; i++){
            let num = nums[i];
            
            prev = Math.max(prev + num, num);
                 
            max = Math.max(max, prev);
        }
        
        return max;
        
        
    };

    console.log('Max Sub Array', maxSubArray([-1]));

})();