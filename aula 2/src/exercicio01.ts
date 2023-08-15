class Filme {
  titulo: string;
  duracao: number;
  constructor(titulo: string, duracao: number) {
    this.titulo = titulo;
    this.duracao = duracao;
  }
  print(): void {
    console.log(`O filme ${this.titulo} possui ${this.duracao} min.`);
  }
}

const dvpf = new Filme ("De volta para o futuro",116);
const m = new Filme ("Matrix", 136);

dvpf.print();
m.print();
