<script setup>
import BasePaper from './BasePaper.vue';
</script>

<template>
    <a-entity
        position="1.499 1.2 0.27"
        rotation="0 -90 0"
    >
        <!-- Board frame -->
        <a-entity 
            wall-hole="width: 1.04; height: 0.64; depth: 0.02; gapWidth: 0.02; gapHeight: 0.02"
            material="metalness: 0.5; side: double; src: #rust; repeat: 1 2; color: #8F8F8F;"
        >
            <!-- Cork board -->
            <a-plane
                position="0.52 0.32 0"
                width="1"
                height="0.6"
                src="#cork-texture"
                roughness="1"
                color="#B8B8B8"
            >
                <a-entity
                    position="0 0 0.001"
                >
                    <BasePaper
                        position="-0.33 0.1 0.01"
                        src="#snake-page"
                    ></BasePaper>

                    <BasePaper
                        position="-0.15 0 0"
                        color="#2B1D12"
                        opacity="0.2"
                        data-drop="page-4"
                        emit-when-near="target: #hand-right; distance: 0.1;"
                        droppable="target: .number-page; position: 1.49 1.52 0.641; rotation: 0 -90 0"
                    ></BasePaper>

                    <BasePaper
                        position="0.1 0.12 0"
                        color="#2B1D12"
                        opacity="0.2"
                        data-drop="page-2"
                        emit-when-near="target: #hand-right; distance: 0.1;"
                        droppable="target: .number-page; position: 1.49 1.638 0.894; rotation: 0 -90 0"
                    ></BasePaper>

                    <BasePaper
                        position="0.37 0.07 0"
                        color="#2B1D12"
                        opacity="0.2"
                        data-drop="page-5"
                        emit-when-near="target: #hand-right; distance: 0.1;"
                        droppable="target: .number-page; position: 1.49 1.591 1.158; rotation: 0 -90 0"
                    ></BasePaper>

                    <BasePaper
                        position="0.25 -0.1 0.01"
                        src="#demons-page"
                    ></BasePaper>

                </a-entity>


            </a-plane>

        </a-entity>

    </a-entity>
</template>