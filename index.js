$(function() {
  var $body = $("body");
  $body.on("resize", function() {
    $("#footer").text($body);
  });
});
