class Validator {
    constructor(form) {
        this.form = form;
    }

    validate() {
        return this.checkName(this.form.querySelector("#name"));
    }

    checkName(input) {
        if (input.value.length > 2) {
            input.classList.remove("error");
            return true;
        } else {
            input.classList.add("error");
            input.focus();
            return false;
        }
    }
}

const validate = new Validator(document.forms[0]);

document.forms[0].addEventListener("submit", (e) => {
    validate.validate(e.target);
    e.preventDefault();
});
