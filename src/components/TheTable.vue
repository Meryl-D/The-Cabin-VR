<script setup>

</script>

<template>
    <a-entity
        position="-1.065 0.8 0.704"
        scale="0.27 0.27 0.27"
    >

        <a-entity
            gltf-model="#table"
        ></a-entity>

        <a-entity
            gltf-model="#books"
            scale="0.003 0.003 0.003"
            position="-1.2 0.1 2.8"
            rotation="0 10 0"
        ></a-entity>

        <a-entity
            gltf-model="#radio"
            scale="0.001 0.001 0.001"
            position="-0.4 0.482 -2"
            rotation="0 60 0"
        ></a-entity>

    </a-entity>
</template>