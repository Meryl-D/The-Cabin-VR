<script setup>
import '../aframe/emit-when-near'
import '../aframe/event-set'
import '../aframe/droppable'
import '../aframe/dataset-emit'

</script>

<template>
    <a-entity
        position="1.55 0 -0.9"
        rotation="0 -90 0"
    >

        <!-- Door frame -->
        <a-entity 
            wall-hole="width: 1; height: 2.2; depth: 0.1; gapWidth: 0.1; gapHeight: 0.1"
            material="roughness: 1; side: double; src: #paint-texture; repeat: 1 0.25; color: #8F8F8F;"
            >

            <!-- Door -->
            <a-box 
                position="0.5 1.1 0.05"
                width="0.8"
                height="2"
                depth="0.05"
                roughness="1"
                color="#8F8F8F"
                src="#paint-texture"
                >
                <!-- Door handle -->
                <a-entity
                >
                    <a-box
                        id="door-lock"
                        position="0.3 0 0.03"
                        height="0.2"
                        width="0.05"
                        depth="0.01"
                        src="#rust"
                        metalness="0.5"
                        data-drop="none"
                        event-set__emit="target: #chest-entity; event: openChest; attribute: emit-when-near.enabled; value: true"
                        emit-when-near="target: #hand-right; distance: 0.2; enabled: false;"
                        droppable="target: #door-key-entity;"
                        dataset-emit="dataset: drop; emit: openDoor"
                        sound="src: #door-open; on: openDoor"
                    >
                        <a-entity
                            position="0 0.04 0"
                            rotation="0 0 90"
                            event-set__unemit="target: #chest-entity; event: openChest; attribute: emit-when-near.enabled; value: false"
                            emit-when-near="target: #hand-right; distance: 0.15; event: doorRattle;"
                            sound="src: #door-rattle; on: doorRattle;"
                            animation="property: rotation; from: 0 0 90; to: 0 0 94; dir: alternate; loop: 4; dur: 150; startEvents: doorRattle;"
                        >

                            <a-cylinder
                                position="0 0.04 0.04"
                                height="0.15"
                                radius="0.015"
                                src="#rust"
                                metalness="0.5"
                            ></a-cylinder>

                        </a-entity>

                        <a-cylinder
                            position="0 0.04 0.02"
                            rotation="90 0 0"
                            height="0.04"
                            radius="0.01"
                            src="#rust"
                            metalness="0.5"
                        ></a-cylinder>
                        <a-entity
                            position="0 -0.04 0.006"
                        >
                            <a-circle
                                color="black"
                                radius="0.007"
                            ></a-circle>
                            <a-plane
                                position="0 -0.014 0"
                                color="black"
                                width="0.007"
                                height="0.015"
                            ></a-plane>
                        </a-entity>

                    </a-box>

                </a-entity>

            </a-box>

        </a-entity>

    </a-entity>
</template>