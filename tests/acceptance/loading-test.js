import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

let container;

moduleForAcceptance('Acceptance | loading', {
  beforeEach() {
    container = this.application.__container__;
  }
});

test('route with inplace loading', function(assert) {
  visit('/inplace-loading');
  andThen(function() {
    let controller = container.lookup('controller:inplace-loading');
    assert.equal(controller.get('loading'), false, 'Sets the loading property of controller to false after loading route');
  }.bind(this));
});

test('route without inplace loading', function(assert) {
  visit('/loading');
  andThen(function() {
    let controller = container.lookup('controller:loading');
    assert.equal(controller.get('loading'), undefined, 'Doesn\'t set the loading property of controller');
  }.bind(this));
});
