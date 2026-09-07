import { supplierB } from "../suppliers/supplierB";

describe("Supplier B", () => {
  beforeEach(() => {
    delete process.env.TEST_SCENARIO;
  });

  it("returns hotels in normal mode", async () => {
    const result = await supplierB("delhi");

    expect(result.length).toBeGreaterThan(0);
  });

  it("returns empty array", async () => {
    process.env.TEST_SCENARIO = "EMPTY";

    const result = await supplierB("delhi");

    expect(result).toEqual([]);
  });

  it("throws error when supplier fails", async () => {
    process.env.TEST_SCENARIO =
      "SUPPLIER_B_FAIL";

    await expect(
      supplierB("delhi")
    ).rejects.toThrow();
  });
});