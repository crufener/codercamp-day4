/*
1. Take in a string
2. Remove all spaces
    str.replace(/\s/ig,"")
    store in a variable
3.  Split into array of individual letters
4.  reverse and join together
5.  compare reversed and normal
6.  return true/false
*/
function pal(str) {
    let isPal;
    const re = /\s/ig;
    const noSpaces = str.replace(re, "");
    const reverseNoSpaces = noSpaces.split("").reverse().join("");
    noSpaces == reverseNoSpaces? isPal = true: isPal = false;
    return isPal;
}

console.log(pal2("pap"));
console.log(pal2("hello"));

/*
Don't use array methods
expect to spaces
*/
function pal2(str: string): boolean {
    //store true/false to return
    var isPal: boolean;
    var len = str.length;
    //String variable to build the the reversed string
    var revereStr: string = "";
    for (var i = len
        //Start value of i set to the length of passed in string
        //so we can loop from end to beginnign
        ; i >= 0; i--){
        //add each character together forming the reverse of passed in string
        revereStr = revereStr + str.charAt(i);
    }
    str == revereStr? isPal = true: isPal = false;
    return isPal;
}
