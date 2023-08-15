class Retangulo {
  base: number;
  altura: number;
  constructor(base: number, altura: number) {
    this.base = base;
    this.altura = altura;
  }
  area(): number {
    return this.base * this.altura;
  }
  perimetro(): number {
    return 2 * this.base + 2 * this.altura;
  }
  print(): void {
    console.log(`$a area é ${this.area()} 
e o perimetro é ${this.perimetro()}`) ;

  }
}
//<ul></ul>

const area = new Retangulo(2,3);

area.print();