AFRAME.registerComponent('check-order', {
    schema: {
      targets: {type: 'selectorAll', default: ''},
      input: {type: 'string', default: ''},
      answer: {type: 'string', default: ''},
      emit: {type: 'string', default: 'click'}
    },
  
    init: function () {
      this.validations = []
      this.targets = this.data.targets
      this.input = this.data.input
      this.answer = this.data.answer

      for (let i = 0; i < this.data.targets.length; i++) {
        this.validations.push(false)
        this.targets[i].addEventListener('click', () => this.check(i));
      }
    },

    check: function (i) {
      if (!this.input || !this.answer) return

      if (this.targets[i].getAttribute(`data-${this.input}`) === 
      this.targets[i].getAttribute(`data-${this.answer}`)) {

        if (this.validations[i]) return

        this.validations[i] = true
        this.validate()

      } else {

        if (!this.validations[i]) return

        this.validations[i] = false

      }
      
    },

    validate: function () {
      if (this.validations.every(Boolean)) this.el.emit(this.data.emit)
    }
    
  });