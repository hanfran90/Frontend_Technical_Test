import Component from '@glimmer/component';
import { action } from '@ember/object';
import podNames from 'ember-component-css/pod-names';

export default class DeleteButton extends Component {
  styleNamespace = podNames['delete-button'];
  
  @action
  handleClick(event) {
    event.preventDefault();
    const movie = this.args.movie;
    const deleteMovie = this.args.deleteMovie;
    deleteMovie(movie);
  }
}
