SELECT
    "line1" as "street",
    "cities"."name" as "city",
    "district",
    "countries"."name" as "country"
FROM "addresses"
JOIN "cities" using ("cityId")
JOIN "countries" using ("countryId")