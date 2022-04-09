'use strict';

const ToString = require('#abstract/ToString');
const IsValidDWUID = require('#abstract-functions/IsValidDWUID');

const isValid = dwuid => {
  const id = ToString(dwuid);
  return IsValidDWUID(id);
}

module.exports = isValid;
