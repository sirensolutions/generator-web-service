const Generator = require('yeoman-generator');
const chalk = require('chalk');
const mkdirp = require('mkdirp');

module.exports = class extends Generator {
  initializing() {
    this.props = {};
  }

  async prompting() {
    this.log('This CLI will automatically create a web service driver to get you started\n');

    this.props = await this.prompt([
      {
        type: 'input',
        name: 'serviceGroup',
        message: 'What is the name for the collection of services?',
        default: 'my-service-group'
      }
    ]);
  }

  writing() {
    mkdirp(this.props.serviceGroup);
    this.destinationRoot(this.destinationPath(this.props.serviceGroup));

    this.fs.copyTpl(this.templatePath('package.json'), this.destinationPath('package.json'), this.props);
    this.fs.copyTpl(this.templatePath('README.md'), this.destinationPath('README.md'), this.props);
    this.fs.copyTpl(this.templatePath('src/index.ts'), this.destinationPath('src/index.ts'), this.props);
    this.fs.copy(this.templatePath('src/MyService.ts'), this.destinationPath('src/MyService.ts'));
    this.fs.copy(this.templatePath('tsconfig.json'), this.destinationPath('tsconfig.json'));
    this.fs.copy(this.templatePath('gulpfile.js'), this.destinationPath('gulpfile.js'));
  }

  install() {
    this.log('\nInstalling dependencies...');
    this.yarnInstall(undefined, undefined, { stdio: ['inherit', 'ignore', 'pipe'] })
  }

  end() {
    this.log(`\n\nDirectory '${this.props.serviceGroup}' has been created!`);
    this.log(`\nTo add your web service to Investigate, run ${chalk.yellow('yarn package')} and install the generated zip:`);
    this.log(chalk.yellow(`  bin/investigate-plugin install file:///${this.destinationPath(`target/${this.props.serviceGroup}.zip`)}\n`));
  }
};
