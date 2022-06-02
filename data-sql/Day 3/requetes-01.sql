-- Exemple
select avg(truc) from table where bidule = machin group by champs; 

select last_name, count(*) from pilots group by last_name;
select last_name, count(*) from pilots where company = 'AUS' group by last_name having plane = 'A380';

-- GROUP BY : fait un tri automatique + applique des opérateurs d'agrégation ( MAX , SUM , GROUP_CONCAT , ..., ou un HAVING clause).
-- DISTINCT :  supprime les doublons
-- HAVING : C'est comme un WHERE mais pour le GROUP BY 

-- Calculez la moyenne des vols pour chaque compagnie
select company, sum(num_flying) / count(num_flying) from pilots group by company;
select company, avg(num_flying) from pilots group by company;
+-----------------+
| avg(num_flying) |
+-----------------+
|       195.00000 |
|        80.00000 |
|        55.00000 |
|       195.00000 |
+-----------------+

-- Calculez la moyenne des heures de vol des pilotes dont le bonus est de 500, par compagnie
select company, bonus, avg(num_flying) from pilots where bonus = 500 group by company; 
+---------+-------+-----------------+
| company | bonus | avg(num_flying) |
+---------+-------+-----------------+
| CHI     |   500 |        80.00000 |
| FRE1    |   500 |        55.00000 |
| SIN     |   500 |       195.00000 |
+---------+-------+-----------------+

-- Sélectionnez les compagnies qui ont plus d'un pilote ainsi que leur nombre de pilotes
select count(*), company from pilots group by company having count(company) > 1;
select count(*) as nb, company from pilots group by company having nb > 1;
+----+---------+
| nb | company |
+----+---------+
|  4 | AUS     |
|  2 | FRE1    |
|  2 | SIN     |
+----+---------+

-- Sélectionner le nombre de pilotes par compagnie et par nombre d'avion 
select count(name) as nb_pilots, company, plane from pilots group by company, plane;
+-----------+---------+-------+
| nb_pilots | company | plane |
+-----------+---------+-------+
|         4 | AUS     | a380  |
|         2 | FRE1    | a320  |
|         1 | SIN     | a320  |
|         1 | SIN     | a340  |
|         1 | CHI     | a340  |

-- Selectionner le nom des pilotes par bonus (on veut obtenir une case avec le nom de chaque pilote par bonus)
select group_concat(name SEPARATOR ', ') as pilots_name, bonus from pilots group by bonus; 
+----------------------------+-------+
| pilots_name                | bonus |
+----------------------------+-------+
| Tom, Yi, Yan, John, Pierre |   500 |
| Alan, Sophie, Albert       |  1000 |
| Benoit                     |  2000 |
+----------------------------+-------+

-- Selectionner le nom des pilotes et le code de la compagnie par bonus
select group_concat(name, ' (', company, ')' SEPARATOR ', ') as pilots_name, bonus from pilots group by bonus; 
+------------------------------------------------------------+-------+
| pilots_name                                                | bonus |
+------------------------------------------------------------+-------+
| Tom (FRE1), Yi (SIN), Yan (SIN), John (FRE1), Pierre (CHI) |   500 |
| Alan (AUS), Sophie (AUS), Albert (AUS)                     |  1000 |
| Benoit (AUS)                                               |  2000 |
+------------------------------------------------------------+-------+

----- Les Rollup -----

select bidule, avg(machin) from table group by truc with rollup;

select company, sum(num_flying) as total_heures, min(num_flying) as min_heures, max(num_flying) as max_heures from pilots group by company;
+---------+--------------+--------+------------+
| company | total_heures | min_heures | max_heures |
+---------+--------------+------------+------------+
| AUS     |        780.0 |   90.0     |      300.0 |
| CHI     |         80.0 |   80.0     |       80.0 |
| FRE1    |        110.0 |   20.0     |       90.0 |
| SIN     |        390.0 |  190.0     |      200.0 |
+---------+--------------+------------+------------+
select company, sum(num_flying) as total_heures, min(num_flying) as heures, max(num_flying) as max_heures from pilots group by company with rollup;
+---------+--------------+--------+------------+
| company | total_heures | heures | max_heures |
+---------+--------------+--------+------------+
| AUS     |        780.0 |   90.0 |      300.0 |
| CHI     |         80.0 |   80.0 |       80.0 |
| FRE1    |        110.0 |   20.0 |       90.0 |
| SIN     |        390.0 |  190.0 |      200.0 |
| NULL    |       1360.0 |   20.0 |      300.0 |
+---------+--------------+--------+------------+

----- Les procédures ------
-- Procédure : fonction que l'on va stocker dans sa base de donnée et pouvoir l'exploiter

DELIMITER $$
DROP PROCEDURE IF EXISTS calculate;
CREATE PROCEDURE calculate(IN x INT, IN y INT, OUT sum INT)
BEGIN   
    SET sum = x + y;
END $$
DELIMITER ;
-- /!\ ATTENTION /!\ ==> NE PAS OUBLIER L'ESPACE ENTRE "DELIMITER" ET ";"

-- Appel de la procédure dans la console mysql 
CALL calculate(1, 2, @s);
SELECT @s;

-- Autre procédure 
DELIMITER $$

DROP PROCEDURE IF EXISTS set_data$$
CREATE PROCEDURE set_data(IN comp CHAR(4))
BEGIN
  DECLARE i INT DEFAULT 1;
  DECLARE d DATE DEFAULT '1980-01-01';
  loop_data : LOOP

    IF (i = 20*12) THEN
        LEAVE loop_data;
    END IF;

    INSERT INTO 
    `sales` (created_at, company, profit) VALUES ( d, comp, ROUND(RAND()*15 * 100000, 2 ));

    SET d = DATE_ADD(d, INTERVAL 1 MONTH);
    SET i = 1 + i;
  END LOOP; 
END$$

-- rétablit le délimiter dans la console
DELIMITER ;

-- Création de la table sales
DROP TABLE IF EXISTS sales;
CREATE TABLE `sales` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `created_at` DATE DEFAULT '1980-01-01',
    `company` CHAR(4),
    `profit` DECIMAL(15,2),
    CONSTRAINT pk_id PRIMARY KEY (`id`)
) ENGINE=InnoDB ;

ALTER TABLE sales ADD CONSTRAINT fk_sales_company FOREIGN KEY (company) REFERENCES companies(`comp`);

-- Appels avec la procédure set_data
call set_data('AUS');
call set_data('CHI');
call set_data('SIN');
call set_data('FRE1');
call set_data('ITA');

-- Vérification de l'entrée des résultats 
select * from sales; 
--> retourne 1195 résultats

-- Calculez les profits de chaque compagnie par année, ainsi que le total par année pour toutes les compagnies et enfin le total des profits

-- correction
select year(created_at) as year, company, sum(profit) from sales group by year, company with rollup;
-- Le rollup calcule la somme par groupe
+------+---------+--------------+
| year | company | sum(profit)  |
+------+---------+--------------+
| 1980 | AUS     |   8818616.78 |
| 1980 | CHI     |   7923567.47 |
| 1980 | FRE1    |  12030761.87 |
| 1980 | ITA     |   8697140.21 |
| 1980 | SIN     |  10797672.47 |
| 1980 | NULL    |  48267758.80 | -- rollup pour 1980 (total de la somme des profits pour 1980)
| 1981 | AUS     |   9600204.42 |
| 1981 | CHI     |   7572767.75 |
| 1981 | FRE1    |   7930088.67 |
| 1981 | ITA     |   8588034.97 |
| 1981 | SIN     |   7352605.55 |
| 1981 | NULL    |  41043701.36 | -- rollup
| 1982 | AUS     |   8486876.41 |
| 1982 | CHI     |   4853910.11 |
| 1982 | FRE1    |   9093499.31 |
| 1982 | ITA     |   9204918.80 |
| 1982 | SIN     |   7878287.80 |
| 1982 | NULL    |  39517492.43 | -- rollup
| 1983 | AUS     |   8487558.93 |
| 1983 | CHI     |  12581621.19 |
| 1983 | FRE1    |   8339573.30 |
| 1983 | ITA     |   8007870.43 |
| 1983 | SIN     |  10926080.22 |
| 1983 | NULL    |  48342704.07 | -- rollup
| 1984 | AUS     |   7779376.59 |
| 1984 | CHI     |  10095720.21 |
| 1984 | FRE1    |   6963994.89 |
| 1984 | ITA     |   7190527.32 |
| 1984 | SIN     |  10635047.46 |
| 1984 | NULL    |  42664666.47 | -- rollup
| 1985 | AUS     |   7060589.66 |
| 1985 | CHI     |   8571520.88 |
| 1985 | FRE1    |   6551609.77 |
| 1985 | ITA     |   7422620.31 |
| 1985 | SIN     |   9028726.99 |
| 1985 | NULL    |  38635067.61 | -- rollup 
-- etc etc....
+------+---------+--------------+

