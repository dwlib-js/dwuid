import ALPHABET from '#internal/ALPHABET';
import AlphabetIndexOf from '#internal/AlphabetIndexOf';
import ThrowInvalidLengthError from './ThrowInvalidLengthError.mjs';

const NormalizeDWUIDIgnore = dwuid => {
  const length = dwuid.length;
  if (length < 20) {
    ThrowInvalidLengthError();
  }
  let normalized = '';
  let index = 0;
  for (let i = 0; i < length && index < 20; i++) {
    const char = dwuid[i];
    const charIndex = AlphabetIndexOf(char);
    if (charIndex === undefined) {
      continue;
    }
    normalized += ALPHABET[charIndex];
    index++;
  }
  if (index < 20) {
    ThrowInvalidLengthError();
  }
  return normalized;
}

export default NormalizeDWUIDIgnore;
