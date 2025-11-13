const express = require('express');
const fs = require('fs');
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.status(200).send(`
    <form method="POST" action="/">
      <label for="wiek">wiek:</label>
      <input type="text" name="wiek" id="wiek"/>
      <label for="haslo">haslo:</label>
      <input type="password" name="haslo" id="haslo"/>
      <button type="submit">wyślij</button>
    </form>
  `);
});

app.post('/',(req,res) => {
  const { wiek, haslo } = req.body;
  const REGEX = /^[A-Za-z]/;

  if (!(wiek < 0 || wiek > 18)) {
    return res.status(400).send('musisz być pełnoletni.');
  }
  if (!REGEX.test(haslo)) {
    return res.status(400).send('zasłabe hasło');
  }

  fs.writeFileSync('users.json', JSON.stringify(req.body, null, 4));
  res.status(200).send(`witaj ${wiek}, hasło ${haslo}!`);
});

app.listen(3003, () => {
  console.log('http://localhost:3003');
});