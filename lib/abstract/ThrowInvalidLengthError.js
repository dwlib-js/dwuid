'use strict';

const RangeError = require('#primordials/RangeError');

const ThrowInvalidLengthError = () => {
  throw new RangeError('Invalid DWUID length');
}

module.exports = ThrowInvalidLengthError;
