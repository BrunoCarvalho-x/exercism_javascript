export class DiffieHellman {
  constructor(p, g) {
    if (isPrime(p) && isPrime(g) && p > 0 && g > 0) {
      this.p = p;
      this.g = g;
    } else {
      throw new Error();
    }
  }

  getPublicKey(privateKey) {
    if (privateKey <= 1 || privateKey / this.p >= 1) {
      throw new Error();
    } else {
      return this.g ** privateKey % this.p;
    }
  }

  getSecret(theirPublicKey, myPrivateKey) {
    return theirPublicKey ** myPrivateKey % this.p;
  }
}

function isPrime(number) {
  if (number <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false; // Se for divisível por algum número, não é primo
    }
  }

  return true; // Se não foi divisível por nenhum número, é primo
}
