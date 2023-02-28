AFRAME.registerComponent('cloak', {
    schema: {
        width: {default: 1},
        height: {default: 1},
        depth: {default: 1}
    },

    init: function() {

      let geometry = new THREE.BoxGeometry(this.data.width, this.data.height, this.data.depth)

      let material = new THREE.MeshBasicMaterial({
         colorWrite: false // rend invisible mais garde ses propriété -> cache
      })

      let mesh = new THREE.Mesh(geometry, material)
      mesh.scale.set(1.001, 1.001, 1.001) // 
      this.el.object3D.add(mesh)
    }
})