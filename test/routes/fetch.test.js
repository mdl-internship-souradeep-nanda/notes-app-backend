const { fetchNotes } = require('../../src/routes/fetch');
const model = require('../../models');

describe('The fetch route should return a JSON object which has', () => {
  let note = null;
  beforeAll((done) => {
    model.notes.upsert({
      note_id: 0,
      title: 'title0',
      body: 'body0',
    })
      .then(() => {
        fetchNotes().then((fetchedNotes) => {
          [note] = fetchedNotes;
          done();
        });
      });
  });
  it('objects containing id', () => {
    expect(note.id).toBeDefined();
  });
  it('objects containing note_id', () => {
    expect(note.note_id).toBeDefined();
  });
  it('objects containing title', () => {
    expect(note.title).toBeDefined();
  });
  it('objects containing body', () => {
    expect(note.body).toBeDefined();
  });
});

