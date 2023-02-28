<script setup>
import { ref } from 'vue';

import TheCameraRig from './TheCameraRig.vue';
import TheNavMesh from './TheNavMesh.vue';
import TheLighting from './TheLighting.vue';
import TheCabin from './TheCabin.vue';
import TheHatch from './TheHatch.vue';
import TheFireplace from './TheFireplace.vue';
import TheTable from './TheTable.vue';

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
        Model source: https://sketchfab.com/3d-models/binoculars-8a4df3e1ac3e4fccaec1bebd2016ff31
        Model author: https://sketchfab.com/LucieB
        Model license: CC BY 4.0 ( https://creativecommons.org/licenses/by/4.0/ )
      -->
      <a-asset-item  id="binoculars" src="/assets/models/binoculars.glb"></a-asset-item>

      <!--
        Title: Picture Frame
        Model source: https://sketchfab.com/3d-models/picture-frame-a94047d9c35a4db98e5737e47a61ffb5
        Model author: https://sketchfab.com/blackrray
        Model license: CC BY 4.0 ( https://creativecommons.org/licenses/by/4.0/ )
      -->
      <a-asset-item  id="pictures" src="/assets/models/framed_pictures.glb"></a-asset-item>

      <!--
        Title: Frame low poly
        Model source: https://sketchfab.com/3d-models/frame-low-poly-4dec910aadb64e539ce2f5eec3a8b979
        Model author: https://sketchfab.com/LewisBaker
        Model license: CC BY 4.0 ( https://creativecommons.org/licenses/by/4.0/ )
      -->
      <a-asset-item  id="painting" src="/assets/models/framed_painting.glb"></a-asset-item>

      <!--
        Title: Old Wooden Table
        Model source: https://sketchfab.com/3d-models/old-wooden-table-e53a5ef2faf84edcaddf49d4d27f366c
        Model author: https://sketchfab.com/GameDevNick
        Model license: CC BY 4.0 ( https://creativecommons.org/licenses/by/4.0/ )
      -->
      <a-asset-item  id="table" src="/assets/models/old_wooden_table.glb"></a-asset-item>

      <!--
        Title: Old Wooden Table
        Model source: https://sketchfab.com/3d-models/old-wooden-table-e53a5ef2faf84edcaddf49d4d27f366c
        Model author: https://sketchfab.com/GameDevNick
        Model license: CC BY 4.0 ( https://creativecommons.org/licenses/by/4.0/ )
      -->
      <a-asset-item  id="books" src="/assets/models/occult_books.glb"></a-asset-item>

      <!--
        Title: old ussr radio "Океан 214"
        Model source: https://sketchfab.com/3d-models/old-ussr-radio-214-8fa526225e3e4c3eae4005e91d2b7938
        Model author: https://sketchfab.com/Airmaster
        Model license: CC BY 4.0 ( https://creativecommons.org/licenses/by/4.0/ )
      -->
      <a-asset-item  id="radio" src="/assets/models/radio.glb"></a-asset-item>

      <!--
        Title: Door
        Model source: https://sketchfab.com/3d-models/door-d23ec435af454cf985292778dbd65c9e
        Model author: https://sketchfab.com/zian_0912
        Model license: CC BY 4.0 ( https://creativecommons.org/licenses/by/4.0/ )
      -->
      <a-asset-item  id="door" src="/assets/models/door.glb"></a-asset-item>

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

      <a-asset-item id="door-rattle" response-type="arraybuffer" src="/assets/sounds/door_rattling.wav" preload="auto"></a-asset-item>
      <a-asset-item id="light-switch" response-type="arraybuffer" src="/assets/sounds/light_switching.wav" preload="auto"></a-asset-item>
    </a-assets>

    <template v-if="allAssetsLoaded">

      <TheCabin/>

      <TheHatch/>

      <TheFireplace/>

      <TheTable/>

    </template>

    <TheLighting/>

    <TheCameraRig />
    
  </a-scene>
</template>