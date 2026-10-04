const nameInput = document.querySelector('#name-input');
const nameInner = document.querySelector('#name-output');
const helloName = e => {
  const value = e.target.value.trim();

  if (value === '') {
    nameInner.textContent = 'Anonymous';
    return;
  }

  nameInner.textContent = value;
};

nameInput.addEventListener('input', helloName);
