CREATE DATABASE  IF NOT EXISTS `adopet` /*!40100 DEFAULT CHARACTER SET utf8 COLLATE utf8_spanish_ci */;
USE `adopet`;
-- MySQL dump 10.13  Distrib 8.0.22, for Win64 (x86_64)
--
-- Host: localhost    Database: adopet
-- ------------------------------------------------------
-- Server version	5.7.32-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `questionary`
--

DROP TABLE IF EXISTS `questionary`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `questionary` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'questionary id',
  `address` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `pet_owner` tinyint(1) NOT NULL,
  `place_owner` tinyint(1) NOT NULL,
  `family_members` int(11) NOT NULL,
  `family_agreement` tinyint(1) NOT NULL,
  `user_adoptant_id` int(11) NOT NULL,
  `user_rescuer_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  KEY `FK_user_adoptant2` (`user_adoptant_id`),
  KEY `FK_user_rescuer2` (`user_rescuer_id`),
  CONSTRAINT `FK_user_adoptant2` FOREIGN KEY (`user_adoptant_id`) REFERENCES `user_adoptant` (`id`),
  CONSTRAINT `FK_user_rescuer2` FOREIGN KEY (`user_rescuer_id`) REFERENCES `user_rescuer` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci COMMENT='questionary profile';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `questionary`
--

LOCK TABLES `questionary` WRITE;
/*!40000 ALTER TABLE `questionary` DISABLE KEYS */;
INSERT INTO `questionary` VALUES (1,'Zapopan',1,1,5,1,1,1),(2,'Guadalajara',1,0,2,1,1,2),(3,'Tlaquepaque',1,1,3,1,1,2),(4,'Tonala',0,1,4,1,1,3);
/*!40000 ALTER TABLE `questionary` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-01-23  2:26:51
