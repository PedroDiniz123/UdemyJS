class ValidaCPF {
    constructor(cpfEnviado) {
        this.cpfLimpo = cpfEnviado.replace(/\D+/g, ''); // Remove tudo que não é número
    }

    // Método para validar o CPF
    valida() {
        if (!this.isCPFValidFormat()) return false; // Verifica se o formato é válido
        const cpfParcial = this.cpfLimpo.slice(0, -2); // Pega os primeiros 9 dígitos
        const digito1 = this.criaDigito(cpfParcial); // Calcula o primeiro dígito
        const digito2 = this.criaDigito(cpfParcial + digito1); // Calcula o segundo dígito
        const novoCPF = cpfParcial + digito1 + digito2; // Concatena os 9 dígitos mais os 2 dígitos verificadores
        return novoCPF === this.cpfLimpo; // Verifica se o CPF gerado é igual ao CPF fornecido
    }

    // Método para verificar se o CPF tem o formato correto
    isCPFValidFormat() {
        if (this.cpfLimpo.length !== 11) return false; // Verifica se tem 11 dígitos
        if (this.isSequencia()) return false; // Verifica se é uma sequência repetida
        return true;
    }

    // Método para calcular o dígito verificador
    criaDigito(cpfParcial) {
        const cpfArray = Array.from(cpfParcial);
        let regressivo = cpfArray.length + 1;
        const total = cpfArray.reduce((acumulador, valor) => {
            acumulador += (regressivo * Number(valor));
            regressivo--;
            return acumulador;
        }, 0);

        const digito = 11 - (total % 11);
        return digito > 9 ? '0' : String(digito); // Se o dígito for maior que 9, retorna '0', senão, retorna o dígito
    }

    // Método para verificar se o CPF é uma sequência repetida (ex.: 111.111.111-11)
    isSequencia() {
        const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
        return sequencia === this.cpfLimpo;
    }
}
