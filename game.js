const people = [
  { name: "Nic", age: 35, position: "father" },
  { name: "Raisa", age: 40, position: "mother" },
  { name: "Michael", age: 5, position: "son1" },
  { name: "Gabriel", age: 1.5, position: "son2" },
];

console.log(people.length);

// есть масив как его проитерировать:
// 1) есть цикл For
// 2)

for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
}
