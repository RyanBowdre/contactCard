$(document).ready(function(){
  $("button").click(function(){
    var first = $('.firstName').val();
    var last = $('.lastName').val();
    var descriptionText = $('.descriptionField').val();

    $('.firstName').val("");
    $('.lastName').val("");
    $('.descriptionField').val("");

    $('.rightSide').append("<div class='card'><div class='name'>"+
          "Name:" + " " + first + " " + last +
          "<p>Click here for description!</p>"+
          "</div><div class='descriptionDiv'>"+
          descriptionText + "</div></div>");
        });
    $(document).on('click', ".card", function(){
      $(this).children().toggle();

      });
  });
