import ToString from '#abstract/ToString';
import ValidateDWUID from '#abstract-functions/ValidateDWUID';

const validate = dwuid => {
  const id = ToString(dwuid);
  return ValidateDWUID(id);
}

export default validate;
