$(document).ready(function() { 
  var reportID = $("#report_id").text()
  
  $("#photo_list").sortable({ 
    handle : '.handle', 
    items : 'div.sortable',
    update : function (event, ui) { 
      var orderedElements = new Array();
      ui.item.parent().children('.sortable').each(function(index, value){
        orderedElements.push(value.id.match(/[\d]*$/))
      });
      $.post("/reports/" + reportID + "/photos/sort", {'photo_list[]': orderedElements, authenticity_token: window.rails_authenticity_token});
    } 
  });
}); 
