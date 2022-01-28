/**
 * Отслеживай на форме событие input, и каждый раз записывай в локальное хранилище объект с полями email и message, 
 * в которых сохраняй текущие значения полей формы. Пусть ключом для хранилища будет строка "feedback-form-state".
 * 
 * При загрузке страницы проверяй состояние хранилища, и если там есть сохраненные данные, заполняй ими поля формы. 
 * В противном случае поля должны быть пустыми.
 * 
 * При сабмите формы очищай хранилище и поля формы, а также выводи объект с полями email, 
 * message и текущими их значениями в консоль.
 * 
 * Сделай так, чтобы хранилище обновлялось не чаще чем раз в 500 миллисекунд. 
 * Для этого добавь в проект и используй библиотеку lodash.throttle.
*/
import throttle from 'lodash.throttle';
const formRef = document.querySelector('.feedback-form');
checkFormFields();
formRef.addEventListener('input', onFormInput);
formRef.addEventListener('submit', onSubmitForm);

function checkFormFields() {
    const foo = JSON.parse(localStorage.getItem("feedback-form-state"));
    if (foo === null) {
        formRef.email.value = '';
        formRef.message.value = '';
        console.log('нема запису');
    } else {
        console.log(`Email ${foo.email}, Massage ${foo.message}`);
        formRef.email.value = foo.email;
        formRef.message.value = foo.message;
    }
}
function onFormInput(event) {
    const { email, message } = event.currentTarget.elements;   
    let formData = {
        email: `${email.value}`,
        message: `${message.value}`,
    };
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));   
}
function onSubmitForm(event) {
    const { email, message } = event.currentTarget.elements;
    event.preventDefault();
    console.log(`Email: ${email.value}, Message: ${message.value}`);
    event.currentTarget.reset();
    localStorage.removeItem("feedback-form-state");
}












// const foo = JSON.parse(localStorage.getItem("feedback-form-state"));
//console.log(foo);



// if (foo === null) {
//     console.log('нема запису');
// } else {
//     console.log(`Email ${foo.email}, Massage ${foo.message}`);
//     formRef.email.value = foo.email;
//     formRef.message.value = foo.message;
// }