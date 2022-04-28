export default class Singleton {
  private static instance: Singleton;
  counter: number;

  private constructor() {
    this.counter = 0;
  }

  static getInstance(): Singleton {
    this.instance ??= new Singleton();

    return this.instance;
  }

  addCounter(n = 1) {
    this.counter += n;
  }
}
