$(document).ready(function() { 
  $(".category_list").sortable({ 
    handle : '.handle', 
    update : function (event, ui) { 
      var orderedElements = new Array();
      ui.item.parent().children().each(function(index, value){
        orderedElements.push(value.id.match(/[\d]*$/))
      });
      $.post("/repository/categories/sort", {'category_list[]': orderedElements, authenticity_token: window.rails_authenticity_token});
    } 
  });
}); 
