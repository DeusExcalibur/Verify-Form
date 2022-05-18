const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const form = document.getElementById("form");
const error = document.getElementById("error");

form.addEventListener("submit", e => {
  let messages = []
  if (firstName.value === '' || firstName.value == null) {
    messages.push(`Firstname is required`);
  }

  if (lastName.value === '' || lastName.value == null) {
    messages.push(`Lastname is required`);
  }

  
  
  if (password.value.length <= 6) {
    messages.push('Password must be longer than 6 characters')
  }

  if (messages.length > 0) {
    e.preventDefault()
    error.innerText = messages.join(', ')
  }


});
