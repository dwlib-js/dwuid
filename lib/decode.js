'use strict';

const ToString = require('#abstract/ToString');
const DecodeDWUID = require('#abstract-functions/DecodeDWUID');
const ToErrorMode = require('#abstract-functions/ToErrorMode');

const decode = (dwuid, errorMode) => {
  const id = ToString(dwuid);
  const mode = errorMode === undefined ? 'strict' : ToErrorMode(errorMode);
  return DecodeDWUID(id, mode);
}

module.exports = decode;
