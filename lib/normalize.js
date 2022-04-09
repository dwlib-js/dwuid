'use strict';

const ToString = require('#abstract/ToString');
const NormalizeDWUID = require('#abstract-functions/NormalizeDWUID');
const ToErrorMode = require('#abstract-functions/ToErrorMode');

const normalize = (dwuid, errorMode) => {
  const id = ToString(dwuid);
  const mode = errorMode === undefined ? 'strict' : ToErrorMode(errorMode);
  return NormalizeDWUID(id, mode);
}

module.exports = normalize;
