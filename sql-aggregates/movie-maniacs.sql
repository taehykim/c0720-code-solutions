SELECT
    "firstName",
    "lastName",
    sum("amount") as "totalAmountSpent"
FROM "customers"
JOIN "payments" using ("customerId")
GROUP BY "customerId"
ORDER BY "totalAmountSpent" desc