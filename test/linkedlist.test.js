const LinkedList = require("../src/linkedlist");

const linkedList = new LinkedList();

for (let i = 0; i < 10; i++)
    linkedList.add(
        Math.floor(Math.random() * 100),
        Math.floor(Math.random() * linkedList.size())
    );

console.log("Before even number removal");
linkedList.forEach(console.log);

linkedList.removeEach((el) => el % 2 === 0);
console.log("After even number removal");
linkedList.forEach(console.log);
