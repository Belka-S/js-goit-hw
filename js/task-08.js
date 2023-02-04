// const formEl = document.querySelector(
//  'form.login-form'
// );

// formEl.addEventListener('submit', onFormSubmit);

// function onFormSubmit(event) {
//  event.preventDefault();

//  const formOutput = {};
//  const formData = new FormData(formEl);

//  formData.forEach((value, name) => {
//   formOutput[name] =
//    event.currentTarget.elements[name].value;
//  });

//  Object.values(formOutput).includes('') ||
//  Object.values(formOutput).join('').includes(' ')
//   ? alert(`Please, fill the form again`)
//   : console.table(formOutput);

//  formEl.reset();
// }

// -------------------------------------------------------------------------------------------- //

// Write a script to manage the login form.
// 1. Form submission (form.login-form) must be processed on the submit event.
// 2. The page must not reload when the form is submitted.
// 3. If the form has empty fields, display alert saying that all fields must be filled in.
// 4. As soon as the user has filled in all the fields and submitted the form,
// collect the field values into an object, where the field name will be
// the property name and the field value will be the property value. Use the
// elements property to access form elements.
// 5. Display the object with theentered data in the console
// and clear the values of the form fields using the reset method.

// -------------------------------------------------------------------------------------------- //

const formEl = document.querySelector(
 'form.login-form'
);

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
 event.preventDefault();
 const { email, password } =
  event.target.elements;

 if (!email.value || !password.value) {
  alert('All fields must be filled in');
 } else {
  const formData = new FormData(formEl);
  formData.forEach((value, name) => {
   formData[name] = value;
  });
  console.table(formData);
  formEl.reset();
 }
}
