const inquirer = require('inquirer');
inquirer.registerPrompt('directory', require('inquirer-directory'));

module.exports = {
  directory: (path) => {
    const directory = {
      type: 'directory',
      name: 'from',
      message:
        'Selecione a pasta controller que sera armazenado o novo componente?',
      basePath: path,
    };

    return inquirer.prompt(directory);
  },
};
