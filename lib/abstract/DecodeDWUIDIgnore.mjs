import ALPHABET from '#internal/ALPHABET';
import AlphabetIndexOf from '#internal/AlphabetIndexOf';
import ThrowInvalidLengthError from './ThrowInvalidLengthError.mjs';

const DecodeDWUIDIgnore = dwuid => {
  const length = dwuid.length;
  if (length < 20) {
    ThrowInvalidLengthError();
  }
  let timestamp = 0;
  let index = 0;
  let position = 0;
  while (index < length && position < 8) {
    const char = dwuid[index++];
    const charIndex = AlphabetIndexOf(char);
    if (charIndex === undefined) {
      continue;
    }
    timestamp = timestamp * 58 + charIndex;
    position++;
  }
  if (position < 8) {
    ThrowInvalidLengthError();
  }
  let uid = '';
  while (index < length && position < 20) {
    const char = dwuid[index++];
    const charIndex = AlphabetIndexOf(char);
    if (charIndex === undefined) {
      continue;
    }
    uid += ALPHABET[charIndex];
    position++;
  }
  if (position < 20) {
    ThrowInvalidLengthError();
  }
  return {
    timestamp,
    uid
  };
}

export default DecodeDWUIDIgnore;
