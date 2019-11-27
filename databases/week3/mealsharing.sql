-- creating the data model for mealsharing
CREATE DATABASE `MealSharing`;
USE `MealSharing`;
SET NAMES utf8mb4;

CREATE TABLE `Meal` (
	`id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
	`title` VARCHAR(255) NOT NULL,
    `description` TEXT DEFAULT NULL,
    `location` VARCHAR(255) NOT NULL,
    `when` DATETIME NOT NULL,
    `max_reservations`  INT,
    `price` DECIMAL(10,2),
	`created_date` DATE NOT NULL,
     PRIMARY KEY(id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE Reservation(
 `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
 `number_of_guests` INT Null DEFAULT NULL,
 `meal_id` INT UNSIGNED NOT NULL ,
 `created_date` DATE NOT NULL,
  PRIMARY KEY(id),
 FOREIGN KEY (meal_id) REFERENCES Meal(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE Review(
 `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
 `title` VARCHAR(255) NOT NULL,
 `description` TEXT DEFAULT NULL,
 `meal_id` INT UNSIGNED NOT NULL ,
 `stars` INT NOT NULL,
 `created_date` DATE NOT NULL,
  PRIMARY KEY(id),
 FOREIGN KEY (meal_id) REFERENCES Meal(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Meal
INSERT INTO Meal(title, description, location, `When`, max_reservations, price, created_date)
-- VALUES ('Pasta', 'Pasta with chicken', 'Copenhagen', '26.11.2019', 2, '10.55', '10.10.2019');
-- VALUES ('Pizza', 'Pizza with cheese', 'Odense', '01.09.2019', 4, '5.55', now());
-- VALUES ('Eggs', 'boiled eggs,omlet', 'Glostrup,copenhgen', '2019-11-25', 3, '3', now());
 -- VALUES ('shavarma', 'with chicken,with meat', 'Alborg', '2019-11-26', 1, '6.23', now());
 -- VALUES ('Potato', 'bolied potato', 'Copenhagen', '2019-11-27', 3, '2.55', now());
 VALUES ('cake', 'chocklate,vanilla,straberry', 'Arhus', '2019-11-30', 2, '2.55', now());

  
  
  -- Reservation
INSERT INTO Reservation(number_of_guests, meal_id ,created_date) 
-- VALUES (2, 1, now());
-- VALUES (4, 2, now());
-- VALUES (3, 5, now());
-- VALUES (4, 4, now());
 -- VALUES (6, 3, now());
VALUES (2, 6, now());


-- Review
INSERT INTO Review(title, description, meal_id, stars, created_date)
-- VALUES ('Very good', 'I like it very much', 4, 5, now());
-- VALUES ('Good', 'I like it', 3, 4, now());
-- VALUES ('Normal', 'It was normal', 1, 3, now());
--  VALUES ('Pretty normal', 'I like it a little bit', 2, 2, now());
-- VALUES ('Bad', 'Ido not like it very much', 3, 1, now());
-- VALUES ('Very good', 'I like it very much', 5, 5, now());
VALUES ('Good', 'I like it', 6, 4, now());

 
 -- Queries to write for Meal
 
 -- Get all meals
 SELECT * 
 FROM meal;
 
-- Add a new meal
INSERT INTO Meal(Title, Description, Location, `When`, max_reservations, price, created_date) 
VALUES ('Salat', 'all greeny veggies', 'Copenhagen', '28.11.2019', 6, '4', '10.11.2019');
     
-- Get a meal with any id, fx 1
SELECT * 
FROM meal
WHERE id=1;

-- Update a meal with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE Meal
SET Title = 'Sausages with eggs', Description = 'Fried sausages with eggs'
WHERE Id = 3;

-- Delete a meal with any id, fx 1
DELETE 
FROM Meal 
WHERE Id = 8;
    
-- Queries to write for Reservation

-- Get all reservations
SELECT * 
FROM reservation;
   
-- Add a new reservation
INSERT INTO Reservation(number_of_guests, meal_id ,created_date) 
VALUES (1, 3, now());
    
-- Get a reservation with any id, fx 1
SELECT * 
FROM reservation
WHERE id=4;

-- Update a reservation with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE Reservation
SET number_of_guests = 7,  meal_id= 4
WHERE Id = 4;
    
-- Delete a reservation with any id, fx 1
DELETE 
FROM Reservation 
WHERE Id = 8;
    
-- Queries to write for Review
-- Get all reviews
SELECT * 
FROM review;
     
-- Add a new review
INSERT INTO  Review(title, description, meal_id, stars, created_date)
VALUES ('Good enough', 'I like', 4, 3, now());
    
-- Get a review with any id, fx 1
SELECT * 
FROM Review 
WHERE Id = 3;

-- Update a review with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE Review
SET Title = 'good'
WHERE Id = 6;

-- Delete a review with any id, fx 1
DELETE 
FROM Review 
WHERE id = 8;
    
-- Additional queries

-- Get meals that has a price smaller than a specific price fx 90
SELECT * 
FROM Meal 
WHERE Price < 7;

-- Get meals that still has available reservations
SELECT Meal.id, Meal.title, Meal.max_reservations, sum(Reservation.number_of_guests) 
	FROM meal
	INNER JOIN reservation
	ON Meal.id = Reservation.Meal_id
	GROUP BY Meal.id
	HAVING Meal.max_reservations > sum(Reservation.number_of_guests);


-- Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde
SELECT * 
FROM Meal
WHERE Title 
LIKE '%p%';

-- Get meals that has been created between two dates
SELECT * 
FROM Meal 
WHERE Created_date 
BETWEEN '2019-11-25' AND now();

-- Get only specific number of meals fx return only 5 meals
SELECT * 
FROM Meal 
LIMIT 5;

-- Get the meals that have good reviews
SELECT * 
FROM Meal 
INNER JOIN Review 
ON Meal.id = Review.meal_id
WHERE Review.Title = 'Very Good' OR Review.Title = 'Good';
    

-- Get reservations for a specific meal sorted by created_date
SELECT * 
FROM Reservation 
WHERE Meal_id = 3 
ORDER BY created_date;

-- Sort all meals by average number of stars in the reviews
SELECT Meal.id, Meal.title, AVG(Review.stars) as avg_review
FROM Meal 
INNER JOIN Review 
ON Meal.id = Review.Meal_id 
GROUP BY Meal.title
ORDER BY Review.stars;
  