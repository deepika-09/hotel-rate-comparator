import { findBestHotel } from "../services/hotelSearchService";

describe("Workflow Logic", () => {
  it("selects cheapest hotel", () => {
    const result = findBestHotel(
      [
        {
          hotelId: "1",
          name: "A",
          price: 6000,
          supplier: "Supplier A",
        },
      ],
      [
        {
          hotelId: "2",
          name: "B",
          price: 3000,
          supplier: "Supplier B",
        },
      ]
    );

    expect(result.bestHotel.price).toBe(
      3000
    );
  });

  it("supports same price scenario", () => {
    const result = findBestHotel(
      [
        {
          hotelId: "1",
          name: "A",
          price: 4000,
          supplier: "Supplier A",
        },
      ],
      [
        {
          hotelId: "2",
          name: "B",
          price: 4000,
          supplier: "Supplier B",
        },
      ]
    );

    expect(result.bestHotel.price).toBe(
      4000
    );
  });
});