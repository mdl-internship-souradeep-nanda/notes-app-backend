const models = require('../../models/');

const fetchNotes = () => models.notes.findAll();

module.exports.fetchNotes = fetchNotes;

module.exports.route = {
  path: '/fetch',
  method: 'GET',
  handler: (req, res) => {
    fetchNotes().then((allNotes) => {
      res(allNotes);
    });
  },
};
