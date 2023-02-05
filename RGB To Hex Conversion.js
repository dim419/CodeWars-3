function rgb(r, g, b){
  console.log(r, g, b);
  r > 255 ? r = 255 : r;
  g > 255 ? g = 255 : g;
  b > 255 ? b = 255 : b;
  r < 0 ? r = '00' : r;
  g < 0 ? g = '00' : g;
  b < 0 ? b = '00' : b;
  let rHex = r.toString(16).padStart(2, '0').toUpperCase();
  let gHex = g.toString(16).padStart(2, '0').toUpperCase();
  let bHex = b.toString(16).padStart(2, '0').toUpperCase();
  return rHex + gHex + bHex;  
}
