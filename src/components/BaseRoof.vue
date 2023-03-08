<script setup>

const height = 1

const props = defineProps({
    width: {
        type: Number,
        default: 3
    }
})
</script>

<template>
    <a-triangle
        :vertex-a="`0 ${height} ${props.width/2}`"
        :vertex-b="`${-props.width/2} 0 0`"
        :vertex-c="`${props.width/2} 0 0`"
        color="#D5B7A9"
        src="#roof-texture"
        repeat="2 1"
        roughness="1"
    ></a-triangle>
</template>