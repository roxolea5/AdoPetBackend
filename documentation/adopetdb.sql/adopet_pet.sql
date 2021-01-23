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
-- Table structure for table `pet`
--

DROP TABLE IF EXISTS `pet`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pet` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'pet id',
  `name` varchar(30) COLLATE utf8_spanish_ci NOT NULL,
  `photo` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `category` enum('dog','cat','other') COLLATE utf8_spanish_ci NOT NULL,
  `specie` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `sex` char(1) COLLATE utf8_spanish_ci NOT NULL COMMENT 'F stands for female, M for male',
  `age` int(11) NOT NULL COMMENT 'stored in months',
  `size` enum('S','M','L') COLLATE utf8_spanish_ci NOT NULL COMMENT 'S stands for small, M for medium, and L for large size',
  `description` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `iskidfriendly` tinyint(1) NOT NULL,
  `isdogfriendly` tinyint(1) NOT NULL,
  `iscatfriendly` tinyint(1) NOT NULL,
  `sterilized` tinyint(1) NOT NULL,
  `vaccines` tinyint(1) NOT NULL,
  `payment` enum('none','money','food') COLLATE utf8_spanish_ci DEFAULT NULL,
  `status` tinyint(4) NOT NULL COMMENT '1 stands for active, 0 for unactive',
  `user_rescuer_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  KEY `FK_user_rescuer1` (`user_rescuer_id`),
  CONSTRAINT `FK_user_rescuer1` FOREIGN KEY (`user_rescuer_id`) REFERENCES `user_rescuer` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci COMMENT='pet profile';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pet`
--

LOCK TABLES `pet` WRITE;
/*!40000 ALTER TABLE `pet` DISABLE KEYS */;
INSERT INTO `pet` VALUES (1,'pipo',' ','dog','mixed','F',18,'S','perro amable',1,1,0,0,0,'none',1,1),(2,'Rocko',' ','dog','chihuahua','M',24,'S','perro mordelon',1,0,1,1,1,'money',1,2),(3,'rata',' ','cat','egipcyan','F',2,'S','gato chiqueado',0,0,0,0,0,'none',1,2),(4,'kayza',' ','other','fish','M',1,'S','pez beta',1,1,1,1,1,'none',1,3);
/*!40000 ALTER TABLE `pet` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-01-23  2:26:50
