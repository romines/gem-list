1. What is your preferred development role?
```
front-end
```
2. Write a function that reverses a string. Ex: If the string is "abcd efgh", it should produce "hgfe dcba." Please use JavaScript if you prefer front-end development, and Java, JavaScript, or C if you prefer back-end. If the language has a reverse() function, do not use this and create your own instead. If the language supports the swap function, you may use that.
  ```
  function reverseString(str) {
    const arrayFromString = str.split('');
    let result = '';
    for (let i = arrayFromString.length - 1; i > -1; i--) {
      result += arrayFromString[i];
    }
    return result;
  }
  ```
3. Write a function that accepts the below string, and returns the number of times each word is repeated. Please use JavaScript if you prefer front-end, and Java, Javascript, or C if you prefer back-end. Return the data in this format: [{ “team” : 1}, {“only” : 1}]
```
/*
“Walmart Technology is reinventing the way the world shops and we’ve only just begun. Our team includes @Walmart Labs in Silicon Valley and Bengaluru, which powers the eCommerce experience, as well as technology teams across data and analytics, retail, back office and more who help power store and digital experiences.”
*/

function countOccurrences(str) {
  const arrayFromString = str.split(' ');
  const resultMap = {};
  arrayFromString.forEach(word => {
    if (resultMap[word] === undefined) {
      resultMap[word] = 1;
    } else {
      resultMap[word] += 1;
    }
  });
  return Object.keys(resultMap).map(word => {
    const obj = {};
    obj[word] = resultMap[word];
    return obj;
  })
}
```
4. (Only applicable for front-end role) Consider the mockup screens below and develop them using one of the following frameworks: Angular, Ionic, ReactJS, React Native, or Electrode. The output should be for an iPhone 5 with resolution 320px by 568px. The output should be responsive to reflect resolution changes for mobile phone, tablet, and desktop devices.