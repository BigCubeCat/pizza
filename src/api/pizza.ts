const API_URL = "https://shift-winter-2023-backend.onrender.com/api/pizza";
import { TPizza } from '../types/pizza';

export async function getAllPizza(): Promise<TPizza[]> {
  const result = await fetch(API_URL)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText)
      }
      return response.json()
    })
    .then(json => json)
  return result;
}
