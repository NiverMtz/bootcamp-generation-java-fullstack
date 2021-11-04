SELECT * FROM film ORDER BY replacement_cost DESC LIMIT 1;

SELECT * FROM film_category;

SELECT * FROM film WHERE film_id BETWEEN 100 AND 120;

SELECT * FROM film WHERE film_id IN (SELECT film_id FROM film_category WHERE category_id=5);

SELECT film.title, actor.first_name FROM film INNER JOIN actor WHERE film_id in (SELECT film_id FROM film_actor WHERE actor_id = 10);