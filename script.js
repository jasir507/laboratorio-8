// 1. Suma de tres valores
function sumar() {
    const n1 = parseFloat(document.getElementById('num1').value);
    const n2 = parseFloat(document.getElementById('num2').value);
    const n3 = parseFloat(document.getElementById('num3').value);
    const suma = n1 + n2 + n3;
    document.getElementById('resultadoSuma').textContent = 
        `La suma de los valores ingresados es: ${suma}`;
}

// 2. Cuadrado de un número
function calcularCuadrado() {
    const num = parseFloat(document.getElementById('numCuadrado').value);
    const cuadrado = num * num;
    document.getElementById('resultadoCuadrado').textContent = 
        `El cuadrado de ${num} es: ${cuadrado}`;
}

// 3. Promedio de calificaciones
function calcularPromedio() {
    const nombre = document.getElementById('nombreEstudiante').value;
    const n1 = parseFloat(document.getElementById('nota1').value);
    const n2 = parseFloat(document.getElementById('nota2').value);
    const n3 = parseFloat(document.getElementById('nota3').value);
    const promedio = ((n1 + n2 + n3) / 3).toFixed(2);
    document.getElementById('resultadoPromedio').textContent = 
        `El promedio de ${nombre} es: ${promedio} puntos.`;
}

// 4. Conversión de unidades
function convertirUnidades() {
    const metros = parseFloat(document.getElementById('metros').value);
    const centimetros = metros * 100;
    const kilometros = metros / 1000;
    document.getElementById('resultadoConversion').textContent = 
        `${metros} metros equivalen a ${centimetros} centímetros y ${kilometros} kilómetros.`;
}

// 5. Comparación de dos valores
function compararValores() {
    const v1 = parseFloat(document.getElementById('valor1').value);
    const v2 = parseFloat(document.getElementById('valor2').value);

    let mayor, menor, diferencia;

    if (v1 > v2) {
        mayor = v1;
        menor = v2;
    } else {
        mayor = v2;
        menor = v1;
    }

    diferencia = Math.abs(v1 - v2);

    document.getElementById('resultadoComparacion').textContent = 
        `El número mayor es ${mayor}, el menor es ${menor}, y su diferencia es ${diferencia}.`;
}
