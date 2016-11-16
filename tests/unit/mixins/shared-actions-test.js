import Ember from 'ember';
import SharedActionsMixin from 'hello-ember/mixins/shared-actions';
import { module, test } from 'qunit';

module('Unit | Mixin | shared actions');

// Replace this with your real tests.
test('it works', function(assert) {
  let SharedActionsObject = Ember.Object.extend(SharedActionsMixin);
  let subject = SharedActionsObject.create();
  assert.ok(subject);
});
