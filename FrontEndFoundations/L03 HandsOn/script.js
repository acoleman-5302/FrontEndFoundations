let highSchoolGrade = 11;
let yourGrade;

function updateGrade(){
  switch(highSchoolGrade){
    case 9:
      yourGrade = "Freshman";
      break;
    case 10:
      yourGrade = "Sophmore";
      break;
    case 11:
      yourGrade = 'Junior';
      break;
    case 12:
      yourGrade = "Senior";
      break;
    default:
      yourGrade = "Invalid";
    
  }
  console.log(yourGrade);
}


function name1(){
  let firstName ;
    firstName === "John" ? document.getElementById("demo").innerHTML = "Hello John!" : document.getElementById("demo").innerHTML = "Hello Human!";
}


updateGrade();
name1();