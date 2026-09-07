import type { Hotel } from "../types/hotel";

export function findBestHotel(
  supplierAHotels: Hotel[],
  supplierBHotels: Hotel[]
) {
  const allHotels = [
    ...supplierAHotels,
    ...supplierBHotels,
  ];

  if (allHotels.length === 0) {
    throw new Error("No hotels found");
  }

  const bestHotel = allHotels.reduce(
    (cheapest, current) =>
      current.price < cheapest.price
        ? current
        : cheapest
  );

  return {
    bestHotel,

    supplierA:
      supplierAHotels.length > 0
        ? {
            supplier:
              supplierAHotels[0].supplier,
            price:
              supplierAHotels[0].price,
          }
        : null,

    supplierB:
      supplierBHotels.length > 0
        ? {
            supplier:
              supplierBHotels[0].supplier,
            price:
              supplierBHotels[0].price,
          }
        : null,
  };
}