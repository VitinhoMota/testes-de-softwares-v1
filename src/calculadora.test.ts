import {describe, it, expect} from "vitest"; // importando as funções do vitest que serão usadas
import {divisao, multiplicacao, soma, subtracao} from "./calculadora.ts"; // importando as funções do arquivo calculadora que serão usadas

describe (`Calculadora`, () => { // descrição do teste
    it(`deve somar dois números`, () => { // "isso deve somar 2 números"
        const resultado = soma(2,4);
        expect(resultado).toBe(6); // "eu espero que o resultado seja..."

    })
    it(`deve subtrair dois números`, () => {
        const resultado = subtracao(10,5);
        expect(resultado).toBe(5);
    })
    it(`deve multiplicar dois números`, () => {
        const resutlado = multiplicacao(4,2);
        expect(resutlado).toBe(8);
    })
    it(`deve dividir dois números`, () => {
        const resultado = divisao(20,10);
        expect(resultado).toBe(2);
    })
});