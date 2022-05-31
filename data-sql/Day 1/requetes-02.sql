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


