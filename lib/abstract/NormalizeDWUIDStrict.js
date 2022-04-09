'use strict';

const ALPHABET = require('#internal/ALPHABET');
const AlphabetIndexOf = require('#internal/AlphabetIndexOf');
const ThrowInvalidCharacterError = require('./ThrowInvalidCharacterError');
const ThrowInvalidLengthError = require('./ThrowInvalidLengthError');

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

module.exports = NormalizeDWUIDStrict;
