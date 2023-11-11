class Carro {
  marca;
  cor;
  gastoKmLitro;

  constructor(marca, cor, gastoKmLitro) {
    this.marca = marca;
    this.cor = cor;
    this.gastoKmLitro = gastoKmLitro;
  }

  calcularGastoCombustível(precoCombustivel, distancia) {
    let litrosConsumidos = distancia / this.gastoKmLitro;
    let gastoTotal = litrosConsumidos * precoCombustivel;
    return `${this.marca}, da cor ${this.cor} tem um gasto total de R$${gastoTotal.toFixed(2)} para fazer uma viagem de ${distancia}Km`
  }
}

const carro1 = new Carro ('Camaro V8', 'preto fosco', 9.4);
const carro2 = new Carro ('Palio Turbo', 'verde escuro brilhante', 10)

console.log(carro1.calcularGastoCombustível(5, 100));
console.log(carro2.calcularGastoCombustível(5, 100));