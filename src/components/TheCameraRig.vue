<script setup>
  import '../aframe/disable-in-vr';
  import '../aframe/hide-in-vr';
  import '../aframe/simple-navmesh-constraint';
  import '../aframe/rotation-sync'

  import TheFlashLight from './TheFlashLight.vue';
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
      <a-entity
        position="0 0 -0.3"
        visible="false"
        event-set="target: #door-lock; event: openDoor; attribute: visible; value: true;"
      >
        <a-entity
          position="0 0.006 0"
          text="value: Congratulations!; align: center; width: 0.2; opacity: 0;"
          listen-to="target: #door-lock; event: openDoor; emit: displayText;"
          animation="property: text.opacity; to: 1; delay: 2000; startEvents: displayText;"
        ></a-entity>
        <a-entity
        position="0 -0.006 0"
        text="value: You escaped the cabin; align: center; width: 0.2; opacity: 0;"
        listen-to="target: #door-lock; event: openDoor; emit: displayText;"
        animation="property: text.opacity; to: 1; delay: 2000; startEvents: displayText;"
        ></a-entity>
      </a-entity>

      <the-flash-light 
        hide-in-vr
        position="-0.2 -0.4 -0.4"
      ></the-flash-light>

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
    >
      <the-flash-light
        scale="0.7 0.7 0.7"
        position="0.03 -0.07 -0.12"
      ></the-flash-light></a-entity>

    <a-entity
      id="hand-right"
      hand-controls="hand: right; handModelStyle: lowPoly; color: #ffcccc"
    >
    </a-entity>

    <!-- <a-entity
    id="feet"
    position=""
    ></a-entity> -->

  </a-entity>
</template>