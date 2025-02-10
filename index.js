
// disponibiliza o express para uso, algo parecido com o import 
const express = require("express");
//cria uma instância do express. Será a base da aplicação
const app = express();
const PORT = 3000;

app.use(express.json()); // Para interpretar JSON no body das requisições

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

// Rota para autenticação
app.post('/api/auth', (req, res) => {

    //req.body sempre vai ler os dados enviado pelo client
    //(tokens para autenticação ou qualquer dado enviado pelo usuário)
    const { token } = req.body;

    // Simulando a validação do token
    if (token === 'meu-token-seguro') {
        return res.json({ chave: 'chave-secreta-12345' });
    } else {
        return res.status(401).json({ error: 'Token inválido' });
    }
});

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
