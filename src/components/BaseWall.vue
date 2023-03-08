<script setup>

const props = defineProps({
    width: {
        type: Number,
        default: 3
    },
    height: {
        type: Number,
        default: 3
    }
})
</script>

<template>
    <a-plane 
        :height="props.height"
        :width="props.width"
        src="#wall-texture"
        roughness="1"
        color="#978075"
    ></a-plane>
</template>