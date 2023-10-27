$(document).ready(function() {
  $("#sun").hide();
  $("#moon").click(function() {
    $(this).hide();
    $("#sun").show();
  });

  $("#sun").click(function() {
    $(this).hide();
    $("#moon").show();
  });
});

$(document).ready(function() {
  $("#moon").click(function() {
    // Change the background color, text color, and other styles of the content
    $("*").css({
      "background-color": "#795548",
      "color": "#EF5350",
    });
    $(".card1").css({
      "background-color": "#FFEE58",
      "color": "#BA68C8",
    });
    $(".card1 p").css({
      "background-color": "#FFEE58",
      "color": "#EF5350",
    });
    $(".card1 h2").css({
      "background-color": "#FFEE58",
      "color": "black",
    });
    $(".card2").css({
      "background-color": "#FFEE58",
      "color": "#BA68C8",
    });
    $(".card2 p").css({
      "background-color": "#FFEE58",
      "color": "#EF5350",
    });
    $(".card2 h2").css({
      "background-color": "#FFEE58",
      "color": "black",
    });
    $(".card3").css({
      "background-color": "#FFEE58",
      "color": "#BA68C8",
    });
    $(".card3 p").css({
      "background-color": "#FFEE58",
      "color": "#EF5350",
    });
    $(".card3 h2").css({
      "background-color": "#FFEE58",
      "color": "black",
    });
  });
});


$(document).ready(function() {
  $("#sun").click(function() {
    // Change the background color, text color, and other styles of the content
    $("*").css({
      "background-color": "#FFFF99",
      "color": "#ff7477",
    });
    $(".card1").css({
      "background-color": "#D2B48C",
      "color": "#BA68C8",
    });
    $(".card1 p").css({
      "background-color": "#D2B48C",
      "color": "#555",
    });
    $(".card1 h2").css({
      "background-color": "#D2B48C",
      "color": "#2a2a2a",
    });
    $(".card2").css({
      "background-color": "#D2B48C",
      "color": "#BA68C8",
    });
    $(".card2 p").css({
      "background-color": "#D2B48C",
      "color": "#555",
    });
    $(".card2 h2").css({
      "background-color": "#D2B48C",
      "color": "#2a2a2a",
    });
    $(".card3").css({
      "background-color": "#D2B48C",
      "color": "#BA68C8",
    });
    $(".card3 p").css({
      "background-color": "#D2B48C",
      "color": "#555",
    });
    $(".card3 h2").css({
      "background-color": "#D2B48C",
      "color": "#2a2a2a",
    });
  });
});
