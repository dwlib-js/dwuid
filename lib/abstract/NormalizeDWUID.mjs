import NormalizeDWUIDIgnore from './NormalizeDWUIDIgnore.mjs';
import NormalizeDWUIDStrict from './NormalizeDWUIDStrict.mjs';

const NormalizeDWUID = (dwuid, errorMode) => {
  const normalize = errorMode === 'ignore' ? NormalizeDWUIDIgnore : NormalizeDWUIDStrict;
  return normalize(dwuid);
}

export default NormalizeDWUID;
