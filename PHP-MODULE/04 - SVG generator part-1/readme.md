# SVG Generator

**GOAL :** Développer une webapp pour générer, à l'aide d'un formulaire, un SVG (voir un SVG animé

## Conception 

#### 1) Qu'est-ce qu'un SVG : 
- Comment on utilise un SVG (syntaxe) .
- Comment on dessine un rectangle / carré / ellipse / cercle ?
- Quelles propriétés on peut leur donner ?

-> Un POC (Proof Of Concept) dans un fichier HTML, on va construire un exemple de résultats attendu (voir poc.html)

#### 2) Analyser le code 

**-> Définir les entités, avec des propriétés et des méthodes**

```
class SVG {
    // Ce sera le Container
    width int
    height int
    list Array // va contenir soit un rectangle, un carré, une ellipse ou un cercle

    // methodes : 
    render() // génère le SVG avec les formes contenues dans "list"

    add(); // Permet d'ajouter une forme cercle
}
```

```
class Shape {
    Point Object
    fillColor string
    strokeColor string
    strokeWidth int
    opacity float
}
```

```
class Point {
    positionX int
    positionY int
}
```

```
class Rectangle extends Shape {
    width int
    height int

    constructor()
}
```

```
class Square extends Rectangle {
    // Containte : width = height

    constructor()  
}
```


```
class Ellipse extends Shape {
    rx int
    ry int

    constructor()
}
```

```
class Cercle extends Ellipse {
    // Containte : rx = ry  

    constructor() 
```

**Déroulé du programme**

1) Créer une instance de SVG
2) Pour ajouter une forme : 
    - Si un rectangle -> créer une instance de Rectangle, qu'on ira stocker dans list[] avec la méthode add()
    ... On fera la même chose pour les autres formes
3) On aura une méthode render() qui generera le SVG dans notre view
4) 4) Faire une première version en PHP

## Développer le back en PHP -> sur le serveur, PHP va nous permettre de générer un fichier de type mime SVG

## Développeur le front (formulaire) en html / css / js

## Optimisation du code 


