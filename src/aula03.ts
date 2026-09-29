let peso: number = 41.23;
let altura = 150;
console.log(`Breno pesa ${peso} Kg e sua altura é de ${altura} cm.`);

if (altura % 2 === 0){
    console.log(`O número ${altura} é par.`);
}
else{
    console.log(`O número ${altura} é ímpar.`);
}

function somar (numero1: number, numero2: number): number {
    return numero1 + numero2;
}

function subtrair (numero1: number, numero2: number): number{
    return numero1 - numero2;
}

function multiplicar (numero1: number, numero2: number): number{
    return numero1 * numero2;
}

function dividir (numero1: number, numero2: number): number{
    return numero1 / numero2;
}

function modulo (numero1: number, numero2: number): number{
    return numero1 % numero2;
}

function exponenciacao (numero1: number, numero2: number): number{
    return numero1 ** numero2;
}

const somando = somar(1,2);
const subtraindo = subtrair(2,1);
const multiplicando = multiplicar(2,4);
const dividindo = dividir(10,5);
const mod = modulo(12,5);
const exp = exponenciacao(4,2);
const raizQuad = Math.sqrt(49);

console.log(`Resultado da soma: ${somando}`);
console.log(`Resultado da subtração: ${subtraindo}`);
console.log(`Resultado da multiplicação: ${multiplicando}`);
console.log(`Resultado da divisão: ${dividindo} | Resto: ${mod}`);
console.log(`Resultado da exponenciação: ${exp}`);
console.log(`Resultado da raiz quadrada: ${raizQuad}`);

let media: number;
media = 6.9;

console.log(`- Nota -`)
if (media < 7.0){
    console.log(`Sua média: ${media} | Resultado: R E P R O V A D O !`);
}
else{
    console.log(`Sua média: ${media} | Resultado: A P R O V A D O !`);
}

let contador: number = -10;

console.log(`- Contagem -`);
while(contador <= 10){
    //console.log(`Contagem: ${contador}`);
    process.stdout.write(`${contador} `);
    contador++;
}
