<script setup>

</script>

<template>
    <a-entity
        gltf-model="../assets/models/simple_flashlight.glb"
        rotation="0 180 0"
    >
        <a-entity rotation="0 180 0"
            light="type: spot; angle: 30; penumbra: 1; intensity: 1; decay: 2; distance: 10;"
        ></a-entity>
    </a-entity>
</template>