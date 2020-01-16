const Generator = require('yeoman-generator');
const chalk = require('chalk');
const mkdirp = require('mkdirp');
const { camelCase, kebabCase } = require('lodash');

module.exports = class extends Generator {
  initializing() {
    this.props = {};
  }

  async prompting() {
    this.log('This CLI will automatically create a web service driver to get you started\n');

    this.props = await this.prompt([
      {
        type: 'input',
        name: 'group',
        message: 'What is the name for the collection of services?',
        default: 'my-service-group'
      },
      {
        type: 'input',
        name: 'service',
        message: 'What is the name of your first service?',
        default: 'MyService'
      }
    ]);
    this.props.group = kebabCase(this.props.group);
    this.props.service = this.props.service.charAt(0).toUpperCase() + camelCase(this.props.service).substring(1);
  }

  writing() {
    mkdirp(this.props.group);
    this.destinationRoot(this.destinationPath(this.props.group));

    this.fs.copyTpl(this.templatePath('package.json'), this.destinationPath('package.json'), this.props);
    this.fs.copyTpl(this.templatePath('README.md'), this.destinationPath('README.md'), this.props);
    this.fs.copyTpl(this.templatePath('src/index.ts'), this.destinationPath('src/index.ts'), this.props);
    this.fs.copyTpl(this.templatePath('src/MyService.ts'), this.destinationPath(`src/${this.props.service}.ts`), this.props);
    this.fs.copy(this.templatePath('tsconfig.json'), this.destinationPath('tsconfig.json'));
    this.fs.copy(this.templatePath('gulpfile.js'), this.destinationPath('gulpfile.js'));
  }

  install() {
    this.log('\nInstalling dependencies...');
    this.npmInstall(undefined, undefined, { stdio: ['inherit', 'ignore', 'pipe'] });
  }

  end() {
    this.log(`\n\nDirectory '${this.props.group}' has been created!`);
    this.log(`\nTo add your web service to Investigate, run ${chalk.yellow('npm run package')} and install the generated zip:`);
    this.log(chalk.yellow(`  bin/investigate-plugin install file:///${this.destinationPath(`target/${this.props.group}.zip`)}\n`));
  }
};
