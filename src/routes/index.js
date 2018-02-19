const fetch = require('./fetch').route;
const upsert = require('./upsert').route;

module.exports = [].concat(
  fetch,
  upsert,
);
