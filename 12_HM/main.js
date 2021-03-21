class Shape {
    get perimeter() {
        return 0;
    };
    log() {
        console.log("Фигура ??");
    }
}

class Rectanlge extends Shape{
    a;
    b;
    constructor(a, b) {
        super();
        this.a = a;
        this.b = b;
    }
    get perimeter(){
        return (this.a + this.b) * 2;
    }
    get square(){
        return this.a * this.b;
    }
    log(){
        console.log("Фигура прямоугольник, стороны: " + this.b + ", " + this.a);
    }
}

class Triangle extends Shape{
    a;
    b;
    c;
    constructor(a, b, c){
        super();
        this.a = a;
        this.b = b;
        this.c = c;
    }
    get perimeter(){
        return this.a + this.b + this.c;
    }
    get square(){
        let p = this.perimeter / 2;
        return Math.trunc(Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)));
    }
    log(){
        console.log("Фигура треугольник, стороны: " + this.a + ", " + this.b + ", " + this.c);
    }
    static AreEqual(triangle1, triangle2){
        if(triangle1 instanceof Triangle && triangle2 instanceof Triangle){
            return triangle1.a === triangle2.a && triangle1.b === triangle2.b && triangle1.c === triangle2.c
        } else{
            return false;
        }
    }
}

class EquilateralTriangle extends Triangle{
    constructor(a){
        super();
        this.a = a;
        this.b = a;
        this.c = a;
    }
    log(){
        console.log("Фигура равносторонний треугольник: " + this.a);
    }
}

class Circle extends Shape{
    radius;
    constructor(radius){
        super();
        this.radius = radius;
    }
    get perimeter(){
        return Math.trunc(2 * Math.PI * this.radius);
    }
    get square(){
        return Math.trunc(Math.PI * this.radius * this.radius);
    }
    log(){
        console.log("Фигура круг, радиус: " + this.radius);
    }
}

const rectangle = new Rectanlge(2, 4);
const circle = new Circle(2);

const triangle = new Triangle(2, 4, 6);
const equilateralTriangle = new EquilateralTriangle(5);

console.log("-=-Прямоугольник-=-");
rectangle.log();
console.log("Периметр: " + rectangle.perimeter);
console.log("Площадь: " + rectangle.square);

console.log("-=-Круг-=-");
circle.log();
console.log("Периметр: " + circle.perimeter);
console.log("Площадь: " + circle.square);

console.log("-=-Трегольник-=-");
triangle.log();
console.log("Периметр: " + triangle.perimeter);
console.log("Площадь: " + triangle.square);

console.log("-=-Равносторонний трегольник-=-");
equilateralTriangle.log();
console.log("Периметр: " + equilateralTriangle.perimeter);
console.log("Площадь: " + equilateralTriangle.square);

console.log("-=-Сравнение двух треугольников-=-");
const triangle1 = new Triangle(1, 2, 3);
const triangle2 = new Triangle(1, 2, 3);

console.log("Похожи ли triangle1 и triangle2? Ответ - " + Triangle.AreEqual(triangle1, triangle2));
