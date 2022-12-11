<template>
  <div
    :class="['rounded-lg text-lg font-bold bg-white p-4 skew-12', `c-${color}`]"
  >
    {{ "$" + price * 100 }}
  </div>
</template>

<script setup lang="ts">
defineProps({
  price: {
    type: Number,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
.c-blue-200 {
  @apply text-blue-200;
}

.c-orange-200 {
  @apply text-orange-200;
}

.green {
  @apply text-green-200;
}
</style>
