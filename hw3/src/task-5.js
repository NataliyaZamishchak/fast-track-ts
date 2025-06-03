class GeometricFigure {
    getArea() {
        return 0;
    }

    toString() {
        return Object.getPrototypeOf(this).constructor.name;
    }
}

class Triangle extends GeometricFigure {
    constructor(base, height) {
        super();
        this.base = base;
        this.height = height;
    }

    getArea() {
        return 0.5 * this.base * this.height;
    }
}

class Square extends GeometricFigure {
    constructor(side) {
        super();
        this.side = side;
    }

    getArea() {
        return this.side * this.side;
    }
}

class Circle extends GeometricFigure {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    getArea() {
        return Math.PI * this.radius * this.radius;
    }
}

function handleFigures(figures) {
    return figures.reduce((totalArea, figure) => {
        if (figure instanceof GeometricFigure) {
            const area = figure.getArea();
            console.log(`Geometric figure: ${figure.toString()} - area: ${area}`);
            return totalArea + area;
        } else {
            console.warn('Not a geometric figure:', figure);
            return totalArea;
        }
    }, 0);
}

const figures = [new Triangle(4, 5), new Square(7), new Circle(5)];
console.log(handleFigures(figures));
