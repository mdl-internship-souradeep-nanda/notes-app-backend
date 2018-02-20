const upsert = note => Promise.resolve({
  result: 'OK',
});

module.exports.upsert = upsert;

module.exports.route = {
  path: '/upsert',
  method: 'POST',
  handler: (req, res) => {
    const { payload } = req;
    console.log(payload);
    upsert(payload)
      .then((msg) => {
        res(msg);
      });
  },
};
