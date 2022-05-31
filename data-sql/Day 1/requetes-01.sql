CREATE DATABASE db_aviation;
USE db_aviation;

-- Si on a oublié de choisir le bon encodage pour la BDD
ALTER DATABASE db_aviation CHARACTER SET utf8 COLLATE utf8_unicode_ci;

-- Créer une table 
CREATE TABLE compagnies (
    comp CHAR(4),
    street VARCHAR(20),
    city VARCHAR(20),
    name VARCHAR(20) NOT NULL, 
    CONSTRAINT pk_compagny PRIMARY KEY (comp)
) ENGINE=innoDB;

-- affiche plus d'infos sur la table
DESCRIBE compagnies 

/*
EXERCIE 01 - modifier
Modifiez la table companies ci-dessus et ajoutez le champ status de type ENUM qui prendra les valeurs suivantes : "published", "unpublished", "draft" et qui par défaut aura la valeur "draft".

Ajoutez également la colonne num_street.

Supprimez cette nouvelle colonne puis recréez la en la plaçant cette fois-ci après la colonne "name" de la table companies. Utilisez la commande suivante : AFTER dans la commande ALTER. 
*/

ALTER TABLE compagnies 
    ADD COLUMN `status` 
    ENUM('published', 'unpublished', 'draft') 
    NOT NULL 
    DEFAULT 'draft'
;

ALTER TABLE compagnies ADD COLUMN num_street INT;

ALTER TABLE compagnies DROP COLUMN num_street;

ALTER TABLE compagnies ADD COLUMN num_street INT AFTER name;

/*
EXERCICE 2
Créez la table pilots suivante dans la base donnes db_aviation

+-------------+--------------+------+-----+---------+-------+
| Field       | Type         | Null | Key | Default | Extra |
+--------------+--------------+------+-----+---------+-------+
| certificate | varchar(6)   | NO   | PRI | NULL    |       |
| num_flying  | decimal(7,1) | YES  |     | NULL    |       |
| company     | char(4)      | YES  | MUL | NULL    |       |
| name        | varchar(20)  | NO   | UNI | NULL    |       |
+-------------+--------------+------+-----+---------+-------+
*/ 

CREATE TABLE pilots(
    `certificate` VARCHAR(6) NOT NULL PRIMARY KEY,
    `num_flying` DECIMAL(7,1) NULL,
    `compagny` CHAR(4) NULL,
    `name` VARCHAR(20) NOT NULL UNIQUE
)ENGINE=innoDB;

-- Relier la clé étrangère comp de la table compagnies à la compagny
ALTER TABLE pilots ADD CONSTRAINT fk_pilots_compagny FOREIGN KEY (compagny) REFERENCES compagnies(comp);

DESCRIBE pilots;

/*
Insérez les données suivantes dans la table companies :

+------+-----------+-----------+--------------+------------+--------+
| comp | street    | city      | name         | num_street | status |
+------+-----------+-----------+--------------+------------+--------+
| AUS  | sydney    | Australie | AUSTRA Air   | 19         | draft  |
| CHI  | chi       | Chine     | CHINA Air    | NULL       | draft  |
| FRE1 | beaubourg | France    | Air France   | 17         | draft  |
| FRE2 | paris     | France    | Air Electric | 22         | draft  |
| SIN  | pasir     | Singapour | SIN A        | 15         | draft  |
+------+-----------+-----------+--------------+------------+--------+  
*/

INSERT INTO compagnies (comp, street, city, name, num_street)
    VALUES ('AUS', 'sydney', 'Australie', 'AUSTRIA Air', 19),
           ('CHI', 'chi', 'Chine', 'CHINA Air ', null),
           ('FRE1', 'beaubourg', 'France', 'Air France', 17),
           ('FRE2', 'paris', 'France', 'Air Electric', 22),
           ('SIN', 'pasir', 'Singapour', 'SIN A', 15);

INSERT INTO `pilots`
(`certificate`,`num_flying`,`compagny` ,`name`)
VALUES
('ct-1', 90, 'AUS', 'Alan' ),
('ct-12', 190, 'AUS', 'Albert' ),
('ct-7', 80, 'CHI', 'Pierre' ),
('ct-11', 200, 'AUS', 'Sophie' ),
('ct-6', 20, 'FRE1', 'John' ),
('ct-10', 90, 'FRE1', 'Tom' ),
('ct-100', 200, 'SIN', 'Yi' ),
('ct-16', 190, 'SIN', 'Yan' ),
('ct-56', 300, 'AUS', 'Benoit' )
;

/*
EXERCICE 04 
Ajouter une colonne created dans la table pilots
Ajouter l'option suivante à cette colonne
DEFAULT CURRENT_TIMESTAMP
*/
ALTER TABLE pilots ADD COLUMN created DATETIME DEFAULT CURRENT_TIMESTAMP;

/*
EXERCICE 05 
Ajouter les colonnes birth_date, next_flight, num_jobs dans la table pilots
Trouvez les meilleurs types pour définir ces colonnes.
*/

ALTER TABLE pilots 
ADD COLUMN birth_date DATETIME, 
ADD COLUMN next_flight DATETIME, 
ADD COLUMN num_jobs TINYINT
;

-- UPDATE ----------
-- On ne fait pas de INSERT TO car sinon, cela va nous rajouter des colonnes. On utilise donc UPDATE
UPDATE pilots
SET birth_date = '2001-03-04 00:00:00', 
    next_flight = '2020-04-04 07;:50:52',
    num_jobs = 30
WHERE name='Alan';

UPDATE `pilots`
SET `birth_date` = '1978-02-04 00:00:00',
`next_flight` = '2020-12-04 09:50:52',
`num_jobs` = 10
WHERE name = 'Tom';

UPDATE `pilots`
SET `birth_date` = '1978-02-04 00:00:00',
`next_flight` = '2020-12-04 09:50:52',
`num_jobs` = 10
WHERE name = 'Yi';

UPDATE `pilots`
SET `birth_date` = '1978-10-17 00:00:00',
`next_flight` = '2020-06-11 12:00:52',
`num_jobs` = 50
WHERE name = 'Sophie';

UPDATE `pilots`
SET `birth_date` = '1990-04-04 00:00:00',
`next_flight` = '2020-05-08 12:50:52',
`num_jobs` = 10
WHERE name = 'Albert';

UPDATE `pilots`
SET `birth_date` = '1998-01-04 00:00:00',
`next_flight` = '2020-05-08 12:50:52',
`num_jobs` = 30
WHERE name = 'Yan';

UPDATE `pilots`
SET `birth_date` = '2000-01-04 00:00:00',
`next_flight` = '2020-02-04 12:50:52',
`num_jobs` = 7
WHERE name = 'Benoit';

UPDATE `pilots`
SET `birth_date` = '2000-01-04 00:00:00',
`next_flight` = '2020-12-04 12:50:52',
`num_jobs` = 13
WHERE name = 'John';

UPDATE `pilots`
SET `birth_date` = '1977-01-04 00:00:00',
`next_flight` = '2020-05-04 12:50:52',
`num_jobs` = 8
WHERE name = 'Pierre'; 

-- DELETE ---------

DELETE FROM table;
DELETE FROM table options;

DELETE FROM pilots; -- vide la table
DELETE FROM pilots WHERE num_jobs <= 10; -- supprime toutes les données avec num_jobs inf ou égal à 10

-- TRUNCATE --------
TRUNCATE TABLE pilots -- vide la table, réinitialise l'auto-incrément, pas de close WHERE

-- Duplication de tables -------
CREATE TABLE new_pilots (SELECT * FROM pilots); -- crééer une nouvelle table et insère tous les champs de la table pilots
/*
Exercie 5 : sauvegarde et suppression (facultatif)
-- Créez la table new_pilots à l'aide de la commande suivante et supprimez toutes les lignes de la table pilots :
CREATE TABLE `new_pilots` (SELECT * FROM `pilots`);
-- Lorsque vous aurez supprimé les données de la table pilots récupérez les données de la table new_pilots pour les remettre dans la table pilots et supprimer la table new_pilots.

-- Utilisez la syntaxe suivante pour remettre les données dans la table pilots : 
*/

-- 2 méthodes

INSERT INTO
pilots (
`certificate`,
`num_flying`,
`company`,
`name`,
`created`,
`birth_date`,
`next_flight`,
`num_jobs`
) SELECT * FROM `new_pilots`; 
-- /!\ bien ranger les colonnes dans le bon ordre

-- OU

/* CONSERVE LES CLÉS */
CREATE TABLE new_pilots LIKE pilots;
INSERT new_pilots SELECT * FROM pilots; -- fonctionne avec ou sans le INTO

-- Il existe d'autres options avec les requêtes SQL, par exemple: 
SELECT UPPER(name) FROM pilots; -- Affiche les noms en majuscules
SELECT LOWER(name) FROM pilots; -- Affiche les noms en minuscules
SELECT SUBSTRING(name, 1, 4) fROM pilots; -- récupère les 4* premières lettres
SELECT LENGTH(name) from pilots; -- renvoi la longueur des noms
SELECT REPLACE(name, 'e', 'a') FROM pilots;-- remplace les e des noms par des a
SELECT TRIM(name) FROM pilots -- Retire les espaces si il y a 

SELECT CONCAT('hello', ' world'); -- permet de concaténer 2 choses
SELECT CONCAT_WS('-', 'fraise', 'banane', 'kiwi'); -- sépare les éléments par un tiret (on peut le faire avec tout)
SELECT CONCAT_WS(' ', name, company) FROM pilots;
SELECT CONCAT_WS(' ', name, company) AS nomComplet FROM pilots ;

SELECT CONVERT (20130101, date); -- formate la date 
SELECT CONVERT (20130101, datetime); -- formate date et heure
SELECT CONVERT (CURRENT_TIMESTAMP, date); -- juste la date
SELECT CONVERT (CURRENT_TIMESTAMP, datetime); -- date + heure 
SELECT CONVERT (CURRENT_TIMESTAMP, time); -- juste l'heure

-- FONCTIONS : https://sql.sh/fonctions

/* 
EXERCICE 6 
Donnez le nom du jour il y a un an exactement
*/ 
SELECT DATE_FORMAT('2021-05-30', '%W');
SELECT DATE_FORMAT(CURRENT_TIMESTAMP - INTERVAL 1 YEAR, '%W');

SELECT DAYNAME(DATE_ADD(CURRENT_DATE, INTERVALE -1 YEAR)) AS day_name;
SELECT DATE_FORMAT (( SELECT CURDATE() _ INTERVAL 1 YEAR), '%W');
SELECT DATE_FORMAT(DATE_SUB(CURRENT_TIMESTAMP, INTERVAL 1 YEAR), '%W');

/**
## 02 Exercice aléatoire

Créez des dates aléatoires de +/- 3jours, par rapport à la date de naissance la plus récente de la table pilots.

Remarque : le select suivant crée une date à + 1 jour par rapport à la date en premier paramètre.
*/
SELECT DATE_ADD('2018-05-01', INTERVAL 1 DAY); 

-- Solution de Benjamin
SELECT DATE_ADD((SELECT birth_date FROM pilots ORDER BY birth_date DESC LIMIT 1), INTERVAL (SELECT FLOOR(RAND()*(3+3)-3)) DAY);
-- Récupère les dates, on les tri par ordre décroissant, on met en place un interval

-- CORRECTION
/* Etape 1 */ 
SELECT RAND() * 6 - 3; -- Valeur entre -3 et +3
/* Etape 2 */ 
SELECT ROUND(RAND() * 6 - 3, 0); -- Arrondi à l'entier le plus proche, rend un entier aléatoire
/* Etape 3 */ 
SELECT MAX(birth_date) FROM pilots; -- récupère la date max 
/* FINAL */ 
SELECT DATE_ADD(MAX(birth_date), INTERVAL ROUND(RAND() * 6 - 3, 0) DAY) AS rand_date FROM pilots;

-- Autre solution du prof 
SELECT DATE_ADD(birth_date, INTERVAL ROUND((RAND() *6)-3) DAY)
FROM pilots
WHERE birth_date = (SELECT max(birth_date) FROM pilots) LIMIT 1;