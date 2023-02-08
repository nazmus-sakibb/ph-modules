const friends = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144];

const partial = friends.splice(2, 6, 78, 87, 99);

console.log(partial);
console.log(friends);