class User {

  #name;
  #info;
  #isImportant;

  constructor (name , info, isImportant){
    this.#name = name;
    this.#info=info;
    this.#isImportant=isImportant;
  };
  
  getName(){
    return this.#name;
  }

  getInfo(){
    return this.#info;
  }

  getIsImportant(){
    return this.#isImportant;
  }
}