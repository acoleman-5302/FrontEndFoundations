// Makes the social media icons at the top of the page change size when hovered over
const toggleIcon = (e) => {
    e.target.classList.toggle('active');
};
$('.icon').on('mouseover', toggleIcon);
$('.icon').on('mouseout', toggleIcon);


//  grabbing my GitHib Repository Names and Links through an API 
//  and creating elements in the HTML to see te
$("button").click(function(){

    let gitRequest = new XMLHttpRequest();
    let listgroup= document.getElementById("MyRepos");

    gitRequest.onreadystatechange=function(){
        if(this.readyState == 4 && this.status == 200){
            let myRepos = JSON.parse(this.responseText);
            document.getElementById("MyRepos").innerHTML = " " ;

            for (i=0 ; i < myRepos.length ;i++){
                var a = document.createElement('a');
                var linkText = document.createTextNode(myRepos[i].name);
                
                a.classList.add("dropdown-item");
                a.appendChild(linkText);
                a.href= myRepos[i].html_url ;
                listgroup.appendChild(a);
            }
            
        }
    };
    gitRequest.open("GET","https://api.github.com/users/acoleman-5302/repos",true);
    gitRequest.send();

});
