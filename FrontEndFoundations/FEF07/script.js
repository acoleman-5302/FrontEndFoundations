let firstname = document.getElementById("firstname").value ;
let list = document.getElementsByTagName("li");
let text = document.getElementById("paragraph").innerHTML;
document.getElementById("paragraph").innerHTML = text + " I am awesome";
var myButton = document.getElementById("submitButton");

myButton.addEventListener("click", function(){
    alert("Click!");
});

var container = document.getElementById("container");
container.innerHTML = "<h1>Hello World</h1>"

var heading = document.createElement("h1");
heading.innerHTML= "Hello WORLD";
container.appendChild(heading);

function setHeading(){
    var heading1 = document.createElement("h1");
    heading1.innerHTML = document.getElementById("message").value;
    document.getElementById("output").appendChild(heading1);
}


var parentNode = document.getElementById("div1");
var childNode = document.getElementById("p1");
parentNode.removeChild(childNode);

function addChild(){
    let newElem = document.createElement("div");
    newElem.innerHTML = "This is a new element created by appendChild()";
    let containerr = document.getElementById("containerr");
    container.appendChild(newElem);
}

function myFunction (){
    var list = document.getElementById("myList");
    list.removeChild(list.childNodes[0]);
}



const testRegex = () => {
    document.getElementById('results').innerHTML = '';

    testEmail();
    testZip();
}

const testEmail = () => {
    var email = document.getElementById('Email').value;

    var regex = /^\w+@\w+.(com|net|org)$/;

    test("email",email,regex);
}

const testZip = () => {
    var zip = document.getElementById("Zip").value;

    var regex = /^\d{5}(?:-\d{4})?$/

    test("zip",zip,regex);
}

const test = (item, input, regex) => {
    if (input.match(regex)){
        output(input + " is a valid " + item);
    }
    else {
        output(input + " is NOT a valid "+item);
    }
}


function phoneNumberFormat() {
    let phoneNumber = document.getElementById('phNumber').value;
    let phoneRegex = /^\(\d\d\d\) \d\d\d-\d\d\d\d$/;
    if (phoneNumber.match(phoneRegex)) {
      alert('Valid number entered');
      console.log(true);
    }
    else {
      alert('Phone number entered is invalid');
      console.log(false);
    }
  }