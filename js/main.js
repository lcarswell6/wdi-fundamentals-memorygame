 var cards  = ["queen", "queen", "king", "king"];
 var cardsInPlay = [];
 
 var cardOne = cards[0];
 var cardTwo = cards[1];

cardsInPlay.push(cardOne, cardTwo);

if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("you found a match")
	}	else {
		alert("sorry, try again")
	}
}


console.log();
console.log("User flipped " + cardOne);
console.log("User flipped " + cardTwo);


