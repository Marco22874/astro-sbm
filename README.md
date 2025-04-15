# SBM PROJECT

```sh
npm create astro@latest -- --template basics
```

> 🧑‍🚀 **Version 2.3.5**

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
│   │   └── images/
│   │       ├── news/
│   │       └── products/
│   │           ├── brands/
│   │           └── icons/
│   ├── components/
│   │   ├── footer/
│   │   │   └──Footer.astro
│   │   ├── header/
│   │   │   ├── HamburgerMenu.astro
│   │   │   ├── Header.astro
│   │   │   ├── Logo.astro
│   │   │   ├── MainMenu.astro
│   │   │   └── MainMenu.astro
│   │   ├── pages/
│   │   │   ├── home/
│   │   │   │   ├── Hero.astro
│   │   │   │   ├── Intro.astro
│   │   │   │   ├── Intro.tsx
│   │   │   │   └── News.astro
│   │   │   ├── news/
│   │   │   └── products/
│   │   │       └── LogosGrid.astro
│   │   └── utils/
│   │       ├── AdvencedImage.astro
│   │       ├── LanguagePicker.astro
│   │       ├── SecondaryMenu.astro
│   │       └── Slogan.astro
│   ├── content/
│   │   ├── categories/
│   │   └── news/
│   │       ├── en/
│   │       └── it/
│   ├── i18n/
│   │   ├── ui.ts
│   │   └── utils.ts
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   ├── it/
│   │   │   ├── about-us/
│   │   │   ├── backend/
│   │   │   ├── contacts/
│   │   │   ├── news/
│   │   │   ├── products/
│   │   │   ├── services/
│   │   │   └── index.astro
│   │   ├── en/
│   │   │   ├── about-us/
│   │   │   ├── backend/
│   │   │   ├── contacts/
│   │   │   ├── news/
│   │   │   ├── products/
│   │   │   ├── services/
│   │   │   ├── index.astro
│   │   │   └── news/
│   │   └── index.astro
│   ├── styles/
│   └── utils/
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
