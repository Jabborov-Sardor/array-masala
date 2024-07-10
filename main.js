const students = [
  { name: "Baxrom", age: 21, grades: [3, 4, 5] },
  { name: "Davron", age: 25, grades: [2, 4, 5] },
  { name: "Ravshan", age: 23, grades: [4, 5] },
];
function student1Grade(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return Math.floor(sum / arr.length);
}

for (let i = 0; i < students.length; i++) {
  console.log(student1Grade(students[i].grades));
}

/////// 2-masala /////
const books = [
  { title: "salom", year: 2004, author: "sarvar", ganre: "detektiv" },
  { title: "jangari", year: 2018, author: "anvar", ganre: "tragediya" },
  { title: "kulgi", year: 2013, author: "baxtiyor", ganre: "komediya" },
];

const allBooks = function (elements) {
  const newBooks = [];
  const oldBooks = [];
  console.log(elements);
  for (let i = 0; i < elements.length; i++) {
    if (elements[i].year > 2010) {
      newBooks.push(elements[i]);
    } else {
      oldBooks.push(elements[i]);
    }
  }
  const result = {
    oldBooks: oldBooks,
    newBooks: newBooks,
  };
  return result;
};

console.log(allBooks(books));
