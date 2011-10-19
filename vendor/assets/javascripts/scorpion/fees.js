vat_rate = "1.20";

function canCalculate(fee, vat) {
  return (!(fee.hasClass("example")));
}

function setReadiness(val) {
  if ($(val).val() == '' || ($(val).val() == '0.00' && $(val).hasClass("example"))) {
    $(val).addClass('example');
    $(val).val('0.00');
  }
}

function tidy(val) {
  if ($(val).val() == ''){
    return true;
  }
  var amount = parseFloat($(val).val());
  if (isNaN(amount)) {
    $(val).val('');
    return true;
  }
  $(val).val(amount.toFixed(2));
  
}


$(document).ready(function() {
  $("#fee_error").hide();
  var vatButtons = ["#complete-calculate-vat", "#incomplete-calculate-vat"];
  var netButtons = ["#complete-calculate-net", "#incomplete-calculate-net"];
  var allTextFields = ["#complete-fee", "#complete-vat", "#incomplete-fee", "#incomplete-vat"];
  
  $.each(allTextFields, function(idx, value) {
    setReadiness(value);
    $(value).focus(function (e) {        
      targetID = "#" + e.target.id;
      if ($(targetID).hasClass("example")) {
        $(targetID).val('');
        $(targetID).removeClass('example');
      }
      $(this).parents("form").find(".error").fadeOut('slow');
    });
    $(value).blur(function (e){
      tidy("#" + e.target.id);
      setReadiness("#" + e.target.id);
    });
  });
  
  $.each(vatButtons, function(idx, value){
    $(value).click(function(){
      var feeObj = $(value).parents("form").find(".fee");
      var vatObj = $(value).parents("form").find(".vat");
      if (canCalculate(feeObj, vatObj)) {
        var fee = parseFloat(feeObj.val());
        if (isNaN(fee)) {
          fee = 0.0;
        }
        var vat = ((fee * vat_rate) - fee).toFixed(2);
        feeObj.val(fee.toFixed(2));
        vatObj.val(vat).removeClass('example');
      }
      else {
        var error = $(value).parents("form").find(".error");
        error.html("You must at least fill in the fee field");
        error.show();
      }
      return false;
    });
  });
  
  $.each(netButtons, function(idx, value){
    $(value).click(function(){
      var feeObj = $(value).parents("form").find(".fee");
      var vatObj = $(value).parents("form").find(".vat");
      if (canCalculate(feeObj, vatObj)) {
        var total = parseFloat(feeObj.val());
        if (isNaN(total)) {
          total = 0.0;
        }
        var fee = (total / vat_rate).toFixed(2);
        var vat = (total - fee).toFixed(2);
        vatObj.val(vat).removeClass('example');
        feeObj.val(fee);
      }
      else {
        var error = $(value).parents("form").find(".error");
        error.html("You must at least fill in the fee field");
        error.show();
      }
      return false;
    });
  });

  $("#task_submit").click(function() {
      var feeObj = $(this).parents("form").find(".fee");
      var vatObj = $(this).parents("form").find(".vat");
      
      if (feeObj.hasClass("example") || vatObj.hasClass("example")) {
        var error = $(this).parents("form").find(".error");
        error.html("You have not entered values in all fields");
        error.show();
        return false;
      };
  });
});