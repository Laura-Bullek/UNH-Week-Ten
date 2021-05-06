cd
const Algo = require("../algo");

describe("Algo", () => {
  describe("reverse", () => {
    // TODO: Write a test for the `reverse` method that should take a string as an argument and return a new reversed version of the string
      // In order to test the functiuon, we need to creat3e a working example. First define "str"
      const str = "Hello World";

      // Next we define 'reversed' as the calue of 'str; reversed
      const reversed = '!dlroW olleH';

      // We pass 'str' into .reverse() and set that value to equal the result
      const result = new Algo().reverse(str);

      // We expect 'result' to equal 'reversed' if the 'reverse()' function is working properly
      expect(result).toEqual(reversed);
   });


  describe("isPalindrome", () => {
    // TODO: Write a test for the `isPalindrome` method that should take a string as an argument and return the boolean `true` if the provided string is a palindrome.
  });

  describe("capitalize", () => {
    // TODO: Write a test for the `capitalize` method that should take a string as an argument and return a new string with the first letter of each word capitalized
  });
});
