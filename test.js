var assert = require('assert')

function test() {
  assert.equal(2 + 7, 9);
}

if (module == require.main) require('test').run(test);
