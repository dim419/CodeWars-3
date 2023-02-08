function isPrime(num) {
  console.log(num)
 if (num <= 0 || num === 1) return false;
  if (num === 2 || num === 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;
   let i = 5; 
  while (i*i <= num) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
    i = i + 6;
  }
  return true;
}
