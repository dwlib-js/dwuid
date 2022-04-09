import ToString from '#abstract/ToString';
import DecodeDWUID from '#abstract-functions/DecodeDWUID';
import ToErrorMode from '#abstract-functions/ToErrorMode';

const decode = (dwuid, errorMode) => {
  const id = ToString(dwuid);
  const mode = errorMode === undefined ? 'strict' : ToErrorMode(errorMode);
  return DecodeDWUID(id, mode);
}

export default decode;
