<script setup>
import '../aframe/clickable';
import '../aframe/grabbable';
import '../aframe/emit-when-near';
import '../aframe/event-set';

</script>

<template>
    <a-entity
        position="0 0.32 -1.28"
    >
        <a-entity
            gltf-model="#fireplace"
            scale="0.45 0.45 0.45"
        ></a-entity>

        <a-circle
            color="black"
            opacity="0.2"
            radius="0.01"
            position="0.138 0.57 0.081"
            rotation="-90 0 0"
            data-drop="battery-entity"
            emit-when-near="target: #hand-right; distance: 0.05;"
            droppable="target: #battery-entity; position: 0.138 0.91 -1.179; rotation: -90 0 0"
        ></a-circle>

        <a-cylinder 
            id="fp-btn"
            height="0.02"
            radius="0.04"
            position="0.062 -0.277 -0.116"
            roughness="1"
            src="#fireplace-texture"
            reapeat="0.5 0.5"
            emit-when-near="target: #hand-right; distance: 0.2"
            animation="property: position; to: 0.062 -0.287 -0.116; startEvents: click;"
            sound="src: #stone-scrape; on: click;"
            event-set="attribute: emit-when-near.enabled; value: false"
        ></a-cylinder>

        <a-entity
            id="binoculars-entity"
            gltf-model="#binoculars"
            rotation="90 30 0"
            position="0.4 0.67 0"
            scale="0.5 0.5 0.5"
            emit-when-near="event: nearBinoculars; throttle: 500;"
        ></a-entity>

        <a-entity
            gltf-model="#pictures"
            position="-0.45 0.57 0.11"
            rotation="0 40 0"
        ></a-entity>

    </a-entity>
</template>