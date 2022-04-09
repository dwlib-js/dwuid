'use strict';

const MathFloor = require('#primordials/MathFloor');
const RangeError = require('#primordials/RangeError');
const ALPHABET = require('#internal/ALPHABET');
const RandomInt = require('./RandomInt');

const CreateDWUID = timestamp => {
  let dwuid = '';
  let carry = timestamp;
  for (let i = 0; i < 8; i++) {
    if (carry) {
      const charIndex = carry % 58;
      const char = ALPHABET[charIndex];
      dwuid = `${char}${dwuid}`;
      carry = MathFloor(carry / 58);
    } else {
      dwuid = `1${dwuid}`;
    }
  }
  if (carry) {
    throw new RangeError('Timestamp out of range');
  }
  for (let i = 0; i < 12; i++) {
    const integer = RandomInt(58);
    dwuid += ALPHABET[integer];
  }
  return dwuid;
}

module.exports = CreateDWUID;
