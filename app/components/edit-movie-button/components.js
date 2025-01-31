import Component from '@glimmer/component';
import { action } from '@ember/object';
import podNames from 'ember-component-css/pod-names';

export default class EditMovieButton extends Component {
  styleNamespace = podNames['update-movie-button'];
  @action
  handleClick() {
    this.args.openModal();
  }
}
