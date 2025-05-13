// spread operator(...) copies a part  of an array or a complete arry to another array
const num1= [10, 20, 30, 40, 50,];

const num2= [60, 70, 80, 90, 100,];

const num3= [...num1, ...num2];

console.log(num3);

// isArray , .from 
// isArray checks whether the array present or not (output in true or false)
// .from changes the string array element into element
const x = Array.isArray(num1);
console.log(x);

const y = Array.from('12345');
console.log(y)


// destructuring with spread operator
// breaking the elemnts of array in single line 
const arr = [1,2,3,4,5,6,7,8,9];

// const a = arr[0];
// const b = arr[1];

const [a,b,c,d,...rest]= arr;
console.log(a, b, c, d, e );
console.log(rest);


// Oject literals //

const person = {
    name : "john",
    age : 28,
    isEligible : true ,
    address : {
        state: "mp",
        country : "India",
    },
    hobbies : ["dance", "singing"],
    greet: function(){
        console.log("hello")
    }
}

console.log(person.name);

// square bracket notation:
console.log(person['name']);
console.log(person.isEligible);

console.log(person.address.country);
console.log(person.hobbies[1]);
person.greet();





