'use strict';

const ToString = require('#abstract/ToString');
const GetDWUIDTimestamp = require('#abstract-functions/GetDWUIDTimestamp');
const ToErrorMode = require('#abstract-functions/ToErrorMode');

const timestamp = (dwuid, errorMode) => {
  const id = ToString(dwuid);
  const mode = errorMode === undefined ? 'strict' : ToErrorMode(errorMode);
  return GetDWUIDTimestamp(id, mode);
}

module.exports = timestamp;
