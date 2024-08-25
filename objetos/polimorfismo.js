// Superclass()]
function Conta(agencia, conta, saldo) {
    this.agencia = agencia
    this.conta = conta
    this.saldo = saldo
}

Conta.prototype.sacar = function(valor) {
    if (this.saldo < valor){
        console.log("Saldo Insuficiente")
        this.verSaldo()
        return
    };

    this.saldo -= valor
    this.verSaldo()
}

Conta.prototype.depositar = function(valor) {
    this.saldo += valor
    this.verSaldo()
}

Conta.prototype.verSaldo = function() {
    console.log(`Ag/c.: ${this.agencia}/${this.conta}`);
    console.log(`Saldo: R$${this.saldo}`)
    
}

const conta1 = new Conta(11, 22, 10)
console.log(conta1)
conta1.depositar(11)
conta1.sacar(20)


function ContaCorrente(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo)
    this.limite = limite


}

ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

ContaCorrente.prototype.sacar = function(valor) {
    if (valor > (this.saldo + this.limite)) {
        console.log("Limite Insuficiente")
        this.verSaldo()
        return;
    }

    this.saldo -= valor
    this.verSaldo();
}

ContaCorrente.prototype.verSaldo = function() {
    console.log(`Ag/c.: ${this.agencia}/${this.conta}`);
    console.log(`Saldo: R$${this.saldo}`)
    console.log(`Limite: R$${this.limite}`)
}

function ContaPoupanca(agencia, conta, saldo) {
    Conta.call(this, agencia, conta, saldo)
}
ContaPoupanca.prototype = Object.create(Conta.prototype);
ContaPoupanca.prototype.constructor = ContaPoupanca;

