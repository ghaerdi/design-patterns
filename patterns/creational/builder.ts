interface IPizza {
  pieces: 4 | 8 | 12;
  price: "$4.99" | "$7.99" | "$10.99";
  extraIngredients: string[];
}

class Pizza implements IPizza {
  pieces: IPizza["pieces"];
  price: IPizza["price"];
  extraIngredients: IPizza["extraIngredients"];
  private tomatoSauce: boolean;
  private cheese: boolean;

  constructor({
    pieces,
    price,
    tomatoSauce,
    cheese,
    extraIngredients,
  }: IPizza & { tomatoSauce: boolean; cheese: boolean }) {
    this.pieces = pieces;
    this.price = price;
    this.tomatoSauce = tomatoSauce;
    this.cheese = cheese;
    this.extraIngredients = extraIngredients;
  }
}

type Size = "personal" | "medium" | "big";

class PizzaBuilder implements IPizza {
  pieces: IPizza["pieces"];
  price: IPizza["price"];
  extraIngredients: IPizza["extraIngredients"];
  private tomatoSauce: boolean;
  private cheese: boolean;

  private prices: Record<IPizza["pieces"], IPizza["price"]> = {
    4: "$4.99",
    8: "$7.99",
    12: "$10.99",
  };

  private sizes: Record<Size, IPizza["pieces"]> = {
    personal: 4,
    medium: 8,
    big: 12,
  };

  constructor(size: Size) {
    this.pieces = this.sizes[size];
    this.price = this.prices[this.pieces];
    this.tomatoSauce = true;
    this.cheese = true;
    this.extraIngredients = [];
  }

  setTomatoSauce(v: boolean) {
    this.tomatoSauce = v;
    return this;
  }

  setCheese(v: boolean) {
    this.cheese = v;
    return this;
  }

  setIngredients(v: string[]) {
    this.extraIngredients = v;
    return this;
  }

  build() {
    return new Pizza({
      pieces: this.pieces,
      price: this.price,
      tomatoSauce: this.tomatoSauce,
      cheese: this.cheese,
      extraIngredients: this.extraIngredients,
    });
  }
}
