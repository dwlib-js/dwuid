import RangeError from '#primordials/RangeError';

const ThrowInvalidCharacterError = index => {
  throw new RangeError(`Invalid DWUID character at index ${index}`);
}

export default ThrowInvalidCharacterError;
