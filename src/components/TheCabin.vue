<script setup>
import BaseWall from './BaseWall.vue';
import BaseRoof from './BaseRoof.vue';

</script>

<template>
    <a-entity>
      
        <!-- Front wall -->
        <BaseWall
          position="0 1.5 -2.5"
        ></BaseWall>

        <!-- Right wall -->
        <BaseWall
          position="2.5 1.5 0"
          rotation="0 -90 0"
        ></BaseWall>

        <!-- Left wall -->
        <BaseWall
          position="-2.5 1.5 0"
          rotation="0 90 0"
        ></BaseWall>

        <!-- Back wall -->
        <BaseWall
          position="0 1.5 2.5"
          rotation="0 180 0"
        ></BaseWall>

        <!-- Front roof -->
        <BaseRoof
          position="0 3 -2.5"
        ></BaseRoof>

        <!-- Right roof -->
        <BaseRoof
          position="2.5 3 0"
          rotation="0 -90 0"
        ></BaseRoof>

        <!-- Left roof -->
        <BaseRoof
          position="-2.5 3 0"
          rotation="0 90 0"
        ></BaseRoof>

        <!-- Back roof -->
        <BaseRoof
          position="0 3 2.5"
          rotation="0 180 0"
        ></BaseRoof>

        <!-- Floor -->
        <a-plane
          width="5"
          height="5"
          rotation="-90 0 0"
          src="#floor-texture"
          roughness="1"
          repeat="1 3"
          color="#D5B7A9"
        ></a-plane>

        <!-- Door -->
        <a-entity
          gltf-model="#door"
          position="2.4 1 -0.8"
          rotation="0 180 0"
          scale="0.009 0.009 0.009"
        ></a-entity>

        <!-- Light switch -->
        <a-entity
          gltf-model="#switch"
          rotation="0 -90 0"
          position="2.48 0.9 -0.15"
          scale="0.6 0.6 0.6"
        ></a-entity>

        <!-- Ceiling lamp -->
        <a-entity
          gltf-model="#ceiling-lamp"
          position="0 3.1 0"
        ></a-entity>

      </a-entity>
</template>