use adopet;

SELECT * FROM user_admin;

UPDATE user_admin
SET first_name='Marcela' WHERE id=2;

DELETE from user_admin where id=1;

SELECT * FROM user_rescuer;

UPDATE user_rescuer
SET last_name='Miranda' WHERE id=3;

DELETE from user_rescuer where id=1;

SELECT * FROM user_adoptant;

UPDATE user_adoptant
SET photo='Mi foto' WHERE id=2;

DELETE from user_adoptant where id=1;

SELECT * FROM pet;

UPDATE pet
SET name='Rocko' WHERE id=2;

DELETE from pet where id=1;

SELECT * FROM questionary;

UPDATE questionary
SET place_owner=false WHERE id=2;

DELETE from questionary where id=1;

SELECT * FROM request;

UPDATE request
SET status='available' WHERE id=2;

DELETE from request where id=1;

SELECT * FROM event;

UPDATE event
SET name='Pastelitos Mascoteros' WHERE id=2;

DELETE from event where id=1;

SELECT * FROM directory;

UPDATE directory
SET type='alimentos' WHERE id=2;

DELETE from directory where id=1;
