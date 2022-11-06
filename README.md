# Installation

```bash
# install Gatsby cli
npm install -g gatsby-cli
# create Gatsby project with TS
npm init gatsby -ts
```

## Env Vars

Gatsby has built-in support for loading environment variables into the browser and Functions.

- `gatsby develop` command will setup `NODE_ENV` to `development`
- For builds `NODE_ENV` will be set to `prodiction`

See [gatsby-config.ts](./gatsby-config.ts).

## References

[Gatsby + TS](https://www.gatsbyjs.com/docs/how-to/custom-configuration/typescript/)ß
[Astro Boilerplate projects](https://github.com/ixartz/Astro-boilerplate)
[https://blog.webdevsimplified.com/2022-07/react-folder-structure/]

## Project structure

Inside `src` folder:

- `assets` folder is used for all the stuff which is not js/ts code
- `context` folder is used for contexts (like AuthContext)
- `data` used for json, constants
- `layouts` folder used for components that are reused in other components
- `lib` folder is used to collect 3rd paty apis
- `services` folder is used to collect api calls

## ESlint + Prettier

Generate ESlint config by using:
```bash
npm init @eslint/config
```
Install Prettier:
```bash
npm install --save-dev prettier
```

Install eslint-config-prettier:
```bash
npm install --save-dev eslint-config-prettier
```
Then add `"prettier"` to the "extends" array in your `.eslintrc.*` file. Make sure to put it last, so it gets the chance to override other configs:
```json
{
  "extends": [
    "some-other-config-you-use",
    "prettier"
  ]
}
```

Follow `Prettier-ESlint` VSCode extension isnstructions for more.

## MUI

use `sx` prop in components to override style of a single component.

### Theming tools

[mui-theme-generator](https://bareynol.github.io/mui-theme-creator/)
[Material Palette generator](https://material.io/inline-tools/color/)

## TodoList

- UI Remake
- tests
- add blog posts with MDX
- GitHub workflow for deploy
- Docker container
- webpack & babel for bundling and transpilation

## 🚀 Quick start

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying the minimal TypeScript starter.

    ```shell
    # create a new Gatsby site using the minimal TypeScript starter
    npm init gatsby
    ```

2.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd my-gatsby-site/
    npm run develop
    ```

3.  **Open the code and start customizing!**

    Your site is now running at http://localhost:8000!

    Edit `src/pages/index.tsx` to see your site update in real-time!

4.  **Learn more**

    - [Documentation](https://www.gatsbyjs.com/docs/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter-ts)

    - [Tutorials](https://www.gatsbyjs.com/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter-ts)

    - [Guides](https://www.gatsbyjs.com/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter-ts)

    - [API Reference](https://www.gatsbyjs.com/docs/api-reference/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter-ts)

    - [Plugin Library](https://www.gatsbyjs.com/plugins?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter-ts)

    - [Cheat Sheet](https://www.gatsbyjs.com/docs/cheat-sheet/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter-ts)

## 🚀 Quick start (Gatsby Cloud)

Deploy this starter with one click on [Gatsby Cloud](https://www.gatsbyjs.com/cloud/):

[<img src="https://www.gatsbyjs.com/deploynow.svg" alt="Deploy to Gatsby Cloud">](https://www.gatsbyjs.com/dashboard/deploynow?url=https://github.com/gatsbyjs/gatsby-starter-minimal-ts)
