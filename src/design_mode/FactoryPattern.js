// 工厂模式
var Rectangle = /** @class */ (function () {
    function Rectangle() {
    }
    Rectangle.prototype.run = function () {
        console.log('Rectangle');
    };
    return Rectangle;
}());
var Square = /** @class */ (function () {
    function Square() {
    }
    Square.prototype.run = function () {
        console.log('Square');
    };
    return Square;
}());
var Circle = /** @class */ (function () {
    function Circle() {
    }
    Circle.prototype.run = function () {
        console.log('Circle');
    };
    return Circle;
}());
var ShapeFactory = /** @class */ (function () {
    function ShapeFactory() {
    }
    //使用 getShape 方法获取形状类型的对象
    ShapeFactory.prototype.getShape = function (shapeType) {
        if (shapeType === void 0) { shapeType = 'CIRCLE'; }
        if (shapeType === 'CIRCLE') {
            return new Circle();
        }
        else if (shapeType === 'RECTANGLE') {
            return new Rectangle();
        }
        else if (shapeType === 'SQUARE') {
            return new Square();
        }
        return new Circle();
    };
    return ShapeFactory;
}());
var sf = new ShapeFactory();
var ins = sf.getShape('CIRCLE');
ins.run();
