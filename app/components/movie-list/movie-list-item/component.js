import Component from '@glimmer/component';
import podNames from 'ember-component-css/pod-names';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class MovieListItem extends Component {
  styleNamespace = podNames['movie-list/movie-list-item'];

  @tracked showModal = false;
  @tracked selectedMovie = null;
  @tracked successMessage = '';
  @tracked errorMessage = '';

  constructor() {
    super(...arguments);
  }

  get movie() {
    return this.args.movie;
  }

  @action
  openModal(movie) {
    this.selectedMovie = movie;
    this.showModal = true;
  }

  @action
  closeModal() {
    this.showModal = false;
    this.args.loadMovies();
  }

  @action
  async handleDelete() {
    try {
      this.successMessage = 'Deleting movie...';
      this.errorMessage = null;

      setTimeout(async () => {
        await this.args.deleteMovie(this.args.movie);

        setTimeout(() => {
          this.successMessage = null;
        }, 2000);
      }, 2000);
    } catch (error) {
      this.errorMessage = 'Failed to delete movie. Please try again later.';

      setTimeout(() => {
        this.errorMessage = null;
      }, 5000);
    }
  }
}
