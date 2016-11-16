import { upcase } from 'demosanca/helpers/upcase';
import { module, test } from 'qunit';

module('Unit | Helper | upcase');

// Replace this with your real tests.
test('convert to uppercase', function(assert) {
  let result = upcase(["demosanca"]);
  assert.equal(result, "DEMOSANCA");
});
