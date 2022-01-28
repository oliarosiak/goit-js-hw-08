import throttle from 'lodash.throttle';
const formRef = document.querySelector('.feedback-form');
const formInputRef = document.querySelector('input');
const formTextareaRef = document.querySelector('textarea');
let formData = {};
const LOCALSTORAGE_KEY = "feedback-form-state";

formRef.addEventListener('input', throttle(onFormInput, 500));
formRef.addEventListener('submit', onFormSubmitBtn);
checkFormFields();

function onFormInput() {
    formData = {
        email: formInputRef.value,
        message: formTextareaRef.value,
    }   
    console.log('Дані форми:', formData);
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmitBtn(event) {
    event.preventDefault();
    console.log('Фінальні дані: ', JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)));
    // або такий варіант - console.log('Фінальні дані: ', formData);
    event.currentTarget.reset();
    localStorage.removeItem(LOCALSTORAGE_KEY);
    console.log('Фінальні дані (formData): ', formData);
}

function checkFormFields() {
    const recordFormFields = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
    if (recordFormFields) {        
        formInputRef.value = recordFormFields.email;
        formTextareaRef.value = recordFormFields.message;
    }
}



