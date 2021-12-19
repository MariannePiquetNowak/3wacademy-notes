### APIs
On peut utiliser `fetch`, qui est une fonction native de Javascript 

```
fetch('https://www.swapi.tech/api/people/1')
    .then((response) => {
        response.json() // On parse notre réponse en json
    })
    .then(response => {
        console.log(response.data)
    })
```

ou utiliser la librairie `axios`, qui parse automatiquement notre réponse en json

```
axios
    .get('https://www.swapi.tech/api/people/1')
    .then(response => {
        console.log(response.data)
    })
```