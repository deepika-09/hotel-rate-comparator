import type { Hotel } from "../types/hotel";

const supplierAHotels: Record<string, Hotel[]> = {
  delhi: [
    {
      hotelId: "1",
      name: "Taj Palace Delhi",
      price: 4500,
      supplier: "Supplier A",
    },
    {
      hotelId: "2",
      name: "The Lalit Delhi",
      price: 5000,
      supplier: "Supplier A",
    },
  ],

  mumbai: [
    {
      hotelId: "3",
      name: "The Leela Mumbai",
      price: 5200,
      supplier: "Supplier A",
    },
    {
      hotelId: "4",
      name: "JW Marriott Mumbai",
      price: 6100,
      supplier: "Supplier A",
    },
  ],

  bangalore: [
    {
      hotelId: "5",
      name: "ITC Gardenia",
      price: 6200,
      supplier: "Supplier A",
    },
    {
      hotelId: "6",
      name: "Conrad Bangalore",
      price: 5800,
      supplier: "Supplier A",
    },
  ],

  hyderabad: [
    {
      hotelId: "7",
      name: "Hyatt Hyderabad",
      price: 4900,
      supplier: "Supplier A",
    },
  ],

  pune: [
    {
      hotelId: "8",
      name: "Westin Pune",
      price: 5400,
      supplier: "Supplier A",
    },
  ],
  chennai: [
  {
    hotelId: "9",
    name: "Novotel Chennai",
    price: 4300,
    supplier: "Supplier A",
  },
],

kolkata: [
  {
    hotelId: "10",
    name: "ITC Royal Bengal",
    price: 4800,
    supplier: "Supplier A",
  },
],

jaipur: [
  {
    hotelId: "11",
    name: "Rambagh Palace",
    price: 6500,
    supplier: "Supplier A",
  },
],

goa: [
  {
    hotelId: "12",
    name: "Vivanta Goa",
    price: 7000,
    supplier: "Supplier A",
  },
],

gurgaon: [
  {
    hotelId: "13",
    name: "Leela Ambience Gurgaon",
    price: 5800,
    supplier: "Supplier A",
  },
],
};

export async function supplierA(
  city: string
): Promise<Hotel[]> {
  await new Promise((r) => setTimeout(r, 2000));

  const scenario =
  process.env.TEST_SCENARIO || "NORMAL";

switch (scenario) {
  case "SUPPLIER_A_FAIL":
    throw new Error("Supplier A Failed");

  case "EMPTY":
    return [];
}

return (
    supplierAHotels[
    city.toLowerCase()
    ] || []
    );
}
