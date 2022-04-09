import AlphabetIndexOf from '#internal/AlphabetIndexOf';
import ThrowInvalidLengthError from './ThrowInvalidLengthError.mjs';

const GetDWUIDTimestampIgnore = dwuid => {
  const length = dwuid.length;
  if (length < 20) {
    ThrowInvalidLengthError();
  }
  let timestamp = 0;
  let index = 0;
  for (let i = 0; i < length && index < 8; i++) {
    const char = dwuid[i];
    const charIndex = AlphabetIndexOf(char);
    if (charIndex === undefined) {
      continue;
    }
    timestamp = timestamp * 58 + charIndex;
    index++;
  }
  if (index < 8) {
    ThrowInvalidLengthError();
  }
  return timestamp;
}

export default GetDWUIDTimestampIgnore;
