$(document).ready(function() {
  $(".capbox").hide();
  $(".capimage").live('click',function(e){
    var box = $("#" + e.target.id).parent().find(".capbox");
    box.show();
  });

  $(".update-photo").submitWithAjax();
  $(".delete-photo").submitWithAjax();

  $(".close-caption").live('click',function(e){
    var capboxID = $("#" + e.target.id).parents().find(".capbox")[0].id;
    $("#" + capboxID).hide();
  });
  
});