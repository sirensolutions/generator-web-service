## Installation

First, install [Yeoman](http://yeoman.io) and generator-web-service using [Yarn](https://yarnpkg.com/) or [npm](https://www.npmjs.com/).

```bash
yarn global add yo @sirensolutions/generator-web-service
# OR
npm install -g yo @sirensolutions/generator-web-service
```

Then generate your new project:

```bash
yo @sirensolutions/web-service
```


## For Developers
To use a generator that exists as a local repository, run `yarn link` in the repository, then generate your new project the same way:

```bash
yo @sirensolutions/web-service
```

If you make additional changes to the repository, you don't have to rerun `yarn link`. 
