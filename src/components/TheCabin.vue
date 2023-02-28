<script setup>
import BaseWall from './BaseWall.vue';
import BaseRoof from './BaseRoof.vue';
import TheStach from './TheStach.vue';

import '../aframe/emit-when-near'
import '../aframe/animation-mixer'
import '../aframe/cloak'

function animateSwitch() {
  document.getElementById("switch-entity").setAttribute('animation-mixer', 'timeScale: 1.0; ');
}

</script>

<template>
    <a-entity>

        <!-- Front wall -->
        <a-entity
          position="0 1.5 -1.5"
        >
        <!-- Pour le cloak, mettre les mêmes valeurs de taille que la box -->
          <TheStach/>
          <!-- <a-box
            width="1"
            height="0.5"
            depth="0.3"
            position="0 0 -0.15"
            cloak="height: 0.5; depth: 0.3"
            color="#D5B7A9"
            material="src: #roof-texture; side: back"
          ></a-box> -->
          <BaseWall
          ></BaseWall>

          <a-box
            height="0.2"
            depth="0.2"
            width="0.2"
            color="red"
            position="0 0 -0.15"
          ></a-box>
        </a-entity>

        <!-- Right wall -->
        <BaseWall
          position="1.5 1.5 0"
          rotation="0 -90 0"
        ></BaseWall>

        <!-- Left wall -->
        <BaseWall
          position="-1.5 1.5 0"
          rotation="0 90 0"
        ></BaseWall>

        <!-- Back wall -->
        <BaseWall
          position="0 1.5 1.5"
          rotation="0 180 0"
        ></BaseWall>

        <!-- Front roof -->
        <BaseRoof
          position="0 3 -1.5"
        ></BaseRoof>

        <!-- Right roof -->
        <BaseRoof
          position="1.5 3 0"
          rotation="0 -90 0"
        ></BaseRoof>

        <!-- Left roof -->
        <BaseRoof
          position="-1.5 3 0"
          rotation="0 90 0"
        ></BaseRoof>

        <!-- Back roof -->
        <BaseRoof
          position="0 3 1.5"
          rotation="0 180 0"
        ></BaseRoof>

        <!-- Floor -->
        <a-plane
          width="3"
          height="3"
          rotation="-90 0 0"
          src="#floor-texture"
          roughness="1"
          repeat="1 3"
          color="#D5B7A9"
        ></a-plane>

        <!-- Door -->
        <a-entity
          gltf-model="#door"
          position="1.47 0.9 -0.45"
          rotation="0 180 0"
          scale="0.008 0.008 0.008"
          animation-mixer="timeScale: 0;"
        >
          <a-sphere
            id="door-handle"
            radius="7"
            visible="false"
            position="3.930 -17.780 -38.405"
            emit-when-near="target: #hand-right"
            sound="src: #door-rattle; on: click;"
          >
          </a-sphere>
        </a-entity>

        <!-- Light switch -->
        <a-entity
          id="switch-entity"
          gltf-model="#switch"
          rotation="0 -90 0"
          position="1.5 0.9 0.2"
          scale="0.6 0.6 0.6"
        >
          <a-plane
            id="switch-collision"
            width="0.12"
            height="0.2"
            position="0 0.112 0.02"
            visible="false"
            emit-when-near="target: #hand-right"
            sound="src: #light-switch; on: click"
            @click="animateSwitch()"
          ></a-plane>
        </a-entity>

        <!-- Ceiling lamp -->
        <a-entity
          gltf-model="#ceiling-lamp"
          position="0 3.1 0"
        ></a-entity>

      </a-entity>
</template>