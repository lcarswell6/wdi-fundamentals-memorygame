 var cards  = [
 {
 	rank: "queen",
 	suit: "diamonds",
 	cardImage: "images/queen-of-diamonds.png",
 },
 {
 	rank:"queen",
 	suit:"hearts",
 	cardImage:"images/queen-of-hearts",
 },
 {
 	rank:"king",
 	suit:"diamonds",
 	cardImage:"images/king-of-diamonds",
 },
 {
 	rank:"king",
 	suit:"hearts",
 	cardImage:"images/king-of-hearts",
 }
 ];
 var cardsInPlay = [];
 
 var checkForMatch = function() {
 	if (cardsInPlay[0] === cardsInPlay[1]) {
 		console.log("you found a match");
 	} else {
 		console.log("sorry, try again");
 	}
 };

 var flipCard = function(cardId) {
 	console.log("user flipped" + cards[cardId].rank);
 	console.log("user flipped" + cards[cardId].suit);
 	console.log("user flipped" + cards[cardId].cardImage); 
 		if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("you found a match");
	}	else {
		alert("sorry, try again");
	}

}
	cardsInPlay.push(cards[cardId].rank);
};

flipCard(2)
flipCard(0)
checkForMatch(flipCard)


