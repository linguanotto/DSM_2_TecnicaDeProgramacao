class Carro 
{
  marca: string = "";
  modelo: string = "";

    setMarca(marca: string): void {
    this.marca = marca;
   }
   setModelo(modelo: string): void {
    this.modelo = modelo;
   }
   print(): void {
    console.log(`${this.marca} ${this.modelo}`);
   }
 }

 const um = new Carro();
um.modelo ="gol";
um.modelo = "VW";

const dois = new Carro();
um.modelo ="uno";
um.modelo = "FIAT";

um.print();
dois.print();

