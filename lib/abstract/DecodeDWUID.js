'use strict';

const DecodeDWUIDIgnore = require('./DecodeDWUIDIgnore');
const DecodeDWUIDStrict = require('./DecodeDWUIDStrict');

const DecodeDWUID = (dwuid, errorMode) => {
  const decode = errorMode === 'ignore' ? DecodeDWUIDIgnore : DecodeDWUIDStrict;
  return decode(dwuid);
}

module.exports = DecodeDWUID;
