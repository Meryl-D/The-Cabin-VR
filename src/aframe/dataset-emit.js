AFRAME.registerComponent('dataset-emit', {
    schema: {
      dataset: {type: 'string', default: ''},
      event: {type: 'string', default: 'click'},
      emit: {type: 'string', default: 'click'}
    },
  
    init: function () {
        this.onEvent = this.onEvent.bind(this);
        this.el.addEventListener(this.data.event, this.onEvent);
    },

    onEvent: function (i) {
      console.log(this.el.getAttribute(`data-${this.data.dataset}`))
        if (this.el.getAttribute(`data-${this.data.dataset}`) !== 'none' && this.el.id !== 'chest-wall-dp') this.el.emit(this.data.emit)
    },
    
  });