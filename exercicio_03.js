class MeuErro extends Error {
  constructor(message){
    super(message);
    this.name = "Meu Erro";
  }
}

class Animal {
  constructor(estudante, cosplay, notaCosplay) {
    this.nome = estudante;
    this.idade = cosplay;
    this.especie = notaCosplay;
  }

  mostrarAtributos(){
    try {
      return this.atributos();  
    } catch (error) {
      console.log(error) 
    }
  } 

  atributos() {
    if (this.nome != ""){
      return {
        nome: this.nome,
        idade: this.idade,
        especie: this.especie
      };
    } else {
      throw new MeuErro("Deu erro")
    }
  }
}

const meuAnimal = new Animal("", "Homem Aranha", 9.5);
const atributos = meuAnimal.mostrarAtributos();

console.log(atributos)
// Imprimindo os atributos
// console.log(atributos.nome);   
// console.log(atributos.idade);  
// console.log(atributos.especie); 