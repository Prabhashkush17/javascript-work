const library = [
    {
        title: "book1",
        author: " author yash ",
        status : {
            own: true,
            reading : false,
            read : false,
        }
    },
     {
        title: "book2",
        author: " author kesav ",
        status : {
            own: true,
            reading : false,
            read : false,
        }
    },
     {
        title: "book3",
        author: " author mayank ",
        status : {
            own: true,
            reading : false,
            read : false,
        }
    },

];

// 2 step
library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

console.log(library);

// 3 step
const { title: firstBook } = library[0];
console.log(firstBook);

// 4 step
const libraryjson = JSON.stringify(library);
console.log(libraryjson);



