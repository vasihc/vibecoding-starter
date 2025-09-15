# Deployment

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Deploy with Firebase

To deploy your Next.js app with Firebase, follow the Firebase deployment instructions specific to your hosting option:

- Firebase Hosting
- Cloud Functions
- Cloud Run

### Important Notes

- Make sure to set up the appropriate environment variables for your production environment
- Configure Firebase security rules for production
- Enable appropriate authentication methods
- Set up proper database indexes for performance

## Environment Variables for Production

Ensure all Firebase configuration variables are properly set in your deployment platform:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=
```