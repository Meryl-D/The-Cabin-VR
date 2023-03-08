AFRAME.registerComponent('event-set', {
  multiple: true,

  schema: {
    target: {type: 'selector', default: '#non-existant-id'},
    event: {type: 'string', default: 'click'},
    attribute: {type: 'string'},
    value: {type: 'string'}
  },

  init: function() {
    if (!this.data.target) this.data.target = this.el;
    this.onEvent = this.onEvent.bind(this);
    this.data.target.addEventListener(this.data.event, this.onEvent);
  },

  remove: function() {
    this.data.target.removeEventListener(this.data.event, this.onEvent);
  },

  onEvent: function(evt) {
    AFRAME.utils.entity.setComponentProperty(this.el, this.data.attribute, this.data.value);
  },

});