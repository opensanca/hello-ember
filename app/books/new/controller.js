import Ember from 'ember';
import SharedActions from 'demosanca/mixins/shared-actions';

export default Ember.Controller.extend(SharedActions, {
  actions: {
    closedAction() {
      this.transitionToRoute('books');
    }
  }
});
