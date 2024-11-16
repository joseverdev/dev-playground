# Dev Playground

This project was inspired as an alternative to [RunJS](https://runjs.app/), a commendable project. However, the limitations of its free plan, such as the restriction to 50 runs per day, prompted us to create a more open solution.

Dev Playground is a pre-configured project over `vscode` and the community version of `console-ninja`, designed to provide a more open and flexible solution, free from limitations.

By leveraging your local environment and the power of `vscode` and its extensions, you have complete control over your development experience. There are no restrictions on the number of runs, saving files, using external packages, managing multiple tabs, customizing themes, or installing extensions.

## Clone

Clone this repository to your local environment:

```bash
git clone https://github.com/deinsoftware/dev-playground.git
```

Then, run the following command to install the dependencies:

```bash
npm install
```

> For TS projects will use `tsx`, in a future when `console-ninja` support the new version compatible with `22+` version and `--experimental-strip-types` this dependency will be removed.

## Extensions

![recommended](.github/assets/extensions.png)

While there are several recommended extensions for this project, the only mandatory one is `Console Ninja` and choose `[Use free version]`.

![console-ninja-free](.github/assets/console-ninja-free.png)

Please note that the `console-ninja` CLI currently only supports Node.js versions `16`. Ensure that your system uses this version with `nvm` or `volta`.

## Playground

In order to prepare the environment, we need to run `console-ninja` and open the **show output` tab.

![show-output](.github/assets/show-output.gif)

## Run

Open terminal and run one of those commands:

| Language   | Command                             |
| ---------- | ----------------------------------- |
| JavaScript | `npm run js <javascript file path>` |
| TypeScript | `npm run ts <typescript file path>` |

## About

### Built With

- [VS Code](https://code.visualstudio.com/) - Code editing redefined.
- [TypeScript](https://www.typescriptlang.org) - JavaScript With Syntax For Types.
- [Node.js](https://nodejs.org/) - A JavaScript runtime built on Chrome's V8 JavaScript engine.
- [Codeium](https://codeium.com/) - Free AI code completion and chat.

### NPM Packages

- [console-ninja](https://www.npmjs.com/package/console-ninja) - output and runtime errors directly in your editor from.
- [nodemon](https://www.npmjs.com/package/nodemon) - tool that helps develop Node.js based applications by automatically restarting the node application when file changes are detected.
- [tsx](https://www.npmjs.com/package/tsx) - the easiest way to run TypeScript in Node.js
.

### Contributing

Please read [CONTRIBUTING](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

### Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [dev-playground](https://github.com/deinsoftware/dev-playground/tags) on GitHub.

### Authors

- **Camilo Martinez** [[Equiman](http://github.com/equiman)]

### Contributors

[![equiman](https://avatars.githubusercontent.com/u/933393?s=60&v=4)](https://github.com/equiman)

See also the list of [contributors](https://github.com/deinsoftware/dev-playground/contributors) who participated in this project.

### Sponsors

If this project helps you, consider buying me a cup of coffee.

[![GitHub Sponsors](https://img.shields.io/badge/-GitHub%20Sponsors-gray?style=flat&labelColor=171515&logo=github&logoColor=white&link=https://github.com/sponsors/deinsoftware)](https://github.com/sponsors/deinsoftware)
[![paypal](https://img.shields.io/badge/-PayPal-gray?style=flat&labelColor=00457C&logo=paypal&logoColor=white&link=https://paypal.me/equiman/3)](https://paypal.me/equiman/3)
