function disableSendButton(f) {
  var d = f.elements;
  for (var i=0; i<d.length; i++) {
    if (d[i].type=='checkbox') {
      if (d[i].checked) {
        d['send_batch'].disabled = false;
        break
      }
    else {
      d['send_batch'].disabled=true
      }
    }
  }
}