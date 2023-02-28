<script setup>
    const width = 1
    const height = 0.5
    const depth = 0.3
</script>

<template>
    <a-entity
        :cloak="`width: ${width}; height: ${height}; depth: ${depth}`"
        :position="`0 0 ${-depth/2}`"
    >
        <!-- Front wall -->
        <a-plane
            :width="width"
            :height="height"
            :position="`0 0 ${-depth/2}`"
            color="#D5B7A9"
            src="#roof-texture"
        ></a-plane>

        <!-- Right wall -->
        <a-plane
            :width="depth"
            :height="height"
            rotation="0 -90 0"
            :position="`${width/2} 0 0`"
            color="#D5B7A9"
            src="#roof-texture"
        ></a-plane>

        <!-- Left wall -->
        <a-plane
            :width="depth"
            :height="height"
            rotation="0 90 0"
            :position="`${-width/2} 0 0`"
            color="#D5B7A9"
            src="#roof-texture"
        ></a-plane>

        <!-- Floor -->
        <a-plane
            :width="width"
            :height="depth"
            rotation="-90 0 0"
            :position="`0 ${-height/2} 0`"
            color="#D5B7A9"
            src="#roof-texture" 
        ></a-plane>

        <!-- Roof -->
        <a-plane
            :width="width"
            :height="depth"
            rotation="90 0 0"
            :position="`0 ${height/2} 0`"
            color="#D5B7A9"
            src="#roof-texture" 
        ></a-plane>

    </a-entity>
</template>