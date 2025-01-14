import { makeAutoObservable } from 'mobx';

class Store {
  count: number = 100;

  constructor() {
    makeAutoObservable(this);
  }

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }
}

const store = new Store();
export default store;
