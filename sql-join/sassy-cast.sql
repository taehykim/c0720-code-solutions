SELECT
    "firstName",
    "lastName"
FROM "actors"
JOIN "castMembers" using ("actorId")
JOIN "films" using("filmId")
WHERE "films"."title" = 'Jersey Sassy'