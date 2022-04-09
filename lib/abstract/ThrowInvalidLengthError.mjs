import RangeError from '#primordials/RangeError';

const ThrowInvalidLengthError = () => {
  throw new RangeError('Invalid DWUID length');
}

export default ThrowInvalidLengthError;
