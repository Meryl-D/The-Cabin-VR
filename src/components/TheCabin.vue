<script setup>

</script>

<template>
    <a-entity>
        <!-- Front wall -->
        <a-plane 
          position="0 1.5 -2.5"
          height="3"
          width="5"
          src="#wood-texture"
          roughness="1"
        ></a-plane>
        <!-- Right wall -->
        <a-plane
          position="2.5 1.5 0"
          rotation="0 -90 0"
          height="3" width="5"
          src="#wood-texture"
          roughness="1"
        ></a-plane>
        <!-- Left wall -->
        <a-plane
          position="-2.5 1.5 0"
          rotation="0 90 0"
          height="3" width="5"
          src="#wood-texture"
          roughness="1"
        ></a-plane>
        <!-- Back wall -->
        <a-plane
          position="0 1.5 2.5"
          rotation="0 180 0"
          height="3" width="5"
          src="#wood-texture"
          roughness="1"
        ></a-plane>
        <!-- Front triangle -->
        <a-triangle
            vertex-a="0 1 2.5"
            vertex-b="-2.5 0 0"
            vertex-c="2.5 0 0"
            position="0 3 -2.5"
        ></a-triangle>

      </a-entity>
</template>