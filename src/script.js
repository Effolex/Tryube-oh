import { Card } from "./card.js";

function combatResult(playerOneCard, playerTwoCard) {
    return (playerOneCard.chosenAbility > playerTwoCard.chosenAbility) 
    ? playerOneCard : playerTwoCard;
}

