var validations = {
  required: function (value) {
    return value !== '';
  },
  phone: function (value) {
    return value.match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im);
  },
  email: function (value) {
    return value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  }
}

function validate() {
  let form = document.getElementById('form'),
    inputsArr = form.querySelectorAll('input');
  let successValidation = true;
  let i = 0;
  while (i < inputsArr.length) {
    var attr = inputsArr[i].getAttribute('data-validation'),
      rules = attr ? attr.split(' ') : '',
      parent = inputsArr[i].closest(".field"),
      j = 0;
    while (j < rules.length) {
      if (!validations[rules[j]](inputsArr[i].value)) {
        parent.classList.add('error');
        successValidation = false;
      } else {
        parent.classList.remove('error');
      }
      j++;
    }
    i++;

  }

  if (successValidation) {
    return true;

  } else {
    return false;
  }

}