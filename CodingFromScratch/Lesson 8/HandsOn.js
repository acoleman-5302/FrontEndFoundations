function nameInfo(){
    var firstname = document.getElementById("firstName").value;
    var middlename = document.getElementById("middleName").value;
    var lastname = document.getElementById("lastName").value;
    
    var fullname = firstname + middlename + lastname ;
    
    
    document.getElementById("fullname").innerHTML = fullname;
   
    }
