const { error, init, finnaly } = require('./messages');

const { askWhatTodo, askFileName, choiceDirectory } = require('./tasks');

const files = require('./libs/files');

const App = async () => {
  try {
    init();

    const { todo } = await askWhatTodo.todo();

    // Temporary
    if (todo == 'extension') {
      return error('Criação de extensão indisponível no momento!');
    }

    const { name } = await askFileName.name();

    const path = files.getPathCurrentDirectory();

    const pathNewFiles = await choiceDirectory.directory(path);

    const newFile = {
      todo,
      name,
      path: pathNewFiles.from,
    };

    files.createFiles(newFile);

    finnaly();
  } catch (err) {
    error('Aconteceu um erro inesperado');
  }
};

exports.App = App;
