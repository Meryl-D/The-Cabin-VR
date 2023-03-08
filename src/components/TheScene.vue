<script setup>
import { ref } from 'vue';

import TheCameraRig from './TheCameraRig.vue';
import TheNavMesh from './TheNavMesh.vue';
import TheLighting from './TheLighting.vue';
import TheCabin from './TheCabin.vue';
import TheHatch from './TheHatch.vue';
import TheFireplace from './TheFireplace.vue';
import TheTable from './TheTable.vue';

defineProps({
  overlaySelector: String,
});

// const doorOpen = ref(false);
const allAssetsLoaded = ref(false);

// function toggleDoor() {
//   doorOpen.value = !doorOpen.value
//   doorOpen.value ? console.log("door opened") : console.log("door closed")
// }
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
    <a-assets @loaded="allAssetsLoaded = true" timeout="5000">
      <!--
        Title: Medieval Fireplace
        Model source: https://sketchfab.com/3d-models/medieval-fireplace-cff078a0eba048578ede96e8232241df
        Model author: https://sketchfab.com/LewisBaker
        Model license: CC BY 4.0 ( https://creativecommons.org/licenses/by/4.0/ )
      -->
      <a-asset-item  id="fireplace" src="assets/models/medieval_fireplace.glb"></a-asset-item>

      <!--
        Title: Binoculars
        Model source: https://sketchfab.com/3d-models/binoculars-8a4df3e1ac3e4fccaec1bebd2016ff31
        Model author: https://sketchfab.com/LucieB
        Model license: CC BY 4.0 ( https://creativecommons.org/licenses/by/4.0/ )
      -->
      <a-asset-item  id="binoculars" src="assets/models/binoculars_painted.glb"></a-asset-item>

      <!--
        Title: Picture Frame
        Model source: https://sketchfab.com/3d-models/picture-frame-a94047d9c35a4db98e5737e47a61ffb5
        Model author: https://sketchfab.com/blackrray
        Model license: CC BY 4.0 ( https://creativecommons.org/licenses/by/4.0/ )
      -->
      <a-asset-item  id="pictures" src="assets/models/framed_pictures.glb"></a-asset-item>

      <!--
        Title: Frame low poly
        Model source: https://sketchfab.com/3d-models/frame-low-poly-4dec910aadb64e539ce2f5eec3a8b979
        Model author: https://sketchfab.com/akaba
        Model license: CC BY 4.0 ( https://creativecommons.org/licenses/by/4.0/ )
      -->
      <a-asset-item  id="painting" src="assets/models/framed_painting.glb"></a-asset-item>

      <!--
        Title: Battery Low Poly
        Model source: https://sketchfab.com/3d-models/battery-low-poly-c726f8e634f14a7b9bcde2b96b3f7ba4
        Model author: https://sketchfab.com/unrealengine432
        Model license: CC BY 4.0 ( https://creativecommons.org/licenses/by/4.0/ )
      -->
      <a-asset-item  id="battery" src="assets/models/battery_low_poly.glb"></a-asset-item>

      <!--
        Title: Old Wooden Table
        Model source: https://sketchfab.com/3d-models/old-wooden-table-e53a5ef2faf84edcaddf49d4d27f366c
        Model author: https://sketchfab.com/GameDevNick
        Model license: CC BY 4.0 ( https://creativecommons.org/licenses/by/4.0/ )
      -->
      <a-asset-item  id="table" src="assets/models/old_wooden_table_painted.glb"></a-asset-item>

      <!--
        Title: Occult books
        Model source: https://sketchfab.com/3d-models/occult-books-e2c8d4fc5ad04f258fe679861172ca85
        Model author: https://sketchfab.com/athanaso
        Model license: CC BY 4.0 ( https://creativecommons.org/licenses/by/4.0/ )
      -->
      <a-asset-item  id="books" src="assets/models/occult_books.glb"></a-asset-item>

      <!--
        Title: old ussr radio "Океан 214"
        Model source: https://sketchfab.com/3d-models/old-ussr-radio-214-8fa526225e3e4c3eae4005e91d2b7938
        Model author: https://sketchfab.com/Airmaster
        Model license: CC BY 4.0 ( https://creativecommons.org/licenses/by/4.0/ )
      -->
      <a-asset-item  id="radio" src="assets/models/radio_painted.glb"></a-asset-item>

      <!--
        Title: Animated Old Chest
        Model source: https://sketchfab.com/3d-models/animated-old-chest-4477ee9446b34d8e857906816ca5245a
        Model author: https://sketchfab.com/not_lonely
        Model license: CC BY 4.0 ( https://creativecommons.org/licenses/by/4.0/ )
      -->
      <a-asset-item  id="chest" src="assets/models/animated_old_chest.glb"></a-asset-item>

      <!--
        Title: Key
        Model source: https://sketchfab.com/3d-models/key-954fc38123ec4b3f856ce1de9cf0a8c1
        Model author: https://sketchfab.com/Oldmode
        Model license: CC BY 4.0 ( https://creativecommons.org/licenses/by/4.0/ )
      -->
      <a-asset-item  id="chest-key" src="assets/models/chest_key.glb"></a-asset-item>

      <!--
        Title: Old Rusty Key
        Model source: https://sketchfab.com/3d-models/old-rusty-key-8a43dbbd400740a886cc58d0831edc2c
        Model author: https://sketchfab.com/gormangallery (James Gorman)
        Model license: CC BY 4.0 ( https://creativecommons.org/licenses/by/4.0/ )
      -->
      <a-asset-item  id="door-key" src="assets/models/door_key.glb"></a-asset-item>

      <!--
        Title: Broken ceiling lamp
        Model source: https://sketchfab.com/3d-models/broken-ceiling-lamp-1e1ec5d2aac94e94b88340b374803399
        Model author: https://sketchfab.com/uwurkowo
        Model license: CC BY 4.0 ( https://creativecommons.org/licenses/by/4.0/ )
      -->
      <a-asset-item  id="ceiling-lamp" src="assets/models/ceiling_lamp_painted.glb"></a-asset-item>

      <!--
        Title: Closed Lock
        Model source: https://sketchfab.com/3d-models/closed-lock-017a558690624beabe08dcbbc88eb25b
        Model author: https://sketchfab.com/staticcc
        Model license: CC BY 4.0 ( https://creativecommons.org/licenses/by/4.0/ )
      -->
      <a-asset-item  id="closed-lock" src="assets/models/closed_lock.glb"></a-asset-item>



      <!-- 
        Adobe Stock Images
        https://stock.adobe.com/ch_fr/
      -->
      <img id="wall-texture" src="/assets/textures/log_wall_LR.jpg">

      <img id="roof-texture" src="/assets/textures/roof_texture_LR.jpg">

      <img id="floor-texture" src="/assets/textures/wooden_floor_LR.jpg">

      <img id="rust" src="/assets/textures/metal_rust_LR.jpg">

      <img id="fireplace-texture" src="/assets/textures/fireplace.jpeg">

      <img id="paint-texture" src="/assets/textures/peeling_paint_on_wood_LR.jpg">

      <img id="cork-texture" src="/assets/textures/cork_texture_LR.jpg">

      <img id="paper-texture-4" src="/assets/textures/old_paper_4.jpg">

      <img id="paper-texture-2" src="/assets/textures/old_paper_2.jpg">

      <img id="paper-texture-5" src="/assets/textures/old_paper_5.jpg">

      <img id="snake-page" src="/assets/textures/snake_page_LR.jpg">

      <img id="demons-page" src="/assets/textures/demons_page_LR.jpg">



      <!-- 
        Adobe Sound Effects
        https://www.adobe.com/products/audition/offers/AdobeAuditionDLCSFX.html
       -->
      <a-asset-item id="door-rattle" response-type="arraybuffer" src="assets/sounds/door_rattling.wav" preload="auto"></a-asset-item>

      <a-asset-item id="stone-scrape" response-type="arraybuffer" src="assets/sounds/stone_scrape.wav" preload="auto"></a-asset-item>

      <a-asset-item id="wood-clank" response-type="arraybuffer" src="assets/sounds/wood_clank.wav" preload="auto"></a-asset-item>

      <a-asset-item id="hatch-banging" response-type="arraybuffer" src="assets/sounds/hatch_banging_3x.mp3" preload="auto"></a-asset-item>

      <a-asset-item id="key-drop" response-type="arraybuffer" src="assets/sounds/key_drop_loud.mp3" preload="auto"></a-asset-item>

      <a-asset-item id="radio-code" response-type="arraybuffer" src="assets/sounds/radio_number_code.mp3" preload="auto"></a-asset-item>

      <a-asset-item id="door-open" response-type="arraybuffer" src="assets/sounds/front_door_open.wav" preload="auto"></a-asset-item>

      <a-asset-item id="chest-open" response-type="arraybuffer" src="assets/sounds/chest_open.wav" preload="auto"></a-asset-item>

    </a-assets>

    <template v-if="allAssetsLoaded">

      <TheCabin/>

      <TheHatch/>

      <TheFireplace/>

      <TheTable/>

    </template>

    <TheLighting/>

    <TheCameraRig/>

    <TheNavMesh/>
    
  </a-scene>
</template>