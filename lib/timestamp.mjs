import ToString from '#abstract/ToString';
import GetDWUIDTimestamp from '#abstract-functions/GetDWUIDTimestamp';
import ToErrorMode from '#abstract-functions/ToErrorMode';

const timestamp = (dwuid, errorMode) => {
  const id = ToString(dwuid);
  const mode = errorMode === undefined ? 'strict' : ToErrorMode(errorMode);
  return GetDWUIDTimestamp(id, mode);
}

export default timestamp;
