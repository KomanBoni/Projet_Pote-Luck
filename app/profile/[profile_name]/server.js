const express = require('express');
const app = express();
const PORT = 3000;
const users = require('./users.json'); 

app.get('/profile/:name', (req, res) => {
  const searchName = req.params.name.toLowerCase();

  const user = users.find((u) => u.name.toLowerCase() === searchName);

  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ error: 'Utilisateur non trouvé' });
  }
});

app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});
