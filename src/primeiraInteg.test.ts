import { test, expect, beforeAll } from "vitest";

const loja = `https://serverest.dev`;
let token: string;

beforeAll(async () => {
    const email = `conta${Date.now()}@teste.com`;
    const senha = `test123`;
    
    const cadastro = await fetch(`${loja}/usuarios`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            nome: "Teste Admin",
            email: email,
            password: senha,
            administrador: "true",
        }),
    });
    expect(cadastro.status).toBe(201);

    const login = await fetch(`${loja}/login`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ email: email, password: senha }),
    });
    expect(login.status).toBe(200);

    const dadosLogin = (await login.json()) as { authorization: string };
    token = dadosLogin.authorization;
});

test("Deve adicionar 3 produtos no carrinho (reduzir estoque) e, ao cancelar, retornar o estoque para 10", async () => {
    const produto = await fetch(`${loja}/produtos`, {     // Cria um produto com estoque 10
        method: "POST",
        headers: {"Content-Type": "application/json", Authorization: token},
        body: JSON.stringify({
            nome: `Produto Teste A ${Date.now()}`,
            preco: 100,
            descricao: "Produto de teste",
            quantidade: 10,
        }),
    });
    expect(produto.status).toBe(201);
    const { _id: idProduto } = (await produto.json()) as { _id: string };

    const carrinho = await fetch(`${loja}/carrinhos`, { // Adiciona 3 unidades no carrinho
        method: "POST",
        headers: {"Content-Type": "application/json", Authorization: token},
        body: JSON.stringify({
            produtos: [{ idProduto: idProduto, quantidade: 3 }],
        }),
    });
    expect(carrinho.status).toBe(201);

    const consultaAposAdicionar = await fetch(`${loja}/produtos/${idProduto}`); // Conferência final
    const dadosAposAdicionar = (await consultaAposAdicionar.json()) as { quantidade: number };
    expect(dadosAposAdicionar.quantidade).toBe(7); // Estoque correto (10 - 3 = 7)

    const cancelamento = await fetch(`${loja}/carrinhos/cancelar-compra`, { // Cancelar a compra para tirar o produto do carrinho
        method: "DELETE",
        headers: { Authorization: token },
    });
    expect(cancelamento.status).toBe(200);

    const consultaAposCancelar = await fetch(`${loja}/produtos/${idProduto}`); // Verificar se o estoque voltou a ser 10
    const dadosAposCancelar = (await consultaAposCancelar.json()) as { quantidade: number };
    expect(dadosAposCancelar.quantidade).toBe(10);
}, 20000);


// \/ Tenta apagar da loja um produto que está dentro de um carrinho (Deve recusar) \/
test("Deve recusar a exclusão de um produto que está retido dentro de um carrinho ativo", async () => {
    const produto = await fetch(`${loja}/produtos`, {     // Cria um novo produto
        method: "POST",
        headers: {"Content-Type": "application/json", Authorization: token},
        body: JSON.stringify({
            nome: `Produto Teste B ${Date.now()}`,
            preco: 50,
            descricao: "Produto impagável",
            quantidade: 5,
        }),
    });
    expect(produto.status).toBe(201);
    const { _id: idProduto } = (await produto.json()) as { _id: string };
  
    const carrinho = await fetch(`${loja}/carrinhos`, { // Coloca o produto no carrinho
        method: "POST",
        headers: {"Content-Type": "application/json", Authorization: token},
        body: JSON.stringify({
            produtos: [{ idProduto: idProduto, quantidade: 4 }],
        }),
    });
    expect(carrinho.status).toBe(201);
  
    const tentandoDeletar = await fetch(`${loja}/produtos/${idProduto}`, {// Tenta deletar o produto da loja
        method: "DELETE",
        headers: { Authorization: token },
    });
    expect(tentandoDeletar.status).toBe(400); 
}, 20000);
