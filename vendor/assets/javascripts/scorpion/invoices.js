$(document).ready(function() {
  if ($("#generate-invoice").attr("data-requires-check") == "1") {
    var taskCount = $("ul#invoicable-supplementary-tasks > li").length + $("ul#invoicable-tasks > li").length;
    var assetCount = $("ul#invoicable-photo-reports > li").length + $("ul#invoicable-documents > li").length;
    $("form").submit(function(){
      var checkTaskCount = $("ul#invoicable-supplementary-tasks > li > input:checked").length + $("ul#invoicable-tasks > li > input:checked").length;
      if (checkTaskCount == taskCount) {
        var checkAssetCount = $("ul#invoicable-photo-reports > li > input:checked").length + $("ul#invoicable-documents > li > input:checked").length;
        if (checkAssetCount != assetCount) {
          var answer = confirm("You still have documents that you should invoice, are you sure you want to continue?")
          if (!answer) {
            return false
          }
        }
      }
    })
  }
})