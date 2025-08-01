import crypto from 'crypto';
const tokenMap = new Map<string, string>(); // Use secure vault in production

export function tokenizeCardNumber(pan: string): string {
  const token = crypto.randomBytes(10).toString('hex');
  tokenMap.set(token, pan);
  return token;
}

export function detokenizeCard(token: string): string | undefined {
  return tokenMap.get(token);
}

// Example usage
const pan = '4111111111111111';
const token = tokenizeCardNumber(pan);
console.log('Token:', token);
console.log('PAN:', detokenizeCard(token));