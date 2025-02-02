# MovieMememto

Hello and welcome to Movie Mememto - your personal movie tracker.

## Introduction

The application demonstrates the ability for a user to save a record of their favourite movies.

The user can:

- View your favorite movie list.
- Add new movies to your list.
- Delete movies from your list.
- Update movie details (e.g., title, description).

## Instructions

### Getting Started

Before you begin, make sure you have the following installed on your local machine:

- **Node.js**: Version 16 or higher. Download from [Node.js Official Website](https://nodejs.org/).
- **pnpm**: A fast package manager. Follow the installation guide [here](https://pnpm.io/installation).

1. [Ember 5.8 Docs](https://guides.emberjs.com/v5.8.0/)
2. [Firebase](https://firebase.google.com/docs)

## Setting Up the Project

### 1. Clone the repo


   Fork the repository and clone it to your local machine using Git:

   ```bash
   git clone https://github.com/your-username/MovieMememto.git
   cd MovieMememto
   ```

### 2. Install dependencies

- Install dependencies using pnpm.
```bash 
pnpm install
```

### 3. Running the app locally

Ember makes it easy to run your application locally. In your terminal, run the following command:

``` bash
ember s
```
After running the command, navigate to http://localhost:4200 to see the app in action.

### 4. Run tests

```bash 
ember t --s
```
This will open the tests in your browser at http://localhost:7357.


### 5. Set up Firebase

1. **Create a Firebase Account**
   - Go to [Firebase](https://firebase.google.com/), and sign up or log in.

2. **Create a Firebase Project**
   - Create a new Firebase project from the Firebase console.

3. **Set Up Firestore Database**
   - Navigate to the **Firestore Database** tab.
   - Create a new Firestore database (choose "Start in test mode" for simplicity).

4. **Add Firebase to Your Web App**
   - On the Firebase console overview page, click **"Add Firebase to your web app"**.
   - Copy the Firebase configuration snippet and paste it into `config/environment.js` in your project.

```javascript
ENV.firebase = {
  apiKey: "xyz",
  authDomain: "YOUR-FIREBASE-APP.firebaseapp.com",
  databaseURL: "https://YOUR-FIREBASE-APP.firebaseio.com",
  projectId: "YOUR-FIREBASE-APP",
  storageBucket: "YOUR-FIREBASE-APP.appspot.com",
  messagingSenderId: "00000000000",
};
```

(this is an example)

And then you will have your own firebase setup.

5. **Setup env**
In the root of your project, create a .env file (if it doesn't exist yet). This file will securely store your Firebase credentials so they can be accessed in your app.

Add your Firebase configuration to the .env file like this:

```javascript
  ENV.firebase = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID,
  };
  ```

## Need Help?

If you run into any issues or have questions while setting up the project, feel free to reach out! I’m happy to help. You can open an issue here on GitHub or contact me directly via email.

Happy coding, and enjoy using **MovieMememto**!