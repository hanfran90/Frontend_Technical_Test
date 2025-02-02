import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | MovieListHeader', function (hooks) {
  setupRenderingTest(hooks);

  test('renders the movie list header', async function (assert) {
    await render(hbs`<MovieListHeader />`);

    assert.dom('h1').exists();
    assert.dom('h1').hasText('MovieMemento');
  });
});
