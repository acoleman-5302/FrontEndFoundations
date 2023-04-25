// Q4
let a = 5;
let b = 6;
let c = 7;

let p = (a + b + c)/2 ;

let area = Math.sqrt(p*(p-a)*(p-b)*(p-c))
console.log(area);



// QUESTION 10 
function divide(){
    let num1 = document.getElementById("first").value ;
    let num2 = document.getElementById("second").value;
    document.getElementById("result").innerHTML = num1 / num2 ;
}
function multiply(){
    num1 = document.getElementById("first").value ;
    num2 = document.getElementById("second").value ;
    document.getElementById("result").innerHTML = num1 * num2 ;
}


// QUESTION 16
function sumOf(x,y){
    let sum ;
    x === y ? sum = 3*(x+y) : sum= x+y ;
    console.log(sum);
}
sumOf(10,11);
sumOf(10,10);


// QUESTION 21
function addPy(string){
    let result;
    string.substring(0,2) === "Py" ? result = string : result = "Py"+ string ;
    console.log(result);
}
addPy("Pythons");


// QUESTION 31
function findLargest(x,y,z){

    if (x>y){
        max = x;
    }
    else{
        max = y;
    }
    if (z>max){
        max = z;
    }
    console.log(max+" is the max")
}
findLargest(5,4,3);



// QUESTION  69
array = [1,2,3];
function sumArray(){
    result = array[0] + array[1] + array[2] ;
    console.log(result);
}
sumArray();




// QUESTION ONE
function js_style(){
    text.style.fontSize = "14pt" ;
    text.style.fontFamily = "Helvetica";
    text.style.color = "blue" ;
}

// QUESTION TWO
function getValues(){
    let x = document.getElementById("form1");
    for ( var i = 0; i < x.length; i ++){
        if (x.elements[i].value != "Submit"){
            console.log(x.elements[i].value);
        }
    }
}
getValues();

// QUESTION 9
function count(){
    let x = document.getElementById("mySelect");
    let l = x.length ;
    let j = "No. of Items: "
    for ( var i = 0 ; i < x.length ; i ++){
        
        j += x.options[i].value + " ";
      
        alert(l + " items: " + j);
    }
}


// QUESTION 10 
// function volumeSphere(){
//     let volume;
//     let r = document.getElementById("radius").value ;
//     r = Math.abs(r);
//     volume = (4/3)*(Math.PI)*Math.pow(r,3);
//     volume=volume.toFixed(4);
//     document.getElementById("volume").value =  volume ;
//     return false;
//     //console.log(volume);
// }
// window.onload = document.getElementsById("form4").onsubmit =volumeSphere ;

function volume_sphere()
 {
  var volume;
  var radius = document.getElementById('radius').value;
  radius = Math.abs(radius);
  volume = (4/3) * Math.PI * Math.pow(radius, 3);
  volume = volume.toFixed(4);
  document.getElementById('volume').value = volume;
  return false;
 } 
window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;

//counts t 's ina. string
var str_t = str.replace(/[^t]/g, "");
