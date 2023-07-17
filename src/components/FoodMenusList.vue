<template>
  <div v-for="(food, index) in cards" :key="index">
    <FoodCard :food-data="food" />
  </div>
</template>

<script>
import FoodCard from "../components/FoodCard.vue";
export default {
  name: "FoodMenuList",
  components: {
    FoodCard,
  },
  data() {
    return {
      cards: [
        {
          title: "BONJOUR,LET'S STRART THE DAY WITH A CROISSANT",
          name: "butter croissant",
          price: "$ 3.00",
          name02: "Almond Croissant",
          price02: "$ 3.50",
          name03: "Chocolate Croissant",
          price03: "$ 3.50",
          name04: "Ham Croissant",
          price04: "$ 7.50",
          description04: "Croissant filled with Ham,Cheese,Tomato & Cucumber",
          name05: "Mona's Croissant",
          price05: "$ 9.00",
          description05:
            "Croissant filled with Smoked Salmon,Horseradish,cream,CreamCheese & Cucumber",
        },
        {
          title:
            "LA CREPE SUCREE Add sliced Strawberries for$1.50, Bananas or extra whipped Cream foreach $1.00",
          name: "Classic Sugar Crêpe",
          price: "$ 4.50",
          name02: "Lemon Crêpe",
          price02: "$ 6.50",
          description02: "Croissant filled with Ham,Cheese,Tomato & Cucumber",
          name03: "Lady Marmalade Crêpe",
          price03: "$ 6.50",
          description03: "Orange Marmalade, Chocolaté Sauce & whipped Cream",
          name04: "Nutella Crêpe",
          price04: "$ 7.00",
          description04: "Nutella with whipped Cream",
          name05: "Crêpe Safari",
          price05: "$ 10.00",
          description05: "Nutella Banana, Strawberry with whipped Cream",
        },
        {
          title:
            "LA CREPE SALEE Side Salad with Balsamic Vinagrette or Ranch Dressing with ail Savory Crêpe",
          name: "French Riviera",
          description: "Ham, Cheese, Tomato and Oregano ",
          price: "$ 11.50",
          name02: "Coqueline",
          price02: "$ 12.50",
          description02: "Thin sliced Roast Chicken, Cheese. Red Onion & Mushroom",
          name03: "Jardinière",
          price03: "$ 12.50",
          description03: "Cheese, Tomato, Avocado, Mushroom, Bell Pepper & Red Onion",
          name04: "Norvégienne",
          price04: "$ 14.50",
          description04: "Smoked Salmon, Green Onion, Sour Cream & Avocado",
        },
        {
          title:
            "HOME-MADE QUICHE Side Salad with Balsamic Vinaigrette or Ranch Dressing with alI Quiches",
          name: "Quiche Lorraine Slice",
          description: "Ham, Cheese, Tomato and Oregano ",
          price: "$ 3.00",
          name02: "Ham & Bacon with Cheese",
          price02: "$ 3.00",
          description02: "Thin sliced Roast Chicken, Cheese. Red Onion & Mushroom",
          name03: "Quiche Florentine Slice",
          price03: "$ 3.00",
          description03: "Spinach with Cheese",
          name04: "TRIO",
          price04: "$ 3.00",
          description04: "ChooseyourQuiche+ BowlofSoupoftheday + SideSalad",
        },
        {
          title:
            "HOT SANDWICH Side Salad with Balsamic Vinaigrette or Ranch Dressing with all Croques Paninis not available after 4pm",
          name: "Panini Marlon",
          price: "$ 8.90",
          description: "French Baguette, Ham, Cheese. Tomato & Oregano",
          name02: "	Panini StTropez",
          price02: "$ 9.50",
          description02:
            "French Baguette, Thin sliced Roast Chicken, Cheese, Mushroom & Tomato",
          name03: "Croque Monsieur",
          price03: "$ 10.50",
          description03: "Smoked Ham & Cheese on bread",
          name04: "Croque Hawaii",
          price04: "$ 10.90",
          description04: "Ham & CheeseS. Pineapple baked on bread",
          name05: "Croque Madame",
          price05: "$ 11.90",
          description05:
            "Smoked Ham & Cheese, Onion &Tomato baked on bread topped with an Egg",
        },
        {
          title: "Thin sliced Roast Chicken, Cheese. Red Onion & Mushroom",
          name: "The Classic",
          description: "Brioche Bun, 6oz. Burger, Lettuce, Pickles, Tomato, Red Onion",
          price: "$ 14.50",
          name02: "Cheeseburger",
          price02: "$ 14.50",
        },
      ],
    };
  },
};
</script>

<style></style>
