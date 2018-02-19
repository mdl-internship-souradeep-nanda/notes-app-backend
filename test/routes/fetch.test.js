const { fetchNotes } = require('../../src/routes/fetch');

describe('The fetch route should return a JSON object which has', () => {
  let notes = null;
  beforeAll((done) => {
    fetchNotes().then((fetchedNotes) => {
      notes = fetchedNotes;
      done();
    });
  });
  it('a length property', () => {
    expect(notes.length).toBeDefined();
  });
  it('length+1 keys', () => {
    expect(Object.keys(notes).length).toBe(notes.length + 1);
  });
  it('objects containing id', () => {
    expect(notes['0'].id).toBeDefined();
  });
  it('objects containing title', () => {
    expect(notes['0'].title).toBeDefined();
  });
  it('objects containing body', () => {
    expect(notes['0'].body).toBeDefined();
  });
});

