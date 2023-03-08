<script setup>
  import { ref } from 'vue';

  defineProps({
    loaded: Boolean,
  });

  const showOnboarding = ref(true);

  function enterScene() {
    showOnboarding.value = false;
    if (AFRAME.utils.device.checkHeadsetConnected() && !AFRAME.utils.device.isMobile()) {
      document.querySelector('a-scene').enterVR();
    }
  }
</script>

<template>
  <div id="onboarding" v-if="showOnboarding">
    <div>
      <h1>The cabin</h1>
      <p class="scenario">As you slowly regain consciousness, you realize that you are lying on a cold, hard floor in a small log cabin. You sit up, trying to get your bearings, but everything seems hazy and unfamiliar. You start to feel uneasy, sensing that you're not alone.</p>
      <p class="scenario">You find a flashlight on the ground and start to search the room as a means to escape.</p>
      <p class="scenario">(Touch to interact)</p>
      <p v-if="!loaded">loading...</p>
      <button v-if="loaded" @click="enterScene()">ENTER SCENE</button>
      <div class="licences">
        <dl>
          <dt>
            <i>Includes</i>
          </dt>
          <dt>
            <a href="https://github.com/c-frame/aframe-extras" target="_blank">aframe-extras controls and animation-mixer</a>
          </dt><dd>
            <a href="https://github.com/c-frame/aframe-extras/blob/master/LICENSE" target="_blank">MIT License</a>
          </dd>

          <dt>
            <a href="https://github.com/jure/aframe-blink-controls/" target="_blank">aframe-blink-controls</a>
          </dt><dd>
            <a href="https://github.com/jure/aframe-blink-controls/blob/main/LICENSE" target="_blank">MIT License</a>
          </dd>

          <dt>
            <a href=" https://github.com/AdaRoseCannon/aframe-xr-boilerplate" target="_blank">simple-navmesh-constraint</a>
          </dt><dd>
            By Ada Rose Cannon under MIT License
          </dd>

          <dt>
            <a href="https://sketchfab.com/3d-models/simple-lowpoly-flashlight-ef137b1e3e9b43d2a6054c65e6d3f8e5" target="_blank">Simple LowPoly Flashlight</a>
          </dt><dd>
            by <a href="https://sketchfab.com/hmtr2005" target="_blank">hmtr2005</a>
            under <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">CC BY 4.0</a>
          </dd>

          <dt>
            <a href="https://sketchfab.com/3d-models/medieval-fireplace-cff078a0eba048578ede96e8232241df" target="_blank">Medieval Fireplace</a>
          </dt><dd>
            by <a href="https://sketchfab.com/LewisBaker" target="_blank">Lewis Baker</a>
            under <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">CC BY 4.0</a>
          </dd>

          <dt>
            <a href="https://sketchfab.com/3d-models/binoculars-8a4df3e1ac3e4fccaec1bebd2016ff31" target="_blank">Binoculars</a>
          </dt><dd>
            by <a href="https://sketchfab.com/LucieB" target="_blank">Lucie B</a>
            under <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">CC BY 4.0</a>
          </dd>

          <dt>
            <a href="https://sketchfab.com/3d-models/picture-frame-a94047d9c35a4db98e5737e47a61ffb5" target="_blank">Picture Frame</a>
          </dt><dd>
            by <a href="https://sketchfab.com/blackrray" target="_blank">Freepoly.org</a>
            under <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">CC BY 4.0</a>
          </dd>

          <dt>
            <a href="https://sketchfab.com/3d-models/frame-low-poly-4dec910aadb64e539ce2f5eec3a8b979" target="_blank">Frame low poly</a>
          </dt><dd>
            by <a href="https://sketchfab.com/akaba" target="_blank">akabane roppa</a>
            under <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">CC BY 4.0</a>
          </dd>

          <dt>
            <a href="https://sketchfab.com/3d-models/battery-low-poly-c726f8e634f14a7b9bcde2b96b3f7ba4" target="_blank">Battery Low Poly</a>
          </dt><dd>
            by <a href="https://sketchfab.com/unrealengine432" target="_blank">Ele.G</a>
            under <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">CC BY 4.0</a>
          </dd>

          <dt>
            <a href="https://sketchfab.com/3d-models/old-wooden-table-e53a5ef2faf84edcaddf49d4d27f366c" target="_blank">Old Wooden Table</a>
          </dt><dd>
            by <a href="https://sketchfab.com/GameDevNick" target="_blank">GameDev Nick</a>
            under <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">CC BY 4.0</a>
          </dd>

          <dt>
            <a href="https://sketchfab.com/3d-models/occult-books-e2c8d4fc5ad04f258fe679861172ca85" target="_blank">Occult books</a>
          </dt><dd>
            by <a href="https://sketchfab.com/athanaso" target="_blank">athanaso</a>
            under <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">CC BY 4.0</a>
          </dd>

          <dt>
            <a href="https://sketchfab.com/3d-models/old-ussr-radio-214-8fa526225e3e4c3eae4005e91d2b7938" target="_blank">old ussr radio "Океан 214"</a>
          </dt><dd>
            by <a href="https://sketchfab.com/Airmaster" target="_blank">Airmaster</a>
            under <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">CC BY 4.0</a>
          </dd>

          <dt>
            <a href="https://sketchfab.com/3d-models/animated-old-chest-4477ee9446b34d8e857906816ca5245a" target="_blank">Animated Old Chest</a>
          </dt><dd>
            by <a href="https://sketchfab.com/not_lonely" target="_blank">NOT_Lonely</a>
            under <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">CC BY 4.0</a>
          </dd>

          <dt>
            <a href="https://sketchfab.com/3d-models/key-954fc38123ec4b3f856ce1de9cf0a8c1" target="_blank">Key</a>
          </dt><dd>
            by <a href="https://sketchfab.com/Oldmode" target="_blank">Oldmode</a>
            under <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">CC BY 4.0</a>
          </dd>

          <dt>
            <a href="https://sketchfab.com/3d-models/old-rusty-key-8a43dbbd400740a886cc58d0831edc2c" target="_blank">Old Rusty Key</a>
          </dt><dd>
            by <a href="https://sketchfab.com/gormangallery" target="_blank">James Gorman</a>
            under <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">CC BY 4.0</a>
          </dd>

          <dt>
            <a href="https://sketchfab.com/3d-models/broken-ceiling-lamp-1e1ec5d2aac94e94b88340b374803399" target="_blank">Broken ceiling lamp</a>
          </dt><dd>
            by <a href="https://sketchfab.com/uwurkowo" target="_blank">uwurkowo</a>
            under <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">CC BY 4.0</a>
          </dd>

          <dt>
            <a href="https://sketchfab.com/3d-models/closed-lock-017a558690624beabe08dcbbc88eb25b" target="_blank">Closed Lock</a>
          </dt><dd>
            by <a href="https://sketchfab.com/staticcc" target="_blank">staticcc</a>
            under <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">CC BY 4.0</a>
          </dd>
        </dl>
      </div>
    </div>
  </div>
</template>

<style scoped>
  h1 { 
    font-size: 1.5rem;
  }
  a {
    color: #eee;
    text-decoration: none;
  }

  .scenario {
    font-size: 1rem;
    text-align: left;
    line-height: 130%;
  }
  .licences {
    display: flex;
    justify-content: center;
    margin: 2rem 0;
    font-size: 1rem;
    text-align: left;
  }
  .licences dt {
    padding-top: 0.75rem;
    font-size: 0.9rem;
    font-weight: bold;
  }
  .licences dd {
    margin-left: 0;
    font-size: 0.8rem;
  }

  #onboarding {
    position: absolute;
    top: 0;
    left: 0;
    background-color: #333;
    color: #ccc;
    width: 100vw;
    height: 100vh;
    padding: 1rem;
    font-family: monospace;
    z-index: 10000;
    overflow: auto;
  }
  #onboarding > * {
    margin: 0 auto;
    max-width: 38rem;
    width: calc(100vw - 10rem);
    text-align: center;
    border-radius: 0.3rem;
    padding: 1rem;
    font-size: 1.3rem;
  }
  #onboarding button {
    margin-top: 1.5rem;
    font-size: 1.3rem;
    padding: 0.5rem 1rem;
    border-radius: 0.3rem;
    background-color: white;
    color: #333;
    border: none;
    cursor: pointer;
  }
</style>