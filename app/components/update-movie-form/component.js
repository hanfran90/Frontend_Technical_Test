import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { service } from '@ember/service';
import podNames from 'ember-component-css/pod-names';

export default class UpdateMovieForm extends Component {
  styleNamespace = podNames['update-movie-form'];
  @service firebase;
  @tracked newTitle;
  @tracked newDescription;
  @tracked successMessage;
  @tracked movies;

  @action
  handleUpdateTitle(event) {
    event.preventDefault();
    this.newTitle = event.target.value;
  }

  @action
  handleUpdateDescription(event) {
    event.preventDefault();
    this.newDescription = event.target.value;
  }

  @action
  async handleFormSubmit(event) {
    event.preventDefault();

    const { newTitle, newDescription } = this;
    const movieId = this.args.movie.id;

    try {
      const titleSave = newTitle ? newTitle : this.args.movie.title;
      const descriptionSave = newDescription
        ? newDescription
        : this.args.movie.description;

      if (this.args.movie) {
        await this.firebase.updateMovie(movieId, titleSave, descriptionSave);

        this.successMessage = 'Updated Successfully';

        setTimeout(() => {
          this.args.closeModal();
        }, 1000);
      }
    } catch (error) {
      console.log(error);
    }
  }
}
