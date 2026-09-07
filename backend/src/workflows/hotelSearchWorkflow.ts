import { proxyActivities } from "@temporalio/workflow";

interface Hotel {
  hotelId: string;
  name: string;
  price: number;
  supplier: string;
}

const {
  fetchSupplierA,
  fetchSupplierB,
} = proxyActivities<{
 fetchSupplierA: (city: string) => Promise<Hotel[]>;
fetchSupplierB: (city: string) => Promise<Hotel[]>;
}>({
  startToCloseTimeout: "5 seconds",

  retry: {
  maximumAttempts: 3,
  initialInterval: "1s",
},
});

export async function hotelSearchWorkflow(city: string) {
  const [supplierAResult, supplierBResult] =
    await Promise.allSettled([
      fetchSupplierA(city),
      fetchSupplierB(city),
    ]);

  const supplierAHotels =
    supplierAResult.status === "fulfilled"
      ? supplierAResult.value
      : [];

  const supplierBHotels =
    supplierBResult.status === "fulfilled"
      ? supplierBResult.value
      : [];

  const allHotels = [
    ...supplierAHotels,
    ...supplierBHotels,
  ];

  if (allHotels.length === 0) {
    throw new Error("No hotels found");
  }

  const bestHotel = [...allHotels].sort(
    (a, b) => a.price - b.price
  )[0];

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