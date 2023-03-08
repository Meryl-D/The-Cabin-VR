AFRAME.registerComponent('time-emit', {
  schema: {
    firstTime: { type: 'number', default: 1000 },
    timeInterval: { type: 'number', default: 1000 },
    emit: { type: 'string', default: 'click' },
  },
  init: function () {
    setTimeout(() => {
      this.emitOnTime()
    }, this.firstTime)
  },

  emitOnTime: function () {
    this.el.emit(this.data.emit)
    setTimeout(() => {
      this.emitOnTime()
    }, this.data.timeInterval)
  }


});