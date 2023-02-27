<script setup>
</script>

<template>
    <a-entity
        position="0 0.5 -1.8"
    >
        <a-entity
            gltf-model="#fireplace"
            scale="0.4 0.4 0.4"
        ></a-entity>

        <a-entity
            gltf-model="#painting"
            position="0 0.9 -0.2"
            scale="0.007 0.007 0.007"
        ></a-entity>

        <a-entity
            gltf-model="#binoculars"
            rotation="90 30 0"
            position="0.4 0.6 0"
            scale="0.5 0.5 0.5"
        ></a-entity>

        <a-entity
            gltf-model="#pictures"
            position="-0.45 0.5 0.11"
            rotation="0 40 0"
        ></a-entity>

    </a-entity>
</template>