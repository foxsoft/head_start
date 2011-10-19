$(document).ready(function() { 
  disableInspectorCheckbox();
  $("#all_inspectors").click(function(){
    disableInspectorCheckbox();
    $("#inspector-form").submit();
  });
  $("#inspector-form").submit( function() {} );
  $("#inspector").change(function() {
    $("#inspector-form").trigger( 'submit' );
  });

  $("#case_reference").example_text({example_text: 'e.g. BL123456'});
});

function disableInspectorCheckbox() {
  if ($("#all_inspectors:checked").length > 0) {
    $("#inspector").attr("disabled", "disabled");
  } else {
    $("#inspector").removeAttr("disabled");
  }
}