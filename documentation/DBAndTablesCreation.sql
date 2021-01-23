DROP DATABASE IF EXISTS adoPet;

CREATE DATABASE `adoPet` /*!40100 COLLATE 'utf8_spanish_ci' */;

CREATE TABLE IF NOT EXISTS `adoPet`.`user_admin` (
  `id` INT(11) NOT NULL AUTO_INCREMENT UNIQUE COMMENT 'admin_user id',
  `username` VARCHAR(100) CHARACTER SET 'utf8' COLLATE 'utf8_spanish_ci' UNIQUE NOT NULL,
  `first_name` VARCHAR(150) CHARACTER SET 'utf8' COLLATE 'utf8_spanish_ci' NOT NULL,
  `last_name` VARCHAR(255) CHARACTER SET 'utf8' COLLATE 'utf8_spanish_ci' NOT NULL,
  `email` VARCHAR(255) CHARACTER SET 'utf8' COLLATE 'utf8_spanish_ci' NOT NULL,
  `password` VARCHAR(255) CHARACTER SET 'utf8' COLLATE 'utf8_spanish_ci' NOT NULL,
  `date_of_birth` DATE NOT NULL,
  `phone` BIGINT NOT NULL,
  `status` TINYINT(4) NOT NULL COMMENT '1 stands for active, 0 for unactive',
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 1
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_spanish_ci
COMMENT = 'user_admin profile';

CREATE TABLE IF NOT EXISTS `adoPet`.`user_rescuer` (
  `id` INT(11) NOT NULL AUTO_INCREMENT UNIQUE COMMENT 'rescuer_user id',
  `username` VARCHAR(100) CHARACTER SET 'utf8' COLLATE 'utf8_spanish_ci' UNIQUE NOT NULL,
  `first_name` VARCHAR(150) CHARACTER SET 'utf8' COLLATE 'utf8_spanish_ci' NOT NULL,
  `last_name` VARCHAR(255) CHARACTER SET 'utf8' COLLATE 'utf8_spanish_ci' NOT NULL,
  `email` VARCHAR(255) CHARACTER SET 'utf8' COLLATE 'utf8_spanish_ci' NOT NULL,
  `password` VARCHAR(255) CHARACTER SET 'utf8' COLLATE 'utf8_spanish_ci' NOT NULL,
  `date_of_birth` DATE NOT NULL,
  `phone` BIGINT NOT NULL,
  `photo` VARCHAR(255) CHARACTER SET 'utf8' COLLATE 'utf8_spanish_ci' NOT NULL,
  `address` VARCHAR(255) CHARACTER SET 'utf8' COLLATE 'utf8_spanish_ci' NOT NULL,
  `interview_date` DATE NOT NULL,
  `status` TINYINT(4) NOT NULL COMMENT '1 stands for active, 0 for unactive',
  `user_admin_id` INT(11) NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `FK_user_admin`
    FOREIGN KEY (`user_admin_id`)
    REFERENCES `adoPet`.`user_admin` (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 1
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_spanish_ci
COMMENT = 'user_rescuer profile';

CREATE TABLE IF NOT EXISTS `adoPet`.`user_adoptant` (
  `id` INT(11) NOT NULL AUTO_INCREMENT UNIQUE COMMENT 'adoptant_user id',
  `username` VARCHAR(100) CHARACTER SET 'utf8' COLLATE 'utf8_spanish_ci' UNIQUE NOT NULL,
  `first_name` VARCHAR(150) CHARACTER SET 'utf8' COLLATE 'utf8_spanish_ci' NOT NULL,
  `last_name` VARCHAR(255) CHARACTER SET 'utf8' COLLATE 'utf8_spanish_ci' NOT NULL,
  `email` VARCHAR(255) CHARACTER SET 'utf8' COLLATE 'utf8_spanish_ci' NOT NULL,
  `password` VARCHAR(255) CHARACTER SET 'utf8' COLLATE 'utf8_spanish_ci' NOT NULL,
  `date_of_birth` DATE NOT NULL,
  `phone` BIGINT NOT NULL,
  `photo` VARCHAR(255) CHARACTER SET 'utf8' COLLATE 'utf8_spanish_ci' NOT NULL,
  `status` TINYINT(4) NOT NULL COMMENT '1 stands for active, 0 for unactive',
  `user_rescuer_id` INT(11) NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `FK_user_rescuer`
    FOREIGN KEY (`user_rescuer_id`)
    REFERENCES `adoPet`.`user_rescuer` (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 1
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_spanish_ci
COMMENT = 'user_adoptant profile';

CREATE TABLE IF NOT EXISTS `adoPet`.`pet` (
  `id` INT(11) NOT NULL AUTO_INCREMENT UNIQUE COMMENT 'pet id',
  `name` VARCHAR(30) CHARACTER SET 'utf8' COLLATE 'utf8_spanish_ci' NOT NULL,
  `photo` VARCHAR(255) CHARACTER SET 'utf8' COLLATE 'utf8_spanish_ci' NOT NULL,
  `category` ENUM('dog', 'cat', 'other') NOT NULL,
  `specie` VARCHAR(50) CHARACTER SET 'utf8' COLLATE 'utf8_spanish_ci' NOT NULL,
  `sex` CHAR(1) CHARACTER SET 'utf8' COLLATE 'utf8_spanish_ci' NOT NULL COMMENT 'F stands for female, M for male',
  `age` INT NOT NULL COMMENT 'stored in months',
  `size` ENUM('S', 'M', 'L')NOT NULL COMMENT 'S stands for small, M for medium, and L for large size',
  `description` VARCHAR(255) CHARACTER SET 'utf8' COLLATE 'utf8_spanish_ci' NOT NULL,
  `iskidfriendly` BOOLEAN NOT NULL,
  `isdogfriendly` BOOLEAN NOT NULL,
  `iscatfriendly` BOOLEAN NOT NULL,
  `sterilized` BOOLEAN NOT NULL,
  `vaccines` BOOLEAN NOT NULL,
  `payment` ENUM('none', 'money', 'food'),
  `status` TINYINT(4) NOT NULL COMMENT '1 stands for active, 0 for unactive',  
  `user_rescuer_id` INT(11) NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `FK_user_rescuer1`
    FOREIGN KEY (`user_rescuer_id`)
    REFERENCES `adoPet`.`user_rescuer` (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 1
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_spanish_ci
COMMENT = 'pet profile';

CREATE TABLE IF NOT EXISTS `adoPet`.`questionary` (
  `id` INT(11) NOT NULL AUTO_INCREMENT UNIQUE COMMENT 'questionary id',
  `address` VARCHAR(255) CHARACTER SET 'utf8' COLLATE 'utf8_spanish_ci' NOT NULL,
  `pet_owner` BOOLEAN NOT NULL,
  `place_owner` BOOLEAN NOT NULL,
  `family_members` INT NOT NULL,
  `family_agreement` BOOLEAN NOT NULL,
  `user_adoptant_id` INT(11) NOT NULL,
  `user_rescuer_id` INT(11),
  PRIMARY KEY (`id`),
  CONSTRAINT `FK_user_adoptant2`
    FOREIGN KEY (`user_adoptant_id`)
    REFERENCES `adoPet`.`user_adoptant` (`id`),
  CONSTRAINT `FK_user_rescuer2`
    FOREIGN KEY (`user_rescuer_id`)
    REFERENCES `adoPet`.`user_rescuer` (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 1
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_spanish_ci
COMMENT = 'questionary profile';

CREATE TABLE IF NOT EXISTS `adoPet`.`event` (
  `id` INT(11) NOT NULL AUTO_INCREMENT UNIQUE COMMENT 'questionary id',
  `photo` VARCHAR(255) CHARACTER SET 'utf8' COLLATE 'utf8_spanish_ci' NOT NULL,
  `name` VARCHAR(100) CHARACTER SET 'utf8' COLLATE 'utf8_spanish_ci' NOT NULL,
  `date` DATETIME NOT NULL,
  `place` VARCHAR(255) CHARACTER SET 'utf8' COLLATE 'utf8_spanish_ci' NOT NULL,
  `description` VARCHAR(255) CHARACTER SET 'utf8' COLLATE 'utf8_spanish_ci' NOT NULL,
  `user_admin_id` INT(11),
  `user_rescuer_id` INT(11),
  PRIMARY KEY (`id`),
  CONSTRAINT `FK_user_admin3`
    FOREIGN KEY (`user_admin_id`)
    REFERENCES `adoPet`.`user_admin` (`id`),
  CONSTRAINT `FK_user_rescuer3`
    FOREIGN KEY (`user_rescuer_id`)
    REFERENCES `adoPet`.`user_rescuer` (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 1
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_spanish_ci
COMMENT = 'event profile';

CREATE TABLE IF NOT EXISTS `adoPet`.`directory` (
  `id` INT(11) NOT NULL AUTO_INCREMENT UNIQUE COMMENT 'questionary id',
  `photo` VARCHAR(255) CHARACTER SET 'utf8' COLLATE 'utf8_spanish_ci' NOT NULL,
  `type` ENUM ('veterinario', 'entrenador', 'alimentos') CHARACTER SET 'utf8' COLLATE 'utf8_spanish_ci' NOT NULL,
  `representative` VARCHAR(255) CHARACTER SET 'utf8' COLLATE 'utf8_spanish_ci' NOT NULL,
  `address` VARCHAR(255) CHARACTER SET 'utf8' COLLATE 'utf8_spanish_ci' NOT NULL,
  `phone` BIGINT NOT NULL,
  `days` VARCHAR(100) NOT NULL,
  `hour` VARCHAR(100) NOT NULL,
  `user_admin_id` INT(11),
  `user_rescuer_id` INT(11),
  PRIMARY KEY (`id`),
  CONSTRAINT `FK_user_admin4`
    FOREIGN KEY (`user_admin_id`)
    REFERENCES `adoPet`.`user_admin` (`id`),
  CONSTRAINT `FK_user_rescuer4`
    FOREIGN KEY (`user_rescuer_id`)
    REFERENCES `adoPet`.`user_rescuer` (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 1
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_spanish_ci
COMMENT = 'directory profile';

CREATE TABLE IF NOT EXISTS `adoPet`.`request` (
  `id` INT(11) NOT NULL AUTO_INCREMENT UNIQUE COMMENT 'questionary id',
  `pet_id` INT(11) NOT NULL,
  `user_adoptant_id` INT(11) NOT NULL,
  `user_rescuer_id` INT(11),
  `status` ENUM('available','requested', 'evaluation', 'adopted'),  
  PRIMARY KEY (`id`),
  CONSTRAINT `FK_pet5`
    FOREIGN KEY (`pet_id`)
    REFERENCES `adoPet`.`pet` (`id`),
  CONSTRAINT `FK_user_adoptant5`
    FOREIGN KEY (`user_adoptant_id`)
    REFERENCES `adoPet`.`user_adoptant` (`id`),
  CONSTRAINT `FK_user_rescuer5`
    FOREIGN KEY (`user_rescuer_id`)
    REFERENCES `adoPet`.`user_rescuer` (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 1
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_spanish_ci
COMMENT = 'request profile';