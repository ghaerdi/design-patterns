export default class Subject<T> {
  private observers: Observer<T>[];
  state: T;

  constructor() {
    this.state = null!;
    this.observers = [];
  }

  subscribe(cb: (v: T) => void) {
    const observer = new Observer(cb);
    this.observers.push(observer);
  }

  next(value: T) {
    this.state = value;
    for (let i = 0; i < this.observers.length; i++) {
      this.observers[i].signal(this);
    }
  }
}

class Observer<T> {
  private cb: (v: T) => void;

  constructor(cb: (v: T) => void) {
    this.cb = cb;
  }

  signal(subject: Subject<T>) {
    this.cb(subject.state);
  }
}
