import axios from "axios";
import { API_BASE_URL } from "./api";
import type { SearchResponse } from "../types/hotel";

interface SearchPayload {
  city: string;
  checkIn: string;
  checkOut: string;
}

export const searchHotels = async (
  payload: SearchPayload
): Promise<SearchResponse> => {
  const response = await axios.post<SearchResponse>(
    `${API_BASE_URL}/api/search-hotels`,
    payload
  );

  return response.data;
};
