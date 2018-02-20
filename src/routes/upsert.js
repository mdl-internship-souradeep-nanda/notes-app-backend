const models = require('../../models');

const upsert = note => models.notes.upsert(note)
  .then(isCreated => isCreated);

module.exports.upsert = upsert;

module.exports.route = {
  path: '/upsert',
  method: 'POST',
  handler: (req, res) => {
    const { payload } = req;
    console.log(payload);
    payload.note_id = payload.id;
    models.notes.findOne({
      where: {
        note_id: payload.note_id,
      },
    }).then((note) => {
      if (note !== null) { payload.id = note.id; }
      console.log(payload);
      upsert(payload)
        .then((msg) => {
          res(msg);
        });
    });
  },
};
