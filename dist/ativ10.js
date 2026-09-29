console.log(`Hello, World!`);
export const bancoDeDados = [
    { id: 1, nome: "João", ativo: true },
    { id: 2, nome: "Vitor", ativo: false },
    { id: 3, nome: "Emilly", ativo: true }
];
export function buscarUsuarioNoBanco(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const usuarioEncontrado = bancoDeDados.find(u => u.id === id);
            if (usuarioEncontrado) {
                resolve(usuarioEncontrado);
            }
            else {
                reject("Usuário não encontrado.");
            }
        }, 2000);
    });
}
export async function executarSistema() {
    console.log("Iniciando a busca do usuário...");
    try {
        const usuario = await buscarUsuarioNoBanco(1);
        console.log("Dados recebidos com sucesso!");
        console.log("Usuário encontrado:", usuario);
    }
    catch (erro) {
        console.error("Erro na operação:", erro);
    }
    console.log("Finalizando a busca.");
}
console.log("Código síncrono antes de chamar a função assíncrona");
executarSistema();
console.log("Código síncrono DEPOIS de chamar a função assíncrona");
//# sourceMappingURL=ativ10.js.map