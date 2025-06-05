//1. Double each number in the array using map().
 const numbers = [1, 2, 3];
 const doubledNumber = numbers.map(x => x*2);
 console.log(doubledNumber);

 //  2. Convert array of strings to uppercase.
 const names = ['alice', 'bob'];
 const uppercaseName = names.map(name => name.toUpperCase());
console.log(uppercaseName);


// 3.. Extract the 'name' property from each object.
 const users = [{name: 'Tom'}, {name: 'Jerry'}];
 const New = users.map(user => user.name);
 console.log(New);

 //  5. Return the lengths of each word.
 const words = ['cat', 'elephant'];
 const length = words.map(word => word.length);
 console.log(length);

 // 6. Filter even numbers.
 const numbers1 = [1, 2, 3, 4];
 const evenNumbers = numbers1.filter(x => x%2===0);
 console.log(evenNumbers);

 // 7. Filter numbers greater than 10.
 const nums = [5, 12, 8];
 const graterNum = nums.filter(x => x>10);
 console.log(graterNum);

 // 8. Filter strings with more than 4 characters.
 const words1 = ['dog', 'horse', 'lion'];
 const filteredWord = words1.filter(char => char.length > 4);
 console.log(filteredWord);

 //  9. Filter objects with active status.
 const users2 = [{active: true}, {active: false}];
 const users3 = users2.filter(x => x.active);
 console.log(users3);

 //10. Filter numbers divisible by 3.
 const nums5 = [3, 6, 7, 9];
 const num6 = nums5.filter(x => x%3===0);
 console.log(num6);

 //  11. Sort numbers ascending.
 const nums7 = [3, 1, 4];
 const num7 = nums7.sort((a, b) => a - b,);
 console.log(num7)

 // 12. Sort numbers descending.
 const nums8 = [5, 2, 8];
 const num8 = nums8.sort((a, b) => b-a);
 console.log(num8);

 // 13.Sort strings alphabetically.
 const fruits = ['banana', 'apple'];
 const fruit = fruits.sort();
 console.log(fruit);

 //  14. Sort by object property.
 const items = [{age: 2}, {age: 1}];
 const items2 = items.sort((a, b) => a.age - b.age);
 console.log(items2);

 // 15. Sort by name descending.
 const users5 = [{name: 'Bob'}, {name: 'Alice'}];
 const user5 = users5.sort((a, b) => b.name - a.name);
 console.log(user5);

 //  16. Sum all numbers.
 const nums6 = [1, 2, 3];
 const num9 = nums6.reduce((a ,c) => a+c , 0);
 console.log(num9);

 // 17. Find maximum number.
 const nums9 = [1, 5, 2];
 const num11 = nums9.reduce((a , c) => Math.max(a,c) );
 console.log(num11);

 // 18 Concatenate strings.
const wordsNew = ['hi', 'there'];
const newWord = wordsNew.reduce((a, c)=> a + " "+ c ,);
console.log(newWord);

//  19. Count total characters in array of strings.
 const strings = ['one', 'two'];
 const newString = strings.reduce((a, c) => a.length + c.length);
 console.log(newString);

 // 21. Get a button by ID.
  const btn = document.getElementById("mybtn");
  console.log(btn);

// 22. Change text of a heading.
const change = document.getElementById("title").innerHTML("New");
console.log(change);
