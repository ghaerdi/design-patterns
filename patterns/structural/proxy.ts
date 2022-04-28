interface IService {
  foo(): void;
}

export class Service implements IService {
  constructor() {}
  foo() {
    console.log("foo");
  }
}

interface IBar {
  isBar: boolean;
}

export default class ProxyService implements IService {
  originalService: IService;
  bar: IBar;

  constructor(service: IService, bar: IBar) {
    this.originalService = service;
    this.bar = bar;
  }

  foo() {
    if (this.bar.isBar) {
      console.log("bar");
    } else {
      this.originalService.foo();
    }
  }
}
