// 观察者模式

export abstract class Observer {
  constructor() {}
  abstract update(): void;
}

export class Subject {
  observers: Array<Observer>;
  constructor(observers: Array<Observer>) {
    this.observers = observers || [];
  }
  notify(): void {
    this.observers.forEach((o) => o.update());
  }
  add(o: Observer): Subject {
    this.observers.push(o);
    return this;
  }
  remove(o: Observer): void {
    let idx = -1;
    for (let i = this.observers.length; i >= 0; --i) {
      if (this.observers[i] === o) {
        idx = i;
      }
    }
    idx != -1 && this.observers.splice(idx, 1);
  }
}
