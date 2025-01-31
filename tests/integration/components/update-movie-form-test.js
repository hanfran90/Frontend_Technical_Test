import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click, fillIn, settled, waitFor } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | UpdateMovieForm', function (hooks) {
  setupRenderingTest(hooks);

  test('it contains the right elements', async function (assert) {
    this.set('movie', { title: 'Test Title', description: 'Test Description' });
    this.set('closeModal', () => {});

    await render(
      hbs`<UpdateMovieForm @movie={{this.movie}} @closeModal={{@closeModal}} />`,
    );

    assert.dom('label').exists({ count: 2 });
    assert.dom('input').exists({ count: 1 });
    assert.dom('textarea').exists({ count: 1 });
    assert.dom('button').exists({ count: 1 });
    assert.dom('form').exists();
    assert.dom('button').hasText('Save');

    assert.dom('label[for="title"]').hasText('Update the movie title here:');
    assert
      .dom('label[for="description"]')
      .hasText('Update the movie description here:');

    assert.dom('input').hasValue('Test Title');
    assert.dom('textarea').hasText('Test Description');

    assert.dom('p').doesNotExist();
  });

  test('it calls the handleFormSubmit action on form submission', async function (assert) {
    const firebaseService = this.owner.lookup('service:firebase');

    firebaseService.updateMovie = (movieId, title, description) => {
      assert.deepEqual(title, 'Updated Title');
      assert.strictEqual(description, 'Updated Description');
      assert.ok(true, 'movie was updated');
    };

    this.set('closeModal', () => {
      assert.ok(true, 'modal closes');
    });

    this.set('movie', {
      title: 'Test Title',
      description: 'Test Description',
    });

    this.set('showModal', true);

    await render(
      hbs`<UpdateMovieForm @movie={{this.movie}} @closeModal={{this.closeModal}} />`,
    );

    await fillIn('input#title', 'Updated Title');
    await fillIn('textarea#description', 'Updated Description');
    await click('button[type="submit"]');

    assert.dom('p').hasText('Updated Successfully');

    setTimeout(() => {
      this.set('showModal', false);
    }, 1000);

    await settled();

    await waitFor('[update-movie-modal]', {
      timeout: 1000,
      waitFor: false,
    }).catch(() => {
      assert.ok(true, 'Modal is closed after timeout');
    });

    assert.dom('[update-movie-modal]').doesNotExist();
  });
});
