const fetchNotes = () => Promise.resolve({
  length: 2,
  0: {
    id: 0,
    title: 'Title0',
    body: 'Body0',
  },
  1: {
    id: 1,
    title: 'Title1',
    body: 'Body1',
  },
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
