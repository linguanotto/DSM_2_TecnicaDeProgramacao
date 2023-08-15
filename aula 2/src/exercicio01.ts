class Pessoa{
    nome: string = "ana";
    idade: number = 22;

    imprimir (){
        console.log( this.nome, this.idade );
    }
}

const p = new Pessoa();
p.imprimir();
p.nome = "arley";
p.imprimir();

const q = new Pessoa();
q.nome = "Marcelo";

p.imprimir();
q.imprimir();
