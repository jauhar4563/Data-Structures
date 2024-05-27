function reverse(str) {
    if (str.length < 2) {
      return str;
    }
  
    return reverse(str.slice(1)) + str[0];
  }
  
  function reverseWord(str, i = 0, result = "") {
    if (i >= str.length) {
      return result.trim();
    }
    let word = "";
    while (i < str.length && str[i] !== ' ') {
      word += str[i];
      i++;
    }
    let reversed = reverse(word);
    result +=reversed +" ";
  
    while (i < str.length && str[i] == " ") {
      i++;
    }
  
    return reverseWord(str, i, result);
  }
  
  let word = "hello world this is a sentence";
  let newWord = reverseWord(word);
  console.log(newWord);
  