function toWeirdCase(string){
  let arrString = [];
  for (let i = 0; i < string.split(' ').length; i++) {
    arrString[i] = (string.split(' ')[i]).split('');
  }
  console.log(arrString);
 let arrUp = [];
  for (let i = 0; i < arrString.length; i++) {
    arrUp[i] = arrString[i].map(function (item, index) {
return index % 2 === 0 ? item.toUpperCase() : item;
 })
 }
 console.log(arrUp);
return arrUp.join(' ').replace(/,/g, '');   
 


}
  
console.log(toWeirdCase('This is a test'))
