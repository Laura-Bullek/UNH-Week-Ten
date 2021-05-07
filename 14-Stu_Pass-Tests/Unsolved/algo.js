function Algo() {}

let str = "Hello World"

Algo.prototype.reverse = function(str) {
  // TODO: Your code here
  function reverseString(str) {
    return str.split("").reverse().join("");
  }
  reverseString(str)
};

Algo.prototype.isPalindrome = function(str) {
  // TODO: Your code here
  function palindrome(str) {
    var re = /[\W_]/g;
    var lowRegStr = str.toLowerCase().replace(re, '');
    var reverseStr = lowRegStr.split('').reverse().join(''); 
    return reverseStr === lowRegStr;
  }
  palindrome("A man, a plan, a canal. Panama");
};

Algo.prototype.capitalize = function(str) {
  // TODO: Your code here 
  const capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
  }
  capitalize('flavio') //'Flavio'
};

module.exports = Algo;
