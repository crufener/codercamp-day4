function pal(str) {
    var isPal;
    var re = /\s/ig;
    var noSpaces = str.replace(re, "");
    var reverseNoSpaces = noSpaces.split("").reverse().join("");
    noSpaces == reverseNoSpaces ? isPal = true : isPal = false;
    return isPal;
}
console.log(pal2("pap"));
console.log(pal2("hello"));
function pal2(str) {
    var isPal;
    var len = str.length;
    var revereStr = "";
    for (var i = len; i >= 0; i--) {
        revereStr = revereStr + str.charAt(i);
    }
    str == revereStr ? isPal = true : isPal = false;
    return isPal;
}
