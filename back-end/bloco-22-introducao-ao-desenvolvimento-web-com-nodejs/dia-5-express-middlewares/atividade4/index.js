const express = require('express');

const app = express();

const posts = [
    // { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
    // { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
    // { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
  ];

  app.get('/posts',errorMiddleware, function (_req, res) {
     res.json(posts);
     console.log(posts);
    });

app.get('/posts/:id', function (req, res, next) {
  const { id } = req.params;
  const post = posts.find((p) => p.id === parseInt(id));

  if(!post) return res.status(404).json({message: "post not found"});

  res.status(200).json({posts});
});

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
}); 


function errorMiddleware(_err, _req, res, next) {
  res.status(404).json({message: "Opss, route not found!"});
  next();
}

// Faça um middleware de erro. Caso tenha sido requisitada uma rota inexistente deve ser retornado o código de status e um JSON , ex: status 404 e { "message": "Opsss, route not found!" }