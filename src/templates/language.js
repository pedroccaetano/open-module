module.exports = {
  content: (className) => {
    return `
      <?php
      // Heading
      $_['heading_title']       = ${className};
    `;
  },
};
