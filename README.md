## Installation

Please ensure that your version of NodeJs is greater than 10:
```bash
node --version // v10.14.2
```

First, install [Yeoman](http://yeoman.io) and generator-web-service [npm](https://www.npmjs.com/).

```bash
npm install -g yo @sirensolutions/generator-web-service
```

Then generate your new project:

```bash
yo @sirensolutions/web-service
```


## For Developers
To use a generator that exists as a local repository, run `npm link` in the repository, then generate your new project the same way:

```bash
yo @sirensolutions/web-service
```

If you make additional changes to the repository, you don't have to rerun `npm link`.
