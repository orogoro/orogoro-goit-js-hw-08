import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

initForm();

feedbackForm.addEventListener('submit', e => {
  e.preventDefault();
  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
});

feedbackForm.addEventListener(
  'input',
  throttle(e => {
    let selectedForm = localStorage.getItem(STORAGE_KEY);
    selectedForm = selectedForm ? JSON.parse(selectedForm) : {};

    selectedForm[e.target.name] = e.target.value;
    let formCurrentTurget = JSON.stringify(selectedForm);
    localStorage.setItem(STORAGE_KEY, formCurrentTurget);
  }),
  1000,
);

function initForm() {
  let saveSelectedForm = localStorage.getItem(STORAGE_KEY);
  if (saveSelectedForm) {
    saveSelectedForm = JSON.parse(saveSelectedForm);
    Object.entries(saveSelectedForm).forEach(([name, value]) => {
      //   selectedForm[name] = value;
      feedbackForm.elements[name].value = value;
    });
  }
}
