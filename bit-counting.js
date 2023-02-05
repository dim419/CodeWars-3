var countBits = function(n) {
  console.log(n);
  let numBin = n.toString(2).split('');
  return numBin.filter(item => item === '1').length;
};
