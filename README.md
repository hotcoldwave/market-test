This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). Add phones into your e-commerce site and then find some you needed.

## How to run locally

First, install and run latest image of mongoDb

```
docker pull mongo
docker run -d -p 27017:27017 --name mongodb mongo:latest
```

Second, install dependencies

```
yarn install
# or
npm install
```

And run the development server:

```
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
