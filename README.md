# ConsultaCep

Bem-vindo ao ConsultaCep! Antes de começar, siga as instruções abaixo para configurar o ambiente de desenvolvimento.

## Requisitos

Certifique-se de ter as seguintes versões do Node.js e npm instaladas:

- Node.js: v12.22.9 [Baixar Node.js](https://nodejs.org/en/download/)
- npm: v8.5.1 [Baixar npm](https://www.npmjs.com/package/npm/v/8.5.1)

## Instalação do Node.js com nvm

Se preferir usar o nvm (Node Version Manager) para gerenciar diferentes versões do Node.js, siga as instruções abaixo:

1. Baixe e instale o nvm usando o seguinte comando no terminal:

    ```bash
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
    ```

    ou com o wget:

    ```bash
    wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
    ```

2. Feche e reabra o terminal ou execute:

    ```bash
    source ~/.bashrc
    ```

    para recarregar as configurações do terminal.

3. Agora, você pode instalar e definir a versão do Node.js desejada com:

    ```bash
    nvm install 12.22.9
    nvm use 12.22.9
    ```

    Isso instalará a versão específica do Node.js e a definirá como padrão.

## Instalação

Após configurar o Node.js, siga as instruções abaixo para instalar as dependências do frontend e do backend do projeto ConsultaCep. Vá para os diretórios correspondentes e execute:

```bash
cd frontend
npm install

cd backend
npm install

## Executando o Projeto

Com as dependências instaladas, você pode executar o projeto. Certifique-se de estar no diretório apropriado (frontend ou backend) e execute o seguinte comando:

```bash
npm run serve para o frontend
npm run server para o backend
