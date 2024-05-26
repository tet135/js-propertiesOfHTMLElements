document.querySelector('.form__button').onclick = () => {
  const form = document.getElementById('form')

  if (form.reportValidity()) {
    form.submit()
  } else {
    form.reset()
  }
}

document
  .querySelectorAll('.form__button--add')
  .forEach((elem) => {
    const age = document.getElementById('age')

    elem.onclick = () => {
      if (elem.getAttribute('operator') === '+') {
        return age.stepUp(10)
      }

      if (elem.getAttribute('operator') === '-') {
        return age.stepDown(10)
      }
    }
  })

document.querySelector('.form__button--save').onclick =
  () => {
    const value = document.getElementById('username').value

    if (value.length === 0)
      alert('Дані для збереження відсутні')

    navigator.clipboard
      .writeText(value)
      .then(() => alert('Дані зберегли'))
  }
