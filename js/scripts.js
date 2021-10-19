$(document).ready(function() {
  $("#cat-form").submit(function(event) {
    event.preventDefault();
    const meow = $("input#catsay").val();
    
    $("ul", "#cat-col").prepend("<li>"+ meow +"</li>");
    $("ul", "#dog-col").prepend("<li>" + meow +" you say? Woof!</li>");
    $("#cat-form").trigger("reset");
    $("li").hide();
    $("ul", "#cat-col").children("li").slice(0, 1).show();
    $("ul", "#dog-col").children("li").slice(0, 1).show();
  });

  $("#dog-form").submit(function(event) {
    event.preventDefault();
    const woof = $("input#dogsay").val();
    
    $("ul", "#dog-col").prepend("<li>"+ woof +"</li>");
    $("ul", "#cat-col").prepend("<li>" + woof + " you say? ...Meow!</li>");
    $("#dog-form").trigger("reset");
    $("li").hide();
    $("ul", "#cat-col").children("li").slice(0, 1).show();
    $("ul", "#dog-col").children("li").slice(0, 1).show();
  });

  $("#history").click(function() {
    $("li").show();
  });

  $("#animal").click(function(){
    $(".animalpics").append("<img src='img/cat.jpg' width=50%>");
    $(".animalpics").append("<img src='img/dog.jpg' width=50%>");
    $(this).hide();
  });
  
  $(".animalpics").click(function(){
    $("img", this).remove();
    $("#animal").show();
  });
});