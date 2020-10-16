let validator = {
    handleSubmit:(event) => {
        event.preventDefault();
        let send = true;
        let inputs = form.querySelectorAll('input');

        for(let i = 0; i < inputs.length; i++) {
            let input = inputs[i];
            //console.log(input);
            let check = validator.checkInput(input);

            if(check !== true) {
                send = false;
                console.log(check);
            } 
        }
       // send = false;
        //send ? form.submit() : 
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

                    case min:

                    break;
                }
            }
        }
        else{
            return true;
        }
    }
}

let form = document.querySelector('.valida');

form.addEventListener('submit', validator.handleSubmit);