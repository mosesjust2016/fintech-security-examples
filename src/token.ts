import jwt from 'jsonwebtoken';
const JWT_SECRET = 'your-secret-key'; // Use .env in production

export function generateAccessToken(userId: string): string {
  return jwt.sign({ userId }, JWT_SECRET, { expiresIn: '15m' });
}

export function verifyAccessToken(token: string): string | object {
  return jwt.verify(token, JWT_SECRET);
}

// Example usage
const token = generateAccessToken('user123');
console.log('Token:', token);
console.log('Verified:', verifyAccessToken(token));