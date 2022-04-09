import DecodeDWUIDIgnore from './DecodeDWUIDIgnore.mjs';
import DecodeDWUIDStrict from './DecodeDWUIDStrict.mjs';

const DecodeDWUID = (dwuid, errorMode) => {
  const decode = errorMode === 'ignore' ? DecodeDWUIDIgnore : DecodeDWUIDStrict;
  return decode(dwuid);
}

export default DecodeDWUID;
