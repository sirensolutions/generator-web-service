## Installation

Please ensure that your version of NodeJs is 20 or greater:
```bash
node --version // v20.10.0
```

First, install [Yeoman](http://yeoman.io) and [generator-web-service](https://www.npmjs.com/package/@sirensolutions/generator-web-service):

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
