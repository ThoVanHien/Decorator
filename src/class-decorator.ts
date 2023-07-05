type TypeConstructor = new (...args: any[]) => {
  name: string;
};
function classDecorator(originalConstructor: TypeConstructor) {
  return class extends originalConstructor {
    constructor(...arr: any[]) {
      console.log(arr);
      super(arr[0]);
    }
  };
}

@classDecorator
class Personable {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}
const a = new Personable("a");
console.log(a);
