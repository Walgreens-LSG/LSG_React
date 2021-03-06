This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Launch Storybook

Simply run this command in the terminal

```
yarn storybook
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Storybook Build

Builds of Storybook for deployment are created using either the commands:
```
yarn build-storybook
# or
npm run build-storybook
```
The static files must be saved in the a folder title '/docs' for GitHub pages deployment. 

Be sure to remove the existing '/docs' folder and replace it with the newly generated '/storybook-static'.

## Branch Naming Conventions
___Please make branch names descriptive___

When adding or enhancing an existing component, name your branch the following :
```
feature/Component_Name_And_Or_Enhancement_Description
```
Please generate new builds of storybook in a seperate branch and name them as follows:
```
build/Component_Name_Or_Update_Build
```
Branches dedicated to bug fixes should be titled:
```
fix/Bug_Description
```