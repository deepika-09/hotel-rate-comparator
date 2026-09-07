import express from "express";
import cors from "cors";
import { findBestHotel } from "./services/hotelSearchService";
import { supplierA } from "./suppliers/supplierA";
import { supplierB } from "./suppliers/supplierB";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (_req, res) => {
  res.send("Backend Running");
});

/**
 * Supplier A
 */
app.get("/supplierA/hotels", async (_req, res) => {
  await new Promise((resolve) =>
    setTimeout(resolve, 2000)
  );

  return res.json([
    {
      hotelId: "1",
      name: "Taj Palace",
      price: 4500,
      supplier: "Supplier A",
    },
  ]);
});

/**
 * Supplier B
 */
app.get("/supplierB/hotels", async (_req, res) => {
  await new Promise((resolve) =>
    setTimeout(resolve, 1000)
  );

  return res.json([
    {
      hotelId: "1",
      name: "Taj Palace",
      price: 4300,
      supplier: "Supplier B",
    },
  ]);
});


/**
 * Main Search Endpoint
 */
app.post("/api/search-hotels", async (req, res) => {
  
  try {
    const { city } = req.body;
    const [supplierAHotels, supplierBHotels] =
  await Promise.all([
    supplierA(city),
    supplierB(city),
  ]);


    const hotels = [
      ...supplierAHotels,
      ...supplierBHotels,
    ];

    if (hotels.length === 0) {
      return res.status(404).json({
        message: "No hotels found",
      });
    }


   const result = findBestHotel(
  supplierAHotels,
  supplierBHotels
);

return res.json(result);
  } catch (error) {
    return res.status(500).json({
      message: "Hotel search failed",
    });
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});