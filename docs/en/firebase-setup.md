# Firebase Setup

## Initial Configuration

Visit [Firebase Console](https://console.firebase.google.com/)

1. Sign in with your Google account.
2. Click on the `Go to console` button.
3. Click on `Add Project` card.
4. Give your project a name.
5. Click on the `Continue` button.
6. Disable `Google Analytics for this project` (unless you wish to use it).
7. Click on the `Create project` button.

## Web App Setup

1. Click on the web icon to create your web app. A pop-up will appear saying `Web`.
2. Register the app by giving it a nickname and click on the `Register app` button.
3. In your package.json directory, enter in the CMD line `npm i firebase`.
4. Copy your configuration file. Create a new file in `src` called `firebase.js`.

## Environment Variables

1. In the root of your project, create a file called `.env`.
2. Make sure you add `.env.local` to your `.gitignore` so you don't expose your variables in your git repository.
3. Follow the [instructions here](https://nextjs.org/docs/pages/building-your-application/configuring/environment-variables#loading-environment-variables) to add your variables from firebase.js into this file.

Example `.env.local`:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

## Enable Authentication

1. Click on the `Continue to console` button
2. On your project homepage, choose a product to add to your app. First, click on `Authentication`.
3. Under `Get started with Firebase Auth by adding your first sign-in method` select `Email/Password`.

You should now be ready to use Firebase.

## Authentication Implementation

In the `src/firebase` directory, there is an `auth` directory containing the logic for `signin` and `signup`.