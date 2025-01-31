import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | MovieList', function (hooks) {
  setupRenderingTest(hooks);

  test('renders a loading message when waiting for movie data', async function (assert) {
    this.set('isLoading', true);
    this.set('movies', { data: () => null });

    await render(
      hbs`<MovieList @movies={{this.movies}} @isLoading={{this.isLoading}} />`,
    );

    assert.dom('p').exists();
    assert.dom('p').hasText('Loading your movies...');
  });

  test('does not render the loading message when the movies are loaded', async function (assert) {
    this.set('isLoading', true);
    this.set('movies', { data: () => null });

    await render(
      hbs`<MovieList @movies={{this.movies}} @isLoading={{this.isLoading}} />`,
    );

    assert.dom('p').exists();
    assert.dom('p').hasText('Loading your movies...');

    this.set('isLoading', false);
    this.set('movies', {
      data: () => ({ title: 'TEST TITLE', description: 'TEST DESCRIPTION' }),
    });

    assert.dom('p').doesNotExist();
  });

  test('renders an error message when movie data cannot be loaded', async function (assert) {
    this.set('isError', true);
    this.set('movies', { data: () => null });

    await render(
      hbs`<MovieList @movies={{this.movies}} @isError={{this.isError}} />`,
    );

    assert.dom('p').exists();
    assert
      .dom('p')
      .hasText(
        'There has been an error loading your movie collection! Please try again!',
      );
  });
});
