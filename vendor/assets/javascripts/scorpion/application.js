// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults
jQuery.ajaxSetup({  
    'beforeSend': function (xhr) {xhr.setRequestHeader("Accept", "text/javascript");}
});

jQuery.fn.submitWithAjax = function() {
  this.submit(function () {
    $.post($(this).attr('action'), $(this).serialize(), null, "script");
    return false;
  });  
};

jQuery.fn.jobListExpander = function() {
  var args = arguments[0] || {};
  var visible = args.visible;
  var trigger = $(this).children('.secondary-navigation');
  var details = $(this).children('.content');
  
  if (visible != 1) {
    details.hide();
    trigger.addClass('inactive');
  };
  trigger.click( function () {
    $(this).toggleClass('inactive');
    details.slideToggle();
  });
  
};

$('#details').jobListExpander({visible: 1});
$('#tasks').jobListExpander({visible: 1});
$('#documents_received').jobListExpander();
$('#documents_sent').jobListExpander();
$('#documents_not_sent').jobListExpander();
$('#photo_reports').jobListExpander();
$('#invoices').jobListExpander();