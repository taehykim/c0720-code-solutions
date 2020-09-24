SELECT 
    "firstName",
    "lastName"
FROM "customers"
JOIN "payments" using ("customerId")
JOIN "rentals" using ("rentalId")
JOIN "inventory" using ("inventoryId")
JOIN "films" using ("filmId")
WHERE "films"."title" = 'Magic Mallrats'