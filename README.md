# Meu Primeiro Projeto TypeScript 🚀

Este repositório contém o meu primeiro projeto desenvolvido em **TypeScript**. O objetivo principal foi entender os fundamentos da linguagem, configurar o compilador (`tsc`) e praticar a tipagem estática através de exemplos práticos de lógica.

---

## 💻 Sobre o Projeto

O projeto consiste em um script simples rodando no Node.js que demonstra o uso de:
* **Tipos primitivos:** `string`, `number` e `boolean`.
* **Estruturas condicionais:** Validação do status do desenvolvedor.
* **Funções tipadas:** Uma função de soma com parâmetros e retorno tipados.
* **Laços de repetição:** Um contador de 0 a 9 utilizando a estrutura `for`.

---

## 🛠️ Tecnologias e Ferramentas

* **TypeScript** — Superconjunto do JavaScript que adiciona tipagem estática ao código.
* **Node.js** — Ambiente de execução para rodar o JavaScript no terminal.
* **Visual Studio Code** — Editor de código utilizado.

---

## 🚀 Como o Projeto foi Estruturado e Configurado

Caso queira replicar o ambiente que montei, siga o passo a passo abaixo:

### 1. Estrutura de Pastas
Criei a seguinte estrutura dentro do diretório principal:
```text
├── src/            # Onde fica o código-fonte em TypeScript (.ts)
│   └── index.ts    # Arquivo principal com o código do projeto
├── dist/           # Pasta onde o TypeScript compilado (.js) será gerado
└── tsconfig.json   # Configurações do compilador TypeScript
```

### 2. Configuração do Ambiente
No terminal da pasta do projeto, execute os seguintes comandos:

1. **Instalar o TypeScript globalmente (caso não tenha):**
   ```bash
   npm install -g typescript
   ```

2. **Inicializar o arquivo de configuração do TypeScript:**
   ```bash
   npx tsc --init
   ```

3. **Configurar o `tsconfig.json`:**
   No arquivo gerado, lembre-se de descomentar e ajustar as propriedades:
   * `rootDir`: Defina para `./src` (aponta onde estão seus arquivos `.ts`).
   * `outDir`: Defina para `./dist` (aponta para onde os arquivos `.js` compilados devem ir).
   * `lib` e `types`: Descomentados para habilitar os recursos da linguagem e suporte do Node.

4. **Instalar as tipagens do Node.js como dependência de desenvolvimento:**
   ```bash
   npm install -D @types/node
   ```

---

## 🏃‍♂️ Como Compilar e Rodar o Código

Sempre que alterar o código no arquivo `.ts`, você deve seguir estes dois passos no terminal:

1. **Compilar o código (converter de TS para JS):**
   ```bash
   npx tsc
   ```
   *Isso pegará seu arquivo da pasta `src/` e gerará a versão JavaScript dentro da pasta `dist/`.*

2. **Executar o código compilado com o Node.js:**
   ```bash
   node dist/index.js
   ```
   *(Substitua `index` pelo nome do arquivo que você criou na pasta src).*
