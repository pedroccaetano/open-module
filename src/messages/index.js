const chalk = require('chalk');
const figlet = require('figlet');
const logSymbols = require('log-symbols');
const emoji = require('node-emoji');
const clear = require('clear');

module.exports = {
  init: () => {
    clear();

    console.log(
      '\n',
      chalk.blue(figlet.textSync('Open Module')),
      '\n',
      chalk.bold(
        '\nOpen Module é uma extensão desenvolvida com objetivo de simplificar\na criação de páginas e extensões no sistema de E-Commerce OpenCart.\n'
      )
    );
  },
  finnaly: () => {
    return console.log(
      chalk.bold('Made By: Pedro Caetano'),
      emoji.get('the_horns')
    );
  },
  error: (message) => {
    return console.log(logSymbols.error, chalk.bold(message));
  },
  success: (message) => {
    return console.log(logSymbols.success, chalk.bold(message));
  },
};
