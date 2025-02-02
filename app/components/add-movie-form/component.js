import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import Component from '@glimmer/component';
import podNames from 'ember-component-css/pod-names';
import { service } from '@ember/service';

export default class AddMovieForm extends Component {
  styleNamespace = podNames['add-movie-form'];

  @service firebase;

  @tracked description;

  @tracked title;

  @tracked errorMessage;

  @tracked successMessage;

  @action
  async addMovie(event) {
    event.preventDefault();

    this.errorMessage = undefined;

    try {
      const { description, title } = this;

      await this.firebase.addMovie(title, description);

      this.description = undefined;
      this.title = undefined;

      this.args.loadMovies();
      this.successMessage = 'Your movie has been added!';
      setTimeout(() => {
        this.successMessage = undefined;
      }, 2000);
    } catch (error) {
      this.errorMessage = error?.message;
    }
  }
}
