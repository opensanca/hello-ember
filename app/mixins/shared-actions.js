import Ember from 'ember';

export default Ember.Mixin.create({
  actions: {
    submit() {
      this.get('model').save().then(() => {
        this.transitionToRoute('books');
        this.set('isEdit', false);
      });
    }
  }
});
