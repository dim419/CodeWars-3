function bingo(ticket, win){
  const arrWin = [];
  for (j = 0; j < ticket.length; j++) {
  for (i = 0; i < ticket[j][0].length; i++) {
  ticket[j][0] = [...new Set(ticket[j][0].split(''))].join('');
    if (String(ticket[j][0].charCodeAt(i)).includes(ticket[j][1])) {
   arrWin.push('1');
 };
  }
  console.log(arrWin); 
  }
  
    if (arrWin.length >= win) {
    return  'Winner!'
    } else 
    return 'Loser!'
  

}
console.log(bingo([[ 'PDRVP', 75 ],
                    [ 'XYJ', 72 ],
                    [ 'FIUITU', 74 ],
                    [ 'POVSVZX', 85 ],
                    [ 'VC', 78 ],
                    [ 'XUTDSLEZ', 85 ],
                    [ 'OLYCPRLR', 73 ],
                    [ 'JDV', 85 ],
                    [ 'WGO', 69 ],
                    [ 'YHDLH', 72 ]], 3))
