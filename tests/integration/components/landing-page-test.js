import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | LandingPage', function (hooks) {
  setupRenderingTest(hooks);

  test('visiting the landing page', async function (assert) {
    await render(hbs` <div class={{this.styleNamespace}}>
  <header data-test-movie-list-header>
  <MovieListHeader />
  </header>
  <main data-test-movie-list>
  <MovieList
    @movies={{this.movies}}
    @isLoading={{this.isLoading}}
    @isError={{this.isError}}
    @deleteMovie={{this.deleteMovie}}
    @loadMovies={{this.loadMovies}}
  />
  <div data-test-add-movie-form>
  <AddMovieForm @loadMovies={{this.loadMovies}} />
  </div>
</main>
<footer>
  Movie Mememto 2025
</footer>
</div>`);

    assert
      .dom('[data-test-movie-list-header]')
      .exists('MovieListHeader is rendered');
    assert.dom('[data-test-movie-list]').exists('MovieList is rendered');
    assert.dom('[data-test-add-movie-form]').exists('AddMovieForm is rendered');
  });
});
