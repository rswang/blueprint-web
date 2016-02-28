$(document).ready(function(){
    var PIRATE_URL = "http://isithackday.com/arrpi.php";

    $("#description").click(function(e){
        console.log("Descirption Clicked!");

        var text = $("#description").text();

        var data = {
            format : "json",
            text   : "hello"
        };

        $.get(PIRATE_URL, data, function(response) {
            console.log(response);
            if (response.success) {
                $("#description").text(response.text);
            }
            else alert("Error translating text");

        });
    });


    $(".square").click(function(e) {
        $(this).fadeOut();
    });
});

