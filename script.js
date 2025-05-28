const fruits = [ "Apple", "Cherry", "kiwi", "grapes"];

let text = "<ul>";
fruits.map(function(x){
    text+=`<li>${x}</li>`;
});

text+= "</ul>"

document.getElementById("demo").innerHTML = text;

const persons = [
{
    name : "john",
    age : 23,
},

{
    name : "harry",
    age : 32,
},

{
    name : "odin",
    age : 53,
}
];

let table = `
<table border=1px>
<tr>
<th>Name</th>
<th>age</th>
</tr>
`;

persons.map((x)=>{
    table +=`
    <tr>
    <td>${x.name}</td>
    <td>${x.age}</td>
    </tr>
    `;
});

table += "</table>";

document.getElementById("mytable").innerHTML = table;

// filter..
// the filter() method 

const numbers = [10, 20, 30, 3254, 35, 53, 9];

const newNumbers = numbers.filter((x)=>{
    if (x > 30){
        return x;
    }
});

console.log(newNumbers);

const students = [
    {
        name : "ram",
        grade : 96
    },

    {
        name : "priya",
        grade : 85
    },

    {
        name : "mohan",
        grade : 100
    },

    {
        name : "yash",
        grade : 65
    },

    {
        name : "sukesh",
        grade : 90
    },
];

const studentsGrade = students.filter((x)=>{
    if (x.grade > 90){
        return x;
    }
});

console.log(studentsGrade);

// reduce....

