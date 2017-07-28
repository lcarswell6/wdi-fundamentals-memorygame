 var cards  = ["queen", "queen", "king", "king"];
 var cardsInPlay = [];
 
 var checkForMatch = function() {
 	if (cardsInPlay[0] === cardsInPlay[1]) {
 		console.log("you found a match");
 	} else {
 		console.log("sorry, try again");
 	}
 };

 var flipCard = function(cardId) {
 	console.log("user flipped" + cards[cardId])
 		if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("you found a match");
	}	else {
		alert("sorry, try again");
	}
}
	cardsInPlay.push(cards[cardId]);
};

flipCard(2)
flipCard(0)
checkForMatch(flipCard)


