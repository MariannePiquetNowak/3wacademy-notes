/* Les sous-requêtes */

-- Cette requête ne renvoit qu'une seule valeur. 
SELECT name, ROUND((num_flying / (SELECT sum(num_flying) FROM pilots))*100, 2) as pourcentage FROM pilots;
-- mais si nous souhaitons plusieurs valeurs ? 

-- on veut que le champs num_flying soit sup à toutes les valeurs retournées par la requête suivante
select * from pilots where num_flying >= ALL (select num_flying from pilots); 
select * from pilots where num_flying >= (select max(num_flying) from pilots);

UPDATE companies
SET street = 'Shenton Park',
city = 'Perth', 
num_street=20
WHERE comp = 'AUS';

UPDATE companies
SET street = 'Rue de la Lieure',
city = 'Voiron',
num_street=11
WHERE comp = 'FRE1';

UPDATE companies
SET street = 'Qinghai',
city = 'Xian de Tongde',
num_street=17
WHERE comp = 'CHI';

UPDATE companies
SET street = 'Marymount',
city = 'Singapour',
num_street=1
WHERE comp = 'SIN'; 

-- Quelles sont les coordonnées des compagnies qui employent des pilotes faisant moins de 90 heures de vol ? 
select name, num_street, street, city FROM companies WHERE comp IN (select company from pilots where num_flying < 90);
-- Formattage
select name, concat_ws(' ', num_street, street, city) as adress FROM companies WHERE comp IN (select company from pilots where num_flying < 90);

-- Selectonner le pilote ayant fait le plus d'heures de vol sans utiliser l'opérateur max()
-- https://sql.sh/cours/where/all
select name, num_flying from pilots where num_flying >= ALL (select num_flying from pilots);
+--------+------------+
| name   | num_flying |
+--------+------------+
| Benoit |      300.0 |
+--------+------------+

-- Puis sélectionner les nombres d'heures de vol sauf le plus grand.
-- https://sql.sh/cours/where/any
select name, num_flying from pilots where num_flying < ANY (select num_flying from pilots);
select name, num_flying from pilots where not num_flying >= ALL (select num_flying from pilots); -- benjamin
select name, num_flying from pilots where num_flying not in (select num_flying from pilots where num_flying >= all (select num_flying from pilots)); -- Maïssam
+--------+------------+
| name   | num_flying |
+--------+------------+
| Alan   |       90.0 |
| Tom    |       90.0 |
| Yi     |      200.0 |
| Sophie |      200.0 |
| Albert |      190.0 |
| Yan    |      190.0 |
| John   |       20.0 |
| Pierre |       80.0 |
+--------+------------+

-- Faites la somme des heures de vol des pilotes dont le nom de la compagnie est Air France. Bien sur, vous ne connaissez pas la clef primaine de la compagnie. 
-- select comp from companies where name = 'Air France';
select sum(num_flying) from pilots where company = (select comp from companies where name = 'Air France');
select sum(num_flying) from pilots where company in (select comp from companies where name = 'Air France');

-- plus optimale mais plus complexe
select sum(num_flying)
from pilotes
where certificate in (
    select certificate
    from pilots
    where company in 
    (select comp from companies where name = 'air france')
);

-- ajouter maintenant la compagnie suivante dan la table companies 
-- comp = ITA, street = mapoli, city = Rome, name = Italia Air, num_street = 20
-- INSERT INTO table_name SET champs1='valeur1', champs2='valeur2';
insert into companies SET comp = 'ITA', street = 'mapoli', city = 'Rome', name = 'Italia Air', num_street = 20;

-- trouver toutes les compagnies qui n'ont pas de pilotes 
-- liste des compagnies qui ont des pilotes 
select distinct company from pilots;
-- liste des compagnies
select name, comp from companies;
-- réponse 
select name, comp from companies where comp not in (select distinct company from pilots);

/* 
IMPORTANT
-- On utilise le "IN" a partir du moment où l'on recherche un tableau de résultats (donc plusieurs résultats)
-- Quand l'erreur dit que l'on reçoit + d'1 row
-- Quand on veut un résultat SUPERIEUR ou INFERIEUR à un tableau de résultats, on utilise le ALL ou le ANY
*/

-- Sélectionner tous les pilotes dont le nombre de travail est inf à tous les nombres d'heures de travail de la compagnie CHI 
select name, num_jobs from pilots where num_jobs < ALL (select num_jobs from pilots where company = 'CHI');
-- on vérifie si num_jobs est bien inférieur à tous les résultats suivants
+--------+----------+
| name   | num_jobs |
+--------+----------+
| Benoit |        7 |
+--------+----------+

-- Selectionner les longueur des noms des pilotes dont la longueur de leurs noms est inf à toutes les longueurs des noms des pilotes de la compagnie FRE1
select name, LENGTH(name) from pilots where LENGTH(name) < ALL (select LENGTH(name) from pilots where company = "FRE1");
+------+--------------+
| name | LENGTH(name) |
+------+--------------+
| Yi   |            2 |
+------+--------------+

-- Rajouter une colonne de type ENUM de nom "avion" après name a380, a320, a340
ALTER TABLE pilots ADD COLUMN plane ENUM('a380', 'a320', 'a340') after name;

-- UPDATE 
UPDATE pilots
SET plane = 'A380'
WHERE name in ('Alan', 'Sophie', 'Albert', 'Benoit');

UPDATE pilots
SET plane = 'A320'
WHERE name in ('Tom', 'John', 'Yi');

UPDATE pilots
SET plane = 'A340'
WHERE name in ('Yan', 'Pierre'); 

-- sélectionner les coordonnées des compagnies ayant des pilotes dont le nombre d'heures de vol est inférieur à tous les nombres d'heures de vol (chaque heure de vol) des A380
select name, num_street, street, city 
    from companies 
    where comp in (
        select company 
        from pilots 
        where num_flying < all (
            select num_flying 
            from pilots 
            where plane = 'A380'
        )
    );
+------------+------------+------------------+----------------+
| name       | num_street | street           | city           |
+------------+------------+------------------+----------------+
| CHINA Air  |         17 | Qinghai          | Xian de Tongde |
| Air France |         11 | Rue de la Lieure | Voiron         |
+------------+------------+------------------+----------------+

/* -------- LES SOUS-REQUETES CORRÉLÉES ---------- */

-- Autre façon d'écrire les requêtes, utiles principalement pour les jointures
select * from t1 where exists (select 1 from t2 where t2.column2 = t1.column2);

-- Exemple
select name from companies as c where exists (select company from pilots as p where p.company = c.comp);

-- Ajout nouveau champ -----
ALTER TABLE pilots
ADD last_name VARCHAR(100) AFTER name;

UPDATE `pilots` 
SET `last_name` = (
CASE 
WHEN name IN ('alan', 'yi', 'sophie') THEN 'Dupont'
WHEN name IN ('yan', 'benoit') THEN 'chai'
WHEN name IN ('john', 'pierre') THEN 'chai'
WHEN name IN ('albert') THEN 'Pierre'
ELSE 'Lu'
END); 

-- sélectionner les adresses des compagnies qui n'ont pas de pilotes en utilisant une sous-requête corrélée
select name, num_street, street, city from companies as c where not exists (select 1 from pilots as p where p.company = c.comp); 
-- OU
select name, num_street, street, city from companies as c where not exists (select company from pilots as p where p.company = c.comp); 
-- traduction : récupère le nom et l'adresse depuis la table companies en tant que c où n'existe pas (de compagnie de la table pilots égal à la compagnie de la table companies)

-- sélectionner les adresses des compagnies qui ont des pilotes en utilisant une sous-requête corrélée
select name, num_street, street, city from companies as c where exists (select 1 from pilots as p where p.company = c.comp); 

-- Selectionner les pilotes qui ont le même nom de famille en utilisant une sous-requête corrélée
select count(name) from pilots as p group by p.name having count(p.last_name) > 1;

select name, last_name from pilots as p where last_name in (select last_name from pilots as pp where p.name != pp.name);
-- OU
select name, last_name from pilots as p where last_name in (select last_name from pilots as pp where p.certificate != pp.certificate);
-- name et certificate n'ont aucun doublon donc on peut les exploiter pour récupérer les même noms
-- Dans une grosses db, il faudra utiliser la clé primaire ! Ici, dans la table pilots, c'est certficate 

-- Méthode de benjamin (double vérification + consomme moins en mémoire)
select name, last_name
from pilots as p 
where exists 
(select 1 from pilots as pp
where p.certificate <> pp.certificate AND p.last_name = pp.last_name);