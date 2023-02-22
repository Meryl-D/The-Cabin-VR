<script setup>
import { ref } from 'vue';

import TheCameraRig from './TheCameraRig.vue';
import TheNavMesh from './TheNavMesh.vue';
import TheLighting from './TheLighting.vue';
import TheCabin from './TheCabin.vue';

import '../aframe/clickable';

defineProps({
  overlaySelector: String,
});

const doorOpen = ref(false);
const allAssetsLoaded = ref(false);

function toggleDoor() {
  doorOpen.value = !doorOpen.value
  doorOpen.value ? console.log("door opened") : console.log("door closed")
}
</script>

<template>
  <a-scene
        background="color: black;"
        renderer="colorManagement: true;"
        :webxr="`
          requiredFeatures: local-floor;
          referenceSpaceType: local-floor;
          optionalFeatures: dom-overlay;
          overlayElement: ${overlaySelector};
        `"
  >
    <a-assets @loaded="allAssetsLoaded = true">
        <!--
          Title: Small Cabin House
          Model source: https://sketchfab.com/3d-models/small-cabin-house-9c17c12568314e849a990628e0f4931f
          Model author: https://sketchfab.com/padmadev_designs
          Model license: CC BY 4.0 ( https://creativecommons.org/licenses/by/4.0/ )
        -->
        <a-asset-item  id="cabin" src="assets/small_cabin_house.glb"></a-asset-item>

        <!--
          Title: PS1/N64 Style Cupboard
          Model source: https://sketchfab.com/3d-models/ps1n64-style-cupboard-f983dc1487c14d65a0e58ba251d6907a
          Model author: https://sketchfab.com/jsandwich96
          Model license: CC BY 4.0 ( https://creativecommons.org/licenses/by/4.0/ )
        -->
        <a-asset-item  id="closet" src="assets/low-poly_closet.glb"></a-asset-item>
        <img id="wood-texture" src="assets/wooden_wall.jpeg">
    </a-assets>

    <template v-if="allAssetsLoaded">

      <TheCabin/>

      <a-entity
        gltf-model="#closet"
        position="0 0 2.2"
        rotation="0 90 0"
        scale="0.06 0.06 0.06"
      ></a-entity>

    </template>

    <TheLighting/>

    <TheCameraRig />
    
  </a-scene>
</template>