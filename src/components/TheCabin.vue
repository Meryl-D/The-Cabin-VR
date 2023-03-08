<script setup>
import BaseWall from './BaseWall.vue';
import BaseRoof from './BaseRoof.vue';
import TheDoor from './TheDoor.vue';
import BasePaper from './BasePaper.vue';
import TheCorkBoard from './TheCorkBoard.vue';
import ThePageCode from './ThePageCode.vue';

import '../aframe/emit-when-near'
import '../aframe/animation-mixer'
import '../aframe/wall-hole'
import '../aframe/clickable'
import '../aframe/grabbable'
import '../aframe/delay-emit'
import '../aframe/event-set'
import '../aframe/listen-to'

const wallWidth = 3
const wallHeight = 3
const wallHoleDepth = 0.4

</script>

<template>
    <a-entity>
        <!-- Front wall with hole -->
        <a-entity
          :position="`${-wallWidth/2} 0 ${-wallWidth/2 - wallHoleDepth}`"
          :wall-hole="`width: ${wallWidth}; height: ${wallHeight}; depth: ${wallHoleDepth}; gapWidth: 1; gapHeight: 1.25`"
          material="src: #wall-texture; color: #978075; side: double; roughness: 1; repeat: 0.3 0.4;"
        >
        <!-- Back panel of the hole -->
          <a-plane
            width="1"
            height="0.5"
            :position="`${wallWidth/2} ${wallHeight/2} 0`"
            color="#978075"
            src="#wall-texture"
            roughness="1"
          ></a-plane>

          <a-plane
            id="chest-wall-dp"
            width="0.4"
            height="0.23"
            opacity="0.2"
            color="#000"
            rotation="-90 0 0"
            position="1.494 1.252 0.263"
            data-drop="chest-entity"
            emit-when-near="target: #hand-right; distance: 0.2;"
            droppable="target: #chest-entity; position: 0 1.332 -1.667; rotation: 0 90 0"
          ></a-plane>

          <a-entity
            id="painting-entity"
            gltf-model="#painting"
            :position="`${wallWidth/2} ${wallHeight/2 - 0.35} ${wallHoleDepth}`"
            scale="0.007 0.007 0.007"
            delay-emit="target: #fp-btn; emit: openStach"
            animation="property: position; to: 1.50 1.8 0.4; startEvents: openStach; dur: 2000;"
            sound="src: #wood-clank; on: openStach;"
          ></a-entity>

        </a-entity>

        <a-entity
          id="battery-entity"
          gltf-model="#battery"
          scale="0.001 0.001 0.001"
          position="0.14 0.91 -1.22"
          rotation="90 0 0"
          event-set__ungrabbable="target: #radio-entity; event: turnOnRadio; attribute: emit-when-near.enabled; value: false;"
          event-set__inivsible="target: #radio-entity; event: turnOnRadio; attribute: visible; value: false;"
          emit-when-near="target: #hand-right; distance: 0.25;"
          grabbable="target: #hand-right"
        ></a-entity>

        <a-entity
          id="chest-entity"
          gltf-model="#chest"
          scale="0.003 0.003 0.003"
          position="0 1.332 -1.631"
          rotation="0 90 0"
          data-drop="none"
          event-set__grabbable="target: #fp-btn; attribute: emit-when-near.enabled; value: true"
          emit-when-near="target: #hand-right; distance: 0.3; enabled: false;"
          event-set__ungrabbable="target: #table-dropzone; event: tableCollide; attribute: grabbable.enabled; value: false"
          grabbable="target: #hand-right"
          event-set__droppable="target: #table-dropzone; event: tableCollide; attribute: droppable.enabled; value: true"
          droppable="target: #chest-key-entity; position: -0.792 0.83 0.589; rotation: 0 -40 0; enabled: false;"
          dataset-emit="dataset: drop; emit: openChest"
          event-set__unemit="event: openChest; attribute: emit-when-near.enabled; value: false"
          event-set__animate="event: openChest; attribute: animation-mixer.timeScale; value: 1.0;"
          animation-mixer="timeScale: 0; loop: once; clampWhenFinished: true;"
          sound="src: #chest-open; on: openChest"
        ></a-entity>

        <a-entity
          id="door-key-entity"
          gltf-model="#door-key"
          scale="0.05 0.05 0.05"
          position="-0.886 0.84 0.230"
          rotation="90 -58 0"
          visible="false"
          event-set__visible="target: #chest-entity; event: openChest; attribute: visible; value: true"
          event-set__grabbable="target: #chest-entity; event: openChest; attribute: emit-when-near.enabled; value: true"
          emit-when-near="target: #hand-right; distance: 0.1; enabled: false;"
          grabbable="target: #hand-right;"
        ></a-entity>

        <a-entity
            id="chest-key-entity"
            gltf-model="#chest-key"
            position="-0.15 0 -1.05"
            rotation="0 140 0"
            scale="0.05 0.05 0.05"
            visible="false"
            listen-to="target: #page-code-wrapper; event: solveEnigma; emit: dropKey;"
            event-set__visible="event: dropKey; attribute: visible; value: true"
            event-set__grabbable="event: dropKey; attribute: emit-when-near.enabled; value: true"
            emit-when-near="target: #hand-right; distance: 0.25; enabled: false;"
            grabbable="target: #hand-right"
            sound="src: #key-drop; on: dropKey;"
        ></a-entity>

        <!-- Right wall -->
        <BaseWall
          :position="`${wallWidth/2} ${wallHeight/2} 0`"
          rotation="0 -90 0"
          :width="wallWidth"
          :height="wallHeight"
        ></BaseWall>

        <!-- Left wall -->
        <BaseWall
          :position="`${-wallWidth/2} ${wallHeight/2} 0`"
          rotation="0 90 0"
          :width="wallWidth"
          :height="wallHeight"
        ></BaseWall>

        <!-- Back wall -->
        <BaseWall
          :position="`0 ${wallHeight/2} ${wallWidth/2}`"
          rotation="0 180 0"
          :width="wallWidth"
          :height="wallHeight"
        ></BaseWall>

        <TheCorkBoard/>

        <BasePaper
          id="page-4"
          class="number-page"
          position="1.49 1.52 0.641"
          rotation="0 -90 0"
          side="double"
          color="#FFDEC2"
          src="#paper-texture-4"
          emit-when-near="target: #hand-right; distance: 0.2;"
          grabbable="target: #hand-right"
        ></BasePaper>

        <BasePaper
          id="page-2"
          class="number-page"
          position="1.49 1.638 0.894"
          rotation="0 -90 0"
          side="double"
          color="#FFDEC2"
          src="#paper-texture-2"
          emit-when-near="target: #hand-right; distance: 0.2;"
          grabbable="target: #hand-right"
        ></BasePaper>

        <BasePaper
          id="page-5"
          class="number-page"
          position="1.49 1.591 1.158"
          rotation="0 -90 0"
          side="double"
          color="#FFDEC2"
          src="#paper-texture-5"
          emit-when-near="target: #hand-right; distance: 0.2;"
          grabbable="target: #hand-right"
        ></BasePaper>

        <ThePageCode></ThePageCode>

        <!-- Front roof -->
        <BaseRoof
          :position="`0 ${wallHeight} ${-wallWidth/2}`"
          :width="wallWidth"
        ></BaseRoof>

        <!-- Right roof -->
        <BaseRoof
          :position="`${wallWidth/2} ${wallHeight} 0`"
          rotation="0 -90 0"
          :width="wallWidth"
        ></BaseRoof>

        <!-- Left roof -->
        <BaseRoof
          :position="`${-wallWidth/2} ${wallHeight} 0`"
          rotation="0 90 0"
          :width="wallWidth"
        ></BaseRoof>

        <!-- Back roof -->
        <BaseRoof
          :position="`0 ${wallHeight} ${wallWidth/2}`"
          rotation="0 180 0"
          :width="wallWidth"
        ></BaseRoof>

        <!-- Floor -->
        <a-plane
          :width="wallWidth"
          :height="wallWidth"
          rotation="-90 0 0"
          src="#floor-texture"
          roughness="1"
          repeat="1 3"
          color="#D5B7A9"
        ></a-plane>

        <TheDoor/>

        <!-- Light switch -->
        <!-- <a-entity
          id="switch-entity"
          gltf-model="#switch"
          rotation="0 -90 0"
          position="1.5 0.9 0.2"
          scale="0.6 0.6 0.6"
          animation-mixer="timeScale: 0;"
        >
          <a-plane
            id="switch-collision"
            width="0.12"
            height="0.2"
            position="0 0.112 0.02"
            visible="false"
            emit-when-near="target: #hand-right; distance: 0.01;"
            sound="src: #light-switch; on: click"
            @click="animateSwitch()"
          ></a-plane>
        </a-entity> -->

        <!-- Ceiling lamp -->
        <a-entity
          gltf-model="#ceiling-lamp"
          position="0 3.1 0"
        ></a-entity>

      </a-entity>
</template>