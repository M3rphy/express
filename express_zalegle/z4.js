const express = require('express');
const fs = require('fs');
const { tytul } = require('process');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).send(`
        <br><a href="/add">Dodaj</a>
        <br><a href="/Wypisz">Wypisz</a>
    `);
});
app.get('/add', (req, res) => {
    res.status(200).send(`
      <form method="POST" action="/add">
                <label for="tytul">tytul:</label>
                <input type="text" name="tytul" id="tytul" />
                <label for="wiadomosc">wiadomosc:</label>
                <input type="text" name="wiadomosc" id="wiadomosc" />
                <button type="submit">Submit</button>
    </form>
    `);
});


app.post('/add', (req, res) => {
    const data = JSON.parse(fs.readFileSync('cms.json', 'utf-8'));
    data.push({...req.body });
    fs.writeFileSync('cms.json', JSON.stringify(data, null, 4));
    res.status(200).send(`
        <br><a href="/">powrót</a>
    `);
});
app.get('/Wypisz', (req, res) => {
    const data = JSON.parse(fs.readFileSync('cms.json', 'utf-8'));
    res.status(200).send(`
        <ul>
            ${data.map(item => `<li><a href="/Wypisz/${item.tytul}">${item.tytul}</a></li>`).join('')}
        </ul>
        
        `);
});
app.get('/Wypisz/:tytul', (req, res) => {
  const { tytul } = req.params;
  const data = JSON.parse(fs.readFileSync('cms.json', 'utf-8'));
  const item = data.find(i => i.tytul === tytul);
  if (item) {
    res.status(200).send(`
        <h1>tytul ${item.tytul}</h1>
        <p>wiadomość ${item.wiadomosc}</p>
        <br><a href="/wypisz">Go Back</a>`);
  } else {
    res.status(404).send('Not Found');
  }
});
//http://localhost:3004/Wypisz/1

app.listen(3004, () => {
    console.log('http://localhost:3004');
});