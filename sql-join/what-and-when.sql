SELECT
    "releaseYear",
    "categories"."name" as "genre"
FROM "films"
JOIN "filmCategory" using ("filmId")
JOIN "categories" using("categoryId")
WHERE "films"."title" = 'Boogie Amelie';