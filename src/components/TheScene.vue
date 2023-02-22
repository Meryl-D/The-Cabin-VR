<script setup>
import { ref } from 'vue';

import TheCameraRig from './TheCameraRig.vue';
import TheNavMesh from './TheNavMesh.vue';

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
    </a-assets>
  <a-entity>

    <a-entity
      v-if="allAssetsLoaded"
      gltf-model="#cabin"
      position="0 0 -1"
    >
      <a-entity light="type: ambient; color: #fff; intensity: 0.02;" hide-in-vr></a-entity>
      <a-entity light="type: point; color: #FFF; intensity: 0.02" position="0 1.5 -1" hide-in-vr></a-entity>
      <a-entity light="type: ambient; color: #fff; intensity: 0.002;" hide-in-vr="hideInFlat3d: true; hideInAR: false;"></a-entity>
      <a-entity light="type: point; color: #FFF; intensity: 0.002" position="0 1.5 -1" hide-in-vr="hideInFlat3d: true; hideInAR: false;"></a-entity>
    </a-entity>

  </a-entity>
  <!-- <a-entity>



    <a-plane position="0 1.5 -4" color="white" height="3" width="6"></a-plane>

    <a-plane position="3 1.5 -1" color="white" height="3" width="6" rotation="0 -90 0">
      <a-entity 
        gltf-model="../assets/door.glb"
        scale="0.01 0.01 0.01"
        position="0 0.6 0"
        clickable="color: red"
        @click="toggleDoor"
      ></a-entity>
    </a-plane>

    <a-plane position="-3 1.5 -1" color="white" height="3" width="6" rotation="0 90 0"></a-plane>

    <a-plane position="0 1.5 2" color="white" height="3" width="6" rotation="0 180 0"></a-plane>

    <a-plane position="0 3 -1" color="white" height="6" width="6" rotation="90 0 0"></a-plane>

    <a-plane position="0 0 -1" color="white" height="6" width="6" rotation="-90 0 0"></a-plane>

    <a-plane position="0 0 -1" color="white" height="4.5" width="4.5" rotation="-90 0 0" data-role="nav-mesh"
      visible="false"></a-plane>
  </a-entity> -->

  <TheCameraRig />
</a-scene>
</template>