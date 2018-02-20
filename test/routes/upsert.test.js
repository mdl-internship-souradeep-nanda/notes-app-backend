const { upsert } = require('../../src/routes/upsert');
const model = require('../../models');

describe('The upsert handler should', () => {
  beforeAll((done) => {
    model.notes.destroy({ truncate: true })
      .then(() => { done(); });
  });
  const note = {
    title: 'title',
    body: 'body',
    note_id: 0,
  };
  it('Add an entry if a note with that id does not exist', (done) => {
    upsert(note).then((isCreated) => {
      expect(isCreated).toBeTruthy();
      done();
    });
  });
  it('Update an entry if a note with that id does exist', (done) => {
    model.notes.findAll().then((notes) => {
      // console.log(notes[0].id);
      const {
        id, note_id, title, body, // ignore eslint
      } = notes[0];
      upsert({
        id, note_id, title, body,
      }).then((hasUpdated) => {
        expect(hasUpdated).toBeFalsy();
        done();
      });
    });
  });
});
