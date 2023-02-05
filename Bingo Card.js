function getCard() {
   let cardBingo = new Set();
  for (let i = 0; cardBingo.size < 5; i++) {
   cardBingo.add('B' + (Math.floor(Math.random() * 15) + 1))
   }
   for (let i = 5; cardBingo.size < 10; i++) {
   cardBingo.add('I' + (Math.floor(Math.random() * 15) + 16))
   }
  for (let i = 10; cardBingo.size < 14; i++) {
   cardBingo.add('N' + (Math.floor(Math.random() * 15) + 31))
   }
  for (let i = 14; cardBingo.size < 19; i++) {
   cardBingo.add('G' + (Math.floor(Math.random() * 15) + 46))
   }
  for (let i = 19; cardBingo.size < 24; i++) {
   cardBingo.add('O' + (Math.floor(Math.random() * 15) + 61))
   }
  return Array.from(cardBingo);
}
