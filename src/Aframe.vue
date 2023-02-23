<script setup>
import { ref } from 'vue';
import TheScene from './components/TheScene.vue';
import TheOnboarding from './components/TheOnboarding.vue';
import TheOverlay from './components/TheOverlay.vue';

// const scale = ref(1);
const loaded = ref(false);
</script>

<template>
  <TheOnboarding :loaded="loaded"></TheOnboarding>

  <!-- <TheOverlay v-model="scale" id="overlay"></TheOverlay> -->

  <TheScene
    overlay-selector="#overlay"
    @loaded="loaded = true"
  ></TheScene>

</template>