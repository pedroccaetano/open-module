const inquirer = require('inquirer');

module.exports = {
  askModule: () => {
    const questions = {
      name: 'modulo',
      type: 'checkbox',
      message: 'Em qual modulo vc deseja criar?',
      choices: [
        {
          name: 'Admin',
          value: 'admin',
        },
        {
          name: 'Catalog',
          value: 'catalog',
        },
      ],
      validate: function (value) {
        if (value == 1 || value == 2) {
          return true;
        } else {
          return 'Em qual modulo vc deseja criar?';
        }
      },
    };
    return inquirer.prompt(questions);
  },
};
