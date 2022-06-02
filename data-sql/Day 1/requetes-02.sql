SELECT * FROM pilots; -- récupère tous les champs et leurs valeurs;
SELECT name, company FROM pilots; -- ne récupère que les champs name et company
SELECT name FROM pilots WHERE certificate = 'ct-1'; -- récupère le nom de ceux qui ont le certif ct-1

SELECT [Distinct] [champs] FROM [table] WHERE [conditions] ORDER BY [champ(s)] ASC|DESC LIMIT x;

SELECT DISTINCT num_jobs FROM pilots; 
+----------+
| num_jobs |
+----------+
|       30 |
|       10 |
|       50 |
|        7 |
|       13 |
|        8 |
+----------+
-- Renvoi un seul exemplaire des doublons dans la colonne num_jobs

SELECT DISTINCT num_jobs FROM pilots ORDER BY num_jobs; 
+----------+
| num_jobs |
+----------+
|        7 |
|        8 |
|       10 |
|       13 |
|       30 |
|       50 |
+----------+

SELECT DISTINCT num_jobs FROM pilots ORDER BY num_jobs DESC; 
+----------+
| num_jobs |
+----------+
|       50 |
|       30 |
|       13 |
|       10 |
|        8 |
|        7 |
+----------+


SELECT name FROM pilots WHERE num_jobs != 50; -- on peut avoir >, <, =, >=, <= 
SELECT name FROM pilots WHERE num_jobs < 50 AND name = 'Alan'; -- on peut avoir AND et OR 
+------+
| name |
+------+
| Alan |
+------+

-- On peut aussi compiler 
SELECT name FROM pilots WHERE (num_jobs < 50 AND name = 'Alan') OR name = 'Yi';
+------+
| name |
+------+
| Alan |
| Yi   |
+------+

SELECT name FROM pilots LIMIT 2;
+--------+
| name   |
+--------+
| Alan   |
| Albert |
+--------+

SELECT name FROM pilots LIMIT 0,3;
+--------+
| name   |
+--------+
| Alan   |
| Albert |
| Benoit |
+--------+

SELECT name FROM pilots LIMIT 3,3;
+--------+
| name   |
+--------+
| John   |
| Pierre |
| Sophie |
+--------+

/* 
EXERCICE 01 
*/
-- Selectionner tous les pilotes de la compagnie AUS

SELECT * FROM pilots WHERE company = 'AUS';
+-------------+------------+---------+--------+---------------------+---------------------+---------------------+----------+
| certificate | num_flying | company | name   | created             | birth_date          | next_flight         | num_jobs |
+-------------+------------+---------+--------+---------------------+---------------------+---------------------+----------+
| ct-1        |       90.0 | AUS     | Alan   | 2022-05-30 14:03:43 | 2001-03-04 00:00:00 | 2020-04-04 07:50:52 |       30 |
| ct-11       |      200.0 | AUS     | Sophie | 2022-05-30 14:03:43 | 1978-10-17 00:00:00 | 2020-06-11 12:00:52 |       50 |
| ct-12       |      190.0 | AUS     | Albert | 2022-05-30 14:03:43 | 1990-04-04 00:00:00 | 2020-05-08 12:50:52 |       10 |
| ct-56       |      300.0 | AUS     | Benoit | 2022-05-30 14:03:43 | 2000-01-04 00:00:00 | 2020-02-04 12:50:52 |        7 |
+-------------+------------+---------+--------+---------------------+---------------------+---------------------+----------+

-- Selectionner les noms de pilotes de la compagnie FRE1 ayant fait plus de 15h de vol
SELECT name, company, num_flying FROM pilots WHERE company = 'FRE1' AND num_flying > 15;
+------+---------+------------+
| name | company | num_flying |
+------+---------+------------+
| Tom  | FRE1    |       90.0 |
| John | FRE1    |       20.0 |
+------+---------+------------+

-- Selectionner les noms de pilotes de la compagnie FRE1 ayant fait plus de 20h de vol
SELECT name, company, num_flying FROM pilots WHERE company = 'FRE1' AND num_flying > 20;
+------+---------+------------+
| name | company | num_flying |
+------+---------+------------+
| Tom  | FRE1    |       90.0 |
+------+---------+------------+

-- Selectionner les noms des pilotes de la compagnie FRE1 ou AUS ayant fait plus de 20h de vols
SELECT name, company, num_flying FROM pilots WHERE company = 'FRE1' OR company = 'AUS' AND num_flying > 20; -- NOT OK 
SELECT name, company, num_flying FROM pilots WHERE (company = 'FRE1' OR company = 'AUS') AND num_flying > 20; -- OK 
+--------+---------+------------+
| name   | company | num_flying |
+--------+---------+------------+
| Alan   | AUS     |       90.0 |
| Sophie | AUS     |      200.0 |
| Albert | AUS     |      190.0 |
| Benoit | AUS     |      300.0 |
| Tom    | FRE1    |       90.0 |
+--------+---------+------------+

-- Sélectionner les noms des pilotes ayant fait entre 190 et 200h de vol
SELECT name, company, num_flying FROM pilots WHERE num_flying > 190 AND num_flying < 200;
-- Ne retourne rien car il n'y en a pas, sinon : 
SELECT name, company, num_flying FROM pilots WHERE num_flying >= 190 AND num_flying <= 200;
+--------+---------+------------+
| name   | company | num_flying |
+--------+---------+------------+
| Yi     | SIN     |      200.0 |
| Sophie | AUS     |      200.0 |
| Albert | AUS     |      190.0 |
| Yan    | SIN     |      190.0 |
+--------+---------+------------+

-- Sélectionner les noms des pilotes nés après 1978
SELECT name, birth_date FROM pilots WHERE birth_date > '1978-12-31';
SELECT name, birth_date FROM pilots WHERE DATE_FORMAT(birth_date, '%Y') > 1978; -- benjamin
SELECT name, birth_date FROM pilots WHERE YEAR(birth_date) > 1978; -- Maïssam
+--------+---------------------+
| name   | birth_date          |
+--------+---------------------+
| Alan   | 2001-03-04 00:00:00 |
| Albert | 1990-04-04 00:00:00 |
| Yan    | 1998-01-04 00:00:00 |
| Benoit | 2000-01-04 00:00:00 |
| John   | 2000-01-04 00:00:00 |
+--------+---------------------+

-- Selectionner les noms des pilots nés avant 1978
SELECT name, birth_date FROM pilots WHERE YEAR(birth_date) < 1978;
+--------+---------------------+
| name   | birth_date          |
+--------+---------------------+
| Pierre | 1977-01-04 00:00:00 |
+--------+---------------------+

-- Selectionner les noms des pilotes qui sont nés entre 1978 et 2000 (1978 et 2000 étant compris dans l'interval)
SELECT name, birth_date FROM pilots WHERE YEAR(birth_date) >= 1978 AND YEAR(birth_date) <= 2000;
SELECT name, birth_date FROM pilots WHERE YEAR(birth_date) BETWEEN 1978 AND 2000;
+--------+---------------------+
| name   | birth_date          |
+--------+---------------------+
| Tom    | 1978-02-04 00:00:00 |
| Yi     | 1978-02-04 00:00:00 |
| Sophie | 1978-10-17 00:00:00 |
| Albert | 1990-04-04 00:00:00 |
| Yan    | 1998-01-04 00:00:00 |
| Benoit | 2000-01-04 00:00:00 |
| John   | 2000-01-04 00:00:00 |
+--------+---------------------+

-- Qels sont les pilotes qui ont un vol programmé après le 08 mai 2020
SELECT name, next_flight FROM pilots WHERE next_flight >= '2020-05-09';
SELECT name, next_flight FROM pilots WHERE next_flight > '2020-05-08 23:59:59';
SELECT name, next_flight FROM pilots WHERE DATE_FORMAT(next_flight, '%Y-%m-%d') > '2020-05-08';
SELECT name, next_flight FROM pilots WHERE DATE(next_flight) > '2020-05-08';
+--------+---------------------+
| name   | next_flight         |
+--------+---------------------+
| Tom    | 2020-12-04 09:50:52 |
| Yi     | 2020-12-04 09:50:52 |
| Sophie | 2020-06-11 12:00:52 |
| John   | 2020-12-04 12:50:52 |
+--------+---------------------+

-- Selectionner tous les noms des pilotes qui sont dans les compagnies AUS et FRE1
SELECT name, company FROM pilots WHERE company = 'AUS' OR company = 'FRE1';

-- Sectionner tous les noms des pilotes qui ne travaillent pas pour les compagnies AUS et FRE1
SELECT name, company FROM pilots WHERE company != 'AUS' AND company != 'FRE1';
SELECT name, company FROM pilots WHERE company <> 'AUS' AND company <> 'FRE1';
-- <> est égal à != : ce sont 2 mêmes expressions

-- Selectionner tous les pilots donc le nom de la compagnie contient un "a"
SELECT name, company FROM pilots WHERE INSTR(company, 'a');
SELECT name, company FROM pilots WHERE company LIKE '%a%';
-- https://sql.sh/cours/where/like
+--------+---------+
| name   | company |
+--------+---------+
| Alan   | AUS     |
| Sophie | AUS     |
| Albert | AUS     |
| Benoit | AUS     |
+--------+---------+

-- Selectionner tous les pilots donc le nom de la compagnie qui commence par un "f"
SELECT name, company FROM pilots WHERE company LIKE 'f%';

-- Selectionner tous les pilots donc le nom de la compagnie qui fini par un "s"
SELECT name, company FROM pilots WHERE company LIKE '%s';

-- Selectionner tous les pilotes dont le nom de la compagnie contient un 'i' suivi d'un caractère
SELECT name, company FROM pilots WHERE company LIKE '%i_%';
-- le % remplace toutes sortes de caractères, le _ signale d'autres caractères
+------+---------+
| name | company |
+------+---------+
| Yi   | SIN     |
| Yan  | SIN     |
+------+---------+

-- Exemple : Selectionner tous les pilotes dont le nom contient plus ou moins de 3 caractères
SELECT name, company FROM pilots WHERE name LIKE '___';
+------+---------+
| name | company |
+------+---------+
| Tom  | FRE1    |
| Yan  | SIN     |
+------+---------+

-- Selectionner tous les pilotes dont le nom à un "o" en 2e position
SELECT name, company FROM pilots WHERE name LIKE '_o%';
SELECT name, company FROM pilots WHERE INSTR(name, 'o') = 2; -- attention, position 0 = chaine non trouvée (false)
+--------+---------+
| name   | company |
+--------+---------+
| Tom    | FRE1    |
| Sophie | AUS     |
| John   | FRE1    |
+--------+---------+

-- Sélectionner toutes les compagnies qui ont un num_street à null
SELECT comp, num_street FROM companies WHERE num_street IS NULL;
+------+------------+
| comp | num_street |
+------+------------+
| CHI  |       NULL |
+------+------------+

-- Sélectionner toutes les compagnies qui ont un num_street contenant quelque chose
SELECT comp, num_street FROM companies WHERE num_street IS NOT NULL;
+------+------------+
| comp | num_street |
+------+------------+
| AUS  |         19 |
| FRE1 |         17 |
| FRE2 |         22 |
| SIN  |         15 |
+------+------------+

/*
Exercice ajout d'un bonus 
Ajoutez une colonne bonus à la table pilots puis ajoutez le bonus 1000 pour les certificats 'ct-1', 'ct-11', 'ct-12', pour le certificat 'ct-56' un bonus de 2000 et tous les autres un bonus de 500
*/
ALTER TABLE pilots ADD COLUMN bonus smallint unsigned after certificate;
UPDATE pilots 
SET bonus = (
    CASE 
        WHEN `certificate` IN ('ct-1', 'ct-11', 'ct-12') THEN 1000 
        WHEN `certificate` IN ('ct-56') THEN 2000 
        ELSE 500 
    END
);

-- Quelles sont les heures de vol dinstinctes dans la table pilots 
SELECT DISTINCT num_flying FROM pilots;


-- Combien de pilotes sont en dessous de la moyenne d'heures de vol
SELECT count(*) from pilots; -- récupère le nombre de pilotes
Select avg(num_flying) from pilots; -- moyenne des heures de vols
select count(*) from pilots where num_flying < (Select avg(num_flying) from pilots); -- nb de pilotes qui ont moins d'heures de vol que la moyenne

-- Faites une requête permettant de sélectionner le pilote ayant eu le meilleur bonus. Vou spouvez utiliser la fonction max de SQL
SELECT * FROM pilots WHERE bonus = (SELECT MAX(bonus) FROM pilots);
SELECT name, bonus FROM pilots ORDER BY bonus DESC LIMIT 1; -- Banjamin
+-------------+-------+------------+---------+--------+---------------------+---------------------+---------------------+----------+
| certificate | bonus | num_flying | company | name   | created             | birth_date          | next_flight         | num_jobs |
+-------------+-------+------------+---------+--------+---------------------+---------------------+---------------------+----------+
| ct-56       |  2000 |      300.0 | AUS     | Benoit | 2022-05-30 14:03:43 | 2000-01-04 00:00:00 | 2020-02-04 12:50:52 |        7 |
+-------------+-------+------------+---------+--------+---------------------+---------------------+---------------------+----------+

-- Calculer le pourcentage des heures de vol de chaque pilote par rapport au total des heures de vol. 
-- Arrondissez le résultat à deux décimales après la virgule 
SELECT sum(num_flying) FROM pilots; -- renvoit le total des heures de vol
SELECT name, ROUND((num_flying / (SELECT sum(num_flying) FROM pilots))*100, 2) as pourcentage FROM pilots;
+--------+-------------+
| name   | pourcentage |
+--------+-------------+
| Alan   |        6.62 |
| Tom    |        6.62 |
| Yi     |       14.71 |
| Sophie |       14.71 |
| Albert |       13.97 |
| Yan    |       13.97 |
| Benoit |       22.06 |
| John   |        1.47 |
| Pierre |        5.88 |
+--------+-------------+

-- REGEX 
-- Récupérer tous les noms des pilotes dont le code de leur(s) compagnie(s) se termine(nt) par R suivi de 2 caractères exactement. 
SELECT name, company FROM pilots WHERE company REGEXP 'r.{2}$';
+------+---------+
| name | company |
+------+---------+
| Tom  | FRE1    |
| John | FRE1    |
+------+---------+
-- https://regexcrossword.com/ pour s'entrainer