const express = require('express'); // On stoicke le module 
const axios = require('axios');
// CONSTANTE
const API_KEY = "3ea5766dc26262f87c15ff04d09d08df";
const IMG_URL = 'https://image.tmdb.org/t/p/w500';

// Middlewares
const app = express(); // Nomenclature

const PORT = process.env.PORT || 3000; // Soit on écoute sur le PORT 3000, soit sur un port paramétrer dans un .env par exemple ou Heroku

// Utilisation des styles
app.use(express.static(__dirname + '/public'));

// Moteur de rendu 
app.set('views', './views'); 
/* 
On lui spécidfie que nos fichier de vues se trouve à la racine, dans le front, on va chercher tel fichier d'affichage (ici : ./views) 
*/
app.set('view engine', 'ejs'); // EJS: Moteur de rendu

/*
Fonction anonyme middleware
- get -> requête HTTP
- "/" -> route sur laquelle ma fonction middleware s'executera
- req -> request, ce que je reçois du front 
- res -> response, ce que je renvoi/répond au front 
- next -> si spécifié dans notre bloc de code, on enchaine sur la fonction middleware suivante
*/
// Affiche toutes la liste des films
app.get('/', (req, res, next) => {
    axios
        .get(`https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}&language=fr-FR`)
        .then(response  => {
            // console.log(response.data)
            // Le nom du fichier sera home
            res.render("home", {datas: response.data.results, img_url: IMG_URL}) 
        })
        .catch(err => console.log(err))
}) 

// Affiche un film en particulier
app.get('/movie/:id', (req, res, next) => {
    // console.log('Req :', req) // je récup bien ma requete
    // console.log(req.params) // Exemple: quand on est sur la /movie/5 -> cela renvoi {id: "5"}
    const id = req.params.id

    axios
        .get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=fr-FR`)
        .then(response => {
            // console.log(response.data)
            // res.send("Hello Movie")
            res.render(`movie/id`, {
                datas: response.data, 
                img_url: IMG_URL 
            })
        })
        .catch(err => console.log(err))
})

app.get('/coming-soon/', async (req, res, next) => {

    const pageUrl = 1;

    await axios
        .get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=fr-FR&page=${pageUrl}`)
        .then(response => {

            res.render(`coming-soon`, {
                datas: response.data, 
                img_url: IMG_URL,
                next: pageUrl + 1,
                before: pageUrl - 1
            })
        })
        .catch(err => console.log(err))
})


// Prochaines sorties accueil
// middleware de pagination
app.get('/coming-soon/:page', async (req, res, next) => {
    console.log(req.params) // Exemple: quand on est sur la /coming-soon/2 -> cela renvoi {page: "2"}
    const pageUrl = parseInt(req.params.page);
    // console.log(typeof pageUrl) // renvoi string

    await axios
        .get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=fr-FR&page=${pageUrl}`)
        .then(response => {
            // console.log("liste films",response.data)
            // const pageIndex = response.data.page
            const limit = response.data.total_pages;
       
            res.render(`coming-soon/page`, {
                datas: response.data, 
                img_url: IMG_URL,
                next: pageUrl + 1,
                before: pageUrl - 1

            })
        })
        .catch(err => console.log(err))
});

// RANDOM
/*
La problématique auquel j'ai été confronté était qu'il était compliqué d'accéder à tous les films existants dans le monde 
Après réflexion, je me suis décidée à partir sur les films les plus populaires 
Là encore, 2ème problématique. Malgré que l'api affiche un résultat de pages à hauteur de 31615, il m'a été impossible d'accéder à
plus de 500 pages => "https://api.themoviedb.org/3/movie/popular?api_key=3ea5766dc26262f87c15ff04d09d08df&language=en-US&page=500"
Je vais donc tirer un résultat au hasard dans ce nombre. 

Pour celà, je vais devoir passer en paramètre un nombre de page au hasard sur une limite de 500 pages. 
Et dans cette page, je n'ai plus qu'a tirer un objet au hasard. 
*/

// Renvoi un film au hasard
app.get('/random', async (req, res, next) => {
    const begin = 1 // On commence à la page 1
    const limit = 500; // la limite est la page 500
    const randomPage = Math.floor(Math.random() * (limit - begin + 1)) + begin;

    await axios
        .get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${randomPage}`)
        .then(response => {
            // console.log(randomPage)
            const datas = response.data;
            // console.log(datas.page) // Nous renvoi un nombre de page random entre 1 et 500;
            // Maintenant, on titre un résultat au hasard dans cette liste de films 
            const results = datas.results;
            // On tire un résultat au hasard sur la longueur du tableau results
            const randomItem = Math.floor(Math.random() * results.length);   

            res.render("random", {
                titre: results[randomItem].title,
                img: IMG_URL, 
                description: results[randomItem].overview,
                note: results[randomItem].vote_average, 
                poster: results[randomItem].poster_path,
            })

        })
      
        .catch(err => console.log(err))
    
})

// SEARCHBAR 
/* 
TMDB délivre une url pour chercher les films. il suffit d'ajouter le paramètre "query" dans l'url 
Pour les noms de films en plusieurs mots, il faudra ajouter un "+"entre chaque mots

*/


// Ecoute du serveur sur le port 3000
app.listen(PORT, () => {
    console.log("Le serveur écoute sur le port", PORT);
});

console.log('server start')