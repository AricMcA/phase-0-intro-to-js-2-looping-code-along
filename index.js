// Code your solutions in this file
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }

  return gifts;
}

wrapGifts(gifts); 




function writeCards(names, event) {
    let cards=[]
    for (let i = 0; i < names.length; i++) {
        cards=[...cards,`Thank you, ${names[i]}, for the wonderful ${event} gift!`]
    }
    return cards;
}
writeCards(["Ada", "Brendan", "Ali"], "birthday");

function countDown() {
    let i = 0; 
    while (i < 11) {
      console.log(i);
      i++;
    }
  }