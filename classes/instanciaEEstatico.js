// Estáticos: referentes apenas à classe (não à instância)
// Só consegue chamar a partir da Classe (Controle.asdoasd())
class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    }

    aumentarVolume() {
        this.volume += 2;
    }

    diminuirVolume() {
        this.volume -= 2;
    }

    //  Não tem acesso às variáveis da instância!!
    static paraTodos() {
        console.log("Estático")
    }
}

const controle1 = new ControleRemoto("LG")
const controle2 = new ControleRemoto("LG")
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();
ControleRemoto.paraTodos()
console.log(controle1)