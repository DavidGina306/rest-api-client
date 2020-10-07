# main-rest-api

Aplicação cliente para consumo de api Rest(Processo avaliativo).

## Requisitos 

- Node.js: 10^
- NPM: última versão estavel


## Configuração do projeto
Execute o comando abaixo para instalar as dependencias do projeto.
```
npm install
```

### Executar o projeto em modo de desenvolvimento
```
npm run serve
```

### Compilar e gerar build do projeto

Altere a variável HOST_API no arquivo `env.json` na raiz do projeto para apontar para o host funcional.

Execute o camando abaixo:
```
npm run build
```
Este comando vai gerar uma pasta`dist` na raiz do projeto com os arquivos compilados para produção,\
copie esta página para o web server(apache, nginx, tomcat).
