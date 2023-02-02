import React from "react";
import styles from "./Ingredients.module.css"

import PizzaItem from './PizzaItem';
import { PIZZA_INGREDIENTS } from './ingredients';

export default function Ingredients() {
  return (
    <div className={styles.container}>
      <div
        className={styles.block}
      >
        <div className={styles.square}>
          <PizzaItem item={PIZZA_INGREDIENTS[7]} />
        </div>
      </div>
      <div className={styles.block}>
        <div className={styles.square}>
          <PizzaItem item={PIZZA_INGREDIENTS[1]} />
        </div>
      </div>
      <div className={styles.block}>
        <div className={styles.square}>
          <PizzaItem item={PIZZA_INGREDIENTS[2]} />
        </div>
      </div>
      <div className={styles.block}>
        <div className={styles.square}>
          <PizzaItem item={PIZZA_INGREDIENTS[3]} />
        </div>
      </div>
      <div className={styles.block}>
        <div className={styles.square}>
          <PizzaItem item={PIZZA_INGREDIENTS[4]} />
        </div>
      </div>
      <div className={styles.block}>
        <div className={styles.square}>
          <PizzaItem item={PIZZA_INGREDIENTS[5]} />
        </div>
      </div>
      <div className={styles.block}>
        <div className={styles.square}>
          <PizzaItem item={PIZZA_INGREDIENTS[6]} />
        </div>
      </div>
      <div className={styles.block}>
        <div className={styles.square}>
          <PizzaItem item={PIZZA_INGREDIENTS[0]} />
        </div>
      </div>
    </div>
  )
}
