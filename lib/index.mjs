import GetIntrinsicOrThrow from '#intrinsics/GetIntrinsicOrThrow';
import ObjectCreate from '#primordials/ObjectCreate';
import ReflectDefineProperty from '#primordials/ReflectDefineProperty';
import DWUIDCreate from './create.mjs';
import DWUIDDecode from './decode.mjs';
import DWUIDGenerate from './generate.mjs';
import DWUIDGenerator from './generator.mjs';
import DWUIDIsValid from './isValid.mjs';
import DWUIDNormalize from './normalize.mjs';
import DWUIDTimestamp from './timestamp.mjs';
import DWUIDValidate from './validate.mjs';

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

export default DWUID;
