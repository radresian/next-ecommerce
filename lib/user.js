import bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';
import { connection } from '../db/connection';

export async function createUser({ name, email, password }) {
  const cryptoPassword = await bcrypt.hashSync(password, 10);

  const user = {
    id: uuidv4(),
    name,
    email,
    password: cryptoPassword,
    createdAt: Date.now(),
  };

  await connection('user').insert(user);

  return user;
}

export async function createUserWithWallet({ wallet }) {

  const user = {
    id: uuidv4(),
    wallet,
    createdAt: Date.now(),
  };

  await connection('user').insert(user);

  return user;
}

export async function findUser({ email, wallet }) {

  const user = await connection('user')
    .select('*')
    .where('email', email)
    .orWhere('wallet', wallet)
    .first();
  return user;
}


export async function findUserByWallet({ wallet }) {
  const user = await connection('user')
    .select('*')
    .where('wallet', wallet)
    .first();
  return user;
}

export async function validatePassword(user, inputPassword) {
  const passwordsMatch = await bcrypt.compareSync(inputPassword, user.password);
  return passwordsMatch;
}
