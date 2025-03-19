// primitive datatypes
    // 7 types: strings,number,boolean,null,undefined,symbol,BigInt

// reference(non primitive)
    // Array,Object,Functions

    const id=Symbol("123")
    const ANotherid=Symbol("123")
    console.log(id);
    console.log(ANotherid);
    console.log(id==ANotherid)
    


// ++++++++++++++++++++(memory in js)+++++++++++++++++++++++++++
//  stack(primitive),heap(non primitive)
// stack=>copy of a data is used 
// heap=>direct main data is used