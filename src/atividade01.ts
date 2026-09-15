let nome: string = "João Vitor";
let idade: number = 25;
let devAtivo: boolean = true;

if (devAtivo === true){
    console.log(`Olá, meu nome é ${nome}, tenho ${idade} anos e estou aprendendo typescript.`);
}
else {
    console.log("Alguem passou por aqui...");
}

function somar(numero1: number, numero2: number): number {
    return numero1 + numero2;
}

const resultadoSoma = somar(40, 60);

console.log(`Resultado da soma: ${resultadoSoma}`);

console.log("Testando o contador");
console.log("Início da cotagem");
for (let i = 0; i < 10; i++){
    console.log(i);
};
console.log("Fim da contagem");
