import { supplierA } from "../suppliers/supplierA";

describe("Supplier A", () => {
  beforeEach(() => {
    delete process.env.TEST_SCENARIO;
  });

  it("returns hotels in normal mode", async () => {
    const result = await supplierA("delhi");

    expect(result.length).toBeGreaterThan(0);
  });

  it("returns empty array", async () => {
    process.env.TEST_SCENARIO = "EMPTY";

    const result = await supplierA("delhi");

    expect(result).toEqual([]);
  });

  it("throws error when supplier fails", async () => {
    process.env.TEST_SCENARIO =
      "SUPPLIER_A_FAIL";

    await expect(
      supplierA("delhi")
    ).rejects.toThrow();
  });
});