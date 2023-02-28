AFRAME.registerComponent('rotation-sync', {
    schema: {
      target: {type: 'selector', default: '#camera-rig'},
    },
    init: function () {

    },
    tick: function () {
      this.el.object3D.rotation.copy(this.data.target.object3D.rotation);
    }
  });
  