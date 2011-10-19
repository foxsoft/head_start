$(document).ready(function() { 
  togglePartyTasks();
  $('#task_party_attributes_party_type').change(function() {
    togglePartyTasks();
  });
  toggleIndividualTaskFields();
  $('#task_party_attributes_entity_1').click(function() {
    toggleIndividualTaskFields();
  });
  toggleCompanyTaskFields();
  $('#task_party_attributes_entity_2').click(function() {
    toggleCompanyTaskFields();
  });
});

function togglePartyTasks() {
  if ($('#task_party_attributes_party_type').val() == '(NONE)') {
    $("#party_status").find(":input").each(function(index, value){
      $(value).attr("disabled", "disabled");
    });
    $("#party_status").hide();
  } else {
    $("#party_status").find(":input").each(function(index, value){
      $(value).removeAttr("disabled");
    });
    $("#party_status").show();
  }
}

function toggleIndividualTaskFields() {
  if ($('#task_party_attributes_entity_1').val() == "1") {
    $('#individual_party').show().effect('highlight');
    $('#party_name').show().effect('highlight');
    $("#party_name").find("label").first().html('Surname');
    $('#task_party_attributes_title').removeAttr("disabled");
    $('#task_party_attributes_forename').removeAttr("disabled");
    $('task_party_attributes_title').val("");
    $('task_party_attributes_forename').val("");
    $('task_party_attributes_surname').val("");
  }
}

function toggleCompanyTaskFields() {
  if ($('#task_party_attributes_entity_2').val() == "2") {
    $("#individual_party").hide();
    $('#party_name').show().effect('highlight');
    $("#party_name").find("label").first().html('Company Name');
    $('#task_party_attributes_title').attr("disabled", "disabled");
    $('#task_party_attributes_forename').attr("disabled", "disabled");
    $('#task_party_attributes_surname').val("");
  }
}