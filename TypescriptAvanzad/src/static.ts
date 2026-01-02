console.log(Math.PI)
console.log(Math.max(123,23,3,23,3,8,-8999999))

class MyMath {
    // Propiedad estática y de solo lectura
    static readonly PI = 3.14;

    static max(...numbers: number[]) {
        return numbers.reduce((max, item) => max >= item ? max: item, -Infinity);
      }
}

// Ventaja de usar static es que no es necesario crear una instancia
console.log(MyMath.PI);

const numbers = [123, 23, 3, 23, 3, 8, -823949234];
console.log(MyMath.max(...numbers)); // 123
console.log(MyMath.max());