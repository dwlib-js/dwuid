'use strict';

const DateNow = require('#primordials/DateNow');
const CreateDWUID = require('./CreateDWUID');

const GenerateDWUID = () => {
  const timestamp = DateNow();
  return CreateDWUID(timestamp);
}

module.exports = GenerateDWUID;
