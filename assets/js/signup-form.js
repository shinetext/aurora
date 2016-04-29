var labelID;

$('.form-field label').click(function() {
  labelID = $(this).attr('for');
  $('#'+labelID).trigger('click');
});

$('input.form-control').keyup(function() {
  this.setAttribute('value', this.value);
});