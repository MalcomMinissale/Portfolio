-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb_portfolio
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb_portfolio
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb_portfolio` DEFAULT CHARACTER SET utf8 ;
USE `mydb_portfolio` ;

-- -----------------------------------------------------
-- Table `mydb_portfolio`.`provincia`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb_portfolio`.`provincia` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb_portfolio`.`localidad`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb_portfolio`.`localidad` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `provincia_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_localidad_provincia1_idx` (`provincia_id` ASC) VISIBLE,
  CONSTRAINT `fk_localidad_provincia1`
    FOREIGN KEY (`provincia_id`)
    REFERENCES `mydb_portfolio`.`provincia` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb_portfolio`.`domicilio`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb_portfolio`.`domicilio` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `barrio` VARCHAR(45) NOT NULL,
  `calle` VARCHAR(45) NOT NULL,
  `número` INT NOT NULL,
  `id_localidad` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_domicilio_localidad1_idx` (`id_localidad` ASC) VISIBLE,
  CONSTRAINT `fk_domicilio_localidad1`
    FOREIGN KEY (`id_localidad`)
    REFERENCES `mydb_portfolio`.`localidad` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb_portfolio`.`persona`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb_portfolio`.`persona` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `apellido` VARCHAR(45) NOT NULL,
  `fech-nac` DATE NOT NULL,
  `dni` VARCHAR(45) NOT NULL,
  `id_domicilio` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_persona_domicilio1_idx` (`id_domicilio` ASC) VISIBLE,
  CONSTRAINT `fk_persona_domicilio1`
    FOREIGN KEY (`id_domicilio`)
    REFERENCES `mydb_portfolio`.`domicilio` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb_portfolio`.`contacto`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb_portfolio`.`contacto` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `tel_fijo` INT NULL,
  `email` VARCHAR(45) NOT NULL,
  `persona_id` INT NOT NULL,
  `tel_móvil` INT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_contacto_persona_idx` (`persona_id` ASC) VISIBLE,
  CONSTRAINT `fk_contacto_persona`
    FOREIGN KEY (`persona_id`)
    REFERENCES `mydb_portfolio`.`persona` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb_portfolio`.`educación`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb_portfolio`.`educación` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `año_inicio` INT NOT NULL,
  `año_egreso` INT NULL,
  `persona_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_educación_persona1_idx` (`persona_id` ASC) VISIBLE,
  CONSTRAINT `fk_educación_persona1`
    FOREIGN KEY (`persona_id`)
    REFERENCES `mydb_portfolio`.`persona` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb_portfolio`.`habilidades`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb_portfolio`.`habilidades` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `programa_o_funcion` VARCHAR(45) NOT NULL,
  `nivel` VARCHAR(45) NOT NULL,
  `persona_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_habilidades_persona1_idx` (`persona_id` ASC) VISIBLE,
  CONSTRAINT `fk_habilidades_persona1`
    FOREIGN KEY (`persona_id`)
    REFERENCES `mydb_portfolio`.`persona` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb_portfolio`.`experiencia`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb_portfolio`.`experiencia` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `año_inicio` INT NOT NULL,
  `año_fin` INT NULL,
  `persona_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_experiencia_persona1_idx` (`persona_id` ASC) VISIBLE,
  CONSTRAINT `fk_experiencia_persona1`
    FOREIGN KEY (`persona_id`)
    REFERENCES `mydb_portfolio`.`persona` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb_portfolio`.`red social`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb_portfolio`.`red social` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `facebook` VARCHAR(45) NULL,
  `linkedin` VARCHAR(45) NULL,
  `instagram` VARCHAR(45) NULL,
  `persona_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_redes sociales_persona1_idx` (`persona_id` ASC) VISIBLE,
  CONSTRAINT `fk_redes sociales_persona1`
    FOREIGN KEY (`persona_id`)
    REFERENCES `mydb_portfolio`.`persona` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb_portfolio`.`nivel_educativo`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb_portfolio`.`nivel_educativo` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nivel` VARCHAR(45) NOT NULL,
  `educación_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_nivel_educativo_educación1_idx` (`educación_id` ASC) VISIBLE,
  CONSTRAINT `fk_nivel_educativo_educación1`
    FOREIGN KEY (`educación_id`)
    REFERENCES `mydb_portfolio`.`educación` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb_portfolio`.`institución`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb_portfolio`.`institución` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `nivel_educativo_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_institución_nivel_educativo1_idx` (`nivel_educativo_id` ASC) VISIBLE,
  CONSTRAINT `fk_institución_nivel_educativo1`
    FOREIGN KEY (`nivel_educativo_id`)
    REFERENCES `mydb_portfolio`.`nivel_educativo` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb_portfolio`.`título`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb_portfolio`.`título` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre_título` VARCHAR(45) NOT NULL,
  `institución_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_título_institución1_idx` (`institución_id` ASC) VISIBLE,
  CONSTRAINT `fk_título_institución1`
    FOREIGN KEY (`institución_id`)
    REFERENCES `mydb_portfolio`.`institución` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb_portfolio`.`empresa`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb_portfolio`.`empresa` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `experiencia_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_empresa_experiencia1_idx` (`experiencia_id` ASC) VISIBLE,
  CONSTRAINT `fk_empresa_experiencia1`
    FOREIGN KEY (`experiencia_id`)
    REFERENCES `mydb_portfolio`.`experiencia` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb_portfolio`.`puesto/función`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb_portfolio`.`puesto/función` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre_puesto/funcion` VARCHAR(45) NOT NULL,
  `descripción` VARCHAR(250) NULL,
  `empresa_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_puesto/función_empresa1_idx` (`empresa_id` ASC) VISIBLE,
  CONSTRAINT `fk_puesto/función_empresa1`
    FOREIGN KEY (`empresa_id`)
    REFERENCES `mydb_portfolio`.`empresa` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb_portfolio`.`tipo_trabajo`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb_portfolio`.`tipo_trabajo` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `tipo_empleo` VARCHAR(45) NOT NULL,
  `puesto/función_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_tipo_trabajo_puesto/función1_idx` (`puesto/función_id` ASC) VISIBLE,
  CONSTRAINT `fk_tipo_trabajo_puesto/función1`
    FOREIGN KEY (`puesto/función_id`)
    REFERENCES `mydb_portfolio`.`puesto/función` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
