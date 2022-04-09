'use strict';

const AlphabetIndexOf = require('#internal/AlphabetIndexOf');
const ThrowInvalidCharacterError = require('./ThrowInvalidCharacterError');
const ThrowInvalidLengthError = require('./ThrowInvalidLengthError');

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

module.exports = ValidateDWUID;
