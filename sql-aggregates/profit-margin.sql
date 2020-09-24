with rental_revenue as (
    select
        "filmId",
        "title",
        sum("amount") as "totalRevenue"
    from "payments"
    join "rentals" using ("rentalId")
    join "inventory" using ("inventoryId")
    join "films" using ("filmId")
    group by "filmId"
), rental_cost as (
    select
        "filmId",
        "title",
        sum("replacementCost") as "totalCost"
    from "films"
    join "inventory" using ("filmId")
    group by "filmId"
)
select 
    "filmId",
    "rental_revenue"."title" as "movie title",
    "totalRevenue",
    "totalCost",
    "totalRevenue" - "totalCost" as "profit"
from rental_revenue
join rental_cost using ("filmId")
order by "profit" desc
limit 5;

