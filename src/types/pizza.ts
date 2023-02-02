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

export type TPizza = {
  id: number;
  name: string;
  ingredients: string[];
  img: string;
  price: TPrice;
  classifications: TClassifications;
}
