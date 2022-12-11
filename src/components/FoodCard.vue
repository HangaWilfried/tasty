<template>
  <section
    :class="[
      'rounded flex px-4 py-2 h-44 justify-end relative',
      computedBackground,
    ]"
  >
    <section
      class="flex flex-col justify-between absolute h-full -top-14 left-4"
    >
      <img
        :class="['bg-cyan-300 mix-blend-darken h-32', computedShadow / 30]"
        :src="food.image"
        alt="try to fetch image..."
      />
      <div class="flex flex-col leading-3 text-white">
        <span class="text-2xl font-extrabold">{{ food.description }}</span>
        <span class="font-semibold text-lg">{{ food.name }}</span>
      </div>
    </section>
    <section class="flex flex-col justify-between h-full">
      <div
        class="border border-transparent bg-white/10 rounded-lg flex justify-center px-1 py-1.5 opacity-100"
      >
        <LoveIcon class="self-end" />
      </div>
      <slot />
    </section>
  </section>
</template>
<script setup lang="ts">
import LoveIcon from "@/components/icons/LoveIcon.vue";
import { computed, onMounted, PropType } from "vue";
import { Food as NewFood } from "@/domain/food";

const props = defineProps({
  color: {
    type: String,
    required: true,
  },
  food: {
    type: Object as PropType<NewFood>,
    required: true,
  },
});

const computedBackground = computed(() => `b-${props.color}`);
const computedShadow = computed(() => `shd-${props.color}`);

onMounted(() => {
  console.log(computedBackground.value);
});
</script>

<style scoped>
.blue-200 {
  @apply bg-blue-300;
}
.b-green-200 {
  @apply bg-green-300;
}
.b-orange-200 {
  @apply bg-orange-300;
}
.shd-blue-200 {
  @apply shadow-blue-300;
}
.shd-green-200 {
  @apply shadow-green-300;
}
.shd-orange-200 {
  @apply shadow-orange-300;
}
</style>
