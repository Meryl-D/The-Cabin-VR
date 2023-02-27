<script setup>
import TheAnchor from './TheAnchor.vue';
</script>

<template>
    <a-entity
        position="0.8 0 0.8"
    >
        <a-box
            width="1"
            height="0.1"
            depth="1"
            position="0 -0.04 0"
            src="#floor-texture"
            color="#D5B7A9"
            roughness="1"
        ></a-box>

        <TheAnchor
            position="0 0.01 -0.56"
        ></TheAnchor>

        <TheAnchor
            position="0 0.01 -0.44"
            rotation="0 180 0"
        ></TheAnchor>

        <a-entity
            gltf-model="#closed-lock"
            scale="0.04 0.04 0.04"
            rotation="0 0 -95"
            position="-0.146 0.037 -0.5"
        ></a-entity>

    </a-entity>
</template>