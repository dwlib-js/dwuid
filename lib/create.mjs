import CreateDWUID from '#abstract-functions/CreateDWUID';
import ToTimestamp from '#abstract-functions/ToTimestamp';

const create = timestamp => {
  const time = ToTimestamp(timestamp);
  return CreateDWUID(time);
}

export default create;
