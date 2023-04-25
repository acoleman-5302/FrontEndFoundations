$(document).ready(function () {
        $(".amazing").hide();
        //selects elements with class "amazing"

        //$("p").click(function(){
        //    $(this).hide();
        //});
        ////hides p when clicked
    let myObj;
    console.log(myObj);
    let text = document.getElementsByName("p").innerHTML;
    console.log(text);
        $("p").click(function(){
            // if($(this).hasClass("blue")){
            //     $(this).removeClass("blue");
            // }
            // else{
            //     $(this).addClass("blue")
            // }


            //// Does same thing as above
            //$(this).toggleClass("blue");

            var color = $(this).css("background-color"); //grabs value
            console.log(color);

            $(this).css("color", "orange")
        });


        
        $(".p1").hover(function(){
            $(this).css("font-family", "Times New Roman").css("color", "orange");
        }, function(){
            $(this).css("font-family", "Georgia").css("color","white");
        });
        

        $("button").click(function(){
            let pets = $(".pets");
            let isHidden = pets.is(":hidden");

            if (isHidden) pets.show();
            else pets.hide();

            isHidden = !isHidden;
            let title = (isHidden ? "Show" : "Hide") + " all pets";
            $(this).html(title);
        });

        $("#rainbows").dblclick(function(){
            alert("You double-clicked me!");
        });

        $("input").focus(function(){
            $(this).css("background-color", "lightblue");
        });
        
        $("input").blur(function(){
            $(this).css("background-color", "white");
        });


        $("input").keyup(function(){
            $(this).css("color", "red");
        });

        $("input").keydown(function(event){
            switch(event.originalEvent.key){
                case "-" :case ":" :
                    event.preventDefault();
            }
        })


});
// selecting entire document. functions goes when documentis ready. 
//This is so that you can group scripts together in html instead of having to wait till bottom of page for script to run.

//$("p").hide();
// same as : document.getElementsByTagName("p");


