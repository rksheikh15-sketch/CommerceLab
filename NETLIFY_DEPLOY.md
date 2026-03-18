# Netlify Deployment Instructions

This project is prepared for deployment on Netlify.

## Steps to Deploy:

1.  **Connect to GitHub/GitLab/Bitbucket:**
    Push your code to a repository and connect it to Netlify.
2.  **Build Settings:**
    Netlify will automatically detect the settings from `netlify.toml`:
    - **Build command:** `npm run build`
    - **Publish directory:** `.next`
3.  **Environment Variables:**
    If your app uses the Gemini API, make sure to add the following environment variable in the Netlify dashboard (Site settings > Environment variables):
    - `NEXT_PUBLIC_GEMINI_API_KEY`: Your Google AI Studio API Key.

## Configuration Details:

- `netlify.toml`: Configured to use the `@netlify/plugin-nextjs` for optimal Next.js support.
- `next.config.ts`: Configured with `output: 'standalone'` for compatibility with modern cloud runtimes.

For more information, visit the [Netlify Next.js documentation](https://docs.netlify.com/frameworks/next-js/overview/).
