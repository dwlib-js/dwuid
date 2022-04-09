import DateNow from '#primordials/DateNow';
import CreateDWUID from './CreateDWUID.mjs';

const GenerateDWUID = () => {
  const timestamp = DateNow();
  return CreateDWUID(timestamp);
}

export default GenerateDWUID;
