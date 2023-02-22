<script setup>
  import '../aframe/disable-in-vr';
  import '../aframe/hide-in-vr';
  import '../aframe/simple-navmesh-constraint';
  import '../aframe/blink-controls';
</script>

<template>
  <a-entity
    id="camera-rig"
    movement-controls="camera: #head;"
    disable-in-vr="component: movement-controls;"
  >
    <a-entity
      id="head"
      look-controls="pointerLockEnabled: true"
      simple-navmesh-constraint="navmesh: [data-role='nav-mesh']; height: 1.65;"
      disable-in-vr="component: simple-navmesh-constraint;"
      camera
      position="0 1.65 0"
    > 
      <!-- Flashlight and light -->
      <a-entity
        hide-in-vr
        gltf-model="../assets/simple_flashlight.glb"
        position="0.2 -0.3 -0.3"
        rotation="0 180 0"
      >
        <a-entity
          rotation="0 180 0"
          light="type: spot; angle: 30; penumbra: 1; intensity: 1; decay: 2; distance: 15;"
        ></a-entity>
      </a-entity>

      <!-- Pointer -->
      <a-entity
        id="pointer"
        geometry="primitive: circle; radius: 0.0003;"
        material="shader: flat; color: white;"
        cursor
        raycaster="far: 2; objects: [clickable]; showLine: false;"
        position="0 0 -0.1"
        disable-in-vr="component: raycaster; disableInAR: false;"
        hide-in-vr="hideInAR: false"
      ></a-entity>
    </a-entity>

    <a-entity
      id="hand-left"
      hand-controls="hand: left; handModelStyle: lowPoly; color: #ffcccc"
      blink-controls="
        cameraRig: #camera-rig;
        teleportOrigin: #head;
        collisionEntities: [data-role='nav-mesh'];
        snapTurn: false;
      "
    ></a-entity>

    <a-entity
      id="hand-right"
      hand-controls="hand: right; handModelStyle: lowPoly; color: #ffcccc"
      laser-controls="hand: right"
      raycaster="far: 2; objects: [clickable]; showLine: true;"
    >
      <a-entity
          gltf-model="../assets/simple_flashlight.glb"
          position="-0.06 -0.12 -0.15"
          rotation="0 180 0"
        >
          <a-entity
            rotation="0 180 0"
            light="type: spot; angle: 30; penumbra: 1; intensity: 1; decay: 2; distance: 15;"
          ></a-entity>
        </a-entity>
    </a-entity>

  </a-entity>
</template>