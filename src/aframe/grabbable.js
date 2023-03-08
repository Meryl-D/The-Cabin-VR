import { grabbed } from '../store'

AFRAME.registerComponent('grabbable', {
    schema: {
      target: {type: 'selector', default: '#camera-rig'},
      enabled: {type: 'boolean', default: true},
    },
    init: function () {
      this.dropZone = null;
      this.initialPos = {...this.el.object3D.position};
      this.target = null;
      this.el.addEventListener('click', evt => this.grab(evt));
    },
    grab: function (evt) {
      if (!this.data.enabled) return;

      // can't grab if something is already being held
      if(grabbed.value) return

      this.dropZone = document.querySelector(`[data-drop="${this.el.id}"]`)

      this.dropZone.dataset.drop = 'none'

      this.target = this.data.target;
      grabbed.value = this.el
    },
    reset: function () {
      this.el.object3D.position.set(this.initialPos.x, this.initialPos.y, this.initialPos.z);
    },
    tick: function () {
      if (this.target === null || grabbed.value?.id !== this.el.id) return;

      this.el.object3D.position.copy(this.data.target.object3D.position);
      this.el.object3D.rotation.copy(this.data.target.object3D.rotation);
    }
  });
  