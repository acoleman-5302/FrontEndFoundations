let newRequest = new XMLHttpRequest();
newRequest.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    let myObj = JSON.parse(this.responseText);
    document.getElementById("example").innerHTML = myObj.cars[0].model;
  }
};
newRequest.open("GET", "json.json", true);
newRequest.send();