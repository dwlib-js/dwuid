'use strict';

const NormalizeDWUIDIgnore = require('./NormalizeDWUIDIgnore');
const NormalizeDWUIDStrict = require('./NormalizeDWUIDStrict');

const NormalizeDWUID = (dwuid, errorMode) => {
  const normalize = errorMode === 'ignore' ? NormalizeDWUIDIgnore : NormalizeDWUIDStrict;
  return normalize(dwuid);
}

module.exports = NormalizeDWUID;
