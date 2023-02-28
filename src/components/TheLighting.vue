<script setup>
</script>

<template>
    <a-entity>
        <!-- 0.015 -->
        <a-entity light="type: ambient; color: #fff; intensity: 1;" hide-in-vr></a-entity>
        <a-entity light="type: point; color: #FFF; intensity: 1;" position="0 1.5 -1" hide-in-vr></a-entity>
        <!-- 0.002 -->
        <a-entity light="type: ambient; color: #fff; intensity: 0.002;"></a-entity>
        <a-entity light="type: point; color: #FFF; intensity: 0.002" position="0 1.5 -1"></a-entity>
    </a-entity>
</template>