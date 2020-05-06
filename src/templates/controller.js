module.exports = {
  content: (className) => {
    return `
    <?php
    // error_reporting(0);
    // ini_set('display_errors', 0);
    include 'ajustarMemoria.php';
    
    class ${className} extends Model
    {
  
    }
    `;
  },
};
