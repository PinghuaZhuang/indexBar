import random from 'lodash/random';
import { faker } from '@faker-js/faker';

faker.setLocale('zh_CN');

const letters = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`;

function createUser(pid, level = 0) {
  const nextLevel = level + 1;
  const id = faker.datatype.uuid();
  const nick = faker.name.firstName() + faker.name.lastName();
  const adminUsers =
    level >= 2
      ? []
      : level <= 0 || random(1) > 0.75
      ? Array.from({ length: random(20, 30) }).map(() =>
          createUser(id, nextLevel),
        )
      : [];
  return {
    id,
    name: adminUsers.length || level < 2 ? faker.commerce.department() : nick,
    nick,
    pid,
    nodes: adminUsers,
    adminUsers,
    letter: letters[random(0, 25)],
    sectorId: pid,
    profilePhoto: faker.image.avatar(),
    unfilterNode: false,
  };
}

export default [createUser(0)];
