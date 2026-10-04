const formLogin = document.querySelector('.login-form');

formLogin.addEventListener('submit', e => {
  e.preventDefault();

  const form = new FormData(formLogin);
  const formData = {
    email: form.get('email').trim(),
    password: form.get('password').trim(),
  };

  if (formData.email === '' || formData.password === '') {
    alert('All form fields must be filled in');
  } else {
    console.log(formData);
    formLogin.reset();
  }
});
