import { Move } from "./TripleTriadLogics";

export const BOT_LEVEL = Object.freeze({
    EASY: "Easy Bot",
    MEDIUM: "Medium Bot",
    HARD: "Hard Bot",
});

class BotPlayer {
    constructor(matchService, playerId) {
        this.matchService = matchService;
        this.playerId = playerId;
    }

    getAvailablePlacedPositions() {
        return this.matchService.getAvailablePositions();
    }

    getAvailableMoves() {
        const availablePositions = this.getAvailablePlacedPositions();
        const availableCards = this.matchService.getAvailableCardsOnDeck(this.playerId);
        const availableMoves = availablePositions.map(pos => {
            return availableCards.map(card => {
                return new Move({ playerId: this.playerId, row: pos.row, col: pos.col, cardIndex: card.index });
            });
        }).flat().sort(() => Math.random() - 0.5);
        return availableMoves;
    }

    getNextMove() {
        throw new Error("getNextMove method should be implemented by subclasses");
    }
}

class EasyBot extends BotPlayer {
    getNextMove() {
        const availableMoves = this.getAvailableMoves();
        const randomMove = availableMoves[Math.floor(Math.random() * availableMoves.length)];
        return randomMove;
    }
}

class MediumBot extends BotPlayer {
    // same as HardBot but with probability of making a mistake
    getNextMove() {
        const BEST_MOVE_PROBABILITY = 0.7;
        const availableMoves = this.getAvailableMoves();
        let bestMove = null;
        let bestScore = -Infinity;

        availableMoves.forEach(move => {
            const score = this.matchService.calculateMoveScore(this.playerId, move.row, move.col, move.cardIndex);
            if (score > bestScore && Math.random() < BEST_MOVE_PROBABILITY) {
                bestScore = score;
                bestMove = move;
            }
        });

        if (bestMove) {
            return new Move({ playerId: this.playerId, row: bestMove.row, col: bestMove.col, cardIndex: bestMove.cardIndex });
        }
    }
}

class HardBot extends BotPlayer {
    getNextMove() {
        const availableMoves = this.getAvailableMoves();
        let bestMove = null;
        let bestScore = -Infinity;

        availableMoves.forEach(move => {
            const score = this.matchService.calculateMoveScore(this.playerId, move.row, move.col, move.cardIndex);
            if (score > bestScore) {
                bestScore = score;
                bestMove = move;
            }
        });

        if (bestMove) {
            return new Move({ playerId: this.playerId, row: bestMove.row, col: bestMove.col, cardIndex: bestMove.cardIndex });
        }
    }
}

export class BotFactory {
    static isBot(playerId) {
        return Object.values(BOT_LEVEL).includes(playerId);
    }
    static createBot(matchService, playerId) {
        switch (playerId) {
            case BOT_LEVEL.EASY:
                return new EasyBot(matchService, playerId);
            case BOT_LEVEL.MEDIUM:
                return new MediumBot(matchService, playerId);
            case BOT_LEVEL.HARD:
                return new HardBot(matchService, playerId);
            default:
                throw new Error(`Unknown bot level: ${playerId}`);
        }
    }
}
