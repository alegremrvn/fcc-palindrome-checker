function palindrome(str) {
  str = str.toLowerCase();

  let alphaNumeric = [];
  for (let i = 0; i < str.length; i++) {
    if (/[A-Za-z0-9]/.test(str[i])) {
      alphaNumeric.push(str[i]);
    }
  }

  let x = Math.floor(alphaNumeric.length);
  let count = 0;
  for (let i = 0; i < x; i++) {
    if (alphaNumeric[i] == alphaNumeric[(x - 1) - i]) {
      count++;
    }
  }
  
  return count == x;
}