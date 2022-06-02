-- MySQL dump 10.13  Distrib 5.7.34, for osx11.0 (x86_64)
--
-- Host: localhost    Database: db_aviation_fsd27
-- ------------------------------------------------------
-- Server version	5.7.34

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `pilots`
--

DROP TABLE IF EXISTS `pilots`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `pilots` (
  `certificate` varchar(6) COLLATE utf8mb4_unicode_ci NOT NULL,
  `num_flying` decimal(7,1) DEFAULT NULL,
  `company` char(4) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `name` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created` datetime DEFAULT CURRENT_TIMESTAMP,
  `birth_date` datetime DEFAULT NULL,
  `next_flight` datetime DEFAULT NULL,
  `num_jobs` smallint(5) unsigned DEFAULT '0',
  `bonus` smallint(5) unsigned DEFAULT NULL,
  PRIMARY KEY (`certificate`),
  UNIQUE KEY `name` (`name`),
  KEY `fk_pilots_company` (`company`),
  CONSTRAINT `fk_pilots_company` FOREIGN KEY (`company`) REFERENCES `companies` (`comp`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pilots`
--

LOCK TABLES `pilots` WRITE;
/*!40000 ALTER TABLE `pilots` DISABLE KEYS */;
INSERT INTO `pilots` VALUES ('ct-1',90.0,'AUS','Alan','2022-05-30 14:03:43','2001-03-04 00:00:00','2020-04-04 07:50:52',30,1000),('ct-10',90.0,'FRE1','Tom','2022-05-30 14:03:43','1978-02-04 00:00:00','2020-12-04 09:50:52',10,500),('ct-100',200.0,'SIN','Yi','2022-05-30 14:03:43','1978-02-04 00:00:00','2020-12-04 09:50:52',10,500),('ct-11',200.0,'AUS','Sophie','2022-05-30 14:03:43','1978-10-17 00:00:00','2020-06-11 12:00:52',50,1000),('ct-12',190.0,'AUS','Albert','2022-05-30 14:03:43','1990-04-04 00:00:00','2020-05-08 12:50:52',10,1000),('ct-16',190.0,'SIN','Yan','2022-05-30 14:03:43','1998-01-04 00:00:00','2020-05-08 12:50:52',30,500),('ct-56',300.0,'AUS','Benoit','2022-05-30 14:03:43','2000-01-04 00:00:00','2020-02-04 12:50:52',7,2000),('ct-6',20.0,'FRE1','John','2022-05-30 14:03:43','2000-01-04 00:00:00','2020-12-04 12:50:52',13,500),('ct-7',80.0,'CHI','Pierre','2022-05-30 14:03:43','1977-01-04 00:00:00','2020-05-04 12:50:52',8,500);
/*!40000 ALTER TABLE `pilots` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-06-01  9:52:00
