const models = require('../../models/');

const fetchNotes = () => models.notes.findAll({
  order: [
    ['note_id', 'ASC'],
  ],
});

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
