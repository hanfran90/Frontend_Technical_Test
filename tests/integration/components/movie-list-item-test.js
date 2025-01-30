import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | MovieListHeader', function (hooks) {
  setupRenderingTest(hooks);

  test('renders the correct title and description for a movie', async function (assert) {
    (this.movie = { title: 'TEST TITLE', description: 'TEST DESCRIPTION' }),
      await render(hbs`<MovieList::MovieListItem @movie={{this.movie}}/>`);

    assert.dom('h2').hasText('TEST TITLE');
    assert.dom('p').hasText('TEST DESCRIPTION');
    assert.dom('h2').exists();
    assert.dom('p').exists();
  });
});
