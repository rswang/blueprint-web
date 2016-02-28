console.log("main running...");
var URL = "https://blueprintapi.herokuapp.com/";
$(document).ready(function(){

    $(".square").click(function(e){
        console.log(e);
        $(e.target).fadeOut();
    });

    $("#description").click(function() {
        var text = $("#description").text();
        console.log(text);
        data = {
            "text" : text
        };
        $.post(URL, data, function(response) {
            console.log(response);
            $("#description").text(response["translated"]);
        });
    });

});
