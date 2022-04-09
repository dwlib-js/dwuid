'use strict';

const AlphabetIndexOf = require('#internal/AlphabetIndexOf');

const IsValidDWUID = dwuid => {
  const length = dwuid.length;
  if (length !== 20) {
    return false;
  }
  for (let i = 0; i < length; i++) {
    const char = dwuid[i];
    const charIndex = AlphabetIndexOf(char);
    if (charIndex === undefined) {
      return false;
    }
  }
  return true;
}

module.exports = IsValidDWUID;
