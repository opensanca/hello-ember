import Ember from 'ember';
import SharedActions from 'demosanca/mixins/shared-actions';

export default Ember.Controller.extend(SharedActions, {
  isEdit: false,

  nameWithId: Ember.computed('model.id', 'model.name', function(){
    return `${this.get('model.id')} - ${this.get('model.name')}`;
  }),

  actions: {
    edit() {
      this.toggleProperty('isEdit');
    },
    closedAction() {
      this.get('model').rollbackAttributes();
    }
  }
});
