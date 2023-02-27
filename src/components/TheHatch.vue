<script setup>
import TheAnchor from './TheAnchor.vue';
</script>

<template>
    <a-entity
        position="1.5 0 1.5"
    >
        <a-box
            width="1.2"
            height="0.1"
            depth="1.2"
            position="0 -0.04 0"
            src="#floor-texture"
            color="#D5B7A9"
            roughness="1"
        ></a-box>

        <TheAnchor
            position="0 0.05 -0.69"
        ></TheAnchor>

        <TheAnchor
            position="0 0.05 -0.53"
            rotation="0 180 0"
        ></TheAnchor>

        <a-entity
            gltf-model="#closed-lock"
            scale="0.07 0.07 0.07"
            rotation="0 5 -80"
            position="-0.24 0.03 -0.59"
        ></a-entity>

    </a-entity>
</template>