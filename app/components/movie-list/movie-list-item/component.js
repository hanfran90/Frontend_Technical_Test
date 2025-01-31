import Component from '@glimmer/component';
import podNames from 'ember-component-css/pod-names';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class MovieListItem extends Component {
  styleNamespace = podNames['movie-list/movie-list-item'];

  @tracked showModal = false;
  @tracked selectedMovie = null;

  constructor() {
    super(...arguments);
  }

  get movie() {
    return this.args.movie;
  }
  @action
  openModal() {
    this.selectedMovie = this.movie;
    this.showModal = true;
    console.log('Modal Opened');
  }

  @action
  closeModal() {
    this.showModal = false;
    console.log('Modal Closed');
    this.args.loadMovies();
  }
}
