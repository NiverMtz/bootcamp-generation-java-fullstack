SELECT avg(replacement_cost) as "Costo Promedio" FROM film;

SELECT sum(replacement_cost) as "Costo total de inventario" FROM film;

SELECT max(replacement_cost) as "Máximo costo", title FROM film;

SELECT rental_duration, COUNT(film_id) as "Total" FROM film WHERE rental_duration = 7;

SELECT rental_duration, COUNT(film_id) as "Total" FROM film WHERE rental_duration = 3;

SELECT rental_duration, COUNT(film_id) as "Total" FROM film group by rental_duration order by Total ASC;