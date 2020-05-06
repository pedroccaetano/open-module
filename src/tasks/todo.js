const inquirer = require('inquirer');

module.exports = {
  todo: () => {
    const questions = {
      name: 'todo',
      type: 'list',
      message: 'O que você deseja criar?',
      choices: [
        {
          name: 'Criar página.',
          value: 'page',
        },
        {
          name: 'Criar extensão.',
          value: 'extension',
        },
      ],
    };
    return inquirer.prompt(questions);
  },
};
