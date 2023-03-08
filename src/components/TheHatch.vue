<script setup>
import TheAnchor from './TheAnchor.vue';

import '../aframe/emit-when-near'
import '../aframe/listen-to'
</script>

<template>
    <a-entity
        position="0.8 0 1.3"
        listen-to="target: #binoculars-entity; event: nearBinoculars; emit: hatchBanging;"
        emit-when-near="target: #hand-right; distance: 1.5; event: hatchBanging; throttle: 500;"
        animation="property: rotation; from: 0 0 0; to: 1 0 0; dir: alternate; loop: 6; dur: 150; startEvents: hatchBanging;"
        sound="src: #hatch-banging; on: hatchBanging;"
    >
        <a-entity
            position="0 0 -0.5"
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

    </a-entity>
</template>