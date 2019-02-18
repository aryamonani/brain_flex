$(document).foundation()
$('#myForm')
  .on('invalid.fndtn.abide', function () {
    var invalid_fields = $(this).find('[data-invalid]');
    console.log(invalid_fields);
  })
  .on('valid.fndtn.abide', function () {
    console.log('valid!');
  });

  Foundation.Abide.defaults['validators']['checkbox_limit'] =
  function ($el, required, parent) {
    var group = parent.closest('.checkbox-group');
    var min = group.attr('data-abide-validator-min');
    var checked = group.find(':checked').length;
    if (checked >= min) {
      group.find('small.form-error').hide();
      return true;
    } else {
      group.find('small.form-error').css({
        display: 'block'
      });
      return false;
    }
  };
