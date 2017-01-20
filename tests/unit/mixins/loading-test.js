import Ember from 'ember';
import LoadingMixin from 'ember-awesome-mixins/mixins/loading';
import { module, test } from 'qunit';

module('Unit | Mixin | loading');

// Replace this with your real tests.
test('it works', function(assert) {
  let LoadingObject = Ember.Object.extend(LoadingMixin);
  let subject = LoadingObject.create();
  assert.ok(subject);
});
