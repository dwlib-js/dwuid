import ALPHABET from '#internal/ALPHABET';
import AlphabetIndexOf from '#internal/AlphabetIndexOf';
import ThrowInvalidCharacterError from './ThrowInvalidCharacterError.mjs';
import ThrowInvalidLengthError from './ThrowInvalidLengthError.mjs';

const NormalizeDWUIDStrict = dwuid => {
  const length = dwuid.length;
  if (length !== 20) {
    ThrowInvalidLengthError();
  }
  let normalized = '';
  for (let i = 0; i < length; i++) {
    const char = dwuid[i];
    const charIndex = AlphabetIndexOf(char);
    if (charIndex === undefined) {
      ThrowInvalidCharacterError(i);
    }
    normalized += ALPHABET[charIndex];
  }
  return normalized;
}

export default NormalizeDWUIDStrict;
