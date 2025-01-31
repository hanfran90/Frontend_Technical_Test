import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | UpdateMovieModal', function (hooks) {
  setupRenderingTest(hooks);

  test('renders the modal with the correct title', async function (assert) {
    this.set('closeModal', () => {});

    await render(
      hbs`<UpdateMovieModal @closeModal={{this.closeModal}} @movie={{this.selectedMovie}} @loadMovies={{this.loadMovies}} />`,
    );

    assert
      .dom('h2')
      .hasText('Edit Movie', 'The modal displays the correct title');
  });

  test('the modal displays the update movie form when a movie is selected for editing', async function (assert) {
    this.set('movie', { title: 'Test Title', description: 'Test Description' });
    this.set('showModal', true);
    this.set('closeModal', () => {});

    await render(
      hbs`<UpdateMovieModal @closeModal={{this.closeModal}} @movie={{this.movie}} @loadMovies={{this.loadMovies}} />`,
    );

    assert
      .dom('form')
      .exists('A form is displayed when the movie is selected for editing.');
  });
});
