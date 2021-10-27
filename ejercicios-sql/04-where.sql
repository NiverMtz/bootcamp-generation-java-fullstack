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

SELECT rental_duration, COUNT(film_id) as "Total" FROM film WHERE rental_duration = 7;

SELECT rental_duration, COUNT(film_id) as "Total" FROM film WHERE rental_duration = 3;

SELECT rental_duration, COUNT(film_id) as "Total" FROM film group by rental_duration order by Total ASC;

SELECT avg(replacement_cost) as "Costo Promedio" FROM film;

SELECT sum(replacement_cost) as "Costo total de inventario" FROM film;

SELECT max(replacement_cost) as "Máximo costo", title FROM film;

SELECT * FROM film ORDER BY replacement_cost DESC LIMIT 1;

SELECT * FROM film_category;

SELECT * FROM film WHERE film_id BETWEEN 100 AND 120;

SELECT * FROM film WHERE film_id IN (SELECT film_id FROM film_category WHERE category_id=5);

SELECT film.title, actor.first_name FROM film INNER JOIN actor WHERE film_id in (SELECT film_id FROM film_actor WHERE actor_id = 10);