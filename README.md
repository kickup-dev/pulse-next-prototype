# ⚡️ Pulse Next Prototype
A fresh prototype for building out design work for our Pulse application. The goal of this project is to demonstrate all the components needed to port our app entirely to `styled-compents`.

This prototype incorporates [Next.js](https://https://nextjs.org/) as well as [styled-components](https://www.styled-components.com/) and [Rebass](https://rebassjs.org/).

## Getting Started
After cloning this repo, install dependencies by running `npm install`.

After the dependencies have been installed, you can start the development environment by running `npm run dev`.

## Importing Component Library from `pulse`
There's an npm task (`npm run copy-component-library`) to make it easy to refresh the component library from our pulse app, assuming that you have it installed locally. That task assumes the that pulse is installed in a shared parent directory to the current project.

When running that command, you'll need to make a small tweak to the Avatar component because the styled-components babel plugin doesn't sufficiently support array spreading. Change the following lines:
```js
    css={{
      borderRadius: '50%',
      ...sizeLookup[size],
    }}
```
```js
css={{
      borderRadius: '50%',
      height: sizeLookup[size].height,
      width: sizeLookup[size].width
    }}
```

## Deploying Changes
We're hosting the prototype on Now from Zeit. To deploy changes to the app you can either:
- Push changes to `master` on Github or
- Use the Now CLI to push changes directly using the `now` command

### Testing vs. Prod deploys
Any changes that are pushed to the master branch will automatically be published as the production version of the application. Additionally, any changes pushed through the CLI with the `--prod` flag will also go directly to the production version.

If you'd like to test something without it being deployed as the production app, use the `now` CLI with the `--prod` flag (and a non-proudction URL will be generated).