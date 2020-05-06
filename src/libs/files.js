const fs = require('fs');
const os = require('os');
const path = require('path');
const process = require('process');

const { success, error } = require('../messages');

const {
  controllerPage,
  languagePage,
  modelPage,
  viewPage,
} = require('../templates');

module.exports = {
  getPathCurrentDirectory: () => {
    return process.cwd();
  },

  createPaths: (infoNewFile) => {
    const { name: file, path } = infoNewFile;

    const arrayPath =
      os.platform() === 'win32' ? path.split('\\') : path.split('/');

    const pathProject = module.exports.getPathCurrentDirectory();

    const controllerPath = `${pathProject}/${path}/${file}.php`;

    arrayPath[1] = 'model';
    const modelPath = `${pathProject}/${arrayPath.join('/')}/${file}.php`;

    arrayPath[1] = 'language/pt-br';
    const languagePath = `${pathProject}/${arrayPath.join('/')}/${file}.php`;

    if (arrayPath[0] == 'admin') {
      arrayPath[1] = 'view/template';
    } else {
      arrayPath[1] = 'view/theme/default/template';
    }

    const viewPath = `${pathProject}/${arrayPath.join('/')}/${file}.twig`;

    const paths = {
      controller: controllerPath,
      model: modelPath,
      view: viewPath,
      language: languagePath,
    };

    return paths;
  },

  createFiles: (infoNewFile) => {
    const paths = module.exports.createPaths(infoNewFile);

    try {
      const { controller, model, view, language } = paths;

      const { name } = infoNewFile;

      fs.writeFileSync(controller, controllerPage.content(''));
      fs.writeFileSync(language, languagePage.content(name));
      fs.writeFileSync(model, modelPage.content(''));
      fs.writeFileSync(view, viewPage.content());

      success('Foi criado os arquivos!');
    } catch (err) {
      for (path in paths) {
        fs.unlink(path);
      }

      error('Não foi possivel criar os arquivos!');
    }
  },
};
