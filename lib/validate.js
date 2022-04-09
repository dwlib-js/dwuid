'use strict';

const ToString = require('#abstract/ToString');
const ValidateDWUID = require('#abstract-functions/ValidateDWUID');

const validate = dwuid => {
  const id = ToString(dwuid);
  return ValidateDWUID(id);
}

module.exports = validate;
