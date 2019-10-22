$(function() {
  $("button#cat").click(function() {
    $("#woof").slideToggle();
  });
  $("button#dog").click(function() {
    $("#meow").fadeToggle();
  });
  $("#catConvo").click(function() {
    $("#catlist").append("<li>I want some cat food!</li>");
    $("#catlist").children("li").last().click(function() {
      alert("NO Bad Cat!");
      $(this).remove();
    });
  });
  $("#dogConvo").click(function() {
    $("#doglist").append("<li>Can you play with me?</li>");
    $("#doglist").children("li").last().click(function() {
      alert("Go Away!");
      $(this).remove();
    });
  });
  $("#hooray").click(function() {
    $("#cpic").after("<p>Hooray!</p>");
    $("#cpic").siblings("p").first().click(function() {
      alert("Hooray!");
      $(this).remove();
    });
  });
  $("#bestfriend").click(function() {
    $("#dpic").before("<img src='img/dog2.jpeg' alt='dogs bestfriend'>");
    $("#dpic").prev("img").click(function() {
      alert("Yes I am!");
      $(this).remove();
    });
  });
});
