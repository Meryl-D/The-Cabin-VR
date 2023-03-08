<template>
  <a-entity
    geometry="primitive: plane; height: 2.4; width: 1.9"
    position="0.35 0.01 0.15"
    rotation="-90 0 0"
    data-role="nav-mesh"
    material="color: blue"
    visible="false"
  ></a-entity>
  <a-entity
    geometry="primitive: plane; height: .9; width: .8"
    position="-0.9 0.01 -0.6"
    rotation="-90 0 0"
    data-role="nav-mesh"
    material="color: red"
    visible="false"
  ></a-entity>
</template>