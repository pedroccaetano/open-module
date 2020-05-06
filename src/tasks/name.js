const inquirer = require('inquirer');

module.exports = {
  name: () => {
    const questions = {
      name: 'name',
      type: 'input',
      message: 'Qual sera o nome dos arquivos?',
      validate: function (value) {
        if (value) {
          return true;
        } else {
          return 'Qual sera o nome dos arquivos?';
        }
      },
    };
    return inquirer.prompt(questions);
  },
};
