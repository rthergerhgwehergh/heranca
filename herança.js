// Classe base: Veículo
  class Veiculo {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }

    acelerar() {
        console.log(`${this.marca} ${this.modelo} está acelerando.`);
    }

    frear() {
        console.log(`${this.marca} ${this.modelo} está freando.`);
    }
}

// Classe derivada: Carro
class Carro extends Veiculo {
    constructor(marca, modelo, portas) {
        super(marca, modelo);
        this.portas = portas;
    }

    abrirPortas() {
        console.log(`${this.marca} ${this.modelo} está abrindo ${this.portas} portas.`);
    }
}

// Classe derivada: Moto
class Moto extends Veiculo {
    constructor(marca, modelo, cilindradas) {
        super(marca, modelo);
        this.cilindradas = cilindradas;
    }

    ligar() {
        console.log(`${this.marca} ${this.modelo} está ligando as ${this.cilindradas} cilindradas.`);
    }
}

// Criar instâncias de Carro e Moto
const meuCarro = new Carro("Toyota", "Corolla", 4);
const minhaMoto = new Moto("Honda", "CBR600RR", 600);

// Demonstração de herança
meuCarro.acelerar();
meuCarro.abrirPortas();

minhaMoto.acelerar();
minhaMoto.ligar();