function regexChecker() {
    let result;
    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    let regexFirstName = /^[A-Z][a-z]+$/ 
    let regexLastName = /^[A-Z][a-z]+$/

    firstname.match(regexFirstName) && lastname.match(regexLastName) ? result = true : result = false;
    if (result){
        alert("Yay! Your inputs were all correct!");
    }
    else{
        alert("Oh no! That's an invalid format!");
    }
};