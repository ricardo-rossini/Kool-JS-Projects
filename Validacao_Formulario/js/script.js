let validator = {
    handleSubmit:(event) => {
        event.preventDefault();
        let send = true;
        let inputs = form.querySelectorAll('input');
        validator.clearErrors();
        for(let i = 0; i < inputs.length; i++) {
            let input = inputs[i];
            //console.log(input);
            let check = validator.checkInput(input);
            if(check !== true) {
                send = false;
                //console.log(check);
                validator.showError(input, check);
            }
        }
        // send = false;
        if(send) {
            form.submit();
        }
    },
    checkInput:(input) => {
        let rules = input.getAttribute('data-rules');
        if(rules !== null) {
            rules = rules.split('|');
            for(let k in rules) {
                let rDetails = rules[k].split('=');
                switch(rDetails[0]) {
                    case 'required':
                        if(input.value == '') {
                            return 'Campo nao pode ser vazio.';
                        }
                    break;
                    case 'min':
                        if(input.value.length < rDetails[1]) {
                            return 'O campo nome deve ter pelo menos '+rDetails[1]+' caracteres';
                        }
                    break;
                    case 'email':
                        
                    break;
                }
            }
        }
        else{
            return true;
        }
    },
    showError:(input, error) => {
        input.style.borderColor = '#FF0000';
        let errorElement = document.createElement('div');
        errorElement.classList.add('error');
        errorElement.innerHTML = error;
        input.parentElement.insertBefore(errorElement, input.ElementSibling);
    },
    clearErrors:() => {
        let inputs =form.querySelectorAll('input');
        for(let i = 0; i < inputs.length; i++) {
            inputs.style = '';
        }
        let errorElements = document.querySelectorAll('.error');
        for(let i = 0; i < errorElements.length; i++) {
            errorElements[i].remove();
        }
    }
}
let form = document.querySelector('.valida');
form.addEventListener('submit', validator.handleSubmit);