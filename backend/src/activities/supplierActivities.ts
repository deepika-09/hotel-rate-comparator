import { supplierA } from "../suppliers/supplierA";
import { supplierB } from "../suppliers/supplierB";
import type { Hotel } from "../types/hotel";

export async function fetchSupplierA(
  city: string
): Promise<Hotel[]> {
  return supplierA(city);
}

export async function fetchSupplierB(
  city: string
): Promise<Hotel[]> {
  return supplierB(city);
}