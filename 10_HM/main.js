const constructRectangle = (width, height) => ({
    $type: "rectangle",
    width,
    height,
    perimeter: function() {
        return (this.width + this.height) * 2;
    },
    log: function() {
        logRectangle(this);
    },
    square: function() {
        return this.width * this.height;
    }
});

const constructTriangle = (a, b, c) => ({
    $type: "triangle",
    a,
    b,
    c,
    perimeter: function() {
        return this.a + this.b + this.c;
    },
    log: function() {
        logTriangle(this);
    },
    square: function() {
        let p = this.perimeter() / 2;
        return Math.trunc(Math.sqrt(p * (p - a) * (p - b) * (p - c)));
    }
});

const constructCircle = (radius) =>({
    $type: "circle",
    radius,
    perimeter: function() {
        return 2 * Math.PI * this.radius;
    },
    log: function() {
        logCircle(this);
    },
    square: function() {
        return Math.trunc(Math.PI * this.radius * this.radius);
    }
});

const logTriangle = triangle => 
    console.log("Треугольник: " + triangle.a + ", " + triangle.b + ", " + triangle.c);

const logRectangle = rectangle => 
    console.log("Прямоугольник: " + rectangle.width + ", " + rectangle.height);

const logCircle = circle => 
    console.log("Круг: " + circle.radius);


const rectangle = constructRectangle(150, 50);
const triangle = constructTriangle(100, 150, 200);
const circle = constructCircle(120);

logRectangle(rectangle);
logTriangle(triangle);
logCircle(circle);


console.log("Площадь прямоугольника: " + rectangle.square());
console.log("Площадь треугольника: " + triangle.square());
console.log("Площадь круга: " + circle.square());