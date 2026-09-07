export interface HotelResult {
  hotelId: string;
  name: string;
  price: number;
  supplier: string;
}

export interface SupplierData {
  supplier: string;
  price: number;
}

export interface SearchResponse {
  bestHotel: HotelResult;
  supplierA: SupplierData | null;
  supplierB: SupplierData | null;
}
