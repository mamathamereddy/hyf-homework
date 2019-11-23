-- Add a task with the these attributes: title, description, created, updated, dueDate, statusID, userID
INSERT INTO task (title, description, created, updated, due_date, status_id, user_id)
 VALUES ('learn to code','data bases deletion',now(),now(),'2019-12-22 20:58:03',1,7),
 VALUES ('learn node ','api creation',now(),now(),'2020-1-31 23:58:03',2,3),
 VALUES ('JavaScript','learn to build apps with js',now(),now(),'2019-11-21 20:58:03',2,6);
 SELECT * FROM task;

-- Change the title of a task with these attributes: taskID, newTitle
UPDATE task 
SET title = 'react component building'
WHERE id = 38;
SELECT * FROM task WHERE id = 38;

-- Change the task due date with these attributes: taskID, newDueDate
UPDATE task
SET due_date = '2020-01-26 12:30:00'
WHERE id = 39;
SELECT * FROM task WHERE id = 39;


-- Change the task status with these attributes: taskID, newStatus
UPDATE task
SET status_id = 2
WHERE id = 40;
SELECT * FROM task WHERE id = 40;

-- Mark a task as complete with this attribute: taskID
UPDATE task 
SET status_id = 3
WHERE id = 40;
SELECT * FROM task WHERE id = 40;

-- Delete task with this attribute: taskID
DELETE FROM task
WHERE id = 39;
SELECT * FROM task;