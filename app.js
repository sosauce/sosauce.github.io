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
      "background-color": "#E2E8CE",
      "color": "#262626",
    });
    $(".card1").css({
      "background-color": "#525252",
      "color": "#BA68C8",
    });
    $(".card1 p").css({
      "background-color": "#525252",
      "color": "#E2E8CE",
    });
    $(".card1 h2").css({
      "background-color": "#525252",
      "color": "white",
    });
    $(".card2").css({
      "background-color": "#525252",
      "color": "#BA68C8",
    });
    $(".card2 p").css({
      "background-color": "#525252",
      "color": "#E2E8CE",
    });
    $(".card2 h2").css({
      "background-color": "#525252",
      "color": "white",
    });
    $(".card3").css({
      "background-color": "#525252",
      "color": "#BA68C8",
    });
    $(".card3 p").css({
      "background-color": "#525252",
      "color": "#E2E8CE",
    });
    $(".card3 h2").css({
      "background-color": "#525252",
      "color": "white",
    });
  });
});


$(document).ready(function() {
  $("#sun").click(function() {
    // Change the background color, text color, and other styles of the content
    $("*").css({
      "background-color": "#262626",
      "color": "#E2E8CE",
    });
    $(".card1").css({
      "background-color": "#ACBFA4",
      "color": "#BA68C8",
    });
    $(".card1 p").css({
      "background-color": "#ACBFA4",
      "color": "#555",
    });
    $(".card1 h2").css({
      "background-color": "#ACBFA4",
      "color": "black",
    });
    $(".card2").css({
      "background-color": "#ACBFA4",
      "color": "#BA68C8",
    });
    $(".card2 p").css({
      "background-color": "#ACBFA4",
      "color": "#555",
    });
    $(".card2 h2").css({
      "background-color": "#ACBFA4",
      "color": "black",
    });
    $(".card3").css({
      "background-color": "#ACBFA4",
      "color": "#BA68C8",
    });
    $(".card3 p").css({
      "background-color": "#ACBFA4",
      "color": "#555",
    });
    $(".card3 h2").css({
      "background-color": "#ACBFA4",
      "color": "black",
    });
  });
});
