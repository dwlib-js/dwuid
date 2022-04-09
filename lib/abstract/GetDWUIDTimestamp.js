'use strict';

const GetDWUIDTimestampIgnore = require('./GetDWUIDTimestampIgnore');
const GetDWUIDTimestampStrict = require('./GetDWUIDTimestampStrict');

const GetDWUIDTimestamp = (dwuid, errorMode) => {
  const getTimestamp = errorMode === 'ignore' ?
    GetDWUIDTimestampIgnore : GetDWUIDTimestampStrict;
  return getTimestamp(dwuid);
}

module.exports = GetDWUIDTimestamp;
