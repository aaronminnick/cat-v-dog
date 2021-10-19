$(document).ready(function() {
  $("#cat-form").submit(function(event) {
    event.preventDefault();
    const meow = $("input#catsay").val();
    
    $("ul", "#cat-col").append("<li>"+ meow +"</li>");
    $("ul", "#dog-col").append("<li>Woof!</li>");
    $("#cat-form").trigger("reset");
  });

  $("#dog-form").submit(function(event) {
    event.preventDefault();
    const woof = $("input#dogsay").val();
    
    $("ul", "#dog-col").append("<li>"+ woof +"</li>");
    $("ul", "#cat-col").append("<li>...Meow!</li>");
    $("#dog-form").trigger("reset");
  });
});