// $("h1").text("bye")
// $("h1").css("color", "pink")
// $("h1").addClass("heading")
// $(".heading").css("color", "blue")

// $("button").css("border-radius", "25px")
// $("button").text( "Don't click me")

// remember when you use innerHTML or html for jquery, you can add html elements or tags

$(document).keypress(function(event){
    let letter = event.key
    $("h1").text(letter)
});

$("h1").before("<button>Before</button>")
$("h1").prepend("<button>Prepend</button>")
