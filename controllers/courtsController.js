const courts = require('../stores/courts');

module.exports = {
  index: function (_req, res) {
    res.json(courts);
  },
};
