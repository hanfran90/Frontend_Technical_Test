import {
  addDoc,
  collection,
  getFirestore,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
} from 'firebase/firestore';
import config from 'ember-quickstart/config/environment';
import Service from '@ember/service';

export default class FirebaseService extends Service {
  db = config.environment === 'test' ? undefined : getFirestore();

  async loadMovies() {
    const moviesSnapshot = await getDocs(collection(this.db, 'movies'));
    const movies = [];

    moviesSnapshot.forEach((doc) => {
      movies.push({
        id: doc.id,
        ...doc.data(),
        ref: doc.ref,
      });
    });

    return movies;
  }

  async addMovie(title, description) {
    await addDoc(collection(this.db, 'movies'), { description, title });
  }

  async deleteMovie(movie) {
    await deleteDoc(movie.ref);
  }

  async updateMovie(movieId, title, description) {
    const movieRef = doc(this.db, 'movies', movieId);
    await updateDoc(movieRef, { title, description });
  }
}
