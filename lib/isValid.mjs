import ToString from '#abstract/ToString';
import IsValidDWUID from '#abstract-functions/IsValidDWUID';

const isValid = dwuid => {
  const id = ToString(dwuid);
  return IsValidDWUID(id);
}

export default isValid;
