# Buscador de Feriados no Brasil

Este é um projeto de um buscador de feriados no Brasil. Ele permite que o usuário selecione um ano e um estado para listar todos os feriados correspondentes.

## ✨ Features

-   Busca de feriados por ano e estado.
-   Listagem de feriados com informações detalhadas (data, nome, tipo e nível).
-   Filtro de feriados por nível (Nacional, Estadual, etc.).
-   Interface moderna e responsiva.

## 🚀 Tecnologias Utilizadas

-   **React**: Biblioteca para construção da interface de usuário.
-   **Vite**: Ferramenta de build para desenvolvimento web moderno.
-   **TypeScript**: Superset de JavaScript que adiciona tipagem estática.
-   **Tailwind CSS**: Framework de CSS para estilização rápida e customizável.
-   **Lucide Icons**: Biblioteca de ícones SVG.

## 🔌 API

Os dados dos feriados são consumidos da API pública da [Invertexto](https://www.invertexto.com).

A URL base da API é: `https://api.invertexto.com/v1/holidays/`

## ⚙️ Como Executar o Projeto

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/seu-usuario/feriados-brasil.git
    ```

2.  **Instale as dependências:**
    Use `pnpm` para instalar as dependências do projeto.
    ```bash
    pnpm install
    ```

3.  **Configure as variáveis de ambiente:**
    Renomeie o arquivo `.env.example` para `.env` e adicione o seu token da API da Invertexto.
    ```
    VITE_API_TOKEN=SEU_TOKEN_AQUI
    ```

4.  **Execute o projeto:**
    ```bash
    pnpm dev
    ```

    O projeto estará disponível em `http://localhost:5173`.

# 🚀 Deploy

O projeto foi publicado na Vercel.App



## 👨‍💻 Desenvolvedor

-   **Nome**: Pedro Sawczuk
-   **GitHub**: [GitHub](https://github.com/PedroSawczuk)