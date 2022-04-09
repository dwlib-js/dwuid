import ToString from '#abstract/ToString';
import NormalizeDWUID from '#abstract-functions/NormalizeDWUID';
import ToErrorMode from '#abstract-functions/ToErrorMode';

const normalize = (dwuid, errorMode) => {
  const id = ToString(dwuid);
  const mode = errorMode === undefined ? 'strict' : ToErrorMode(errorMode);
  return NormalizeDWUID(id, mode);
}

export default normalize;
