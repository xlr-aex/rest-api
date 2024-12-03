const express = require('express');
const app = express();
const port = 3000;

let articles = [
  { id: 1, title: 'Article 1', body: 'Contenu du premier article' },
  { id: 2, title: 'Article 2', body: 'Contenu du deuxième article' },
  { id: 3, title: 'Article 3', body: 'Contenu du troisième article' },
];

app.get('/articles', (req, res) => {
  res.json(articles);
});

app.post('/articles', (req, res) => {
  const title = req.query.title;
  const body = req.query.body;

  if (!title || !body) {
    return res.status(400).json({ error: 'Le titre et le contenu sont requis' });
  }

  const newArticle = {
    id: articles.length + 1,
    title: title,
    body: body,
  };
  
  articles.push(newArticle);

  res.status(201).json(newArticle);
});

app.listen(port, () => {
  console.log(`Serveur démarré sur http://localhost:${port}`);
});
