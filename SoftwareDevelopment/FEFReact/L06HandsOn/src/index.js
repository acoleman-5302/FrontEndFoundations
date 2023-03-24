
const arr = [
    {"name":"chevy", "count": 2},
    {"name":"ford", "count": 5},
    {"name":"acura", "count": 3},
    {"name":"honda", "count": 16},
].filter(car => {
    return car.name === 'ford';
  })

console.log('Filtered results:' , arr);


const array = ['Bill', 'Joe', 'Emily', 'Andrea']
const newStudents = ['Andrew', 'Tasha', 'Carol', 'George'];

const newArray = [...array,...newStudents];

console.log(newArray);