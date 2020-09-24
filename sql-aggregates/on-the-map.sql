SELECT
    "countries"."name" as "country",
    count(*) 
FROM "countries"
JOIN "cities" using ("countryId")
GROUP BY "countryId"
ORDER BY "countries"."name";