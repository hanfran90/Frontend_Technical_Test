import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-quickstart/tests/helpers';
import { click, render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | delete-button', function (hooks) {
  setupRenderingTest(hooks);

  test('renders a delete button', async function (assert) {
    this.set('movie', { title: 'Movie 1', description: 'Description 1' });

    await render(
      hbs`<DeleteButton @movie={{this.movie}} @deleteMovie={{@deleteMovie}} />`,
    );

    assert.dom('button').exists();
    assert.dom('button').hasText('Delete');
  });

  test('renders a delete button for multiple movies', async function (assert) {
    this.set('movies', [
      { title: 'Movie 1', description: 'Description 1' },
      { title: 'Movie 2', description: 'Description 2' },
    ]);

    await render(
      hbs`
        <ul>
          {{#each this.movies as |movie|}}
            <DeleteButton @movie={{movie}} />
          {{/each}}
        </ul>
      `,
    );

    assert.dom('button').exists({ count: 2 });
    assert.dom('button:nth-of-type(1)').hasText('Delete');
    assert.dom('button:nth-of-type(2)').hasText('Delete');
  });

  test('delete removes a single movie when clicked', async function (assert) {
    this.set('movies', [
      { id: 1, title: 'Movie 1', description: 'Description 1' },
    ]);

    const firebaseService = this.owner.lookup('service:firebase');
    firebaseService.deleteMovie = (movie) => {
      this.set(
        'movies',
        this.movies.filter((m) => m.id !== movie.id),
      );
    };

    this.set('deleteMovie', firebaseService.deleteMovie);

    await render(
      hbs`
        <ul>
          {{#each this.movies as |movie|}}
            <DeleteButton @movie={{movie}} @deleteMovie={{this.deleteMovie}}/>
          {{/each}}
        </ul>
      `,
    );

    assert.dom('button').exists({ count: 1 });
    assert.dom('button').hasText('Delete');

    await click('button');

    assert.dom('button').doesNotExist();
  });

  test('delete removes a single movie when clicked when there are multiple movies', async function (assert) {
    this.set('movies', [
      { id: 1, title: 'Movie 1', description: 'Description 1' },
      { id: 2, title: 'Movie 2', description: 'Description 2' },
    ]);

    const firebaseService = this.owner.lookup('service:firebase');
    firebaseService.deleteMovie = (movie) => {
      this.set(
        'movies',
        this.movies.filter((m) => m.id !== movie.id),
      );
    };

    this.set('deleteMovie', firebaseService.deleteMovie);

    await render(
      hbs`
        <ul>
          {{#each this.movies as |movie|}}
            <DeleteButton @movie={{movie}} @deleteMovie={{this.deleteMovie}}/>
          {{/each}}
        </ul>
      `,
    );

    assert.dom('button').exists({ count: 2 });
    assert.dom('button:nth-of-type(1)').exists();
    assert.dom('button:nth-of-type(2)').exists();
    assert.dom('button').hasText('Delete');

    await click('button:nth-of-type(1)');

    assert.dom('button').exists({ count: 1 });
    assert.dom('button:nth-of-type(1)').exists();
    assert.dom('button:nth-of-type(2)').doesNotExist();
  });
});
