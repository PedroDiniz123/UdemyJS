// import { ValidaCPF } from "./validaCPF.js";

// Exemplo de uso:
// const cpf = new ValidaCPF('123.456.789-09');
// if (cpf.valida()) {
//     console.log('CPF válido');
// } else {
//     console.log('CPF inválido');
// }



// const botao = document.querySelector("#botEnviar");
//
// botao.addEventListener("click", () => {
//     console.log("Oie")
// });

class ValidaForm {
    constructor() {
        this.formulario = document.querySelector(".formulario");
        this.eventos();
    }

    eventos() {
        this.formulario.addEventListener('submit', e => {
            this.handleSubmit(e)
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        const camposValidos = this.isValid();

        if (camposValidos) {
            this.formulario.submit();
        }
    }

    isValid() {
        let valid = true;

        for (let errorText of this.formulario.querySelectorAll('.error-text')) {
            errorText.remove();
        }

        for (let campo of this.formulario.querySelectorAll('.validar')) {

            const label = campo.previousElementSibling.innerText.replace(":", "");

            if (!this.validateCampo(campo, label)) valid = false;
        }

        return valid;
    }

    validateCampo(campo, label) {
        if (!campo.value) {
            this.createError(campo, `Campo "${label}" não pode estar em branco!`)
            return false;
        }

        if (label === "CPF") {
            if(!this.validaCPF(campo)) return false;
        }

        if (label === "Usuário") {
            if(!this.validaUsuario(campo)) return false;
        }

        if (label === "Senha") {
            if(!this.validaSenha(campo)) return false;
        }

        if (label === "Repetir Senha") {
            if(!this.validaRepetirSenha(campo)) return false;
        }

        return true;
    }

    validaRepetirSenha(campo) {
        const senha = this.formulario.querySelector('#senha').value;
        const senharepetida = campo.value;

        if (senha !== senharepetida) {
            this.createError(campo, "A senhas não coincidem!")
            return false;
        }

        return true;
    }

    validaSenha(campo) {
        const str = campo.value

        if (!(str.length >= 6 && str.length <= 12)) {
            this.createError(campo, "Senha deve ter entre 6 e 12 caracteres!");
            return false;
        }

        return true;
    }

    validaUsuario(campo) {
        const str = campo.value;

        if (!(str.length >= 3 && str.length <= 12)) {
            this.createError(campo, "Usuário deve ter entre 3 e 12 caracteres!");
            return false;
        }

        if (!this.validaStringUsuario(str)) {
            this.createError(campo, "Usuário inválido!");
            return false;
        }

        return true;
    }

    validaStringUsuario(str) {
        const strValida = /^[A-Za-z0-9]*$/.test(str);
        return strValida;
    }

    validaCPF(campo) {
        const validaCPF = new ValidaCPF(campo.value);
        if (!validaCPF.valida(campo.value)) {
            this.createError(campo, "CPF inválido!")
            return false;
        }

        return true;
    }

    createError(campo, mensagem) {
        const div = document.createElement('div');
        div.innerHTML = mensagem;
        div.classList.add('error-text');
        campo.insertAdjacentElement('afterend', div);
    }
}

const validaForm = new ValidaForm();

