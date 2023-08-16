class Validator {

    constructor() {
        this.validations = [
            'data-min-length',
            'data-max-length',
            'data-email-validate',
            'data-required',
            'data-password-validate'
        ]
    }

    // inicia a validaçao de todos os campos
    validate(form) {

        // limpa todas as validaçoes antigas
        let currentValidations = document.querySelectorAll('form .error-validation');

        if(currentValidations.length) {
            this.cleanValidations(currentValidations);
        }

        // pegar todos inputs
        let inputs = form.getElementsByTagName('input');
        // trasformar HTMLCollection em arr
        let inputsArray = [...inputs];

        // loop nos inputs e validaçao mediante aos atributo encontrados
        inputsArray.forEach(function(input, obj) {

            // fazer validaçoes de acordo com o atributo do input
            for(let i = 0; this.validations.length > i; i++) {
                if(input.getAttribute(this.validations[i]) != null) {

                    // limpa string para saber o metodo
                    let value = input.getAttribute(this.validations[i])

                    // invoca o metado
                    this[method](input,value);

                }
            }
        }, this);

    }
    
    //metodo para validar se tem um minimp de caracteres
    minlength(input, minValue) {

        let inputLength = input.value.length;

        let errorMessage = `O campo precisa ter pelo menos ${minValue} caracters`;

        if(inputLength < minValue) {
            this.printMessage(input, errorMessage);
        }
    }

    // metodo para validar se passou do maximo de caracters
    maxlength(input, maxValue) {

        let inputLength = input.value.length;

        let errorMessage = `O campo precisa ter menos que ${maxValue} caracteres`;

        if(inputLength > maxValue) {
            this.printMessage(input, errorMessage);
        }

    }

    // metodo para validar e-mail
    emailvalidate(input) {
        let re =/\S+\.|S+/;

        let email = input.value;

        let errorMessage = `Insira um e-mail valido com cadastro`

        if(!re.test(email)) {
            this.printMessage(input, errorMessage);
        }

    }

    // metodo para exibir inputs que sao necessarios
    required(input) {

        let inputValue = input.value;

        if(inputValue === '') {
            let errorMessage = `Esse campo é obrigatório`

            this.printMessage(input, errorMessage);
        }

    }

    // validando o campo de senha
    passwordvalidate(input) {

    // explodir string em array
    let charArr = input.value.split("");

    let uppercases = 0;
    let numbers = 0;

    for(let i = 0; charArr.length > i; i++) {
      if(charArr[i] === charArr[i].toUpperCase() && isNaN(parseInt(charArr[i]))) {
        uppercases++;
      } else if(!isNaN(parseInt(charArr[i]))) {
        numbers++;
      }
    }

    if(uppercases === 0 || numbers === 0) {
      let errorMessage = `A senha precisa um caractere maiúsculo e um número`;

      this.printMessage(input, errorMessage);
    }

  }

  // método para imprimir mensagens de erro
  printMessage(input, msg) {
  
    // checa os erros presentes no input
    let errorsQty = input.parentNode.querySelector('.error-validation');

    // imprimir erro só se não tiver erros
    if(errorsQty === null) {
      let template = document.querySelector('.error-validation').cloneNode(true);

      template.textContent = msg;
  
      let inputParent = input.parentNode;
  
      template.classList.remove('template');
  
      inputParent.appendChild(template);
    }

  }

  // remove todas as validações para fazer a checagem novamente
  cleanValidations(validations) {
    validations.forEach(el => el.remove());
  }

}

function limpaForm(){

  const formulario = document.querySelector('#register-form');
  formulario.reset();
}




let form = document.getElementById('register-form');
let submit = document.getElementById('btn-submit');

let validator = new Validator();

// evento de envio do form, que valida os inputs
submit.addEventListener('click', function(e) {
  e.preventDefault();

  validator.validate(form);
});
