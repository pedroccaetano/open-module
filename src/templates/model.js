module.exports = {
  content: (className) => {
    return `
    <?php
    class ${className} extends Controller {
      public function index() {
      
      }
    }
    `;
  },
};
