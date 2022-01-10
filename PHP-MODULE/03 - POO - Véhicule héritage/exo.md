# POO appliqué en php 

V2, à partir de ces classes, on va utiliser un véhicule 4x4

contraintes en plus :
- 2 boites de vitesse
- on ne peut avoir une boite en marche avant et l'autre en marche arriere
- si on veut eteindre le moteur, les 2 boites doivent être au point mort

But: 
    - révision ou se familiariser avec le jargon de la poo (instance, déclaration de class, propriétés, méthodes, portée, constructeur, héritage, encapsulation, ...)

## Pour l'exemple : le véhicule 
Il existe plusieurs types de véhicule (berline, suv, 4x4, fourgon ...)
On va proposer un modèle permettant d'utiliser une majorité de véhicules.


## Déroulé :

### 1) Rassembler les propriétés communes aux véhicules
- marque (string)
- modèle (string) ex: clio
- type (string) ex: berline
- couleur (string)
- puissance (int)
- carburant / motorisation (string)
- type de boite (bool) auto ou manuelle
- nb de rapports (int)

### 2) Définir des méthodes communes aux véhicules (tourner, avancer, reculer...)

#### Actions pour que le véhicule existe
- Renseigner les propriétés du véhicule (public, private et/ou protected)

#### Actions pour connaitre les propriétés du véhicule 
- Récupérer les propriétés du véhicule (construtor)

#### Actions pour utiliser le véhicule
- Démarrer le véhicule 
- Faire avancer le véhicule
- Faire freiner le véhicule 
- Faire reculer 
- Faire tourner 

### 3) Identifier des cas particuliers pour les propriétés et les méthodes

### 4) Mise en application en PHP (Syntaxe)

Construire en PHP les classes. Le but est de pouvoir créer une instance d'un véhicule et lui donner des ordres. 