<script setup>
</script>

<template>
    <a-entity>
        <!-- 0.015 -->
        <a-entity 
            light="type: ambient; color: #fff; intensity: 0.015;"
            hide-in-vr
            listen-to="target: #door-lock; event: openDoor; emit: endGame;"
            animation="property: light.intensity; to: 0; dur: 2000; startEvents: endGame"
        ></a-entity>
        <a-entity 
            light="type: point; color: #FFF; intensity: 0.015;"
            position="0 1.5 -1"
            hide-in-vr
            listen-to="target: #door-lock; event: openDoor; emit: endGame;"
            animation="property: light.intensity; to: 0; dur: 2000; startEvents: endGame"
        ></a-entity>

        <!-- 0.002 -->
        <a-entity
            light="type: ambient; color: #fff; intensity: 0.002;"
            listen-to="target: #door-lock; event: openDoor; emit: endGame;"
            animation="property: light.intensity; to: 0; dur: 2000; startEvents: endGame"
        ></a-entity>
        <a-entity
            light="type: point; color: #FFF; intensity: 0.002" position="0 1.5 -1"
            listen-to="target: #door-lock; event: openDoor; emit: endGame;"
            animation="property: light.intensity; to: 0; dur: 2000; startEvents: endGame"
        ></a-entity>
    </a-entity>
</template>