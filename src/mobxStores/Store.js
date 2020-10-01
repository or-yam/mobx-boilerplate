import { observable, action } from 'mobx';

export class Store {
  @observable storeName = '';
  @action changeName(name) {
    this.storeName = name;
  }
}
