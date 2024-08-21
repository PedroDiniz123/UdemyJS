function criaCalculadora() {
    return {
        display: document.querySelector('.display'),
        btnClear: document.querySelector('.btn-clr'),
        btnDelete: document.querySelector('.btn-del'),
        btnEqual: document.querySelector('.btn-eq'),

        clearDisplay() {
            this.display.value = "";
        },

        inicia() {
            this.cliqueBotoes();
            this.pressionaEnter();
        },

        pressionaEnter() {
            this.display.addEventListener('keyup', e => {
                if (e.keyCode === 13) {
                    this.realizaConta();
                }
            })
        },

        apagaUm() {
            this.display.value = this.display.value.slice(0, -1);
        },

        realizaConta() {
            let conta = this.display.value;
            try {
                conta = eval(this.display.value);

                if (!conta) {
                    alert('Conta inválida!');
                    return;
                }

                this.display.value = conta;
            } catch (e) {
                return;
            }
        },

        cliqueBotoes() {
            document.addEventListener('click', function(e) {
                const el = e.target;

                if (el.classList.contains('btn-num') ) {
                    this.btnParaDisplay(el.innerText);
                }

                if (el.classList.contains('btn-clr')) {
                    this.clearDisplay();
                }

                if (el.classList.contains('btn-del')) {
                    this.apagaUm();
                }

                if (el.classList.contains('btn-eq')) {
                    this.realizaConta();
                }
            }.bind(this));
        },

        btnParaDisplay(valor) {
            this.display.value += valor;
        }

    };
}

const calculadora = criaCalculadora();
calculadora.inicia();