import type { Hotel } from "../types/hotel";

const supplierBHotels: Record<string, Hotel[]> = {
  delhi: [
    {
      hotelId: "11",
      name: "Taj Palace Delhi",
      price: 4300,
      supplier: "Supplier B",
    },
    {
      hotelId: "12",
      name: "The Lalit Delhi",
      price: 4800,
      supplier: "Supplier B",
    },
  ],

  mumbai: [
    {
      hotelId: "13",
      name: "The Leela Mumbai",
      price: 5000,
      supplier: "Supplier B",
    },
    {
      hotelId: "14",
      name: "JW Marriott Mumbai",
      price: 6300,
      supplier: "Supplier B",
    },
  ],

  bangalore: [
    {
      hotelId: "15",
      name: "ITC Gardenia",
      price: 6000,
      supplier: "Supplier B",
    },
    {
      hotelId: "16",
      name: "Conrad Bangalore",
      price: 5500,
      supplier: "Supplier B",
    },
  ],

  hyderabad: [
    {
      hotelId: "17",
      name: "Hyatt Hyderabad",
      price: 4500,
      supplier: "Supplier B",
    },
  ],

  pune: [
    {
      hotelId: "18",
      name: "Westin Pune",
      price: 5700,
      supplier: "Supplier B",
    },
  ],
  chennai: [
  {
    hotelId: "19",
    name: "Novotel Chennai",
    price: 4100,
    supplier: "Supplier B",
  },
],

kolkata: [
  {
    hotelId: "20",
    name: "ITC Royal Bengal",
    price: 4600,
    supplier: "Supplier B",
  },
],

jaipur: [
  {
    hotelId: "21",
    name: "Rambagh Palace",
    price: 6200,
    supplier: "Supplier B",
  },
],

goa: [
  {
    hotelId: "22",
    name: "Vivanta Goa",
    price: 6800,
    supplier: "Supplier B",
  },
],

gurgaon: [
  {
    hotelId: "23",
    name: "Leela Ambience Gurgaon",
    price: 5600,
    supplier: "Supplier B",
  },
],
};

export async function supplierB(
  city: string
): Promise<Hotel[]> {
  await new Promise((r) => setTimeout(r, 1000));

const scenario =
  process.env.TEST_SCENARIO || "NORMAL";

switch (scenario) {
  case "SUPPLIER_B_FAIL":
    throw new Error("Supplier B Failed");

  case "EMPTY":
    return [];
}

return (
    supplierBHotels[
    city.toLowerCase()
    ] || []
    );
}