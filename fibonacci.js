function generarFibonacci(n){
if(n <= 0) return []
if (n === 1) return[0];

let secuencia= [0, 1];

for(let i=2; i < n; i ++){
    let siguienteNumero = secuencia[i - 1] + secuencia[i - 2];
    secuencia.push(siguienteNumero);
}
return secuencia;

}
console.log("RESULTADO FIBONACCI:", generarFibonacci(10));
console.log("Fibonacci con  n = 1:", generarFibonacci(1));
console.log("Fibonacci con  n = 2:", generarFibonacci(2));
console.log("Fibonacci con  n = 10:", generarFibonacci(10));