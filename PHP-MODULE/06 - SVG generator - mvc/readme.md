# SVG generator

Le but : 

développer une webapp pour générer, à l'aide d'un formulaire un SVG (voir un SVG animé)


## conception

### qu'est ce qu'un SVG :
- comment on utilise un SVG (syntaxe) ?
- comment on dessine un rectangle / carré / ellipse / cercle ?
- quelles propriétés on peut leurs donner ?
 
-> un POC (proof of concept) dans un fichier HTML, on va construire un exemple de résultat attendu voir poc.html

### analyser le code 

-> définir les objects, avec des propriétés et des méthodes

-> définition de l'algo :

    - le but c'est de donner au fur et à mesure des instructions à notre object pour rajouter des formes dans l'SVG.
    
    
// définition des classes :

Svg :

    width int
    height int 
    list array //soit un rectangle, un carré, une ellipse ou un cercle 
    
    méthodes :
    
    add //ajouter une forme dans list
    
    render //générer le svg avec les formes contenu dans list
    
Shape :

    point Point
    fillColor string
    strikeColor string
    strokeWidth int
    opacity float
    
Point : 
    positionX int
    positionY int 
    
Rectangle : étendre Shape
    
    width int
    height int
    
    méthodes :
    
    constructeur
    
Square : étendre Rectangle

    contrainte : width = height
    
    méthodes :
    
    constructeur
    
Ellipse : étendre Shape

    rx int
    ry int
    
    méthodes :
    
    constructeur
    
Circle : étendre Ellipse

    contrainte : rx = ry 
    
    méthodes :
    
    constructeur 
    
    
déroulé du programme :

- créer une instance de Svg
- pour ajouter une forme :
    si un rectangle -> créer une instance de rectangle, qu'on ira stocker dans list avec la méthode add

    ... on fera la même chose pour les autres formes
- une methode render qui generera le SVG dans notre view

 >> Faire une première version en PHP   

## développer le back en php -> sur le serveur php va nous permettre de générer un fichier de type mime SVG 


## développer le front (formulaire) html / css / js

index.php

première version

-> compléter index.php pour avoir un formulaire :

    - un bloc de champs globaux pour le svg
    - un bloc de champs pour dessiner un rectangle
    - la même chose pour les 3 autres formes
    
    à la validation du formulaire, vous allez transmettre en _POST les données à svg.php
    
    compléter svg.php, afin de :
    - récupérer les données $_POST
    - générer le svg demandé
    
seconde version

//compléter svg.php avec les tests manquants //OK

//rajouter du js pour envoyer le formulaire via une promesse
//en retour on recevra le contenu de l'SVG qu'on affichera dans le DOM

    - écouter le submit du formulaire
    - récupérer les données
    - lancer un fetch sur svg.php
    - en retour le svg sera placé dans le DOM directement #preview


    
## optimisation de l'application 