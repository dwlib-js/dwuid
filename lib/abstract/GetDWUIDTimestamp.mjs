import GetDWUIDTimestampIgnore from './GetDWUIDTimestampIgnore.mjs';
import GetDWUIDTimestampStrict from './GetDWUIDTimestampStrict.mjs';

const GetDWUIDTimestamp = (dwuid, errorMode) => {
  const getTimestamp = errorMode === 'ignore' ?
    GetDWUIDTimestampIgnore : GetDWUIDTimestampStrict;
  return getTimestamp(dwuid);
}

export default GetDWUIDTimestamp;
