function findPrimes(num) {
  const primes = [];

  // Helper function to check if a number is prime
  function isPrime(n) {
    if (n <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }

  // Find multiples of num that are prime numbers
  for (let i = 2; i <= num; i++) {
    if (num % i === 0 && isPrime(i)) {
      primes.push(i);
    }
  }

  return primes;
}
console.log(findPrimes(10))

module.exports = findPrimes;