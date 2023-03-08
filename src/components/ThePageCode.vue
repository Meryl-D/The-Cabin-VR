<script setup>
import BasePaper from './BasePaper.vue';

import '../aframe/emit-when-near'
import '../aframe/clickable'
import '../aframe/droppable'
import '../aframe/check-order'

</script>

<template>
    <a-entity
        id="page-code-wrapper"
        position="0 1.6 1.499"
        rotation="0 180 0"
        check-order="targets: .page-enigma-dp; input: drop; answer: answer; emit: solveEnigma;"
    >
        <BasePaper
            class="page-enigma-dp"
            color="#B0846D"
            opacity="0.2"
            data-drop="none"
            data-answer="page-2"
            emit-when-near="target: #hand-right; distance: 0.1;"
            droppable="target: .number-page; position: 0 1.6 1.49; rotation: 0 180 0"
        ></BasePaper>

        <BasePaper
            position="0.4 0 0"
            class="page-enigma-dp"
            color="#B0846D"
            opacity="0.2"
            data-drop="none"
            data-answer="page-4"
            emit-when-near="target: #hand-right; distance: 0.1;"
            droppable="target: .number-page; position: -0.4 1.6 1.49; rotation: 0 180 0"
        ></BasePaper>

        <BasePaper
            position="-0.4 0 0"
            class="page-enigma-dp"
            color="#B0846D"
            opacity="0.2"
            data-drop="none"
            data-answer="page-5"
            emit-when-near="target: #hand-right; distance: 0.1;"
            droppable="target: .number-page; position: 0.4 1.6 1.49; rotation: 0 180 0"
        ></BasePaper>

    </a-entity>
</template>