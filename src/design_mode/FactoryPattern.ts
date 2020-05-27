// 工厂模式

// 基本例子
interface Shape {
  run(): void;
}

class Rectangle implements Shape {
  run() {
    console.log('Rectangle');
  }
}

class Square implements Shape {
  run() {
    console.log('Square');
  }
}

class Circle implements Shape {
  run() {
    console.log('Circle');
  }
}

class ShapeFactory {
  //使用 getShape 方法获取形状类型的对象
  getShape(shapeType: string = 'CIRCLE'): Shape {
    if (shapeType === 'CIRCLE') {
      return new Circle();
    } else if (shapeType === 'RECTANGLE') {
      return new Rectangle();
    } else if (shapeType === 'SQUARE') {
      return new Square();
    }
    return new Circle();
  }
}

let sf = new ShapeFactory();
let ins = sf.getShape('CIRCLE');
ins.run();

// 抽象
abstract class FactoryClass {
  abstract getInstance(...rest: any): FactoryClass;
}

class Factory {
  classList: Array<FactoryClass>;
  constructor(classList: Array<FactoryClass>) {
    this.classList = classList;
  }
  getInstance(index: number, ...rest: any): FactoryClass {
    let idx = index > this.classList.length || index < 0 ? 0 : index;
    let ctor = this.classList[idx];
    return ctor.getInstance(rest);
  }
}
