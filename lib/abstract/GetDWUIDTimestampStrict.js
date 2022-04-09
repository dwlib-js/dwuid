'use strict';

const AlphabetIndexOf = require('#internal/AlphabetIndexOf');
const ThrowInvalidCharacterError = require('./ThrowInvalidCharacterError');
const ThrowInvalidLengthError = require('./ThrowInvalidLengthError');

const GetDWUIDTimestampStrict = dwuid => {
  const length = dwuid.length;
  if (length !== 20) {
    ThrowInvalidLengthError();
  }
  let timestamp = 0;
  for (let i = 0; i < 8; i++) {
    const char = dwuid[i];
    const charIndex = AlphabetIndexOf(char);
    if (charIndex === undefined) {
      ThrowInvalidCharacterError(i);
    }
    timestamp = timestamp * 58 + charIndex;
  }
  return timestamp;
}

module.exports = GetDWUIDTimestampStrict;
