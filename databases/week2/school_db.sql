--School database:
-- Create a new database containing the following tables:
-- Class: with the columns: id, name, begins (date), ends (date)
-- Student: with the columns: id, name, email, phone, class_id (foreign key)

CREATE DATABASE `hyf_db_school`;
USE `hyf_db_school`;
SET NAMES utf8mb4;

-- Class: with the columns: id, name, begins (date), ends (date)
CREATE TABLE `class` (
	`id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
	`name` VARCHAR(255) NOT NULL,
	`date_begins` DATETIME NOT NULL,
	`date_end` DATETIME NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--Student: with the columns: id, name, email, phone, class_id (foreign key)
CREATE TABLE `student` (
	`id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
	`name` VARCHAR(255) NOT NULL,
	`phone` VARCHAR(255) NOT NULL,
	`class_id`INT(10) UNSIGNED NOT NULL,
  CONSTRAINT `fk_class` FOREIGN KEY (`class_id`) 
	REFERENCES `class` (`id`) ON 
    DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Create an index on the name column of the student table
CREATE INDEX student_name 
ON student (name);

-- Add a new column to the class table named status which can only have the following values:
-- not-started, ongoing, finished (hint: enumerations).
ALTER TABLE class 
ADD COLUMN status ENUM('not-started', 'ongoing', 'finished');
