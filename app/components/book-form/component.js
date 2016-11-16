import Ember from 'ember';
import computed from 'ember-computed';

export default Ember.Component.extend({
  open: true,
  modelTitle: computed('model.isNew', function(){
    let type =  this.get('model.isNew') ? 'Criar' : 'Editar';
    return `Livro - ${type}`;
  }),

  actions: {
    submit() {
      this.sendAction('submit');
    },
    closedAction() {
      this.sendAction('closedAction');
    }
  }
});
