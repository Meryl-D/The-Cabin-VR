<script setup>
</script>

<template>
    <a-entity
        position="0 0.5 -1.74"
    >
        <a-entity
            gltf-model="#fireplace"
            scale="0.5 0.5 0.5"
        ></a-entity>

        <a-entity
            gltf-model="#painting"
            position="0 1 -0.25"
            scale="0.007 0.007 0.007"
        ></a-entity>

        <a-entity
            gltf-model="#binoculars"
            rotation="90 30 0"
            position="0.5 0.73 0"
            scale="0.5 0.5 0.5"
        ></a-entity>

        <a-entity
            gltf-model="#pictures"
            position="-0.6 0.63 0.11"
            rotation="0 40 0"
        ></a-entity>

    </a-entity>
</template>