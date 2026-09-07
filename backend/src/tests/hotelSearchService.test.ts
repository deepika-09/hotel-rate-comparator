import { findBestHotel } from "../services/hotelSearchService";

describe("findBestHotel", () => {
  it("returns Supplier A when cheaper", () => {
    const result = findBestHotel(
      [
        {
          hotelId: "1",
          name: "Hotel A",
          price: 4000,
          supplier: "Supplier A",
        },
      ],
      [
        {
          hotelId: "2",
          name: "Hotel B",
          price: 5000,
          supplier: "Supplier B",
        },
      ]
    );

    expect(result.bestHotel.supplier).toBe(
      "Supplier A"
    );
  });

  it("returns Supplier B when cheaper", () => {
    const result = findBestHotel(
      [
        {
          hotelId: "1",
          name: "Hotel A",
          price: 5000,
          supplier: "Supplier A",
        },
      ],
      [
        {
          hotelId: "2",
          name: "Hotel B",
          price: 4000,
          supplier: "Supplier B",
        },
      ]
    );

    expect(result.bestHotel.supplier).toBe(
      "Supplier B"
    );
  });

  it("throws error when both are empty", () => {
    expect(() =>
      findBestHotel([], [])
    ).toThrow("No hotels found");
  });

  it("uses available supplier if one is empty", () => {
    const result = findBestHotel(
      [],
      [
        {
          hotelId: "2",
          name: "Hotel B",
          price: 4000,
          supplier: "Supplier B",
        },
      ]
    );

    expect(result.bestHotel.supplier).toBe(
      "Supplier B"
    );
  });
});