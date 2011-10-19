$(document).ready(function() {
  $("#inspector-form").submit( function() {} );
  $("#status").change(function() {
    $("#inspector-form").trigger('submit');
  });
  $("#inspector-submit").hide();
});