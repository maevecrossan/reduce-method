// REDUCE ALL ELEMENTS TO A SINGLE OUTPUT.
/**
 * To run this file in Gitpod, use the 
 * command node reduce.js in the terminal
 *///

// Accumulator = the value returned from the reduce method. It will accumulate and keep track of the sum as the callback fuction is executed on each array element. 

// Curr(currentValue) = the current 

// Summing an array of numbers:
const nums = [0, 1, 2, 3, 4];
let sum = nums.reduce((acc, curr) => acc + curr, 0); // 0 specifies that as the accumulator.
console.log(sum);

const teamMembers = [
  {
    name: 'Andrew',
    profession: 'Developer',
    yrsExperience: 5
  },
  {
    name: 'Ariel',
    profession: 'Developer',
    yrsExperience: 7
  },
  {
    name: 'Michael',
    profession: 'Designer',
    yrsExperience: 1
  },
  {
    name: 'Kelly',
    profession: 'Designer',
    yrsExperience: 3
  }
];

// Totaling a specific object property
let totatlExperience = teamMembers.reduce((acc, curr) => acc + curr.yrsExperience, 0);
console.log(totatlExperience);

// Grouping by a property, and totaling it too
let experienceByProfession = teamMembers.reduce((acc, curr) => {
  let key = curr.profession;
  if (!acc[key]) {
    acc[key] = curr.yrsExperience;
  } else {
    acc[key] += curr.yrsExperience;
  }
  return acc;
}, {});

console.log(experienceByProfession);

// Getting profession & names

let nameAndTitle = teamMembers.reduce((acc, curr) => {
  let key = curr.profession;
  if (!acc[key]) {
    acc[key] = [curr.name]; //square brackets allow us to store names in an array, so each profession can have multiple names.
  } else {
    acc[key].push(curr.name); // allows you to add more than one name per profession without overriding existing one(s).
  }
  return acc;
}, {});
console.log(nameAndTitle);

// Challenge
let students = [
  {
      name: 'John',
      subjects: ['maths', 'english', 'cad'],
      teacher: {maths: 'Harry', english: 'Joan', cad: 'Paul'},
      results: {maths: 90, english: 75, cad: 87},
  },
  {
      name: 'Emily',
      subjects: ['science', 'english', 'art'],
      teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
      results: {science: 93, english: 73, art: 95},
  },
  {
      name: 'Adam',
      subjects: ['science', 'maths', 'art'],
      teacher: {science: 'Iris', maths: 'Harry', art: 'Simon'},
      results: {science: 93, english: 88, maths: 97, art: 95},
  },
  {
      name: 'Fran',
      subjects: ['science', 'english', 'art'],
      teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
      results: {science: 93, english: 87, art: 95},
  }
];

//MY CODE
// const biggest = students.reduce((acc, curr) => {
//     let { name, results } = curr;
//     if (acc.max < results.english) {
//         acc.name = name;
//         acc.max = results.english;
//     }
//     return acc;
// }, { name: '', max: 0 });

// console.log(biggest);

const biggest = students.reduce((acc, cur) => {
  acc = acc.max > cur.results.english ? acc: {name:cur.name, max:cur.results.english};
  return acc;
  }, {name: '', max: 0});
console.log(biggest);