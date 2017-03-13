if (document.getElementById('bday-day')) {
  var bdayDay = $('#bday-day');
  for (var i = 1; i <= 31; i++) {
    bdayDay.append('<option value="'+i+'">'+i+'</option>');
  }
}

if (document.getElementById('bday-year')) {
  var date = new Date();
  var lastYear = date.getFullYear() - 13;
  var firstYear = lastYear - 60;

  var bdayYear = $('#bday-year');
  for (var i = lastYear; i >= firstYear; i--) {
    bdayYear.append('<option value="'+i+'">'+i+'</option>');
  }
}