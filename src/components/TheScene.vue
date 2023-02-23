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
        Title: Wood plank
        Model source: https://sketchfab.com/3d-models/wood-plank-bd39c290e5614deebca631568b85d27e
        Model author: https://sketchfab.com/vchalany (Vitek Chalany)
        Model license: CC BY 4.0 ( https://creativecommons.org/licenses/by/4.0/ )
      -->
      <a-asset-item  id="plank" src="assets/models/wood_plank.glb"></a-asset-item>

      <!--
        Title: Damage Door
        Model source: https://sketchfab.com/3d-models/damage-door-aa774d0e983a46de85d4cd400f168a01
        Model author: https://sketchfab.com/paburoviii
        Model license: CC BY 4.0 ( https://creativecommons.org/licenses/by/4.0/ )
      -->
      <a-asset-item  id="door" src="assets/models/damage_door.glb"></a-asset-item>

      <img id="wall-texture" src="assets/textures/log_wall.jpeg">
      <img id="roof-texture" src="assets/textures/roof_texture.jpeg">
      <img id="floor-texture" src="assets/textures/wooden_floor.jpeg">
    </a-assets>

    <template v-if="allAssetsLoaded">

      <TheCabin/>

      <!-- <a-entity
        gltf-model="#closet"
        position="0 0 2.2"
        rotation="0 90 0"
        scale="0.06 0.06 0.06"
      ></a-entity> -->

      <a-entity>

        <a-entity
          gltf-model="#door"
          position="0 0 2.5"
          rotation="0 90 0"
          scale="0.011 0.011 0.011"
        ></a-entity>

        <a-entity
          gltf-model="#plank"
          scale="0.05 0.05 0.05"
          rotation="10 -90 -90"
          position="0 0 2.35"
        ></a-entity>

        <a-entity
          gltf-model="#plank"
          scale="0.05 0.05 0.05"
          rotation="-5 -90 -90"
          position="-0.1 0.72 2.35"
        ></a-entity>

        <a-entity
          gltf-model="#plank"
          scale="0.05 0.05 0.05"
          rotation="5 -90 -90"
          position="0 1.3 2.35"
        ></a-entity>

      </a-entity>

    </template>

    <TheLighting/>

    <TheCameraRig />
    
  </a-scene>
</template>