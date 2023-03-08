<script setup>
import '../aframe/emit-when-near'
import '../aframe/clickable'
import '../aframe/droppable'
import '../aframe/dataset-emit'

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
            position="-1.394 0.1 2.8"
            rotation="0 10 0"
        ></a-entity>

        <a-entity
            id="radio-entity"
            gltf-model="#radio"
            scale="0.001 0.001 0.001"
            position="-0.74 0.482 -2"
            rotation="0 60 0"
            data-drop="none"
            emit-when-near="target: #hand-right; distance: 0.3;"
            droppable="target: #battery-entity;"
            dataset-emit="dataset: drop; emit: turnOnRadio"
            listen-to="event: turnOnRadio; emit: playRadio"
            event-set="event: turnOnRadio; attribute: emit-when-near.event; value: playRadio"
            sound="src: #radio-code; on: playRadio;"
        ></a-entity>

        <a-plane
            id="table-dropzone"
            width="1.4"
            height="0.9"
            rotation="-90 -60 0"
            color="#171411"
            opacity="0.2"
            position="0.63 0.09 -1.7"
            data-drop="none"
            emit-when-near="target: #hand-right; distance: 0.2;"
            droppable="target: #chest-entity; position: -0.886 0.905 0.230; rotation: 0 210 0"
            dataset-emit="dataset: drop; emit: tableCollide"
        ></a-plane>

        <a-entity
            position="0.95 0.09 -0.35"
            rotation="-90 0 0"
            data-drop="chest-key-entity"
            emit-when-near="target: #hand-right; distance: 0.1;"
            droppable="target: #chest-key-entity; position: -0.792 0.83 0.589; rotation: 0 140 0"
        >
            <a-circle
                color="#171411"
                opacity="0.2"
                radius="0.05"
            ></a-circle>
            <a-plane
                position="0.078 0.086 0"
                rotation="0 0 -40"
                color="#171411"
                opacity="0.2"
                width="0.04"
                height="0.15"
            ></a-plane>
        </a-entity>

        <a-entity
            id="door-key-dp"
            position="1.3 0.09 0.3"
            rotation="-90 -110 0"
            data-drop="door-key-entity"
            emit-when-near="target: #hand-right; distance: 0.1;"
            droppable="target: #door-key-entity; position: -0.687 0.84 0.810; rotation: 0 118 0"
        >
            <a-circle
                color="#171411"
                opacity="0.2"
                radius="0.07"
            ></a-circle>
            <a-plane
                position="0.123 0.141 0"
                rotation="0 0 -40"
                color="#171411"
                opacity="0.2"
                width="0.04"
                height="0.25"
            ></a-plane>
            <a-plane
                position="0.188 0.149 0"
                rotation="0 0 -40"
                color="#171411"
                opacity="0.2"
                width="0.05"
                height="0.07"
            ></a-plane>
        </a-entity>

    </a-entity>
</template>