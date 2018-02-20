const { upsert } = require('../../src/routes/upsert');

describe('The upsert handler should', () => {
  const note = {
    title: 'title',
    body: 'body',
    note_id: 0,
  };
  it('Add an entry if a note with that id does not exist', () => {
    upsert(note).then((hasUpdated) => {
      expect(hasUpdated).toBeFalsy();
    });
  });
  it('Update an entry if a note with that id does exist', () => {
    upsert(note).then((hasUpdated) => {
      expect(hasUpdated).toBeTruthy();
    });
  });
});
