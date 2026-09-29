console.log(`Hello, World!`);

export interface Usuario {
  id: number;
  nome: string;
  ativo: boolean;
}

export const bancoDeDados: Usuario[] = [ // Criação da estrutura de dados (Síncrono)
  { id: 1, nome: "João", ativo: true },
  { id: 2, nome: "Vitor", ativo: false },
  { id: 3, nome: "Emilly", ativo: true }
];

// \/ Esta função apenas define a Promise. Ela não roda os 2 segundos de espera ainda. \/
export function buscarUsuarioNoBanco(id: number): Promise<Usuario | string> { 
  return new Promise((resolve, reject) => { // Retorna uma promessa de que algo vai acontecer no futuro (resolve ou reject)
    setTimeout(() => { // O setTimeout joga essa função interna para a fila de espera
      const usuarioEncontrado = bancoDeDados.find(u => u.id === id);

      if (usuarioEncontrado) {
        resolve(usuarioEncontrado); // Se achou, resolve a Promise e envia o dado de volta (Sucesso)
      } 
      else { // Se não achou, rejeita a Promise e dispara o erro (Falha)
        reject("Usuário não encontrado."); 
      }
    }, 2000); // Aguarda exatamente 2 segundos em segundo plano
  });
}

export async function executarSistema() { // Declaração da função assíncrona principal
  console.log("Iniciando a busca do usuário..."); // Entra aqui logo após a chamada da função na linha 44 "executarSistema()"
    try { // O 'await' pausa a execução desta função e espera a Promise terminar, mas não trava o restante do código (não bloqueia a thread principal)
    const usuario = await buscarUsuarioNoBanco(1);
    console.log("Dados recebidos com sucesso!"); // Quando a Promise dá 'resolve' o fluxo volta aqui e exibe os dados.
    console.log("Usuário encontrado:", usuario);
  } catch (erro) {
    console.error("Erro na operação:", erro); // Se a Promise desse 'reject', o código pularia direto para cá
  }
  console.log("Finalizando a busca."); // Roda logo após o bloco do try/catch terminar (após os 2 segundos)
}

console.log("Código síncrono antes de chamar a função assíncrona"); // Roda imediatamente após o "Hello, World!"
executarSistema(); // Chamada da função assíncrona: Executa até achar o primeiro 'await'
console.log("Código síncrono DEPOIS de chamar a função assíncrona"); // Roda antes da busca terminar (assíncrono)
