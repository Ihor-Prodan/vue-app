import bcrypt from 'bcryptjs';
import CryptoJS from 'crypto-js';

export async function createPasswordHash(password: string): Promise<string> {
  const salt = await bcrypt.genSalt(10);

  return bcrypt.hash(password, salt);
}

export async function comparePassword(
  password: string,
  hashedPassword: string
): Promise<boolean> {
  return bcrypt.compare(password, hashedPassword);
}

export function createToken(email: string): string {
  const token = CryptoJS.AES.encrypt(email, 'key').toString();

  return token;
}
