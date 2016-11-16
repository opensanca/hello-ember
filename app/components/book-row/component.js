import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'tr',
  classNames: ['a', 'b'],
  classNameBindings: ['divisible:success'],

  number: 5,
  divisible: Ember.computed('model.id', 'number', function(){
    return this.get('model.id') % this.get('number') === 0;
  }),

  didInsertElement() {
    this.$().hide().fadeIn();
  },

  actions: {
    delete() {
      this.sendAction('delete', this.get('model'));
    },
    edit() {
      this.sendAction('edit', this.get('model'));
    }
  }
});
