'use strict';

const ALPHABET = require('#internal/ALPHABET');
const AlphabetIndexOf = require('#internal/AlphabetIndexOf');
const ThrowInvalidCharacterError = require('./ThrowInvalidCharacterError');
const ThrowInvalidLengthError = require('./ThrowInvalidLengthError');

const DecodeDWUIDStrict = dwuid => {
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
  let uid = '';
  for (let i = 8; i < length; i++) {
    const char = dwuid[i];
    const charIndex = AlphabetIndexOf(char);
    if (charIndex === undefined) {
      ThrowInvalidCharacterError(i);
    }
    uid += ALPHABET[charIndex];
  }
  return {
    timestamp,
    uid
  };
}

module.exports = DecodeDWUIDStrict;
