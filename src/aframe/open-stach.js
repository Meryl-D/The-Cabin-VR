AFRAME.registerComponent('open-stach', {
    schema: {
      painting: {type: 'selector', default: '#painting-entity'},
      chest: {type: 'selector', default: '#chest-entity'}
    },
    init: function () {

        this.el.addEventListener('click', evt => {
            setTimeout(() => {
                this.animatePainting()
                this.makeChestGrabbable()
              }, "1000")
        });
    },
    animatePainting: function () {        
        this.data.painting.emit(`movePainting`, null, false)
    },
    makeChestGrabbable: function () {
        this.data.chest.setAttribute('clickable');
        this.data.chest.setAttribute('emit-when-near', {target: '#hand-right', distance: 0.2 })
        this.data.chest.setAttribute('grabbable', {target: '#hand-right'})
    }
})