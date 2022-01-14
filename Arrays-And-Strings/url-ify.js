/*
replace all spaces with %20
mr john smith
mr%/20john%20smith
*/


const urlifyspaces = (str) => {
    // This is comman delimited array.
    const arrStr = [...str];
    return arrStr.map((val)=>{
        if(val === " "){
           return val = '%20'
        }else{
            return val;
        }
    }).join('')
}


urlifyspaces('mr john smith');

