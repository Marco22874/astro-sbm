# SBM PROJECT

```sh
npm create astro@latest -- --template basics
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/basics)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/basics)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/basics/devcontainer.json)

> 🧑‍🚀 **Version 2.1.7**

![just-the-basics](https://github.com/withastro/astro/assets/2244813/a0a5533c-a856-4198-8470-2d67b1d7c554)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   ├── fonts
│   ├── favicon.svg
│   └── favicon.png
├── src/
│   ├── assets/
|   │   └── images/
│   ├── components/
│   │   ├── footer/
│   |   |   └──Footer.astro
│   │   ├── header/
│   |   |   ├── HamburgerMenu.astro
│   |   |   ├── Header.astro
│   |   |   ├── Logo.astro
│   |   |   ├── MainMenu.astro
│   |   |   └── MainMenu.astro
│   │   ├── pages/
│   │   │   └── home/
│   │   │       ├── Hero.astro
│   │   │       ├── Intro.astro
│   │   │       ├── Intro.tsx
│   │   │       └── News.astro
│   │   └── utils/
│   |       ├── AdvencedImage.astro
│   |       ├── LanguagePicker.astro
│   |       └── SecondaryMenu.astro
│   ├── i18n/
│   │   ├── ui.ts
│   │   └── utils.ts
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       ├── it/
│       │   ├── about-us/
│       │   ├── backend/
│       │   ├── contacts/
│       │   ├── news/
│       │   ├── products/
│       │   ├── services/
│       │   └── index.astro
│       ├── en/
│       |   ├── about-us/
│       |   ├── backend/
│       |   ├── contacts/
│       |   ├── news/
│       |   ├── products/
│       |   ├── services/
│       |   └── index.astro
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

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

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
