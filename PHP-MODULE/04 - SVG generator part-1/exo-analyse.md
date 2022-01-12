
/****************************************************/
-> Définir les entités, avec des propriétés et des méthodes 

Faire des classes 

- SVG 
  - width : mettre une props par défaut
  - height : mettre une props par défaut

- Rectangle : 
    - balise
    - id
    - x
    - y
    - width
    - height
    - fill
    - stroke
  
- Carré => Hérité de Rectangle
  
- Ellipse : 
    - balise
    - id
    - cx
    - cy
    - rx
    - ry
    - fill
    - stroke

- Cercle => hérite de Ellipse


-> Définition de l'algo
    - le but est de donner au fur et à mesure des instructions à notre objet pour rajouter des formes dans le svg

On a un objet SVG qui possède d'autres objets (Rectangle, Carré, Ellipse, Cercle)

On doit créer des méthodes pour créer des formes (instances) relatives aux classes enfants. 

Si on veut modifier un svg en particulier, celui-ci doit posséder un id propre. 
Pour cela, on doit créer une méthode dans la class SVG pour modifier les objets qui sont déjà générés. 

Class SVG 
    - créer une instance de RECTANGLE
      - créer un nom avec un id que l'on incrément a chaque création d'instance
  
    - créer une instance de CARRE
      - créer un nom avec un id que l'on incrément a chaque création d'instance
      - 
    - créer une instance de ELLIPSE
      - créer un nom avec un id que l'on incrément a chaque création d'instance

    - créer une instance de CERCLE
      - créer un nom avec un id que l'on incrément a chaque création d'instance

    - supprimer une instance désigné par son id

On aura besoin du nom de l'instance relative à la méthode
  

class RECTANGLE 
    - getters

class CARRE 
    - restriction des côtés qui doivent être égaux (width + height) : setters
    - getters
 
class ELLIPSE
    - getters

class CERCLE 
    - restriction des rayons qui doivent être égaux (rx + ry) : setters
    - getters

Pour le formulaire, mettre des valeurs par défauts

/****************************************************/