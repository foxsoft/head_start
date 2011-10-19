jQuery.ajaxSetup({  
    'beforeSend': function (xhr) {xhr.setRequestHeader("Accept", "text/javascript");}
});

jQuery.fn.submitWithAjax = function() {
  this.submit(function () {
    $.post($(this).attr('action'), $(this).serialize(), null, "script");
    return false;
  });  
};

$(document).ready(function() {
    $("#supplementary_task_party_id").change(function() {
        $.post($(this).attr('data-path')+'?authenticity_token='+encodeURIComponent(window.rails_authenticity_token), $(this).serialize(), null, "script");
    });
    
    toggleIndividualTaskFields();
    $('#supplementary_task_party_attributes_entity_1').live('click', function() {
      toggleIndividualTaskFields();
    });
    toggleCompanyTaskFields();
    $('#supplementary_task_party_attributes_entity_2').live('click', function() {
      toggleCompanyTaskFields();
    });
});

function toggleIndividualTaskFields() {
  if ($('#supplementary_task_party_attributes_entity_1').attr('checked') == true) {
    $('#individual_party').fadeIn('fast');
    $('#party_name').fadeIn('fast');
    $("#party_name label").html('Surname');
    $('#supplementary_task_party_attributes_title').removeAttr("disabled");
    $('#supplementary_task_party_attributes_forename').removeAttr("disabled");
  }
}

function toggleCompanyTaskFields() {
  if ($('#supplementary_task_party_attributes_entity_2').attr('checked') == true) {
    $("#individual_party").hide();
    $('#party_name').fadeIn('fast');
    $("#party_name label").html('Company Name');
    $('#supplementary_task_party_attributes_title').attr("disabled", "disabled");
    $('#supplementary_task_party_attributes_forename').attr("disabled", "disabled");
  }
}