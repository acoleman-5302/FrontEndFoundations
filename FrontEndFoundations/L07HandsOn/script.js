function regexChecker() {
    let result;
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    let regexFirstName = /^[A-Z][a-z]+$/ 
    let regexLastName = /^[A-Z][a-z]+$/

    firstName.match(regexFirstName) && lastName.match(regexLastName) ? result = true : result = false;
    if (result){
        alert("Yay! Your inputs were all correct!");
    }
    else{
        alert("Oh no! That's an invalid format!");
    }
};