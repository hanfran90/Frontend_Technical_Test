import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | EditMovieButton', function (hooks) {
  setupRenderingTest(hooks);

  test('the button opens the modal when clicked', async function (assert) {
    this.set('movie', { title: 'Test Title', description: 'Test Description' });
    this.set('showModal', false);
    this.set('openModal', () => {
      this.set('showModal', true);
    });

    await render(hbs`
        <EditMovieButton
          @movie={{this.movie}}
          @openModal={{this.openModal}} />
      `);

    assert.notOk(this.showModal);
    assert.dom('button').exists();
    assert.dom('button').hasText('Edit');

    await click('button');

    assert.ok(this.showModal);
  });
});
