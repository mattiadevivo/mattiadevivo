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

## MUI

use `sx` prop in components to override style of a single component.

### Theming tools

[mui-theme-generator](https://bareynol.github.io/mui-theme-creator/)
[Material Palette generator](https://material.io/inline-tools/color/)

## GraphQL

Inside the GraphQL data layer, information is stored in objects called nodes. A node is the smallest form unit of data in the data layer. Different source plugins create different types of nodes, each of which have their own properties. 

A **transformer plugin** converts nodes from one type to another. For example, the gatsby-plugin-mdx plugin transforms File nodes that have the .mdx extension into MDX nodes, which have a different set of fields that you can query using GraphQL. 

## File System Route API

To create a *collectionroute*:
- decide type of node you want to create pages from
- Choose which field on that node to use in the route (the URL) for your pages.
- Create a new page component in your src/pages directory using the following naming convention: `{nodeType.field}.js`.

## TodoList

Start from here
https://www.gatsbyjs.com/docs/tutorial/part-6/
https://rogulski.it/blog/gatsby-contentful-markdown-jsx-component/

- UI Remake
- tests
- add blog posts with MDX
- GitHub workflow for deploy
- Docker container
- webpack & babel for bundling and transpilation
