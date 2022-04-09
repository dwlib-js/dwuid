'use strict';

const GetIntrinsicOrThrow = require('#intrinsics/GetIntrinsicOrThrow');
const ObjectCreate = require('#primordials/ObjectCreate');
const ReflectDefineProperty = require('#primordials/ReflectDefineProperty');
const DWUIDCreate = require('./create');
const DWUIDDecode = require('./decode');
const DWUIDGenerate = require('./generate');
const DWUIDGenerator = require('./generator');
const DWUIDIsValid = require('./isValid');
const DWUIDNormalize = require('./normalize');
const DWUIDTimestamp = require('./timestamp');
const DWUIDValidate = require('./validate');

const ObjectPrototype = GetIntrinsicOrThrow('Object.prototype');
const SymbolToStringTag = GetIntrinsicOrThrow('@@toStringTag');

const DWUID = ObjectCreate(ObjectPrototype, {
  create: {
    value: DWUIDCreate
  },
  decode: {
    value: DWUIDDecode
  },
  generate: {
    value: DWUIDGenerate
  },
  generator: {
    value: DWUIDGenerator
  },
  isValid: {
    value: DWUIDIsValid
  },
  normalize: {
    value: DWUIDNormalize
  },
  timestamp: {
    value: DWUIDTimestamp
  },
  validate: {
    value: DWUIDValidate
  }
});
ReflectDefineProperty(DWUID, SymbolToStringTag, {
  value: 'DWUID'
});

module.exports = DWUID;
