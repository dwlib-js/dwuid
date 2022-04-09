import DateNow from '#primordials/DateNow';
import MathFloor from '#primordials/MathFloor';
import RangeError from '#primordials/RangeError';
import Uint8Array from '#primordials/Uint8Array';
import ALPHABET from '#internal/ALPHABET';
import RandomInt from './RandomInt.mjs';

function* CreateDWUIDGenerator() {
  const bytes = new Uint8Array(12);
  let lastTimestamp;
  let lastEncodedTimestamp;
  while (true) {
    const timestamp = DateNow();
    if (timestamp !== lastTimestamp) {
      lastTimestamp = timestamp;
      let carry = timestamp;
      let encodedTimestamp = '';
      for (let i = 0; i < 8; i++) {
        if (carry) {
          const charIndex = carry % 58;
          const char = ALPHABET[charIndex];
          encodedTimestamp = `${char}${encodedTimestamp}`;
          carry = MathFloor(carry / 58);
        } else {
          encodedTimestamp = `1${encodedTimestamp}`;
        }
      }
      lastEncodedTimestamp = encodedTimestamp;
      let dwuid = encodedTimestamp;
      for (let i = 0; i < 12; i++) {
        const integer = RandomInt(58);
        bytes[i] = integer;
        dwuid += ALPHABET[integer];
      }
      yield dwuid;
    } else {
      for (let i = 11; i >= 0; i--) {
        const byte = ++bytes[i];
        if (byte < 58) {
          break;
        }
        bytes[i] = 0;
      }
      let dwuid = lastEncodedTimestamp;
      for (let i = 0; i < 12; i++) {
        const byte = bytes[i];
        dwuid += ALPHABET[byte];
      }
      yield dwuid;
    }
  }
}

export default CreateDWUIDGenerator;
