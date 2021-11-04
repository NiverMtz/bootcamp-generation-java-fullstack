-- únicamente el registro con ese id
SELECT * FROM actor WHERE actor_id = 123;
-- Todos los que tengan id mayor a 63
SELECT * FROM actor WHERE actor_id > 63;
-- Atributos específicos
SELECT * FROM actor_id, first_name, last_name WHERE actor_id > 63;
-- id pares
SELECT * FROM actor WHERE actor_id % 2 = 0;
-- operador AND
SELECT * FROM actor WHERE first_name = 'CHRIS' AND actor_id > 50;