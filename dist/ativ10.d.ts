export interface Usuario {
    id: number;
    nome: string;
    ativo: boolean;
}
export declare const bancoDeDados: Usuario[];
export declare function buscarUsuarioNoBanco(id: number): Promise<Usuario | string>;
export declare function executarSistema(): Promise<void>;
//# sourceMappingURL=ativ10.d.ts.map