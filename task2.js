const myNumber = 43;
console.log(numberIsPalindrome(myNumber));

function numberIsPalindrome(num) {
  let resObj = { result: null, steps: 0 };

  if (num === 196) {
    console.log(`${num} is a Lychrel number!`);
    return resObj;
  }

  const isPalindrome = (n) => {
    const str = String(n);
    return str === str.split("").reverse().join("");
  };

  while (!isPalindrome(num)) {
    const reversedNum = Number(String(num).split("").reverse().join(""));
    num += reversedNum;
    resObj.steps++;
  }

  resObj.result = num;
  return resObj;
}
