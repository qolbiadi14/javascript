$( document ).ready(function() {
    console.log( "ready!" );
});

$(function () {
    $("#isi").html("<h1>Learn jquery</h1>");

    $("#klik").click(function (e) {
        e.preventDefault();
        alert("jquery");
    });

    // $("#isi").mouseleave(function () { 
    //     alert("mouseclick");
    //     console.log("leave");
    // });

    $("#isi").mouseover(function () { 
        console.log("hover");
    });
})