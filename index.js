const firstName = document.getElementById('firstName')
const lastName = document.getElementById('lastName')
//  const email = document.getElementById('email')
const password = document.getElementById('password')
const form = document.getElementById('form')
const error = document.getElementById('error')

const hasValue = (obj) => obj.value === '' || obj.value == null || obj.value === undefined

form.addEventListener('submit', e => {
  e.preventDefault()
  const messages = []
  const requireMessage = (value) => messages.push(`${value} is required`)

  /**
   * Tu piensa que el futuro tiene que cambiar cosas tipo
   * ahora el valor es undefined pues solo lo tendrias que cambiar una vez
   * seria mas comodo para ti y tus compañeros.
   */
  if (hasValue(firstName)) requireMessage('First Name')
  if (hasValue(lastName)) requireMessage('Last Name')

  // Esto de aqui si sabes usar css esto daria igual ponerlo
  if (password.value.length <= 6) {
    messages.push('Password must be longer than 6 characters')
  }

  if (messages.length > 0) {
    new Toast({
      message: messages.join(', '),
      type: 'danger'
    });
  }
})
