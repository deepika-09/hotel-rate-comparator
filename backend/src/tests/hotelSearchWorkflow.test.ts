import { findBestHotel } from "../services/hotelSearchService";

describe("Hotel Search Workflow", () => {
  it("Supplier A cheaper", () => {
    const result = findBestHotel(
      [
        {
          hotelId: "1",
          name: "Hotel A",
          price: 3500,
          supplier: "Supplier A",
        },
      ],
      [
        {
          hotelId: "2",
          name: "Hotel B",
          price: 4500,
          supplier: "Supplier B",
        },
      ]
    );

    expect(result.bestHotel.supplier).toBe(
      "Supplier A"
    );
  });

  it("Supplier B cheaper", () => {
    const result = findBestHotel(
      [
        {
          hotelId: "1",
          name: "Hotel A",
          price: 5500,
          supplier: "Supplier A",
        },
      ],
      [
        {
          hotelId: "2",
          name: "Hotel B",
          price: 2500,
          supplier: "Supplier B",
        },
      ]
    );

    expect(result.bestHotel.supplier).toBe(
      "Supplier B"
    );
  });

  it("No hotels found", () => {
    expect(() =>
      findBestHotel([], [])
    ).toThrow("No hotels found");
  });
});