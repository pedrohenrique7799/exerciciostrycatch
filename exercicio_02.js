/*
  Todos os atributos necessários. Assim, usando Try e Catch, trate os erros e apresente uma mensagem quando houve atributos vazios.
*/

class MeuErro extends Error {
  constructor(message){
    super(message);
    this.name = "Meu Erro";
  }
}

class Estudante {
  constructor(nome, idade, turma) {
    this.nome = nome;
    this.idade = idade;
    this.especie = turma;
  }

  mostrarAtributos(){
    try {
      return this.atributos();  
    } catch (error) {
      console.log(error) 
    }
  } 

  atributos() {
    if (this.nome != "" && this.idade != "" && this.turma != "") {
      return {
        nome: this.nome,
        idade: this.idade,
        turma: this.turma
      };
    } else {
      throw new MeuErro("Deu erro")
    }
  }
}

const estudante = new Estudante("João", 16, "");
const atributos = estudante.mostrarAtributos();

console.log(atributos)
// Imprimindo os atributos
// console.log(atributos.nome);   
// console.log(atributos.idade);  
// console.log(atributos.especie); 