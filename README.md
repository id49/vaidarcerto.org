# VaiDarCerto.org

O projeto foi construído utilizando uma stack baseada em Javascript, com Gatsby + ReactJS e armazenando os dados no Firebase Firestore. A hospedagem dos assets estáticos e cloud-functions também ficaram no Firebase Hosting + Functions.

## Configuração inicial

Para rodar o projeto localmente, é necessário criar alguns arquivos de configuração para a ligação com o Firebase, bem como criar algumas estrutuas iniciais no Firestore. Recomendamos criar um novo projeto no Firebase para testes.

## Configurações Públicas do Firebase:

Para gerar este json de configuração, entre no painel do projeto de testes criado no Firebase e crie um novo aplicativo web. Dentro das informações do projeto há uma seção `Firebase SDK Snippet`, selecione `Configuração`. Copie somente o objeto e salve como `firebase-public.json` na raiz do projeto. Este arquivo é público, mas ele deve apontar para o mesmo projeto de testes para evitar incosistências.

Exemplo:

```
{
  "apiKey": "<API_KEY>",
  "authDomain": "<AUTH_DOMAIN>",
  "databaseURL": "<DATABASE_URL>",
  "projectId": "<PROJECT_ID>",
  "storageBucket": "<STORAGE_BUCKET>",
  "messagingSenderId": "<MSG_SENDER_ID>",
  "appId": "<APP_ID>",
  "measurementId": "<MEASURE_ID>"
}
```

## Configurações Privadas do Firebase:

Configuramos a fonte de dados para o gatsby (por meio do plugin `gatsby-source-firestore`) com chaves de serviço. Estas chaves dão acesso irrestrito ao Firestore. E por este motivo elas não são publicáveis no repositório.

Para gerá-las, nas configurações de projeto, selecione a aba `Contas de Serviço`. Você terá que gerar uma nova chave. Um JSON será gerado e baixado. Salve-o na raíz do projeto com o nome `firebase-private.json`.

# Executando o projeto

Para iniciar o desenvolvimento do projeto, basta executar:

```
gatsby develop
```

Caso você não tenha o gatsby-cli instalado, instale-o por meio da instrução:

```
npm install -g gatsby-cli
```