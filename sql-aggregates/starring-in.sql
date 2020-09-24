SELECT 
    "categories"."name" as "genre",
    count(*)
FROM "films"
JOIN "castMembers" using ("filmId")
JOIN "actors" using ("actorId")
JOIN "filmCategory" using ("filmId")
JOIN "categories" using ("categoryId")
WHERE "actors"."firstName" = 'Lisa' AND "actors"."lastName" = 'Monroe'
GROUP BY "categories"."name";



