let gitRequest = new XMLHttpRequest();
gitRequest.onreadystatechange=function(){
    if(this.readyState == 4 && this.status == 200){
        let myObj = JSON.parse(this.responseText);
        document.getElementById("birthday").innerHTML = myObj.name + " was born on " + myObj.birthday ;
    }

};

gitRequest.open("GET", "einstein.json",true);
gitRequest.send();

function showBio(){
    gitRequest.onreadystatechange=function(){
        if(this.readyState == 4 && this.status == 200){
            let myObj = JSON.parse(this.responseText);
            document.getElementById("bio").innerHTML = myObj.bio;
        }
    };
    gitRequest.open("GET","einstein.json",true);
    gitRequest.send();
}

