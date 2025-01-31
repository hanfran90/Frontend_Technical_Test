import { action } from '@ember/object';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import Component from '@glimmer/component';
import podNames from 'ember-component-css/pod-names';

export default class LandingPage extends Component {
  styleNamespace = podNames['landing-page'];

  @service firebase;
  @tracked movies = [];
  @tracked isLoading = true;
  @tracked isError = false;

  constructor(owner, args) {
    super(owner, args);
    this.loadMovies();
  }

  @action
  async loadMovies() {
    try {
      this.movies = await this.firebase.loadMovies();
      this.isLoading = false;
      this.isError = false;
    } catch (error) {
      this.isLoading = false;
      this.isError = true;
    }
  }

  @action
  async deleteMovie(movie) {
    try {
      await this.firebase.deleteMovie(movie);
      this.movies = this.movies.filter((m) => m.id !== movie.id);
    } catch (error) {
      console.error('Error deleting movie:', error);
    }
  }
}

/**
 * Once there are added movies this tracked property will contain an array of
 * objects with a `data` method and `ref` property.
 *
 * The ref can be used with the firestore method `updateDoc` to update the record:
 *
 *   await updateDoc(movie.ref, { title: 'Updated Title' });
 *
 * The ref can also be used with the firestore method `deleteDoc` to delete the record:
 *
 *   await deleteDoc(movie.ref);
 *
 */
