AFRAME.registerComponent('delay-emit', {
    multiple: true,
    
    schema: {
        target: { type: 'selector', default: '#hand-right' },
        event: { type: 'string', default: 'click' },
        emit: { type: 'string', default: 'click' },
        time: { type: 'number', default: 1000 }
    },

    init: function () {
        this.onEvent = this.onEvent.bind(this);
        this.data.target.addEventListener(this.data.event, this.onEvent);
    },

    onEvent: function () {
        setTimeout(() => {
            this.el.emit(this.data.emit)
        }, this.data.time)
    }
})