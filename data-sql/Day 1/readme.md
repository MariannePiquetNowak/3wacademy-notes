# Premier jour 

### Un peu d'histoire
SQL est un langage créé par IBM en 1974 (4 ans après la création de l'internet !)
Le langage a été normalizé en 1987 et il sert à exploiter des bases de données en réalisant des tables et des requeêtes pour aller cehrcher des données dans ces dernières.
Grâce à ce langage, les créateurs de sites web ont pu réaliser les premiers sites dynamiques. 
Au lieu d'utiliser le HTML pour pour un e-commerce qui possèderait 1000 produits différents, on décide de stocker ces produits à part (dans des db) pour que ce soit plus gérable (car si tous les produits ont une promo de 20%, cel devient plus simple que de modifier articles par articles)
SQL est donc un Systeme de Gestion de Bases de données. 

**DDL** => *Data Définition Language* : Créer, modifier, supprimer des tables, renommer (Alter, Drop, Rename)
**DQL** => *Data Query Language* : aller chercher les données dans une table pour les afficher (Select)
**DML** => *Data Manipulation Language* : insérer, modifier, supprimer des données (Insert, Update, Delete)
**DCL** => *Data Control Language* : autorisation à l'utilisateur, lui donner des droits (Grant, Revoke, Commit etc)

Il faut voir une table comme une grosse armoire, qui possèdes des fiches (les données), ces données possèdent des enregistrement. 
Les avantages de MySQL est qu'on le retrouve sur toutes les plateformes. Il a aussi de bonnes performances concernant la lecture des données. 
Mais il n'a pas bonne réputation concernant les énormes base de données. 
Chaque table à des champs (colonne) avec des valeurs. Chaque colonnes va avoir un type différent (integer, float, string, datetime etc).

### Encodage
Pour l'encodage, on va utiliser **utf8mb4_unicode_ci** de façon a pouvoir trier (les majuscules des minuscules par ex) ou d'obtenir un maximum de caractères (comme les émojis)

# Moteur de stockage
- Sélectionner une table > Opérations > moteur de stockage 
**InnoDB** est le moteur que l'on utilise aujourd'hui pour gérer tout ce qui est contraintes (relation) et utilise un systeme de clé primaire, clé étrangère 
**MEMORY** est un moteur qui permet de ne pas stocker en mémoire, mais en mémoire vive pour les système de cache. C'est extrèmement rapide mais très volatile, pour faire des tests comme des tests unitaires, c'est très utile.

### Les clés
Une clé primaire est la donnée qui va nous permettre d'identifier un enregistrement. C'est un identifiant unique. 
C'est ce que l'on appelle la **Primary Key**.

Une clé étrangère fait référence à une clé primaire d'une autre table.
C'ets ce que l'on appelle la **Foreign Key**.

Une clé primaire ne doit pas être NULL, doit être UNIQUE. 
Dans PhpMyAdmin, lors de la création d'une table, la colonne A.I est Auto_Increment, ce qui permet que si le type de la clé primaire est INT, il auto incrémente (pratique).
La clé étrangère d'une table devra avoir les même spécificités que la clé primaire de la table reliée (vu que c'est la même clé)

### Commandes utiles
`mysql -u username -p` : -u pour le nom de l'utilisateur, -p pour rentrer le mot de passe après avoir valider

`show databases;` : Liste les bases de données stockées en local

`use nom_db;` : sélectionne une base de données spécifique

`show tables;` : affiche les tables de cette base de données

`mysql -u username -p nom_db` : permet de se connecter directement sur une base de données

`exit` : arrête la connexion à mysql 

`CREATE DATABASE IF NOT EXISTS db_name;` : créer une database si elle n'existe pas 

`DROP DATABASE db_name` : Supprime la database

`TRUNCATE TABLE table_name` : Vide une table de la database

`ALTER TABLE table_name MODIFY colonne_name VARCHAR(40);` : changer la propriété d'un champ dans la table
**/!\ se mettre d'abord dans la base de donnée**

`ALTER TABLE pilots RENAME COLUMN colonne_name TO new_column_name;` : renommer la colonne

`RENAME TABLE table_name TO new_table_name` : renomme la table

`ALTER DATABASE db_aviation CHARACTER SET utf8 COLLATE utf8_unicode_ci; ` : modifie l'encodage d'une db (ici db_aviation)

`DESCRIBE table_name` : affiche plus de spécificités sur la table. 

`INSERT INTO table_name values ('hjdhfsdh', 'hfsjkhfskjfhsk', '.....')` : insert dans la table les valeurs suivants
**OU**
`INSERT INTO table_name (champs1, champs2) VALUES ('valeur1', 'valeur2');`

`INSERT INTO table_name SET champs1='valeur1', champs2='valeur2';`

**Convention pour nommer les tables** 
Pas d'espaces et pas de caractère spéciaux. Privilégier les underscores.
Ne pas hésiter à préfixer les tables (ex pour wordpress: wp_admin, wp_user etc.)


**Sauvegarde de la base de données**
`mysqldump -u root -p db_name` : Sortie en texte dans le terminal
`mysqldump -u root -p db_name > path/to/file.sql` : export de la db dans un fichier sql sur l'ordinateur 
Exemple : `mysqldump -u root -p db_aviation > /home/marianne/Bureau/db_aviation.sql`
`mysqldump -u root -p db_name table_name > path/to/file.sql` : export de la table de la db dans un fichier sql sur l'ordinateur
Exemple : `mysqldump -u root -p db_aviation pilots > path/to/file.sql`