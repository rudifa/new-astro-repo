# Uzufly ‹repository name›

`NOTE` see [Notion › Adding a GitHub repository](https://www.notion.so/uzufly/Adding-a-GitHub-repository-26cf188fe88e4717bf61df55eadf9ea1?pvs=4#b688eb6df75648cb8f1a7cb032a6c30a) for instructions on using this template repo; remove this note.

‹Repository description›.

## Status

🚧 Alpha. Work-in-progress.

## Components

|Component|Description|
|---|---|
|[`‹TODO›`](TODO)|Description of the `‹TODO›` component|

## 🚀 Project Structure

The source code of the layouts lives in the [`src/pages/`](src/pages/) subfolder.

At its root, this repository is an [Astro](https://astro.build) publication, that is automatically published by Vercel on commits, to allow browsing the layout templates online.

You can preview the Astro publication by running `npm start` after installing the deps. The publication was generated by running the following command:

```sh
npm create astro@latest -- --template basics
```

Inside of the Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 📚 Learn more about Astro

Check the [documentation of Astro](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

## License

Distributed under the Apache-2.0 license. See LICENSE for details.
