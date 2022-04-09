import MathFloor from '#primordials/MathFloor';
import RangeError from '#primordials/RangeError';
import ALPHABET from '#internal/ALPHABET';
import RandomInt from './RandomInt.mjs';

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

export default CreateDWUID;
