class UserPatch extends User {
  #isCompleted;
  constructor(name , info, isImportant,isCompleted) {
    super(name , info, isImportant);
    this.#isCompleted=isCompleted;
  }
  getIsCompleted () {
    return this.#isCompleted;
  }
}