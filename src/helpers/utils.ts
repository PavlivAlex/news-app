export function generateRandomToken(length: number) {
  const possibleChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * possibleChars.length);
    result += possibleChars.charAt(randomIndex);
  }

  return result;
}
