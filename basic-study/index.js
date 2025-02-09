
// disponibiliza o express para uso, algo parecido com o import 
const express = require("express");
//cria uma instância do express. Será a base da aplicação
const app = express();
//cria uma rota do tipo get que envia ao cliente um objeto.
//seria algo equivalente a uma requisição get de api.
//ao acessar essa rota, o usuário recebe como resposta o objeto (ou qualquer outro dado que seja enviado);
app.get("/home", (request, response)=>{
  const obj = {
    name: 'teste',
    id: 0,
  }
  //método send: envia o body para o cliente, que seria a parte da resposta que contém os dados
  //visto que temos Headers e outras informações transportadas no http.
  response.send(obj)
});

//uma rota get que envia uma estrutura HTML para o cliente.
//ao acessar a rota, o cliente recebe essa página HTML redenrizada no navegador.
app.get("/", (request, response)=>{
  response.end(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <style>
          *{
          margin: 0; padding: 0; box-sizing: border-box;
          }
        </style>
      </head>
      <body>
        <h1 style="background-color: red";> Isso é um teste</h1>
      </body>
    </html>`
  )
})

app.listen(2000,()=>{
  console.log('rodando')
})