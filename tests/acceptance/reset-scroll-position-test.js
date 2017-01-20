import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | reset scroll position');

test('Reset scroll position', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal($(window).scrollTop(), 0);
  });
});
