import AlphabetIndexOf from '#internal/AlphabetIndexOf';
import ThrowInvalidCharacterError from './ThrowInvalidCharacterError.mjs';
import ThrowInvalidLengthError from './ThrowInvalidLengthError.mjs';

const ValidateDWUID = dwuid => {
  const length = dwuid.length;
  if (length !== 20) {
    ThrowInvalidLengthError();
  }
  for (let i = 0; i < length; i++) {
    const char = dwuid[i];
    const charIndex = AlphabetIndexOf(char);
    if (charIndex === undefined) {
      ThrowInvalidCharacterError(i);
    }
  }
  return dwuid;
}

export default ValidateDWUID;
