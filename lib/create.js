'use strict';

const CreateDWUID = require('#abstract-functions/CreateDWUID');
const ToTimestamp = require('#abstract-functions/ToTimestamp');

const create = timestamp => {
  const time = ToTimestamp(timestamp);
  return CreateDWUID(time);
}

module.exports = create;
