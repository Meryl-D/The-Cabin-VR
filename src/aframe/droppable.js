import { grabbed } from "../store";
import { toRad } from "../utils/math";

AFRAME.registerComponent('droppable', {
    schema: {
      target: {type: 'selectorAll', default: '#camera-rig'},
      event: {type: 'string', default: 'click'},
      position: {type: 'vec3', default: {x: 0, y: 0, z: 0}},
      rotation: {type: 'vec3', default: {x: 0, y: 0, z: 0}},
      enabled: {type: 'boolean', default: true},
    },
    init: function () {
        this.target = null
        this.el.addEventListener(this.data.event, evt => this.drop(evt));
    },
    drop: function (evt) {
        if (!this.data.enabled) return;

        // can't drop when there's already something in the dropzone
        if(this.el.dataset.drop !== 'none') return

        this.target = this.data.target.find(el => el.id === grabbed.value?.id)
        if(!this.target) return;
        this.el.dataset.drop = this.target.id

        // Set position and rotation so it looks nice
        this.target.object3D.position.set(this.data.position.x, this.data.position.y, this.data.position.z)
        this.target.object3D.rotation.set(toRad(this.data.rotation.x), toRad(this.data.rotation.y), toRad(this.data.rotation.z))

        grabbed.value = null
    }
})