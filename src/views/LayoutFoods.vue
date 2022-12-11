<template>
  <main class="flex flex-col max-w-[700px] m-auto p-5 gap-y-7">
    <ShoppingBagIcon class="self-end" />
    <section class="flex gap-2">
      <SearchIcon />
      <input type="text" v-model="search" />
    </section>
    <section class="flex flex-col gap-y-16">
      <FoodCard
        v-for="(food, index) in foods"
        :key="index"
        :color="getColor()"
        :food="food"
      >
        <PriceCard :color="getColor()" :price="food.price" />
      </FoodCard>
    </section>
  </main>
</template>

<script setup lang="ts">
import axios from "axios";

import ShoppingBagIcon from "@/components/icons/ShoppingBagIcon.vue";
import FoodCard from "@/components/FoodCard.vue";
import { THEME } from "@/utils/enums";
import PriceCard from "@/components/PriceCard.vue";
import SearchIcon from "@/components/icons/SearchIcon.vue";
import { onBeforeMount, ref } from "vue";
import { Food } from "@/domain/food";
import type { FoodDTO } from "@/domain/dto";

const search = ref<string>("");

const foods = ref<Food[]>([]);

onBeforeMount(async () => {
  const API = await axios.get(
    "https://api.spoonacular.com/recipes/findByIngredients?ingredients=apples,+flour,+sugar&apiKey=4636d12b86454b6a877dc49911777579"
  );

  // console.log(API.data[0].missedIngredients);
  foods.value = API.data
    .flatMap((item: any) => item.missedIngredients)
    .flatMap((ingredient: FoodDTO) => new Food(ingredient as FoodDTO));
});

const getColor = (): string => {
  const themes: string[] = [];
  for (let theme in THEME) {
    themes.push(THEME[theme]);
  }
  const rand = Math.floor(Math.random() * themes.length);
  return themes[rand];
};
</script>
