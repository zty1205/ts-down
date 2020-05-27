// 抽象工厂模式 创建工厂的工厂

// 基本例子
interface ShapeIn {
  run(): void;
}

class Rectangle1 implements ShapeIn {
  run() {
    console.log('Rectangle');
  }
}

class Square1 implements ShapeIn {
  run() {
    console.log('Square');
  }
}

// 基本例子
interface Color {
  fill(): void;
}

class Red implements Color {
  fill() {
    console.log('Red');
  }
}

class Blue implements Color {
  fill() {
    console.log('Blue');
  }
}

abstract class AbstractFactory {
  public abstract getColor(color: string): Color;
  public abstract getShape(shape: string): ShapeIn;
}

class ShapeFactory1 extends AbstractFactory {
  getShape(shapeType: string = 'RECTANGLE1'): ShapeIn {
    if (shapeType === 'RECTANGLE1') {
      return new Rectangle1();
    } else {
      return new Square1();
    }
  }

  getColor(color: string): Color {
    return new Red();
  }
}

class ColorFactory1 extends AbstractFactory {
  getShape(shapeType: string): ShapeIn {
    return new Rectangle1();
  }

  getColor(color: string = 'RED'): Color {
    if (color === 'RED') {
      return new Red();
    } else {
      return new Blue();
    }
  }
}

class FactoryProducer {
  public static getFactory(choice: string = 'SHAPE'): AbstractFactory {
    if (choice === 'SHAPE') {
      return new ShapeFactory1();
    } else {
      return new ColorFactory1();
    }
  }
}

// 运行
let shapeFactory1 = FactoryProducer.getFactory('SHAPE');
let ShapeIn = shapeFactory1.getShape('RECTANGLE1');
ShapeIn.run();
