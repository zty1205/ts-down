// 抽象工厂模式 创建工厂的工厂
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Rectangle1 = /** @class */ (function () {
    function Rectangle1() {
    }
    Rectangle1.prototype.run = function () {
        console.log('Rectangle');
    };
    return Rectangle1;
}());
var Square1 = /** @class */ (function () {
    function Square1() {
    }
    Square1.prototype.run = function () {
        console.log('Square');
    };
    return Square1;
}());
var Red = /** @class */ (function () {
    function Red() {
    }
    Red.prototype.fill = function () {
        console.log('Red');
    };
    return Red;
}());
var Blue = /** @class */ (function () {
    function Blue() {
    }
    Blue.prototype.fill = function () {
        console.log('Blue');
    };
    return Blue;
}());
var AbstractFactory = /** @class */ (function () {
    function AbstractFactory() {
    }
    return AbstractFactory;
}());
var ShapeFactory1 = /** @class */ (function (_super) {
    __extends(ShapeFactory1, _super);
    function ShapeFactory1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ShapeFactory1.prototype.getShape = function (shapeType) {
        if (shapeType === void 0) { shapeType = 'RECTANGLE1'; }
        if (shapeType === 'RECTANGLE1') {
            return new Rectangle1();
        }
        else {
            return new Square1();
        }
    };
    ShapeFactory1.prototype.getColor = function (color) {
        return new Red();
    };
    return ShapeFactory1;
}(AbstractFactory));
var ColorFactory1 = /** @class */ (function (_super) {
    __extends(ColorFactory1, _super);
    function ColorFactory1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ColorFactory1.prototype.getShape = function (shapeType) {
        return new Rectangle1();
    };
    ColorFactory1.prototype.getColor = function (color) {
        if (color === void 0) { color = 'RED'; }
        if (color === 'RED') {
            return new Red();
        }
        else {
            return new Blue();
        }
    };
    return ColorFactory1;
}(AbstractFactory));
var FactoryProducer = /** @class */ (function () {
    function FactoryProducer() {
    }
    FactoryProducer.getFactory = function (choice) {
        if (choice === void 0) { choice = 'SHAPE'; }
        if (choice === 'SHAPE') {
            return new ShapeFactory1();
        }
        else {
            return new ColorFactory1();
        }
    };
    return FactoryProducer;
}());
// 运行
var shapeFactory1 = FactoryProducer.getFactory('SHAPE');
var ShapeIn = shapeFactory1.getShape('RECTANGLE1');
ShapeIn.run();
