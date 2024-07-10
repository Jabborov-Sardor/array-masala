let students = [
  { name: "azamjon", age: 17, grades: [8, 9, 6] },
  { name: "umarov", age: 18, grades: [8, 7, 2] },
  { name: "azam", age: 19, grades: [8, 8, 8] },
];
students.forEach((student) => {
  let baho =
    student.grades.reduce((sum, grade) => sum + grade, 0) /
    student.grades.length;
  console.log(`${student.name} o'rtacha bahosi ${baho.toFixed(2)}`);
});

////// 2 masala /////
const books = [
  { title: "salom", year: 2004, author: "sarvar", ganre: "detektiv" },
  { title: "jangari", year: 2018, author: "anvar", ganre: "tragediya" },
  { title: "kulgi", year: 2013, author: "baxtiyor", ganre: "komediya" },
];
function book1(books1) {
  return books1.filter((i) => i.year > 2010);
}

function book2(books2) {
  return books2.filter((a) => a.year < 2010);
}

let name1 = book1(books);
console.log("new books");
console.log(name1);

let name2 = book2(books);
console.log("old books");
console.log(name2);
