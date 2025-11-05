# Opis ogólny
Mini-CMS to aplikacją webową która pozwala na: 

- wypisywanie wszystkich tytułów artykułów które po kliknięciu przekierwują do strony z treścią artykułu

- oraz dodawaniu nowy artykułów przy pomocy formularza które są zapisywane do pliku JSON.

# Schemat zależności
klient(przeglądarka) > express server (__src/server.js__ __src/app.js__) > routes (__src/routes/articles.js__) > countroller (__src/controllers/articlesController.js__) > services (__src/services/articleService.js__) > models (__src/models/articles.js__) > views (__src/views__) > public (__public/css/main.css__)
# Główne moduły aplikacji
### `src/server.js`
- **Rola**: Punkt wejścia aplikacji; uruchamia serwer HTTP.
- **Funkcje / co robi**:
  - importuje `app` z `src/app.js`,
  - ustawia port i nasłuchuje,
  - loguje informacje o uruchomieniu.


### `src/app.js`
- **Rola**: Konfiguracja Express (widoków, middleware, statycznych zasobów) i rejestracja routerów.
- **Funkcje / co robi**:
  - `app.set('view engine', 'ejs')`
  - `app.set('views', path.join(__dirname, 'views'))`
  - `app.use(express.urlencoded({ extended: true }))`
  - `app.use(express.static(path.join(__dirname,'..','public')))`
  - Rejestruje router artykułów.

### `src/routes/articles.js`
- **Rola**: Definiuje endpointy HTTP związane z artykułami.
- **funkcje**:
  - `router.get('/', controllers.index);` → lista artykułów
  - `router.get('/articles/new', controllers.newForm);` → formularz dodawania
  - `router.post('/articles', controllers.create);` → tworzenie artykułu
  - `router.get('/articles/:slug', controllers.show);` → podgląd artykułu
- **eksportuje**: `module.exports = router;`

### `src/controllers/articlesController.js`
- **Rola**: Logika obsługi żądań — pobiera dane ze `service`, renderuje widoki.
- **Funkcje**:
  - `index()` — lista artykułów.
  - `show()` — podgląd pojedynczego artykułu.
  - `newForm()` — formularz dodania.
  - `create()` — walidacja + zapis nowego artykułu.
- **eksportuje**: `module.exports = { index, show, create, newForm };`

### `src/services/articleService.js`
- **Rola**: Warstwa biznesowa — operacje wyższego poziomu na artykułach.
- **Funkcje**:
  - `getAllArticles()` - zwraca liste artykułów.
  - `getArticlesBySlug(slug)` - zwraca artykuł o danym slug.
  - `createArticle(data)` — generuje id, slug, datę i zapisuje w JSON.
- **eksportuje**: `module.exports = {getAllArticles, getArticlesBySlug, createArticle };`

### `src/models/storage.js`
- **Rola**: Abstrakcja nad plikiem `data/articles.json`.
- **Funkcje**:
  - `readArticles()` — odczyt JSON.
  - `writeArticles()` — zapis JSON.
- **eksportuje**: `module.exports = { readArticles, writeArticles };`

# Opis widoków
### `views/articles/list.ejs`
- **Dane**: `Title`, `articles`.
- **Opis**: widok na którym wyświetlane są tytuły wszystkich artykułów umieszczonych w pliku JSON.
### `views/articles/show.ejs`
- **Dane**: `Title`, `articles`.
- **Opis**:  podgląd pojedyńczego artykułu.
### `views/articles/new.ejs`
- **Dane**: `Title`, `errors`, `values`.
- **Opis**: formularz do dodania nowego artykułu.
### `views/articles/error.ejs`
- **Dane**: `Title`, `errors`, `values`.
- **Opis**: gdy podane dane w widoku new są nie poprawne wyświetla sie formularz jeszcze raz wzbogacony o dopisek jakie błedy zostały popełnione przy wypełniania formularza.
### `views/partials/header.ejs` i `footer.ejs`
- **Opis**: wspólne elementy układu strony (nagłówek, stopka).