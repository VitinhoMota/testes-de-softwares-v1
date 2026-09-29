import { describe, test, expect } from "vitest";
import { buscarUsuarioNoBanco, executarSistema } from "./ativ10.ts"; // ajuste o caminho do arquivo se necessário

describe("Testes do Fluxo Assíncrono com Vitest", () => { // Teste 1: Valida se a Promise resolve corretamente quando o ID existe
  test("Deve buscar um usuário com sucesso quando o ID existir", async () => {
    const usuario = await buscarUsuarioNoBanco(1) as any;
    
    expect(usuario).toBeDefined();
    expect(usuario.nome).toBe("João");
    expect(usuario.ativo).toBe(true);
  });

  test("Deve retornar erro quando o ID do usuário não for encontrado", async () => { // Teste 2: Valida se a Promise rejeita corretamente quando o ID não existe
    await expect(buscarUsuarioNoBanco(99)).rejects.toBe("Usuário não encontrado.");
  });
});
