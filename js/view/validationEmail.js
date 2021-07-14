'use strict'

export default {
    validEmail() {
        const exEmail = /^([a-z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-z\.]{2,6})$/;
        const $formEmail = document.querySelector('.subscribe__form');
        const $submitEmail = $formEmail.querySelector('.subscribe__input-submit');
        const $email = $formEmail.querySelector('.subscribe__input-email');

        $submitEmail.addEventListener('click', function someFunc(e) {
            e.preventDefault();
            if (exEmail.test($email.value)) {
                $email.value = "";
                $email.style.cssText = '';
                $formEmail.style.position = '';
                $formEmail.querySelector('.subscribe__input-error').style.display = '';
            } else {
                $email.value = "";
                $email.style.cssText = 'border: 2px solid red;';
                $formEmail.style.position = 'relative';
                $formEmail.querySelector('.subscribe__input-error').style.display = 'block';
            }
        })
    }
}
