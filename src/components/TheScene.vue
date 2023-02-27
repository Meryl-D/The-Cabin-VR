<script setup>
import { ref } from 'vue';

import TheCameraRig from './TheCameraRig.vue';
import TheNavMesh from './TheNavMesh.vue';
import TheLighting from './TheLighting.vue';
import TheCabin from './TheCabin.vue';
import TheHatch from './TheHatch.vue';
import TheFireplace from './TheFireplace.vue';

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
        Title: Medieval Fireplace
        Model source: https://sketchfab.com/3d-models/medieval-fireplace-cff078a0eba048578ede96e8232241df
        Model author: https://sketchfab.com/LewisBaker
        Model license: CC BY 4.0 ( https://creativecommons.org/licenses/by/4.0/ )
      -->
      <a-asset-item  id="fireplace" src="/assets/models/medieval_fireplace.glb"></a-asset-item>

      <!--
        Title: Binoculars
        Model source: https://sketchfab.com/3d-models/binoculars-67a883953785434aac3bc9f5aa1db760
        Model author: https://sketchfab.com/eprdox
        Model license: CC BY 4.0 ( https://creativecommons.org/licenses/by/4.0/ )
      -->
      <a-asset-item  id="binoculars" src="/assets/models/binoculars.glb"></a-asset-item>

      <!--
        Title: Frame low poly
        Model source: https://sketchfab.com/3d-models/frame-low-poly-4dec910aadb64e539ce2f5eec3a8b979
        Model author: https://sketchfab.com/LewisBaker
        Model license: CC BY 4.0 ( https://creativecommons.org/licenses/by/4.0/ )
      -->
      <a-asset-item  id="painting" src="/assets/models/frame_painting.glb"></a-asset-item>

      <!--
        Title: Damage Door
        Model source: https://sketchfab.com/3d-models/damage-door-aa774d0e983a46de85d4cd400f168a01
        Model author: https://sketchfab.com/paburoviii
        Model license: CC BY 4.0 ( https://creativecommons.org/licenses/by/4.0/ )
      -->
      <a-asset-item  id="door" src="/assets/models/damage_door.glb"></a-asset-item>

      <!--
        Title: Damage Door
        Model source: https://sketchfab.com/3d-models/damage-door-aa774d0e983a46de85d4cd400f168a01
        Model author: https://sketchfab.com/paburoviii
        Model license: CC BY 4.0 ( https://creativecommons.org/licenses/by/4.0/ )
      -->
      <a-asset-item  id="switch" src="/assets/models/light_switch.glb"></a-asset-item>

      <!--
        Title: Broken ceiling lamp
        Model source: https://sketchfab.com/3d-models/broken-ceiling-lamp-1e1ec5d2aac94e94b88340b374803399
        Model author: https://sketchfab.com/uwurkowo
        Model license: CC BY 4.0 ( https://creativecommons.org/licenses/by/4.0/ )
      -->
      <a-asset-item  id="ceiling-lamp" src="/assets/models/broken_ceiling_lamp.glb"></a-asset-item>

      <!--
        Title: Closed Lock
        Model source: https://sketchfab.com/3d-models/closed-lock-017a558690624beabe08dcbbc88eb25b
        Model author: https://sketchfab.com/staticcc
        Model license: CC BY 4.0 ( https://creativecommons.org/licenses/by/4.0/ )
      -->
      <a-asset-item  id="closed-lock" src="/assets/models/closed_lock.glb"></a-asset-item>

      <img id="wall-texture" src="/assets/textures/log_wall.jpeg">
      <img id="roof-texture" src="/assets/textures/roof_texture.jpeg">
      <img id="floor-texture" src="/assets/textures/wooden_floor.jpeg">
      <img id="rust" src="/assets/textures/metal_rust.jpeg">
    </a-assets>

    <template v-if="allAssetsLoaded">

      <TheCabin/>

      <TheHatch/>

      <TheFireplace/>

      <a-entity
        gltf-model="#ceiling-lamp"
        position="0 3.1 0"
      ></a-entity>

      <!-- <a-entity
        gltf-model="#closet"
        position="0 0 2.2"
        rotation="0 90 0"
        scale="0.06 0.06 0.06"
      ></a-entity> -->

      <a-entity
        gltf-model="#door"
        position="2.5 0 -0.8"
        rotation="0 180 0"
        scale="0.01 0.01 0.01"
      ></a-entity>

      <a-entity
        gltf-model="#switch"
        rotation="0 -90 0"
        position="2.48 1 0"
      ></a-entity>

      <!-- <a-entity>

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

      </a-entity> -->

    </template>

    <TheLighting/>

    <TheCameraRig />
    
  </a-scene>
</template>