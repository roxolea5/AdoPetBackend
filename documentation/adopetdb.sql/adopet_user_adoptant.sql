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
-- Table structure for table `user_adoptant`
--

DROP TABLE IF EXISTS `user_adoptant`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_adoptant` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'adoptant_user id',
  `username` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `first_name` varchar(150) COLLATE utf8_spanish_ci NOT NULL,
  `last_name` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `email` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `password` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `date_of_birth` date NOT NULL,
  `phone` bigint(20) NOT NULL,
  `photo` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `status` tinyint(4) NOT NULL COMMENT '1 stands for active, 0 for unactive',
  `user_rescuer_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  UNIQUE KEY `username` (`username`),
  KEY `FK_user_rescuer` (`user_rescuer_id`),
  CONSTRAINT `FK_user_rescuer` FOREIGN KEY (`user_rescuer_id`) REFERENCES `user_rescuer` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci COMMENT='user_adoptant profile';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_adoptant`
--

LOCK TABLES `user_adoptant` WRITE;
/*!40000 ALTER TABLE `user_adoptant` DISABLE KEYS */;
INSERT INTO `user_adoptant` VALUES (1,'frankOcean','Frank','Ocean','fOcean@hotmail.com','sdb3hweb','1995-01-29',3311331133,' ',0,1),(2,'selenaGomez','Selena','Gomez','sgomez@hotmail.com','sd5f5sdf5sd5','1992-01-29',335485985,'Mi foto',1,1),(3,'pCherry','Paul','Cherry','pCherry@hotmail.com','sfdfd5fd5f','1991-01-29',3331515896,' ',1,3),(4,'jessieReyez','Jessie','Reyez','jreyez@hotmail.com','dchjdshjsdd','1999-01-29',3398569586,' ',1,2);
/*!40000 ALTER TABLE `user_adoptant` ENABLE KEYS */;
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
