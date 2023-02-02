type TPrice = {
  default: number;
  size: { small: number, medium: number, large: number }
  crust: { cheesy: number, cheesySausage: number }
}

type TClassifications = {
  new: boolean;
  spicy: boolean;
  vegetarian: boolean
}

export type TCategory = "recomend" | "no-meat" | "sweet" | "discount" | "drinks"
export const US_CATEGORYS: TCategory[] = [
  "recomend", "no-meat", "sweet", "discount", "drinks"
]
export const RU_CATEGORYS: string[] = [
  "Рекомендуем", "Без мяса",
  "Сладкая", "Акции", "Напитки"
]

export type TPizza = {
  id: number;
  name: string;
  ingredients: string[];
  img: string;
  price: TPrice;
  classifications: TClassifications;
}
