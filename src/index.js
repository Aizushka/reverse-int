module.exports = function reverse (n) {
    let num=Math.abs(n).toString();
    let a="";
    for (let i = num.length; i > 0; i--) {
        a = a + num[i-1];
    }
    return a;
}