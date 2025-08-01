import { authenticator } from 'otplib';
import dotenv from 'dotenv';
dotenv.config();
const SECRET = process.env.TOTP_SECRET!;

export function generateTOTP(): string {
  return authenticator.generate(SECRET);
}

export function verifyTOTP(token: string): boolean {
  return authenticator.check(token, SECRET);
}

async function demoLogin() {
  try {
    const token = generateTOTP();
    console.log(`TOTP: ${token}`);
    console.log(`Valid: ${verifyTOTP(token)}`);
  } catch (error) {
    console.error('Error:', error);
  }
}
demoLogin();
