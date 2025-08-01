import bcrypt from 'bcrypt';
const SALT_ROUNDS = 12;

export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, SALT_ROUNDS);
}

export async function comparePassword(password: string, hash: string): Promise<boolean> {
  return bcrypt.compare(password, hash);
}

// Example usage
async function demo() {
  const password = 'SecurePass123!';
  const hash = await hashPassword(password);
  console.log('Hash:', hash);
  console.log('Valid:', await comparePassword(password, hash));
}
demo();